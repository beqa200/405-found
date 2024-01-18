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

console.log(first);

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

  selectFileText.addEventListener("click", function () {
    fileInput.click();
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
  for (let i = 0; i < authorInput.value.length; i++) {
    if (i <= 4) {
      first.style.color = "#EA1919";
    } else {
      first.style.color = "";
    }
  }
  if (!checkWhitespace() && authorInput.value.trim() !== "") {
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

titleInput.addEventListener("input", function ass() {
  for (let i = 0; i < titleInput.value.length; i++) {
    if (i <= 4) {
      fourth.style.color = "#EA1919";
    } else {
      fourth.style.color = "";
    }
  }
});
