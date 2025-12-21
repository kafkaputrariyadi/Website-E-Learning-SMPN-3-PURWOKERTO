const allSchedules = [
  {
    subject: "Matematika",
    image: "img/matematika.jpg",
    day: "Senin",
    start: "07:00",
    end: "08:30",
  },
  {
    subject: "Ilmu Pengetahuan Alam",
    image: "img/IPA.jpg",
    day: "Senin",
    start: "08:30",
    end: "09:45",
  },
  {
    subject: "Pendidikan Agama dan Budi Pekerti",
    image: "img/pendidikan agama.jpg",
    day: "Senin",
    start: "10:00",
    end: "11:45",
  },
  {
    subject: "Bahasa Indonesia",
    image: "img/bahasa indonesia.jpg",
    day: "Senin",
    start: "12:30",
    end: "14:00",
  },
  {
    subject: "Bahasa Inggris",
    image: "img/inggris.jpg",
    day: "Selasa",
    start: "07:00",
    end: "08:30",
  },
  {
    subject: "Bahasa Indonesia",
    image: "img/bahasa indonesia.jpg",
    day: "Selasa",
    start: "08:30",
    end: "09:45",
  },
  {
    subject: "Ilmu Pengetahuan Sosial",
    image: "img/IPS.png",
    day: "Selasa",
    start: "10:00",
    end: "11:45",
  },
  {
    subject: "Pendidikan Jasmani dan Olahraga",
    image: "img/pjok.jpg",
    day: "Selasa",
    start: "12:30",
    end: "14:00",
  },
  {
    subject: "Pendidikan Seni dan Budaya",
    image: "img/seni budaya.jpg",
    day: "Rabu",
    start: "07:00",
    end: "08:30",
  },
  {
    subject: "Informatika",
    image: "img/informatika.jpg",
    day: "Rabu",
    start: "08:30",
    end: "09:45",
  },
  {
    subject: "Pendidikan Pancasila",
    image: "img/pkn.jpg",
    day: "Rabu",
    start: "10:00",
    end: "11:45",
  },
  {
    subject: "Bahasa Jawa",
    image: "img/bahasa jawa.png",
    day: "Rabu",
    start: "12:30",
    end: "14:00",
  },
];

// Fungsi untuk menampilkan semua jadwal
function toggleAllSchedules() {
  const initialSchedule = document.getElementById("initialSchedule");
  const allSchedulesContainer = document.getElementById(
    "allSchedulesContainer"
  );
  const allSchedulesScrollable = document.getElementById(
    "allSchedulesScrollable"
  );
  const lihatSemuaBtn = document.getElementById("lihatSemua");

  if (allSchedulesContainer.style.display === "none") {
    // Tampilkan semua jadwal
    allSchedulesScrollable.innerHTML = "";

    // Tambahkan semua jadwal ke dalam container scrollable
    allSchedules.forEach((schedule) => {
      const scheduleCard = document.createElement("div");
      scheduleCard.className = "all-schedule-card";
      // Disable navigation for schedule cards: prevent redirect when clicked
      scheduleCard.onclick = (e) => {
        e.stopPropagation();
        console.log(
          "Schedule card clicked (navigation disabled):",
          schedule.subject
        );
      };

      scheduleCard.innerHTML = `
        <img src="${schedule.image}" class="all-schedule-image" alt="${schedule.subject}" />
        <div class="all-schedule-info">
          <div class="all-schedule-title">${schedule.subject}</div>
          <div class="all-schedule-details">
            <div class="all-schedule-detail-row">
              <span class="detail-label">${schedule.day}</span>
            </div>
            <div class="all-schedule-detail-row">
              <span class="detail-label">Mulai:</span>
              <span class="detail-value">${schedule.start}</span>
            </div>
            <div class="all-schedule-detail-row">
              <span class="detail-label">Selesai:</span>
              <span class="detail-value">${schedule.end}</span>
            </div>
          </div>
        </div>
      `;

      allSchedulesScrollable.appendChild(scheduleCard);
    });

    allSchedulesContainer.style.display = "block";
    lihatSemuaBtn.classList.add("active");
    lihatSemuaBtn.textContent = "lihat sedikit";

    // Scroll ke bagian jadwal
    allSchedulesContainer.scrollIntoView({ behavior: "smooth" });
  } else {
    // Sembunyikan semua jadwal
    allSchedulesContainer.style.display = "none";
    lihatSemuaBtn.classList.remove("active");
    lihatSemuaBtn.textContent = "lihat semua";

    // Scroll kembali ke awal jadwal
    initialSchedule.scrollIntoView({ behavior: "smooth" });
  }
}

