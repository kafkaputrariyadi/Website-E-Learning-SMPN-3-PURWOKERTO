// JavaScript for Pendidikan Agama dan Budi Pekerti Page

// Data video YouTube untuk setiap bab
const videoData = {
  1: {
    title: "Memahami dan Mengamalkan Nilai Ketuhanan",
    description:
      "Video ini menjelaskan tentang pentingnya nilai ketuhanan dalam kehidupan sehari-hari serta cara mengimplementasikannya untuk membentuk karakter yang kuat.",
    youtubeId: "9k4R8Rq0kfY",
    duration: "12:15",
  },
  2: {
    title: "Mengembangkan Akhlak Mulia dalam Kehidupan",
    description:
      "Video ini menjelaskan tentang pentingnya akhlak mulia dalam kehidupan sehari-hari dan cara-cara untuk mengembangkannya.",
    youtubeId: "5Qk7Kvj8SJI",
    duration: "14:30",
  },
  3: {
    title: "Membangun Kerukunan dalam Keberagaman",
    description:
      "Video ini menjelaskan tentang pentingnya toleransi beragama dalam masyarakat majemuk dan cara menjaga kerukunan antarumat beragama.",
    youtubeId: "xCb4Hk3xjvQ",
    duration: "16:45",
  },
  4: {
    title: "Komunikasi yang Beretika dan Bermoral",
    description:
      "Video ini menjelaskan tentang pentingnya etika dalam berkomunikasi dan bagaimana menerapkannya dalam kehidupan sehari-hari.",
    youtubeId: "7L8c0AojaJY",
    duration: "13:20",
  },
  5: {
    title: "Mengembangkan Sikap Kepedulian Sosial",
    description:
      "Video ini menjelaskan tentang pentingnya kepedulian sosial dalam masyarakat dan cara mengembangkannya sejak dini.",
    youtubeId: "L3QkaS249Bc",
    duration: "15:10",
  },
};

