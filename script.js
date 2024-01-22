const loginButton = document.getElementById("login-button");
const loginDiv = document.getElementById("login");
const closing = document.getElementById("closing");
const loginInput = document.getElementById("login-input-1");

loginButton.addEventListener("click", function () {
  loginDiv.style.display = "flex";
});
closing.addEventListener("click", () => {
  loginDiv.style.display = "none";
});