// helper: normalize subject string to pageKey (kebab-case)
function normalizeSubjectKey(subject) {
  if (!subject) return "";
  return subject.toLowerCase().trim().replace(/\s+/g, "-");
}

// mapping subject slug -> direct html page
const SUBJECT_PAGE_MAP = {
  "bahasa-indonesia": "bahasa-indonesia.html",
  matematika: "matematika.html",
  "ilmu-pengetahuan-alam": "ilmu-pengetahuan-alam.html",
  ipa: "ilmu-pengetahuan-alam.html",
  "pengetahuan-alam": "ilmu-pengetahuan-alam.html",
  "bahasa-inggris": "bahasa-inggris.html",
  "ilmu-pengetahuan-sosial": "ilmu-pengetahuan-sosial.html",
  ips: "ilmu-pengetahuan-sosial.html",
  "pengetahuan-sosial": "ilmu-pengetahuan-sosial.html",
  informatika: "informatika.html",
  "bahasa-jawa": "bahasa-jawa.html",
  ppkn: "ppkn.html",
  pjok: "pjok.html",
  "pendidikan-agama": "pendidikan-agama.html",
  "seni-budaya": "seni-budaya.html",
  penjaskes: "pjok.html",
};

// Navigate to subject-specific HTML if available, otherwise to progress page
function navigateToSubjectPage(subject) {
  if (!subject) return;
  const key = normalizeSubjectKey(subject);
  // try direct mapping
  if (SUBJECT_PAGE_MAP[key]) {
    window.location.href = SUBJECT_PAGE_MAP[key];
    return;
  }
  // fallback to progress page with subject param
  window.location.href = "progress.html?subject=" + encodeURIComponent(key);
}

// Fungsi scroll untuk progress cards
function scrollProgress(direction) {
  const container = document.querySelector(".progress-cards");
  const scrollAmount = 300;
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}

function openLesson(subject) {
  // normalize and delegate to openSubject to show modal/detail
  if (!subject) return;
  const map = {
    agama: "agama",
    ipa: "ipa",
    IPA: "ipa",
    "Bahasa inggris": "bahasa-inggris",
    "Bahasa Inggris": "bahasa-inggris",
    "Bahasa Jawa": "bahasa-jawa",
    Inggriss: "bahasa-inggris",
    inggriss: "bahasa-inggris",
    bahasa: "bahasa-indonesia",
    matematika: "matematika",
    pjok: "pjok",
    informatika: "informatika",
    IPS: "ips",
    ips: "ips",
    PKN: "ppkn",
    PKn: "ppkn",
    pkn: "ppkn",
    "seni budaya": "seni-budaya",
  };

  const key = map[subject] || subject.toLowerCase();
  openSubject(key);
}

