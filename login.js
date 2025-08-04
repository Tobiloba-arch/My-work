const userName = document.querySelector(".card .username");
const password = document.querySelector(".card .second-password");
const form = document.querySelector("form");

document.getElementById("login").addEventListener("click", (e) => {
  e.preventDefault();

  let userData = JSON.parse(localStorage.getItem("payload"));
  let user = userData.find(
    (item) => item.userName == userName.value && item.password == password.value
  );

  if (user) {
    console.log(user);
    alert("logged in");
  } else {
    alert("Account doesn't exist");
  }

  form.reset();
  window.location.href = "/main.html";
});
