const loginButton = document.getElementById("login-button");
const loginDiv = document.getElementById("login");
const closing = document.getElementById("closing");
const loginInput = document.getElementById("email-input-1");
const loginBtn = document.getElementById("login-btn");
const body = document.getElementsByTagName("body")[0];
const fullScreen = document.getElementById("fullscreen");
const errorDiv = document.getElementById("errorDiv");
let token;
loginInput.addEventListener("input", () => {
  loginInput.value;
});

async function fetchData() {
  const response = await fetch("https://george.pythonanywhere.com/api/login/", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: loginInput.value,
    }),
  });
  console.log(loginInput.value);
  const data = await response.json();
  token = data.token;
  console.log(token);
  localStorage.setItem("token", token);
  if (token) {
    loginDiv.style.display = "none";
    fullScreen.style.display = "none";
  } else {
    errorDiv.style.display = "flex";
  }
}
loginBtn.addEventListener("click", () => fetchData());

loginButton.addEventListener("click", function () {
  loginDiv.style.display = "flex";
  fullScreen.style.display = "block";
  fullScreen.style.backgroundColor = "#1A1A1F";
  fullScreen.style.opacity = "0.24";
  fullScreen.style.height = "120vh";
  fullScreen.style.width = "100%";
  fullScreen.style.position = "absolute";
});

closing.addEventListener("click", () => {
  loginDiv.style.display = "none";
  fullScreen.style.display = "none";
});