function openSubject(subject) {
  console.log("Subject clicked:", subject); // Debug log

  // Validasi jika subject null atau undefined
  if (!subject) {
    console.error("Subject is null or undefined");
    alert("Mata pelajaran tidak ditemukan");
    return;
  }

  // Mapping subject ke halaman yang sesuai - DIPERBAIKI DENGAN ILMU PENGETAHUAN SOSIAL
  const subjectPages = {
    "bahasa-indonesia": "bahasa-indonesia.html",
    matematika: "matematika.html",
    "ilmu-pengetahuan-alam": "ilmu-pengetahuan-alam.html",
    "bahasa-inggris": "bahasa-inggris.html",
    "ilmu-pengetahuan-sosial": "ilmu-pengetahuan-sosial.html", // TAMBAHAN INI
    ipa: "ilmu-pengetahuan-alam.html", // Alternatif untuk IPA
    mtk: "matematika.html", // Alternatif untuk Matematika
    inggris: "bahasa-inggris.html", // Alternatif untuk Bahasa Inggris
    indonesia: "bahasa-indonesia.html", // Alternatif untuk Bahasa Indonesia
    "pengetahuan-alam": "ilmu-pengetahuan-alam.html",
    ips: "ilmu-pengetahuan-sosial.html", // Alternatif untuk IPS
    "pengetahuan-sosial": "ilmu-pengetahuan-sosial.html",
    informatika: "informatika.html",
    bahasajawa: "bahasa-jawa.html",
    "bahasa-jawa": "bahasa-jawa.html",
    ppkn: "ppkn.html", // TAMBAHAN INI
    "Pendidikan Pancasila dan Kewarganegaraan": "ppkn.html",
    senibudaya: "seni-budaya.html",
    "seni-budaya": "seni-budaya.html",
    "Pendidikan Jasmani dan Olahraga": "pjok.html",
    penjaskes: "pjok.html",
    "pendidikan-agama": "pendidikan-agama.html",
    "Pendidikan Agama dan Budi Pekerti": "pendidikan-agama.html",
    agama: "pendidikan-agama.html",
  };

  // Arahkan langsung ke halaman progres siswa untuk mata pelajaran yang diklik
  const aliasMap = {
    "pendidikan agama": "pendidikan-agama",
    agama: "pendidikan-agama",
    ipa: "ilmu-pengetahuan-alam",
    "ilmu pengetahuan alam": "ilmu-pengetahuan-alam",
    "bahasa-inggris": "bahasa-inggris",
    "bahasa inggris": "bahasa-inggris",
    pjok: "pjok",
    "pendidikan jasmani dan olahraga": "pjok",
    matematika: "matematika",
    "bahasa-indonesia": "bahasa-indonesia",
    "bahasa indonesia": "bahasa-indonesia",
    "seni budaya": "seni-budaya",
    "seni-budaya": "seni-budaya",
    informatika: "informatika",
    ips: "ilmu-pengetahuan-sosial",
    "ilmu pengetahuan sosial": "ilmu-pengetahuan-sosial",
    "bahasa-jawa": "bahasa-jawa",
    ppkn: "ppkn",
  };

  let pageKey = subject.toLowerCase().trim();
  if (aliasMap[pageKey]) pageKey = aliasMap[pageKey];
  // normalize spaces -> dashes
  pageKey = pageKey.replace(/\s+/g, "-");

  // gunakan query param untuk subject di progress page
  window.location.href = "progress.html?subject=" + encodeURIComponent(pageKey);
}

function openSchedule(subject) {
  console.log("Schedule clicked:", subject); // Debug log

  // Validasi jika subject null atau undefined
  if (!subject) {
    console.error("Subject is null or undefined");
    alert("Jadwal tidak ditemukan");
    return;
  }

  const schedulePages = {
    Matematika: "matematika.html",
    "Bahasa Indonesia": "bahasa-indonesia.html",
    "Ilmu Pengetahuan Alam": "ilmu-pengetahuan-alam.html",
    "Bahasa Inggris": "bahasa-inggris.html",
    "Ilmu Pengetahuan Sosial": "ilmu-pengetahuan-sosial.html",
    "Pendidikan Pancasila": "ppkn.html",
    ppkn: "ppkn.html",
    "pendidikan-pancasila": "ppkn.html",
    "Pendidikan Pancasila": "ppkn.html",
    "Pendidikan Pancasila dan Kewarganegaraan": "ppkn.html",
    pkn: "ppkn.html",
    IPA: "ilmu-pengetahuan-alam.html",
    MTK: "matematika.html",
    IPS: "ilmu-pengetahuan-sosial.html",
    senibudaya: "seni-budaya.html",
    "seni-budaya": "seni-budaya.html",
    "Pendidikan Jasmani dan Olahraga": "pjok.html",
    informatika: "informatika.html",
    bahasajawa: "bahasa-jawa.html",
    "bahasa-jawa": "bahasa-jawa.html",
    "pendidikan-agama": "pendidikan-agama.html",
    "Pendidikan Agama dan Budi Pekerti": "pendidikan-agama.html",
    agama: "pendidikan-agama.html",
  };

  const page = schedulePages[subject];

  if (page) {
    window.location.href = page;
  } else {
    alert(
      "Membuka jadwal: " + subject + "\n\nFitur ini sedang dalam pengembangan."
    );
  }
}

