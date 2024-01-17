const box = document.getElementById("box");
const selectFileText = document.getElementById("selectFileText");
const fileInput = document.getElementById("upload-image-input");
const imagesLinkDiv = document.getElementById("div-for-file");
const authorInput = document.getElementById("author-name-input");

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
    imagesLinkDiv.innerHTML = files[0].name;
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
