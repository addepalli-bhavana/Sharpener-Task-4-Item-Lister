let headerTitle = document.getElementsByClassName("header-title")[0];
let header = document.getElementsByClassName("header")[0];
let listItems = document.getElementsByClassName("list-group-item");
let submitBtn = document.getElementsByClassName("submit-btn")[0];
let inputItem = document.getElementsByClassName("input-item")[0];
let items = document.getElementById("items");
let delBtns = document.getElementsByClassName("fa-trash");
let editBtns = document.getElementsByClassName("fa-edit");
let filter = document.getElementsByClassName("filter")[0];
let inputDescription = document.getElementsByClassName("input-description")[0];

// Add functionality
submitBtn.addEventListener("click", addItem);
function addItem(e) {
  e.preventDefault();
  if (inputItem.value == "") {
    alert("Please enter the item name to add!");
  } else {
    item = document.createElement("li");
    item.className = "list-group-item";
    let divItem = document.createElement("div");
    divItem.textContent =
      inputDescription.value != ""
        ? inputItem.value + " :" + inputDescription.value
        : inputItem.value;
    item.append(divItem);

    let delBtn = document.createElement("i");
    delBtn.className = "fa fa-trash";
    delBtn.addEventListener("click", delItem);
    let editBtn = document.createElement("i");
    editBtn.className = "fa fa-edit";
    editBtn.addEventListener("click", editItem);
    let divTag = document.createElement("div");

    divTag.append(editBtn);
    divTag.append(delBtn);
    item.append(divTag);
    items.append(item);
    inputItem.value = "";
    inputDescription.value = "";
    listItems = document.getElementsByClassName("list-group-item");
    document.getElementsByClassName("empty")[0].innerText = "";
  }
}

// delete functionality
for (let i = 0; i < delBtns.length; i++) {
  delBtns[i].addEventListener("click", delItem);
}
function delItem(e) {
  if (e.target.classList.contains("fa-trash")) {
    e.preventDefault();
    e.target.parentElement.parentElement.remove();
  }
  if (listItems.length == 0) {
    document.getElementsByClassName("empty")[0].textContent =
      "List is Empty....!!";
  }
}

// Edit Functionality
for (let i = 0; i < editBtns.length; i++) {
  editBtns[i].addEventListener("click", editItem);
}
function editItem(e) {
  if (e.target.classList.contains("fa-edit")) {
    let [name, description] =
      e.target.parentElement.parentElement.textContent.split(":");
    inputItem.value = name;
    inputDescription.value = description ?? "___";
    e.target.parentElement.parentElement.remove();
  }
}

// filter functionality
filter.addEventListener("keyup", filterItems);
function filterItems(e) {
    
  for (let i = 0; i < listItems.length; i++) {
    if (
      listItems[i].innerText
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    ) {
      listItems[i].style.display = "block";
    } else {
      listItems[i].style.display = "none";
    }
  }
}
