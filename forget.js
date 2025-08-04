const userName = document.getElementById("username");
const password = document.getElementById("newpassword");
const confirmPass = document.getElementById("confirmpassword");
const showPassword = document.getElementById("show");
const form = document.querySelector("form");

document.getElementById("reset").addEventListener("click", (e) => {
  e.preventDefault();

  let userData = JSON.parse(localStorage.getItem("payload")) || [];

  if (password.value !== confirmPass.value) {
    alert("Password do not match");
  } else {
    if (userData) {
      let userinfo = userData.find((item) => item.userName == userName.value);
      if (!userData) {
        alert("Username not found");
      } else {
        userinfo.password = password.value;
        localStorage.setItem("payload", JSON.stringify(userData));
        alert("Password changed");
        window.location.href = "./index.html";
      }
    }
  }
});

showPassword.addEventListener("click", () => {
  if (password.type === "password" && confirmPass.type === "password") {
    password.type = "text";
    confirmPass.type == "text";
    showPassword.textContent = "Hide";
  } else {
    password.type = "password";
    confirmPass.type = "password";
    showPassword.textContent = "Show";
  }
});