// Data kuis lengkap untuk semua bab
const quizData = {
  1: {
    questions: [
      {
        question: "Apa yang dimaksud dengan nilai-nilai ketuhanan?",
        options: [
          "Nilai yang berkaitan dengan ilmu pengetahuan",
          "Nilai yang berkaitan dengan hubungan manusia dengan Tuhan",
          "Nilai yang berkaitan dengan sosial budaya",
          "Nilai yang berkaitan dengan ekonomi",
        ],
        correct: 1,
      },
      {
        question:
          "Contoh implementasi nilai ketuhanan dalam kehidupan sehari-hari adalah...",
        options: [
          "Bekerja keras untuk mencapai sukses",
          "Melaksanakan ibadah dengan ikhlas dan khusyuk",
          "Mengikuti perkembangan teknologi",
          "Menjadi anggota organisasi sosial",
        ],
        correct: 1,
      },
      {
        question: "Manfaat utama dari penerapan nilai ketuhanan adalah...",
        options: [
          "Meningkatkan kecerdasan intelektual",
          "Memberikan pedoman hidup dan ketenangan batin",
          "Menambah penghasilan materi",
          "Meningkatkan popularitas",
        ],
        correct: 1,
      },
      {
        question: "Sikap yang mencerminkan nilai ketuhanan adalah...",
        options: [
          "Sombong dengan prestasi yang dicapai",
          "Bersyukur atas segala nikmat yang diterima",
          "Mementingkan diri sendiri",
          "Menghalalkan segala cara untuk sukses",
        ],
        correct: 1,
      },
      {
        question: "Ibadah sosial yang mencerminkan nilai ketuhanan adalah...",
        options: [
          "Mengumpulkan harta sebanyak-banyaknya",
          "Berbuat baik kepada sesama manusia",
          "Hanya bergaul dengan orang kaya",
          "Menjauhi orang yang miskin",
        ],
        correct: 1,
      },
    ],
  },
  2: {
    questions: [
      {
        question: "Apa yang dimaksud dengan akhlak mulia?",
        options: [
          "Perilaku yang didasarkan pada keinginan pribadi",
          "Perilaku baik yang didasarkan pada nilai agama dan moral",
          "Sikap yang mengutamakan kepentingan diri sendiri",
          "Perilaku yang hanya dilakukan di tempat umum",
        ],
        correct: 1,
      },
      {
        question: "Contoh akhlak mulia kepada orang tua adalah...",
        options: [
          "Membantah ketika dinasihati",
          "Berbicara dengan sopan dan menghormati",
          "Mengabaikan ketika dipanggil",
          "Hanya menurut ketika dibelikan sesuatu",
        ],
        correct: 1,
      },
      {
        question: "Akhlak mulia kepada teman sebaya adalah...",
        options: [
          "Menjauhi teman yang berbeda pendapat",
          "Saling menghormati dan tolong-menolong",
          "Mengejek teman yang kurang mampu",
          "Hanya berteman dengan orang kaya",
        ],
        correct: 1,
      },
      {
        question: "Akhlak mulia terhadap lingkungan adalah...",
        options: [
          "Membuang sampah sembarangan",
          "Menjaga kebersihan dan keindahan",
          "Merusak tanaman di sekolah",
          "Membuat coretan di tembok",
        ],
        correct: 1,
      },
      {
        question: "Manfaat memiliki akhlak mulia adalah...",
        options: [
          "Menjadi terkenal di masyarakat",
          "Dihormati dan disukai banyak orang",
          "Bisa mendapatkan apa yang diinginkan",
          "Menjadi orang paling kaya",
        ],
        correct: 1,
      },
    ],
  },
  3: {
    questions: [
      {
        question: "Apa yang dimaksud dengan toleransi beragama?",
        options: [
          "Memaksa orang lain mengikuti agama kita",
          "Saling menghormati perbedaan keyakinan agama",
          "Mengejek agama orang lain",
          "Hanya berteman dengan yang seagama",
        ],
        correct: 1,
      },
      {
        question: "Prinsip utama toleransi beragama adalah...",
        options: [
          "Saling mempengaruhi untuk pindah agama",
          "Saling menghargai dan menghormati perbedaan",
          "Berdebat tentang kebenaran agama masing-masing",
          "Hidup terpisah dari pemeluk agama lain",
        ],
        correct: 1,
      },
      {
        question: "Contoh sikap toleransi beragama di sekolah adalah...",
        options: [
          "Menghina teman yang berbeda agama",
          "Mengizinkan teman beribadah sesuai keyakinannya",
          "Memaksa teman mengikuti ibadah kita",
          "Tidak mau berteman dengan yang beda agama",
        ],
        correct: 1,
      },
      {
        question: "Toleransi beragama penting untuk...",
        options: [
          "Menghilangkan perbedaan agama",
          "Menjaga kerukunan dan kedamaian",
          "Menyatukan semua agama menjadi satu",
          "Menguasai pemeluk agama lain",
        ],
        correct: 1,
      },
      {
        question: "Sikap yang tidak toleran adalah...",
        options: [
          "Menghormati tempat ibadah agama lain",
          "Mengucapkan selamat hari raya",
          "Merusak tempat ibadah agama lain",
          "Bekerja sama dalam kegiatan sosial",
        ],
        correct: 2,
      },
    ],
  },
  4: {
    questions: [
      {
        question: "Apa yang dimaksud dengan etika komunikasi?",
        options: [
          "Berbicara sebanyak-banyaknya",
          "Prinsip moral dalam berkomunikasi dengan orang lain",
          "Menggunakan bahasa asing",
          "Berbicara dengan suara keras",
        ],
        correct: 1,
      },
      {
        question: "Contoh komunikasi yang beretika adalah...",
        options: [
          "Berbicara dengan sopan dan santun",
          "Menggunakan kata-kata kasar",
          "Membicarakan kejelekan orang lain",
          "Berkata bohong untuk mengambil hati",
        ],
        correct: 0,
      },
      {
        question: "Etika dalam berkomunikasi di media sosial adalah...",
        options: [
          "Menyebarkan berita tanpa konfirmasi",
          "Menggunakan bahasa yang sopan dan tidak menyinggung",
          "Mengupload foto orang lain tanpa izin",
          "Membuat akun palsu untuk mengolok-olok",
        ],
        correct: 1,
      },
      {
        question: "Manfaat berkomunikasi dengan etika adalah...",
        options: [
          "Menimbulkan konflik dan permusuhan",
          "Menjaga hubungan baik dengan orang lain",
          "Membuat orang lain takut pada kita",
          "Menunjukkan bahwa kita hebat",
        ],
        correct: 1,
      },
      {
        question: "Sikap yang harus dihindari dalam berkomunikasi adalah...",
        options: [
          "Mendengarkan dengan baik",
          "Memotong pembicaraan orang lain",
          "Menjaga kontak mata saat berbicara",
          "Menggunakan bahasa tubuh yang positif",
        ],
        correct: 1,
      },
    ],
  },
  5: {
    questions: [
      {
        question: "Apa yang dimaksud dengan kepedulian sosial?",
        options: [
          "Hanya peduli pada diri sendiri",
          "Sikap perhatian dan tanggung jawab terhadap orang lain",
          "Mengurusi urusan orang lain",
          "Bersikap acuh tak acuh",
        ],
        correct: 1,
      },
      {
        question: "Contoh kepedulian sosial di lingkungan sekolah adalah...",
        options: [
          "Membantu teman yang kesulitan belajar",
          "Mengabaikan teman yang sedang sakit",
          "Merusak fasilitas sekolah",
          "Mengejek teman yang kurang mampu",
        ],
        correct: 0,
      },
      {
        question: "Kepedulian sosial penting untuk...",
        options: [
          "Menjadikan masyarakat lebih individualis",
          "Membangun masyarakat yang peduli dan harmonis",
          "Memperkaya diri sendiri",
          "Menunjukkan kekuatan kita",
        ],
        correct: 1,
      },
      {
        question: "Bentuk kepedulian sosial terhadap lingkungan adalah...",
        options: [
          "Membuang sampah sembarangan",
          "Ikut serta dalam kegiatan kerja bakti",
          "Merusak taman kota",
          "Membakar sampah di sembarang tempat",
        ],
        correct: 1,
      },
      {
        question: "Manfaat memiliki sikap kepedulian sosial adalah...",
        options: [
          "Hidup menjadi lebih egois",
          "Menciptakan lingkungan yang tidak harmonis",
          "Mendapatkan rasa bahagia karena membantu orang lain",
          "Menjadi orang yang dijauhi masyarakat",
        ],
        correct: 2,
      },
    ],
  },
};

