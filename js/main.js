const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("todoList");

btn.addEventListener("click", function(e){
    e.preventDefault();
    const value = input.value.trim();
    if(!value) return;

    const li = document.createElement("li");
    li.classList.add("todo-item");

    const span = document.createElement("span");
    span.classList.add("todo-text");
    span.textContent = value;

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    editBtn.addEventListener("click", function(e){
        e.preventDefault();
        const newText = prompt("nimadir qo'shing", span.textContent);
        if (newText && newText.trim() !== "") {
            span.textContent = newText;
        }
    });

    deleteBtn.addEventListener("click", function(){
        li.remove();
    });

    input.value = "";
});
