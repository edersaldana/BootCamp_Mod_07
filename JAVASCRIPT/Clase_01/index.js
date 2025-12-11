const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();
    if(text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    list.appendChild(li);
    input.value = "";
    input.focus();
});

list.addEventListener("click", (event) => {
    if(event.target.tagName === "LI") {
        event.target.remove();
    }
});