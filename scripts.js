
// Dữ liệu mẫu
let stories = [];

window.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');
  const userGreeting = document.getElementById('user-greeting');

  loginBtn?.addEventListener('click', () => {
    console.log("Click login");
    window.location.href = 'https://serverweb.appsweb.workers.dev/login';
  });

  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  const email = params.get("email");

  if (name && email) {
    localStorage.setItem("user_name", name);
    localStorage.setItem("user_email", email);

    if (loginBtn) loginBtn.style.display = 'none';
    if (userGreeting) userGreeting.textContent = `Xin chào, ${name}!`;

    // Xoá param khỏi URL sau khi xử lý
    window.history.replaceState({}, document.title, window.location.pathname);
  } else {
    const savedName = localStorage.getItem("user_name");
    const savedEmail = localStorage.getItem("user_email");

    if (savedName && savedEmail) {
      if (loginBtn) loginBtn.style.display = 'none';
      if (userGreeting) userGreeting.textContent = `Xin chào, ${savedName}!`;
    }
  }
});

async function reloadStories() {
  const email = encodeURIComponent(localStorage.getItem("user_email") || "");
  const url = `https://serverweb.appsweb.workers.dev/stories?email=${email}`;
  
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache'
      }
    });

    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
    const data = await res.json();
    
    stories = data;
    filterStories();
    renderStoryCards(filteredStories);
  } catch (err) {
    console.error('Error loading stories:', err);
  }
}



window.onload = reloadStories;

const mainContent = document.getElementById("main-content");
const searchInput = document.getElementById("search");
const menuButtons = document.querySelectorAll(".menu-btn");
const audioPlayer = document.getElementById("audio-player");
const audioElem = document.getElementById("audio");
const playingTitle = document.getElementById("playing-title");

document.getElementById('rewind-50').addEventListener('click', () => {
  audioElem.currentTime = Math.max(audioElem.currentTime - 50, 0);
});

document.getElementById('rewind-10').addEventListener('click', () => {
  audioElem.currentTime = Math.max(audioElem.currentTime - 10, 0);
});

document.getElementById('forward-10').addEventListener('click', () => {
  audioElem.currentTime = Math.min(audioElem.currentTime + 10, audioElem.duration);
});

document.getElementById('forward-50').addEventListener('click', () => {
  audioElem.currentTime = Math.min(audioElem.currentTime + 50, audioElem.duration);
});

let currentType = "home";
let filteredStories = stories;
let selectedStory = null;

function filterStories() {
  const q = searchInput.value.trim().toLowerCase();
  const isMatch = (s) =>
    s.title.toLowerCase().includes(q) ||
    s.description.toLowerCase().includes(q);

  if (currentType === "home") {
    filteredStories = stories.filter(isMatch);
  } else if (currentType === "khac") {
    filteredStories = stories.filter(
      s =>
        !["tienhiep", "ngontinh", "kinhdi"].includes(s.type) &&
        isMatch(s)
    );
  } else {
    filteredStories = stories.filter(
      s => s.type === currentType && isMatch(s)
    );
  }
}

let currentPage = 1;
const itemsPerPage = 12;
let currentList = [];

function renderStoryCards(list, page = 1) {
  currentList = list;
  currentPage = page;

  mainContent.innerHTML = "";

  const totalPages = Math.ceil(currentList.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = currentList.slice(start, end);

  if (pageItems.length === 0) {
    mainContent.innerHTML = "<p>Không tìm thấy truyện nào.</p>";
    return;
  }

  const container = document.createElement("div");
  container.className = "grid-4";
  pageItems.forEach(story => {
    const card = document.createElement("div");
    card.className = "story-card";

    const title = document.createElement("h3");
    title.className = "story-title";
    title.textContent = story.title;

    const desc = document.createElement("p");
    desc.className = "story-desc";
    desc.textContent = story.description;

    const playBtn = document.createElement("button");
    playBtn.className = "play-btn";
    playBtn.textContent = "Nghe Truyện";
    playBtn.onclick = () => openStoryDetail(story.id);

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(playBtn);
    container.appendChild(card);
  });

  mainContent.appendChild(container);

  // Phân trang
  const pagination = document.createElement("div");
  pagination.className = "pagination";

  // Nút Back
  const backBtn = document.createElement("button");
  backBtn.textContent = "« Back";
  backBtn.disabled = currentPage === 1;
  backBtn.onclick = () => renderStoryCards(currentList, currentPage - 1);
  pagination.appendChild(backBtn);

  // Các số trang
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.textContent = i;
    if (i === currentPage) pageBtn.classList.add("active");
    pageBtn.onclick = () => renderStoryCards(currentList, i);
    pagination.appendChild(pageBtn);
  }

  // Nút Next
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next »";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => renderStoryCards(currentList, currentPage + 1);
  pagination.appendChild(nextBtn);

  mainContent.appendChild(pagination);
}

