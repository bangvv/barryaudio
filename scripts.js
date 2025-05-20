
  // Dữ liệu mẫu
  const stories = [
    {
      id: 1,
      title: "Như Lai Thần Chưởng",
      description: "Một câu chuyện đầy huyền bí về tu luyện, tiên đạo, và chiến đấu.",
      type: "tienhiep",
      chapters: [
        { id: 1, title: "Chương 1: Bắt đầu", audioUrl: "mp3/yeulam.mp3" },
        { id: 2, title: "Chương 2: Thử thách", audioUrl: "mp3/yeulam.mp3" },
		{ id: 3, title: "Chương 3: Thử thách", audioUrl: "mp3/yeulam.mp3" },
		{ id: 4, title: "Chương 4: Thử thách", audioUrl: "mp3/yeulam.mp3" },
		{ id: 5, title: "Chương 5: Thử thách", audioUrl: "mp3/yeulam.mp3" },
		{ id: 6, title: "Chương 6: Thử thách", audioUrl: "mp3/yeulam.mp3" },
		{ id: 7, title: "Chương 7: Thử thách", audioUrl: "mp3/yeulam.mp3" },
		{ id: 8, title: "Chương 8: Thử thách", audioUrl: "mp3/yeulam.mp3" },
		{ id: 9, title: "Chương 9: Thử thách", audioUrl: "mp3/yeulam.mp3" },
		{ id: 10, title: "Chương 10: Thử thách", audioUrl: "mp3/yeulam.mp3" },
		{ id: 11, title: "Chương 11: Thử thách", audioUrl: "mp3/yeulam.mp3" },
		{ id: 12, title: "Chương 12: Thử thách", audioUrl: "mp3/yeulam.mp3" },
      ]
    },
    {
      id: 2,
      title: "Hiệp Khách Hành",
      description: "Hành trình anh hùng trên con đường kiếm đạo đầy gian truân.",
      type: "tienhiep",
      chapters: [
        { id: 1, title: "Chương 1: Lên đường", audioUrl: "mp3/yeulam.mp3" }
      ]
    },
    {
      id: 3,
      title: "Truyện Ngôn Tình Hay",
      description: "Câu chuyện tình yêu lãng mạn, sâu sắc.",
      type: "ngontinh",
      chapters: [
        { id: 1, title: "Chương 1: Gặp gỡ", audioUrl: "mp3/yeulam.mp3" }
      ]
    },
    {
      id: 4,
      title: "Kinh Dị Đêm Trăng",
      description: "Những câu chuyện rùng rợn trong đêm tối.",
      type: "kinhdi",
      chapters: [
        { id: 1, title: "Chương 1: Bí ẩn", audioUrl: "mp3/yeulam.mp3" }
      ]
    },
	{
      id: 5,
      title: "Bá vương ",
      description: "Hành trình anh hùng trên con đường kiếm đạo đầy gian truân.",
      type: "tienhiep",
      chapters: [
        { id: 1, title: "Chương 1: Lên đường", audioUrl: "mp3/yeulam.mp3" }
      ]
    },
	{
      id: 6,
      title: "Long Vương Thức Tỉnh",
      description: "Hành trình anh hùng trên con đường kiếm đạo đầy gian truân.",
      type: "tienhiep",
      chapters: [
        { id: 1, title: "Chương 1: Lên đường", audioUrl: "mp3/yeulam.mp3" }
      ]
    },
	{
      id: 7,
      title: "Huyền Thoại Ijmate",
      description: "Hành trình anh hùng trên con đường kiếm đạo đầy gian truân.",
      type: "tienhiep",
      chapters: [
        { id: 1, title: "Chương 1: Lên đường", audioUrl: "mp3/yeulam.mp3" }
      ]
    },
	{
      id: 8,
      title: "Hoa Thư",
      description: "Hành trình anh hùng trên con đường kiếm đạo đầy gian truân.",
      type: "tienhiep",
      chapters: [
        { id: 1, title: "Chương 1: Lên đường", audioUrl: "mp3/yeulam.mp3" }
      ]
    },
	{
      id: 9,
      title: "Phá Long",
      description: "Hành trình anh hùng trên con đường kiếm đạo đầy gian truân.",
      type: "tienhiep",
      chapters: [
        { id: 1, title: "Chương 1: Lên đường", audioUrl: "mp3/yeulam.mp3" }
      ]
    },
	{
      id: 10,
      title: "Triệu Khải Nguyên",
      description: "Hành trình anh hùng trên con đường kiếm đạo đầy gian truân.",
      type: "tienhiep",
      chapters: [
        { id: 1, title: "Chương 1: Lên đường", audioUrl: "mp3/yeulam.mp3" }
      ]
    },
	{
      id: 11,
      title: "Phá Long",
      description: "Hành trình anh hùng trên con đường kiếm đạo đầy gian truân.",
      type: "tienhiep",
      chapters: [
        { id: 1, title: "Chương 1: Lên đường", audioUrl: "mp3/yeulam.mp3" }
      ]
    },
	{
      id: 12,
      title: "Đấu Phá Thương Khung",
      description: "Hành trình anh hùng trên con đường kiếm đạo đầy gian truân.",
      type: "tienhiep",
      chapters: [
        { id: 1, title: "Chương 1: Lên đường", audioUrl: "mp3/yeulam.mp3" }
      ]
    },
	{
      id: 13,
      title: "Đấu La Đại Lục 1",
      description: "Hành trình anh hùng trên con đường kiếm đạo đầy gian truân.",
      type: "tienhiep",
      chapters: [
        { id: 1, title: "Chương 1: Lên đường", audioUrl: "mp3/yeulam.mp3" }
      ]
    },
	{
      id: 14,
      title: "Đấu La Đại Lục 2",
      description: "Hành trình anh hùng trên con đường kiếm đạo đầy gian truân.",
      type: "tienhiep",
      chapters: [
        { id: 1, title: "Chương 1: Lên đường", audioUrl: "mp3/yeulam.mp3" }
      ]
    },
  ];

  const mainContent = document.getElementById("main-content");
  const searchInput = document.getElementById("search");
  const menuButtons = document.querySelectorAll(".menu-btn");
  const audioPlayer = document.getElementById("audio-player");
  const audioElem = document.getElementById("audio");
  const playingTitle = document.getElementById("playing-title");

  let currentType = "home"; // menu chọn
  let filteredStories = stories;
  let selectedStory = null;

  // Lọc truyện theo thể loại và tìm kiếm
  function filterStories() {
    const q = searchInput.value.trim().toLowerCase();
    if (currentType === "home") {
      filteredStories = stories.filter(
        s =>
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q)
      );
    } else {
      filteredStories = stories.filter(
        s =>
          s.type === currentType &&
          (s.title.toLowerCase().includes(q) ||
            s.description.toLowerCase().includes(q))
      );
    }
  }

  // Render danh sách card truyện
  /*
  function renderStoryCards(list) {
    mainContent.innerHTML = "";
    if (list.length === 0) {
      mainContent.innerHTML = "<p>Không tìm thấy truyện nào.</p>";
      return;
    }
    const container = document.createElement("div");
    container.className = "grid-4";
    list.forEach(story => {
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
  }
  */
  
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
  function openStoryDetail(id) {
    selectedStory = stories.find(s => s.id === id);
    if (!selectedStory) return;

  mainContent.innerHTML = `
    <div id="story-detail">
    <h2>${selectedStory.title}</h2>
    <p>${selectedStory.description}</p>
    <ul id="chapter-list" style="max-height: 300px; overflow-y: auto; padding-left: 20px;">
      ${selectedStory.chapters
      .map(
        ch => `<li data-chapter-id="${ch.id}">${ch.title}</li>`
      )
      .join("")
      }
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

    // Gán sự kiện nghe audio cho từng chapter
    const chapterItems = document.querySelectorAll("#chapter-list li");
    chapterItems.forEach((li) => {
      li.addEventListener("click", () => {
        const chapterId = parseInt(li.getAttribute("data-chapter-id"));
        playChapter(selectedStory.id, chapterId);
      });
    });
  }

    function playChapter(storyId, chapterId) {
      const story = stories.find(s => s.id === storyId);
      console.log("story:", story);
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
      console.log("Chuyển sang chương tiếp theo:", nextChapter.id);
      playChapter(currentStoryId, nextChapter.id);
      } else {
      console.log("Đã hết chương.");
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
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }

  // Cập nhật progress thanh audio
  function updateProgress() {
    currentTimeSpan.textContent = formatTime(audioElem.currentTime);
    progressInput.value = Math.floor(audioElem.currentTime);
  }

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

  progressInput.addEventListener("input", () => {
    audioElem.currentTime = progressInput.value;
    currentTimeSpan.textContent = formatTime(audioElem.currentTime);
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

  // Xử lý tìm kiếm
  searchInput.addEventListener("input", () => {
    filterStories();
    renderStoryCards(filteredStories);
    selectedStory = null;
  });

  // Khởi tạo lần đầu
  filterStories();
  renderStoryCards(filteredStories);
