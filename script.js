// DOM references
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskContainer = document.getElementById("taskContainer");

// Event listener for form submission
taskForm.addEventListener("submit", function(e) {
  e.preventDefault();
  // TODO: Add logic to create a new task element and append to DOM

    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    addTask(taskText);
    taskInput.value = "";
    saveTasks();
});

// Function to add a task
function addTask(taskText,completed = false) {
  // TODO: Create <li> element with taskText
  // TODO: Add "Complete" and "Delete" buttons
  // TODO: Append to taskContainer
  

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    li.appendChild(span);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    if (completed) {
        li.classList.add("completed");
    }

    completeButton.addEventListener("click", function() {
        completeTask(li);
    });

    deleteButton.addEventListener("click", function() {
        deleteTask(li);
    });

    taskContainer.appendChild(li);
}

// Function to mark task as complete
function completeTask(taskElement) {
  // TODO: Toggle "completed" class
      taskElement.classList.toggle("completed");
    saveTasks();

}

// Function to delete task
function deleteTask(taskElement) {
  // TODO: Remove taskElement from DOM
      taskElement.remove();
    saveTasks();
}

// Function to save tasks to localStorage
function saveTasks() {
  // TODO: Serialize tasks and save
   const tasks = [];

    taskContainer.querySelectorAll("li").forEach(function(task) {
        tasks.push({
            text: task.querySelector("span").textContent,
            completed: task.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasks() {
  // TODO: Retrieve tasks and render
    const savedTasks = localStorage.getItem("tasks");

    if (!savedTasks) return;

    const tasks = JSON.parse(savedTasks);

    tasks.forEach(function(task) {
        addTask(task.text, task.completed);
    });
}

// Initialize app
window.onload = function() {
  loadTasks();
};
