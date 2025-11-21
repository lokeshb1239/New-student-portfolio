// Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');

// Load tasks from localStorage
window.addEventListener('load', () => {
  const saved = JSON.parse(localStorage.getItem('tasks')) || [];
  saved.forEach(task => createTask(task.text, task.done));
});

// Add new task
addBtn.addEventListener('click', () => {
  const val = taskInput.value.trim();
  if (!val) return alert("Enter a task!");
  createTask(val, false);
  saveTasks();
  taskInput.value = '';
});

// Function to create a task
function createTask(text, done) {
  const li = document.createElement('li');
  li.textContent = text;
  if (done) li.classList.add('completed');

  // Toggle completion
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
    saveTasks();
  });

  // Delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = '❌';
  delBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
    saveTasks();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
}

// Save all tasks to localStorage
function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll('li').forEach(li => {
    tasks.push({
      text: li.firstChild.textContent,
      done: li.classList.contains('completed')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear all tasks
clearBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
  localStorage.removeItem('tasks');
});

// Back button redirect
const backBtn = document.getElementById('backBtn');
if (backBtn) {
  backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "../index.html"; // main portfolio page
  });
}