// State management
let currentChapter = 1;
let userProgress = {
  1: { completed: false, score: 0 },
  2: { completed: false, score: 0 },
  3: { completed: false, score: 0 },
  4: { completed: false, score: 0 },
  5: { completed: false, score: 0 },
};

// Function to go back to dashboard
function goBackToDashboard() {
  if (confirm("Apakah Anda yakin ingin kembali ke dashboard?")) {
    window.location.href = "dashboard.html";
  }
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  console.log("Pendidikan Agama Page Loaded");

  initializePage();
  setupEventListeners();
  loadUserProgress();
});

function initializePage() {
  // Set initial active chapter
  setActiveChapter(1);

  // Render quiz questions for all chapters
  renderAllQuizzes();

  // Update progress display
  updateOverallProgress();
}

function setupEventListeners() {
  // Chapter navigation
  const chapterItems = document.querySelectorAll(".chapter-item");
  chapterItems.forEach((item) => {
    item.addEventListener("click", function () {
      const chapterNumber = parseInt(this.getAttribute("data-chapter"));
      setActiveChapter(chapterNumber);
    });
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      navigateToChapter(currentChapter + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      navigateToChapter(currentChapter - 1);
    }
  });
}

function loadUserProgress() {
  const savedProgress = localStorage.getItem("pendidikanAgamaUserProgress");
  if (savedProgress) {
    userProgress = JSON.parse(savedProgress);
    updateProgressBars();
  }
}

