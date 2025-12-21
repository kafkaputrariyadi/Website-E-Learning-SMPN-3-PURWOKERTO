document.addEventListener("DOMContentLoaded", function () {
  const userProfile = document.getElementById("userProfile");
  const profileDropdown = document.getElementById("profileDropdown");
  if (!userProfile || !profileDropdown) return;

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

  // Close when clicking a link inside dropdown
  profileDropdown.addEventListener("click", function (e) {
    const a = e.target.closest("a");
    if (a) {
      profileDropdown.classList.remove("show");
      userProfile.setAttribute("aria-expanded", "false");
      profileDropdown.setAttribute("aria-hidden", "true");
    }
  });
});
