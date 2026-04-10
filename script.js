const input = document.getElementById("input");
const button = document.getElementById("task");
const list = document.getElementById("list");

button.addEventListener("click", () => {
  if (input.value === "") {
    alert("Enter Task!");
    return;
  }
  let newTask = document.createElement("li");
  let taskText = document.createTextNode(input.value);
  newTask.appendChild(taskText);
  list.appendChild(newTask);

  //delete functionality
  let btn = document.createElement("button");
  btn.innerHTML = "\u2715";
  btn.classList.add("delete-btn");
  newTask.appendChild(btn);

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    newTask.remove();
  });

  //edit functionality
  newTask.addEventListener("click", () => {
    input.value = taskText.nodeValue;

    input.onkeydown = (e) => {
      if (e.key === "Enter") {
        taskText.nodeValue = input.value;
        input.value = "";
      }
    };
  });
  //complete Marked functionality
  let complete = document.createElement("button");
  complete.innerHTML = "\u2713";
  complete.classList.add("complete-btn");
  newTask.prepend(complete);

  complete.addEventListener("click", (e) => {
    e.stopPropagation();
    newTask.classList.toggle("completed");
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