// Event listener untuk DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded"); // Debug log

  try {
    const raw = localStorage.getItem("profileData");
    if (raw) {
      const pdata = JSON.parse(raw);
      const nameEl = document.querySelector(".user-name");
      if (nameEl && pdata.name) nameEl.textContent = pdata.name;
      const avatarImg = document.querySelector(".user-avatar img");
      if (avatarImg && pdata.avatar) avatarImg.src = pdata.avatar;
    }
  } catch (e) {
    console.warn("Profile sync failed", e);
  }

  // Smooth scroll untuk anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Event listener untuk tombol "lihat semua"
  const lihatSemuaBtn = document.getElementById("lihatSemua");
  if (lihatSemuaBtn) {
    lihatSemuaBtn.addEventListener("click", function (e) {
      e.preventDefault();
      toggleAllSchedules();
    });
  }

  // Event listener untuk card mata pelajaran di dashboard
  const subjectCards = document.querySelectorAll(".subject-card");
  console.log("Subject cards found:", subjectCards.length); // Debug log

  subjectCards.forEach((card) => {
    card.addEventListener("click", function () {
      // Ambil subject dari data attribute
      const subject = this.getAttribute("data-subject");
      console.log("Subject card clicked:", subject); // Debug log
      // For "Mata Pelajaran Anda" cards, open subject page directly when available
      navigateToSubjectPage(subject);
    });
  });

  // Event listener untuk progress cards (hanya bila tidak ada atribut onclick inline)
  const progressCards = document.querySelectorAll(".progress-card");
  progressCards.forEach((card) => {
    if (!card.getAttribute("onclick")) {
      card.addEventListener("click", function () {
        const subject = this.getAttribute("data-subject");
        console.log("Progress card clicked, data-subject:", subject); // Debug log
        // Progress cards should always open the progress page
        const key = normalizeSubjectKey(subject || "");
        window.location.href =
          "progress.html?subject=" + encodeURIComponent(key);
      });
    }
  });

  // Disable navigation for static schedule cards (initialSchedule) by removing inline onclick
  const staticScheduleCards = document.querySelectorAll(".schedule-card");
  staticScheduleCards.forEach((card) => {
    // remove inline onclick attribute if present
    if (card.getAttribute("onclick")) card.removeAttribute("onclick");
    // add a safe click handler that prevents navigation
    card.addEventListener("click", function (e) {
      e = e || window.event;
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
      const titleEl = card.querySelector(".schedule-title");
      const subject = titleEl ? titleEl.textContent.trim() : "";
      console.log(
        "Static schedule card clicked (navigation disabled):",
        subject
      );
      return false;
    });
  });

  // Global click handler for .all-schedule-card kept for logging only
  document.addEventListener("click", function (e) {
    if (e.target.closest(".all-schedule-card")) {
      const scheduleCard = e.target.closest(".all-schedule-card");
      const subject = scheduleCard.querySelector(
        ".all-schedule-title"
      ).textContent;
      console.log(
        "All schedule card clicked (navigation disabled), subject:",
        subject
      );
      // intentionally do not call openSchedule(subject) to prevent navigation
    }
  });

  // Profile dropdown toggle + outside click close + Escape key
  const userProfile = document.getElementById("userProfile");
  const profileDropdown = document.getElementById("profileDropdown");
  if (userProfile && profileDropdown) {
    userProfile.addEventListener("click", function (e) {
      e.stopPropagation();
      const isOpen = profileDropdown.classList.toggle("show");
      userProfile.setAttribute("aria-expanded", isOpen);
      profileDropdown.setAttribute("aria-hidden", !isOpen);
    });

    // Close when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !e.target.closest("#userProfile") &&
        profileDropdown.classList.contains("show")
      ) {
        profileDropdown.classList.remove("show");
        userProfile.setAttribute("aria-expanded", "false");
        profileDropdown.setAttribute("aria-hidden", "true");
      }
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && profileDropdown.classList.contains("show")) {
        profileDropdown.classList.remove("show");
        userProfile.setAttribute("aria-expanded", "false");
        profileDropdown.setAttribute("aria-hidden", "true");
      }
    });

    // Close when user clicks an item (if it's a link)
    profileDropdown.addEventListener("click", function (e) {
      const a = e.target.closest("a");
      if (a) {
        profileDropdown.classList.remove("show");
        userProfile.setAttribute("aria-expanded", "false");
        profileDropdown.setAttribute("aria-hidden", "true");
      }
    });
  }

  console.log("=== DEBUG INFO ===");
  console.log(
    "Subject cards:",
    document.querySelectorAll(".subject-card").length
  );
  console.log(
    "Progress cards:",
    document.querySelectorAll(".progress-card").length
  );
  console.log(
    "All schedule cards:",
    document.querySelectorAll(".all-schedule-card").length
  );
});
