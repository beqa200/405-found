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
const toggleButton = document.getElementById("toggleButton");
let arrForBtn = [];

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
  validateAuthorInputAndStyle();
}
console.log(isValidAuthor);

if (localStorage.getItem("title")) {
  titleInput.value = localStorage.getItem("title");
  validateTitleInputAndStyle();
}
if (localStorage.getItem("describe")) {
  describe.value = localStorage.getItem("describe");
  validateDescribeInputAndStyle();
}
if (localStorage.getItem("date")) {
  dateInput.value = localStorage.getItem("date");
  validateDateInputAndStyle();
}
if (localStorage.getItem("email")) {
  validateEmailInputAndStyle();
  emailInput.value = localStorage.getItem("email");
}
if (localStorage.getItem("category")) {
  toggleButton.innerHTML = localStorage.getItem("category");
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
      });
    });

    fileInput.addEventListener("change", function (event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      let imageStr;
      reader.onload = function () {
        imageStr = reader.result;
        localStorage.setItem("imageLink", imageStr);
      };
      reader.readAsDataURL(file);
      imagesLinkDiv.style.display = "flex";
      isValidPhoto = true;
      console.log(isValidPhoto);
      console.log(fileInput.files);
      imagesLinkDiv.innerHTML += fileInput.files[0].name;
      box.style.display = "none";
      removeIcon = document.getElementById("remove-icon");
      removeIcon.addEventListener("click", function () {
        fileInput.value = "";
        isValidPhoto = false;
        imagesLinkDiv.style.display = "none";
        box.style.display = "flex";
      });
      updateSubmitButtonColor();
    });
  });
}
foo();

// inputs validation
function validateAuthorInputAndStyle() {
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
}
function validateTitleInputAndStyle() {
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
}

function validateDescribeInputAndStyle() {
  if (describe.value.length < 4) {
    errorMsgTxtArea.style.color = "#EA1919";
    describe.style.border = "";
  } else {
    errorMsgTxtArea.style.color = "#85858d";
    describe.style.border = "1px solid #14D81C";
    isValidDescr = true;
  }
}

function validateDateInputAndStyle() {
  if (dateInput.value) {
    dateInput.style.border = "1px solid #14D81C";
    isValidDate = true;
  } else {
    dateInput.style.border = "";
    isValidDate = false;
  }
}
function validateEmailInputAndStyle() {
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
}
//EventListener for inputs
authorInput.addEventListener("input", function () {
  validateAuthorInputAndStyle();
  localStorage.setItem("authorName", authorInput.value);
  updateSubmitButtonColor();
});
titleInput.addEventListener("input", function () {
  validateTitleInputAndStyle();
  localStorage.setItem("title", titleInput.value);
  updateSubmitButtonColor();
});

describe.addEventListener("input", () => {
  validateDescribeInputAndStyle();
  localStorage.setItem("describe", describe.value);
  updateSubmitButtonColor();
});

dateInput.addEventListener("input", () => {
  validateDateInputAndStyle();
  localStorage.setItem("date", dateInput.value);
  updateSubmitButtonColor();
});

emailInput.addEventListener("input", () => {
  validateEmailInputAndStyle();
  localStorage.setItem("email", emailInput.value);
  updateSubmitButtonColor();
});

function updateSubmitButtonColor() {
  if (
    isValidAuthor === true &&
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
updateSubmitButtonColor();

// buttons
async function buttons() {
  const response = await fetch(
    `https://george.pythonanywhere.com/api/categories/ `,
    {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  const categoryButtonsContainer = document.getElementById(
    "categoryButtonsContainer"
  );
  const bottomDiv = document.getElementById("bottomDiv");

  function toggleDiv() {
    bottomDiv.style.display =
      bottomDiv.style.display === "none" ? "flex" : "none";
  }
  bottomDiv.style.flexWrap = "wrap";

  //
  function addCategoryToToggle(categoryObj) {
    const addedCategory = document.createElement("button");
    addedCategory.textContent = categoryObj.title;
    addedCategory.style.backgroundColor = categoryObj.background_color;
    addedCategory.style.color = "white";
    addedCategory.style.padding = "0 36px 0 12px";
    addedCategory.style.borderRadius = " 12px";
    addedCategory.style.height = "32px";
    arrForBtn.push(localStorage.getItem("category"));
    console.log(localStorage.getItem("category"));
    //delete functionality
    const deleteButton = document.createElement("span");
    deleteButton.innerHTML = "X";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.position = "relative";
    deleteButton.style.left = "20px";

    addedCategory.appendChild(deleteButton);

    toggleButton.appendChild(addedCategory);

    localStorage.setItem("category", toggleButton.innerHTML);

    deleteButton.onclick = function () {
      toggleButton.removeChild(addedCategory);
      // Step 1: Retrieve the object from localStorage
      let storedObject = JSON.parse(localStorage.getItem("category")) || {};

      // Step 2: Get the keys of the object
      let objectKeys = Object.keys(storedObject);
      console.log(objectKeys);
      // Step 3: Check if the object has properties before removing the last one
      if (objectKeys.length > 0) {
        // Step 4: Remove the last property from the object
        let lastKey = objectKeys.pop();
        delete storedObject[lastKey];

        // Step 5: Update localStorage with the modified object
        localStorage.setItem("category", JSON.stringify(storedObject));
      } else {
        console.log("The object is already empty.");
      }
    };
  }
  data.forEach((categoryObj) => {
    const button = document.createElement("button");
    button.textContent = categoryObj.title;
    button.style.backgroundColor = categoryObj.background_color;
    button.style.color = "white";
    button.style.padding = "0 36px 0 12px";
    button.style.borderRadius = " 12px";
    button.style.height = "32px";

    button.onclick = function () {
      addCategoryToToggle(categoryObj);
    };

    categoryButtonsContainer.appendChild(button);
  });

  toggleButton.addEventListener("click", toggleDiv);
}
buttons();
console.log(arrForBtn);
async function uploadBlog() {
  const blogObj = {
    title: titleInput.value,
    author: authorInput.value,
    publish_date: dateInput.value,
    description: describe.value,
    image: localStorage.getItem("imageLink"),
    categories: arrForBtn,

    email: emailInput.value,
  };
  console.log(blogObj.image);

  const response = await fetch(
    "https://george.pythonanywhere.com/api/blogs/create/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(blogObj),
    }
  );
  console.log(localStorage.getItem("token"));
  if (!response.ok) {
    const error = await response.json();
    console.log("Error", error);
    return;
  }
  const data = await response.json();
  console.log(data);
}

submit.addEventListener("click", () => {
  uploadBlog();
});
