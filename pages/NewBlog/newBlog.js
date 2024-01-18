const box = document.getElementById("box");
const selectFileText = document.getElementById("selectFileText");
const fileInput = document.getElementById("upload-image-input");
const imagesLinkDiv = document.getElementById("div-for-file");
const authorInput = document.getElementById("author-name-input");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("least-4");
const titleInput = document.getElementById("title-input");
const describe = document.getElementById("describe");
const errorMsgTxtArea = document.getElementById("min-four-character");
const emailInput = document.getElementById("email-input");
const errorMsgEmail = document.getElementById("email-error-msg");

console.log(errorMsgEmail);

//  image upload functionality

document.addEventListener("DOMContentLoaded", function () {
  box.addEventListener("dragover", function (e) {
    e.preventDefault();
    box.classList.add("highlight");
  });

  box.addEventListener("dragleave", function () {
    box.classList.remove("highlight");
  });

  box.addEventListener("drop", function (e) {
    e.preventDefault();

    box.classList.remove("highlight");

    let files = e.dataTransfer.files;
    console.log(files);
    imagesLinkDiv.style.display = "flex";
    imagesLinkDiv.innerHTML += files[0].name;
    box.style.display = "none";
  });

  fileInput.addEventListener("change", function () {
    imagesLinkDiv.style.display = "flex";
    imagesLinkDiv.innerHTML += fileInput.files[0].name;
    box.style.display = "none";
  });
});

// inputs validation

function checkWhitespace() {
  return /\s/.test(authorInput.value);
}
authorInput.addEventListener("input", function () {
  const inputWithoutSpaces = authorInput.value.replace(/\s/g, "");

  for (let i = 0; i < inputWithoutSpaces.length; i++) {
    if (i <= 4) {
      first.style.color = "#EA1919";
    } else {
      first.style.color = "";
    }
  }
  if (authorInput.value.trim().split(" ").length < 2) {
    second.style.color = "#EA1919";
  } else {
    second.style.color = "";
  }
  let georgianRegex = /^[\u10A0-\u10EA\s]+$/;

  if (georgianRegex.test(authorInput.value)) {
    third.style.color = "";
  } else {
    third.style.color = "#EA1919";
  }
});

titleInput.addEventListener("input", function () {
  for (let i = 0; i < titleInput.value.length; i++) {
    if (i <= 4) {
      fourth.style.color = "#EA1919";
    } else {
      fourth.style.color = "";
    }
  }
});

describe.addEventListener("input", () => {
  if (describe.value.length < 4) {
    errorMsgTxtArea.style.color = "#EA1919";
  } else {
    errorMsgTxtArea.style.color = "#85858d";
  }
});

//email validation 

emailInput.addEventListener("input", () => {
  const emailRegex = /^[^\s@]+@redberry\.ge$/;
  if (emailRegex.test(emailInput.value)) {
    emailInput.style.border = "1px solid #14D81C";
    errorMsgEmail.style.display = "none";
  } else {
    errorMsgEmail.style.display = "flex";
    emailInput.style.border = "";
  }
});