// Mở màn hình chi tiết truyện
async function openStoryDetail(id) {
  selectedStory = stories.find(s => s.id === id);
  if (!selectedStory || !selectedStory.linkChapter) return;

  try {
	
    // 1. Tải danh sách chương từ linkChapter
    const res = await fetch(selectedStory.linkChapter);
    if (!res.ok) throw new Error("Không tải được danh sách chương");
    const chapters = await res.json();

    // 2. Lưu vào selectedStory
    selectedStory.chapters = chapters;
	
	/*
	selectedStory.chapters = [
		{ "id": 1, "title": "Phần 1", "audioUrl": "mp3/yeulam.mp3" }
	]
	*/

    // 3. Render giao diện chi tiết
    mainContent.innerHTML = `
      <div id="story-detail">
        <h2>${selectedStory.title}</h2>
        <p>${selectedStory.description}</p>
        <ul id="chapter-list" style="max-height: 300px; overflow-y: auto; padding-left: 20px;">
          ${selectedStory.chapters
            .map(ch => `<li data-chapter-id="${ch.id}">${ch.title}</li>`)
            .join("")}
        </ul>
        <button id="back-btn">Quay lại</button>
      </div>
    `;

    document
      .getElementById("back-btn")
      .addEventListener("click", () => {
        selectedStory = null;
        renderStoryCards(filteredStories);
      });

    // 4. Gán sự kiện click cho từng chương
    const chapterItems = document.querySelectorAll("#chapter-list li");
    chapterItems.forEach(li => {
      li.addEventListener("click", () => {
        const chapterId = parseInt(li.getAttribute("data-chapter-id"));
        playChapter(selectedStory.id, chapterId);
      });
    });

  } catch (err) {
    console.error("Lỗi khi tải chương:", err);
    mainContent.innerHTML = `<p>Lỗi khi tải chương. Vui lòng thử lại sau.</p>`;
  }
}

function playChapter(storyId, chapterId) {
  const story = stories.find(s => s.id === storyId);
  if (!story) return;

  const chapter = story.chapters.find(ch => ch.id === chapterId);
  if (!chapter) return;

  currentChapterId = chapterId;
  currentStoryId = storyId;

  audioElem.src = chapter.audioUrl;
  audioElem.play();

  playingTitle.textContent = `Đang phát: ${story.title} - ${chapter.title}`;
  audioPlayer.style.display = "flex";

  // KHÔNG gắn addEventListener ở đây nữa
}

// Chỉ gọi 1 lần duy nhất sau khi trang load
audioElem.addEventListener("timeupdate", updateProgress);

audioElem.addEventListener("ended", () => {
  if (!currentStoryId || !currentChapterId) return;

  const story = stories.find(s => s.id === currentStoryId);
  if (!story) return;

  const currentIndex = story.chapters.findIndex(ch => ch.id === currentChapterId);
  if (currentIndex >= 0 && currentIndex < story.chapters.length - 1) {
    const nextChapter = story.chapters[currentIndex + 1];
    playChapter(currentStoryId, nextChapter.id);
  } else {
    audioPlayer.style.display = "none";
    playingTitle.textContent = "Đang phát: ";
    currentChapterId = null;
    currentStoryId = null;
  }
});

audioElem.addEventListener("loadedmetadata", () => {
  durationSpan.textContent = formatTime(audioElem.duration);
  progressInput.max = Math.floor(audioElem.duration);
});



// Format giây sang mm:ss
function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}


// Cập nhật progress thanh audio
function updateProgress() {
  currentTimeSpan.textContent = formatTime(audioElem.currentTime);
  progressInput.value = Math.floor(audioElem.currentTime);
}

audioElem.addEventListener("pause", () => {
  playPauseBtn.textContent = "▶️";
});

audioElem.addEventListener("play", () => {
  playPauseBtn.textContent = "⏸️";
});


// Điều khiển play/pause nút
const playPauseBtn = document.getElementById("play-pause");
playPauseBtn.addEventListener("click", () => {
  if (audioElem.paused) {
    audioElem.play();
    playPauseBtn.textContent = "⏸️";
  } else {
    audioElem.pause();
    playPauseBtn.textContent = "▶️";
  }
});

// Thanh progress điều khiển audio
const progressInput = document.getElementById("progress");
const currentTimeSpan = document.getElementById("current-time");
const durationSpan = document.getElementById("duration");

// Hàm cập nhật thời gian và tua đến vị trí mới
function seekTo(value) {
  audioElem.currentTime = value;
  currentTimeSpan.textContent = formatTime(audioElem.currentTime);
}

// Khi người dùng đang kéo slider
progressInput.addEventListener("input", () => {
  seekTo(progressInput.value);
});

// Đảm bảo cập nhật sau khi kéo xong
progressInput.addEventListener("change", () => {
  seekTo(progressInput.value);
});

// Cập nhật khi audio đang phát
function updateProgress() {
  currentTimeSpan.textContent = formatTime(audioElem.currentTime);
  progressInput.value = Math.floor(audioElem.currentTime);
}

// Khi metadata load xong thì thiết lập max cho slider
audioElem.addEventListener("loadedmetadata", () => {
  durationSpan.textContent = formatTime(audioElem.duration);
  progressInput.max = Math.floor(audioElem.duration);
});


// Xử lý menu chọn loại truyện
menuButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    menuButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentType = btn.getAttribute("data-type");
    filterStories();
    renderStoryCards(filteredStories);
    selectedStory = null;
  });
});

let debounceTimer;
searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    filterStories();
    renderStoryCards(filteredStories);
    selectedStory = null;
  }, 500); // chỉ chạy sau khi người dùng ngưng gõ 300ms
});
