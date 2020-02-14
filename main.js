// Function to add new item in the to do list
function newItem() {
  var item = document.getElementById("input").value;
  var ul = document.getElementById("list");
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  var li = document.createElement("li");
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(item));
  if (item === '') {
    alert("You must write something!");
  }
  else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("input").value = "";
  let removeTask = document.createElement("a");
  removeTask.textContent = " -Remove Task";
  removeTask.addEventListener("click", removeItem);
  ul.appendChild(li);
  li.appendChild(removeTask);

  document.getElementById("item").appendChild(li);
  input.value = "";

// Function to remove an item from the to do list
  function removeItem(e) {
    e.target.parentElement.removeChild(e.target);
  }
}
