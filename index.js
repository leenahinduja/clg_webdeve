const btn = document.querySelector("#btn");
const ip = document.querySelector("#ip");
const list = document.querySelector("#list");

btn.addEventListener("click", () => {
    let task = ip.value.trim();
    if (task === "") return;

    let li = document.createElement("li");
    li.textContent = task;

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => {
        let newTask = prompt("Edit your task:", li.firstChild.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            li.firstChild.textContent = newTask.trim();
        }
    });

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete-btn");
    delBtn.addEventListener("click", () => {
        list.removeChild(li);
    });

    let buttonContainer = document.createElement("span");
    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(delBtn);

    li.appendChild(buttonContainer);
    list.appendChild(li);

    ip.value = "";
});

