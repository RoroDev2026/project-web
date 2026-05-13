function addTask() {
    const input = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (input.value.trim() === "") {
        alert("Please write something! ✨");
        return;
    }

    const li = document.createElement('li');

    li.innerHTML = `
        <span class="task-text">${input.value}</span>
        <div>
            <button class="check-btn" onclick="toggleComplete(this)">✔</button>
            <button class="remove-btn" onclick="removeTask(this)">Delete</button>
        </div>
    `

    taskList.appendChild(li);
    input.value = ""; 
}

function toggleComplete(button) {
    const listItem = button.parentElement.parentElement;
    listItem.classList.toggle('completed');
}

function removeTask(button) {
    const listItem = button.parentElement.parentElement;
    listItem.remove();
}