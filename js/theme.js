(function () {
  function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("theme-dark");
    } else {
      root.classList.remove("theme-dark");
    }
  }

  function setTheme(theme) {
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
    applyTheme(theme);
    // dispatch event for other scripts
    window.dispatchEvent(
      new CustomEvent("theme-change", { detail: { theme } })
    );
  }

  // initialize on load
  document.addEventListener("DOMContentLoaded", function () {
    try {
      const stored = localStorage.getItem("theme") || "light";
      applyTheme(stored);
    } catch (e) {
      applyTheme("light");
    }

    // sync across tabs for theme
    window.addEventListener("storage", function (e) {
      if (e.key === "theme") applyTheme(e.newValue || "light");
      if (e.key === "profileData") applyProfileFromStorage();
    });

    // apply saved profile to header/avatar where present
    applyProfileFromStorage();
  });

  // read profile from localStorage and apply to header elements
  function applyProfileFromStorage() {
    const defaults = {
      name: "Lina Melinda",
      email: "lina@example.com",
      avatar: "img/Student.png",
    };
    let profile = defaults;
    try {
      const raw = localStorage.getItem("profileData");
      if (raw) profile = Object.assign({}, defaults, JSON.parse(raw));
    } catch (e) {
      /* ignore */
    }

    // update simple header widgets
    const nameEls = document.querySelectorAll(".user-profile .user-name");
    nameEls.forEach((el) => {
      el.textContent = profile.name || defaults.name;
    });

    const avatarImgs = document.querySelectorAll(
      ".user-profile .user-avatar img"
    );
    avatarImgs.forEach((img) => {
      img.src = profile.avatar || defaults.avatar;
      img.alt = profile.name || defaults.name;
    });

    // dashboard specific dropdown/profile areas
    const dashboardName = document.querySelector("#userProfile .user-name");
    if (dashboardName)
      dashboardName.textContent = profile.name || defaults.name;
    const dashboardAvatar = document.querySelector(
      "#userProfile .user-avatar img"
    );
    if (dashboardAvatar) {
      dashboardAvatar.src = profile.avatar || defaults.avatar;
      dashboardAvatar.alt = profile.name || defaults.name;
    }

    const dropdownAvatar = document.querySelector(
      "#profileDropdown .dropdown-avatar"
    );
    if (dropdownAvatar) {
      dropdownAvatar.src = profile.avatar || defaults.avatar;
      dropdownAvatar.alt = profile.name || defaults.name;
    }
    const dropdownName = document.querySelector(
      "#profileDropdown .profile-name"
    );
    if (dropdownName) dropdownName.textContent = profile.name || defaults.name;
    const dropdownEmail = document.querySelector(
      "#profileDropdown .profile-email"
    );
    if (dropdownEmail)
      dropdownEmail.textContent = profile.email || defaults.email;
  }

  window.setTheme = setTheme;
  window.getTheme = function () {
    try {
      return localStorage.getItem("theme") || "light";
    } catch (e) {
      return "light";
    }
  };
})();
