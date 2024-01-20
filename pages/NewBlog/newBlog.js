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
const dateInput = document.getElementById("date-input");
let removeIcon = document.getElementById("remove-icon");
const submit = document.getElementById("submit");
let isValidAuthor = false;
let isValidTitle = false;
let isValidMail = false;
let isValidDescr = false;
let isValidCategory = false;
let isValidDate = false;
let isValidPhoto = 0;

//localstorage for inputs
if (localStorage.getItem("authorName")) {
  authorInput.value = localStorage.getItem("authorName");
}

if (localStorage.getItem("title")) {
  titleInput.value = localStorage.getItem("title");
}
if (localStorage.getItem("describe")) {
  describe.value = localStorage.getItem("describe");
}
if (localStorage.getItem("date")) {
  dateInput.value = localStorage.getItem("date");
}
if (localStorage.getItem("email")) {
  emailInput.value = localStorage.getItem("email");
}

//  image upload functionality
function foo() {
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
      isValidPhoto = true;
      imagesLinkDiv.innerHTML += files[0].name;
      box.style.display = "none";
      removeIcon.addEventListener("click", function () {
        fileInput.value = "";
        isValidPhoto = false;
        imagesLinkDiv.style.display = "none";
        box.style.display = "flex";
        updateSubmitButtonColor();
      });
    });

    fileInput.addEventListener("change", function () {
      imagesLinkDiv.style.display = "flex";
      isValidPhoto = true;
      console.log(isValidPhoto);

      imagesLinkDiv.innerHTML += fileInput.files[0].name;
      box.style.display = "none";
      removeIcon = document.getElementById("remove-icon");
      removeIcon.addEventListener("click", function () {
        fileInput.value = "";
        isValidPhoto = false;
        imagesLinkDiv.style.display = "none";
        box.style.display = "flex";
        updateSubmitButtonColor();
      });
      updateSubmitButtonColor();
    });
  });
}
foo();

// inputs validation

function checkWhitespace() {
  return /\s/.test(authorInput.value);
}
authorInput.addEventListener("input", function () {
  localStorage.setItem("authorName", authorInput.value);
  const inputWithoutSpaces = authorInput.value.replace(/\s/g, "");
  if (inputWithoutSpaces.length <= 3) {
    first.style.color = "#EA1919";
  } else {
    first.style.color = "";
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

  if (
    inputWithoutSpaces.length > 3 &&
    authorInput.value.trim().split(" ").length > 1 &&
    georgianRegex.test(authorInput.value)
  ) {
    isValidAuthor = true;
    authorInput.style.border = "1px solid #14D81C";
  } else {
    authorInput.style.border = "";
    isValidAuthor = false;
  }
  localStorage.setItem("authorName", authorInput.value);

  updateSubmitButtonColor();
});

titleInput.addEventListener("input", function () {
  localStorage.setItem("title", titleInput.value);
  const inputWithoutSpacesTitle = titleInput.value.replace(/\s/g, "");
  if (inputWithoutSpacesTitle.length < 4) {
    fourth.style.color = "#EA1919";
    titleInput.style.border = "";
    isValidTitle = false;
  } else {
    fourth.style.color = "";
    titleInput.style.border = "1px solid #14D81C";
    isValidTitle = true;
  }
  updateSubmitButtonColor();
});

describe.addEventListener("input", () => {
  localStorage.setItem("describe", describe.value);
  if (describe.value.length < 4) {
    errorMsgTxtArea.style.color = "#EA1919";
    describe.style.border = "";
  } else {
    errorMsgTxtArea.style.color = "#85858d";
    describe.style.border = "1px solid #14D81C";
    isValidDescr = true;
  }
  updateSubmitButtonColor();
});

dateInput.addEventListener("input", () => {
  localStorage.setItem("date", dateInput.value);
  if (dateInput.value) {
    dateInput.style.border = "1px solid #14D81C";
    isValidDate = true;
  } else {
    dateInput.style.border = "";
    isValidDate = false;
  }
  updateSubmitButtonColor();
});

//email validation

emailInput.addEventListener("input", () => {
  localStorage.setItem("email", emailInput.value);

  const emailRegex = /^[^\s@]+@redberry\.ge$/;
  if (emailRegex.test(emailInput.value)) {
    emailInput.style.border = "1px solid #14D81C";
    errorMsgEmail.style.display = "none";
    isValidMail = true;
  } else {
    errorMsgEmail.style.display = "flex";
    emailInput.style.border = "";
    isValidMail = false;
  }
  updateSubmitButtonColor();
});
let categories = ["მარკეტი", "აპლიკაცია", "კვლევა"];

function toggleDiv() {
  let bottomDiv = document.getElementById("bottomDiv");
  let categoryButtonsContainer = document.getElementById(
    "categoryButtonsContainer"
  );

  if (bottomDiv.style.display === "none") {
    bottomDiv.style.display = "block";

    // Create category buttons
    categories.forEach(function (category) {
      let button = document.createElement("div");
      button.className = "categoryButton";
      button.textContent = category;
      button.onclick = function () {
        addCategoryToToggle(category);
      };

      // Append button to the container
      categoryButtonsContainer.appendChild(button);
    });
  } else {
    bottomDiv.style.display = "none";
    categoryButtonsContainer.innerHTML = "";
  }
}

function addCategoryToToggle(category) {
  let toggleButton = document.getElementById("toggleButton");
  let addedCategory = document.createElement("button");
  addedCategory.className = "categoryButton";
  addedCategory.textContent = category;

  // Add a delete button to each added category
  let deleteButton = document.createElement("span");
  deleteButton.innerHTML = "x";
  deleteButton.style.cursor = "pointer";
  deleteButton.onclick = function () {
    toggleButton.removeChild(addedCategory);
  };

  addedCategory.appendChild(deleteButton);
  toggleButton.appendChild(addedCategory);
  if (addedCategory.value.length > 1) {
    toggleButton.style.border = "";
    isValidCategory = false;
  } else {
    toggleButton.style.border = "1px solid #14D81C";
    isValidCategory = true;
  }
  if (localStorage.getItem("category")) {
    toggleButton.textContent = localStorage.getItem("category");
  }
  toggleButton.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("category", toggleButton.textContent);
  });
  updateSubmitButtonColor();
}

function updateSubmitButtonColor() {
  if (
    isValidAuthor &&
    isValidTitle &&
    isValidDescr &&
    isValidCategory &&
    isValidDate &&
    isValidPhoto &&
    isValidMail
  ) {
    submit.style.backgroundColor = "#4721DD";
    submit.style.cursor = "pointer";
  } else {
    submit.style.backgroundColor = "";
  }
  console.log(isValidDate, isValidCategory);
}
