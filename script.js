const loginButton = document.getElementById("login-button");
console.log(loginButton.textContent);
const loginDiv = document.getElementById("login");
const closing = document.getElementById("closing");
const closingTwo = document.querySelector(".closing");
const loginInput = document.getElementById("email-input-1");
const loginBtn = document.getElementById("login-btn");
const body = document.getElementsByTagName("body")[0];
const fullScreen = document.getElementById("fullscreen");
const errorDiv = document.getElementById("errorDiv");
const addBlogBtn = document.getElementById("add-blog");
const successfulAuth = document.getElementById("successful-auth");
const secondLoginBtn = document.getElementById("second-login-button");
// console.log(closing);
let token;
if (localStorage.getItem("token")) {
  token = localStorage.getItem("token");
  foo();
}

console.log(token);

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
  foo();
  successfulAuth.style.display = "flex";
}
function foo() {
  if (token !== "undefined") {
    console.log(token);

    // localStorage.setItem("token", token);
    loginDiv.style.display = "none";
    errorDiv.style.display = "none";
    addBlogBtn.style.display = "flex";
    loginButton.style.display = "none";
    loginButton.replaceChild = addBlogBtn;
  } else {
    errorDiv.style.display = "flex";
    addBlogBtn.replaceChild = loginButton;
  }
}
// fetchData();
loginBtn.addEventListener("click", () => fetchData());
secondLoginBtn.addEventListener("click", () => {
  successfulAuth.style.display = "none";
  fullScreen.style.display = "none";
});

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
closingTwo.addEventListener("click", () => {
  successfulAuth.style.display = "none";
  fullScreen.style.display = "none";
});

// async function postData() {
//   const response = await fetch(
//     " https://api.blog.redberryinternship.ge/api/blogs",
//     {
//       method: "POST",
//       headers: {
//         accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: "tamogagniashvili@redberry.ge",
//       }),
//     }
//   );

//   const data = await response.json();
//   console.log(data);
//   let token = data.token;
//   localStorage.setItem("token", token);
//   await uploadBlog();
// }

// // ბლოგების წამოღება
// async function fetchData(){
//     const response =  await fecth("https://api.blog.redberryinternship.ge/api/blogs");
//     const data = await response.json();

//     console.log(data);
// }

// fetchData();
