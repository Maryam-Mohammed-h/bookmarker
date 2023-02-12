var bookmarkNameInput = document.getElementById("bookMarkName");
var bookmarkUrlInput = document.getElementById("bookMarkUrl");

var bookmarksTable = document.getElementById("bookmarksTable");
var addBtn = document.getElementById("addBookmarkBtn");

var bookmarksContainer = [];

if (localStorage.getItem("bookmarks") != null) {
  bookmarksContainer = JSON.parse(localStorage.getItem("bookmarks"));
  displayProducts(bookmarksContainer);
}
function addBookmark() {
  var bookmark = {
    bookmarkName: bookmarkNameInput.value,
    bookmarkUrl: bookmarkUrlInput.value,
  };
  bookmarksContainer.push(bookmark);

  localStorage.setItem("bookmarks", JSON.stringify(bookmarksContainer));
  displayProducts(bookmarksContainer);
  clearForm();
}

function displayProducts(bookmarksArray) {
  var content = "";
  for (var i = 0; i < bookmarksArray.length; i++) {
    content += `<tr>
    <td>${bookmarksArray[i].bookmarkName}</td>
    <td><button class='btn btn-primary'><a href="https://${bookmarksArray[i].bookmarkUrl}">Visit</a></button></td>
    <td><button class='btn btn-danger' onclick="deleteBookmark(${i});">Delete</button></td>
    </tr>`;
  }
  bookmarksTable.innerHTML = content;
}
function clearForm() {
  bookmarkNameInput.value = "";
  bookmarkUrlInput.value = "";
}
function deleteBookmark(bookMarkIndex) {
  bookmarksContainer.splice(bookMarkIndex, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarksContainer));
  displayProducts(bookmarksContainer);
}
