const userName = document.getElementById("username");
const password = document.getElementById("password");
const tel = document.getElementById("tel");
const form = document.querySelector("form");

document.getElementById("signup").addEventListener("click", (e) => {
  e.preventDefault();

  if (!userName.value || !password.value || !tel.value) {
    alert("Fill the required inputs");
  } else {
    let userData = JSON.parse(localStorage.getItem("payload")) || [];
    let duplicate = userData.find((item) => item.userName == userName.value);
    if (duplicate) {
      alert("Username already in use");
    } else {
      const payload = {
        userName: userName.value,
        password: password.value,
        tel: tel.value,
      };

      localStorage.setItem("payload", JSON.stringify([...userData, payload]));
      form.reset();
      window.location.href = "/login.html";
    }
  }
});
