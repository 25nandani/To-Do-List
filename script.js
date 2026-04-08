const input = document.getElementById("input");
const button = document.getElementById("task");
const list = document.getElementById("list");


button.addEventListener("click", () => {
    if (input.value =='') {
        alert("Enter Task!");
    }
    else {
        let newTask = document.createElement("li");
        newTask.innerText = input.value;
        list.appendChild(newTask);
        let btn = document.createElement("button");
        btn.innerHTML = "\u2715";
        btn.classList.add("delete-btn");
        newTask.appendChild(btn);
        btn.addEventListener("click", () => {
            newTask.remove();
        });
        // let edit = document.createElement("span");
        // edit.innerHTML = "\u270F";
        // newTask.prepend(edit);

        // edit.addEventListener("click", () => {
        //     let newInput = input.value;
        //     newTask.replaceChild(newInput);
        // });

        //complete Marked button
        let complete = document.createElement("button");
        complete.innerHTML = "\u2713";
        complete.classList.add("complete-btn");
        newTask.prepend(complete);
        complete.addEventListener("click", () => {
            newTask.classList.toggle("completed");
        
        });

       console.log(input.value); 
    }
    
})