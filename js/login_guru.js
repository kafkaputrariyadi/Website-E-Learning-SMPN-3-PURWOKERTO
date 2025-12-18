function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.getElementById("toggleIcon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // optionally show a success message and redirect to the teacher dashboard
  // you can remove the alert if not needed
  // alert("Login Berhasil!");

  window.location.href = "home_guru.html";
});