function saveUserProgress() {
  localStorage.setItem(
    "pendidikanAgamaUserProgress",
    JSON.stringify(userProgress)
  );
}

function setActiveChapter(chapterNumber) {
  if (chapterNumber < 1 || chapterNumber > 5) return;

  currentChapter = chapterNumber;

  // Remove active class from all chapters
  document.querySelectorAll(".chapter-item").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelectorAll(".chapter-content").forEach((content) => {
    content.classList.remove("active");
  });

  // Add active class to selected chapter
  const selectedChapter = document.querySelector(
    `.chapter-item[data-chapter="${chapterNumber}"]`
  );
  const selectedContent = document.getElementById(`chapter-${chapterNumber}`);

  if (selectedChapter && selectedContent) {
    selectedChapter.classList.add("active");
    selectedContent.classList.add("active");

    // Update progress bar based on chapter
    updateProgressBar(chapterNumber);

    // Update video content
    updateVideoContent(chapterNumber);

    // Scroll to top of content
    selectedContent.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function navigateToChapter(chapterNumber) {
  if (chapterNumber >= 1 && chapterNumber <= 5) {
    setActiveChapter(chapterNumber);
  }
}

function updateProgressBar(chapterNumber) {
  const progressBars = document.querySelectorAll(".progress-fill");
  const progressTexts = document.querySelectorAll(".progress-text");

  const progressData = {
    1: { width: "100%", text: "Progress: 100%" },
    2: { width: "80%", text: "Progress: 80%" },
    3: { width: "60%", text: "Progress: 60%" },
    4: { width: "40%", text: "Progress: 40%" },
    5: { width: "20%", text: "Progress: 20%" },
  };

  progressBars.forEach((bar) => {
    if (progressData[chapterNumber]) {
      bar.style.width = progressData[chapterNumber].width;
    }
  });

  progressTexts.forEach((text) => {
    if (progressData[chapterNumber]) {
      text.textContent = progressData[chapterNumber].text;
    }
  });
}

function updateProgressBars() {
  // Update all progress bars based on user progress
  Object.keys(userProgress).forEach((chapter) => {
    const progress = userProgress[chapter];
    if (progress.completed) {
      const chapterItem = document.querySelector(
        `.chapter-item[data-chapter="${chapter}"]`
      );
      if (chapterItem) {
        chapterItem.style.background = "#3498db";
        chapterItem.style.color = "white";
      }
    }
  });
}

function updateOverallProgress() {
  const completedChapters = Object.values(userProgress).filter(
    (progress) => progress.completed
  ).length;
  const totalChapters = Object.keys(userProgress).length;
  const percentage = (completedChapters / totalChapters) * 100;

  console.log(
    `Overall Progress: ${completedChapters}/${totalChapters} (${percentage}%)`
  );
}

function updateVideoContent(chapterNumber) {
  const videoDataForChapter = videoData[chapterNumber];

  if (videoDataForChapter) {
    // Update video iframe
    const videoIframe = document.querySelector(
      `#chapter-${chapterNumber} iframe`
    );
    if (videoIframe) {
      videoIframe.src = `https://www.youtube.com/embed/${videoDataForChapter.youtubeId}?rel=0&modestbranding=1`;
    }

    // Update video info
    const videoTitle = document.querySelector(
      `#chapter-${chapterNumber} .video-info h4`
    );
    const videoDescription = document.querySelector(
      `#chapter-${chapterNumber} .video-info p`
    );

    if (videoTitle) {
      videoTitle.textContent = videoDataForChapter.title;
      videoTitle.innerHTML += ` <span class="video-duration" style="color: #666; font-size: 12px; font-weight: normal;">(${videoDataForChapter.duration})</span>`;
    }
    if (videoDescription)
      videoDescription.textContent = videoDataForChapter.description;
  }
}

function renderAllQuizzes() {
  for (let chapter = 1; chapter <= 5; chapter++) {
    renderQuiz(chapter);
  }
}

function renderQuiz(chapter) {
  const quizContainer = document.querySelector(
    `#chapter-${chapter} .quiz-container`
  );
  if (!quizContainer || !quizData[chapter]) return;

  const questions = quizData[chapter].questions;
  let quizHTML = "";

  questions.forEach((q, index) => {
    quizHTML += `
            <div class="quiz-question">
                <p><strong>${index + 1}. ${q.question}</strong></p>
                <div class="quiz-options">
                    ${q.options
                      .map(
                        (option, optIndex) => `
                        <label>
                            <input type="radio" name="q${
                              index + 1
                            }-${chapter}" value="${String.fromCharCode(
                          97 + optIndex
                        )}" />
                            <span>${option}</span>
                        </label>
                    `
                      )
                      .join("")}
                </div>
            </div>
        `;
  });

  quizHTML += `
        <button class="submit-quiz" onclick="submitQuiz(${chapter})" id="submitBtn${chapter}">
            <span class="btn-text">Kirim Jawaban</span>
            <span class="loading" style="display: none;"></span>
        </button>
        <div class="quiz-result" id="quizResult${chapter}"></div>
    `;

  const existingQuiz = quizContainer.querySelector(".quiz-questions-container");
  if (existingQuiz) {
    existingQuiz.innerHTML = quizHTML;
  } else {
    quizContainer.innerHTML = `<div class="quiz-questions-container">${quizHTML}</div>`;
  }
}

function submitQuiz(chapter) {
  const submitBtn = document.getElementById(`submitBtn${chapter}`);
  const btnText = submitBtn.querySelector(".btn-text");
  const loading = submitBtn.querySelector(".loading");

  // Show loading
  btnText.style.display = "none";
  loading.style.display = "inline-block";
  submitBtn.disabled = true;

  // Simulate processing delay
  setTimeout(() => {
    processQuizSubmission(chapter);

    // Hide loading
    btnText.style.display = "inline-block";
    loading.style.display = "none";
    submitBtn.disabled = false;
  }, 1000);
}

function processQuizSubmission(chapter) {
  const questions = quizData[chapter].questions;
  let score = 0;
  const totalQuestions = questions.length;
  const unansweredQuestions = [];

  // Reset visual feedback
  document
    .querySelectorAll(".correct, .incorrect, .correct-answer")
    .forEach((el) => {
      el.classList.remove("correct", "incorrect", "correct-answer");
    });

  // Check answers
  questions.forEach((q, index) => {
    const questionName = `q${index + 1}-${chapter}`;
    const selectedAnswer = document.querySelector(
      `input[name="${questionName}"]:checked`
    );

    if (!selectedAnswer) {
      unansweredQuestions.push(index + 1);
      return;
    }

    const selectedOptionIndex = selectedAnswer.value.charCodeAt(0) - 97;

    if (selectedOptionIndex === q.correct) {
      score++;
      selectedAnswer.parentElement.classList.add("correct");
    } else {
      selectedAnswer.parentElement.classList.add("incorrect");

      // Highlight correct answer
      const correctOption = document.querySelector(
        `input[name="${questionName}"][value="${String.fromCharCode(
          97 + q.correct
        )}"]`
      );
      if (correctOption) {
        correctOption.parentElement.classList.add("correct-answer");
      }
    }
  });

  // Update user progress
  userProgress[chapter].completed = true;
  userProgress[chapter].score = score;
  saveUserProgress();
  updateProgressBars();
  updateOverallProgress();

  // Display result
  displayQuizResult(chapter, score, totalQuestions, unansweredQuestions);
}

function displayQuizResult(
  chapter,
  score,
  totalQuestions,
  unansweredQuestions
) {
  const resultElement = document.getElementById(`quizResult${chapter}`);
  const percentage = (score / totalQuestions) * 100;

  let resultHTML = "";

  if (unansweredQuestions.length > 0) {
    resultElement.className = "quiz-result error";
    resultHTML = `
            <h4>📝 Silakan Lengkapi Semua Soal!</h4>
            <p>Anda belum menjawab soal nomor: <strong>${unansweredQuestions.join(
              ", "
            )}</strong></p>
            <p>Silakan jawab semua soal sebelum mengirim.</p>
        `;
  } else {
    userProgress[chapter].completed = true;
    userProgress[chapter].score = score;
    saveUserProgress();

    if (percentage >= 80) {
      resultElement.className = "quiz-result success";
      resultHTML = `
                <h4>🎉 Luar Biasa!</h4>
                <p><strong>Nilai Anda: ${score}/${totalQuestions} (${percentage}%)</strong></p>
                <p>Kerja bagus! Anda memahami materi bab ini dengan sangat baik.</p>
                ${
                  chapter < 5
                    ? `
                    <button class="next-chapter-btn" onclick="navigateToChapter(${
                      chapter + 1
                    })" style="background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                        Lanjut ke Bab ${chapter + 1}
                    </button>
                `
                    : `
                    <button class="next-chapter-btn" onclick="celebrateCompletion()" style="background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                        Selamat! Anda Menyelesaikan Semua Bab 🎓
                    </button>
                `
                }
            `;
    } else if (percentage >= 60) {
      resultElement.className = "quiz-result success";
      resultHTML = `
                <h4>👍 Bagus!</h4>
                <p><strong>Nilai Anda: ${score}/${totalQuestions} (${percentage}%)</strong></p>
                <p>Anda memahami dasar-dasarnya, tapi perlu review beberapa topik.</p>
                <button class="review-chapter-btn" onclick="setActiveChapter(${chapter})" style="background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                    Review Bab Ini
                </button>
            `;
    } else {
      resultElement.className = "quiz-result error";
      resultHTML = `
                <h4>📚 Terus Berlatih!</h4>
                <p><strong>Nilai Anda: ${score}/${totalQuestions} (${percentage}%)</strong></p>
                <p>Jangan khawatir! Pelajari kembali materi dan coba lagi.</p>
                <button class="review-chapter-btn" onclick="setActiveChapter(${chapter})" style="background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                    Pelajari Ulang Bab Ini
                </button>
            `;
    }
  }

  resultElement.innerHTML = resultHTML;
  resultElement.scrollIntoView({ behavior: "smooth", block: "center" });

  setTimeout(() => {
    document
      .querySelectorAll(".correct, .incorrect, .correct-answer")
      .forEach((el) => {
        el.classList.remove("correct", "incorrect", "correct-answer");
      });
  }, 5000);
}

function celebrateCompletion() {
  alert(
    "Selamat! Anda telah menyelesaikan semua materi Pendidikan Agama dan Budi Pekerti! 🎓🎉"
  );
}

const style = document.createElement("style");
style.textContent = `
    .quiz-options label.correct {
        background-color: #e8f4fc !important;
        border-color: #3498db !important;
        color: #2980b9;
    }
    .quiz-options label.incorrect {
        background-color: #f8d7da !important;
        border-color: #f5c6cb !important;
        color: #721c24;
    }
    .quiz-options label.correct-answer {
        background-color: #e8f4fc !important;
        border-color: #3498db !important;
        border: 2px solid #3498db !important;
        color: #2980b9;
    }
`;
document.head.appendChild(style);

window.goBackToDashboard = goBackToDashboard;
window.setActiveChapter = setActiveChapter;
window.navigateToChapter = navigateToChapter;
window.submitQuiz = submitQuiz;

console.log("Pendidikan Agama JavaScript loaded successfully!");
