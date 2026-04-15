const input = document.getElementById("input");
const button = document.getElementById("task");
const list = document.getElementById("list");

let editTask=null
button.addEventListener("click", () => {
  if (input.value === "") {
    alert("Enter Task!");
    return;
  }
  if (editTask != null) {
    let editbutton=editTask.querySelector("span").textContent=input.value;
    editTask = null;
    input.value = "";
    button.innerHTML = "Add";
    return;
  }
  let newTask = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = input.value;
  newTask.appendChild(span);
  list.appendChild(newTask);

  //complete Marked functionality
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("check-box");

  newTask.prepend(checkbox);

  checkbox.addEventListener("change", (e) => {
    e.stopPropagation();

    if (checkbox.checked) {
      newTask.classList.add("completed");
    } else {
      newTask.classList.remove("completed");
    }
  });
  input.value = "";

  //delete functionality
  let btn = document.createElement("button");
  btn.innerHTML = "delete";
  btn.classList.add("delete-btn");
  newTask.appendChild(btn);

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    newTask.remove();
  });

  //edit functionality
  let edit = document.createElement("button");
  edit.innerHTML = "edit";
  edit.classList.add("edit-btn");
  newTask.appendChild(edit);
  edit.addEventListener("click", () => {
    input.value = span.textContent;
    editTask = newTask;
    button.innerHTML = "update";
  });
  input.value = "";
});

function toggleTheme() {
  document.body.classList.toggle("dark");
}

const mode = document.getElementById("mode");

mode.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    mode.innerHTML = "🌙";
  }
  else {
      mode.innerHTML = "☀️";
  }
});
