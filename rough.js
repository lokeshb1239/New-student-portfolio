// Add task
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return alert('Please enter a task');
  tasks.push({ text, done: false, createdAt: Date.now() });
  input.value = '';
  saveTasks();
  render();
  saveTasks();

});

// To-Do App script.js
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');
const clearDoneBtn = document.getElementById('clear-done');
const clearAllBtn = document.getElementById('clear-all');

let tasks = [];

// Load tasks from localStorage
function loadTasks() {
  const raw = localStorage.getItem('todo_tasks');
  tasks = raw ? JSON.parse(raw) : [];
  render();
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem('todo_tasks', JSON.stringify(tasks));
}

// Render tasks list
function render() {
  list.innerHTML = '';
  if (tasks.length === 0) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.textContent = 'No tasks yet. Add your first task!';
    list.appendChild(li);
    return;
  }
  tasks.forEach((t, idx) => {
    const li = document.createElement('li');
    li.className = 'task-item' + (t.done ? ' completed' : '');
    li.dataset.index = idx;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = t.done;
    checkbox.addEventListener('change', () => toggleDone(idx));

    const span = document.createElement('span');
    span.textContent = t.text;

    const doneBtn = document.createElement('button');
    doneBtn.className = 'done-btn';
    doneBtn.textContent = t.done ? 'Undone' : 'Done';
    doneBtn.addEventListener('click', () => toggleDone(idx));

    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', () => deleteTask(idx));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(doneBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

// Add task
function addTask(taskValue) {
  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskValue;
  li.appendChild(span);

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.onclick = function () {
    li.remove();
    saveTasks();
  };
  li.appendChild(delBtn);

  taskList.appendChild(li);
  saveTasks();
}


// Toggle done
function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  render();
}

// Delete a task
function deleteTask(index) {
  if (!confirm('Delete this task?')) return;
  tasks.splice(index, 1);
  saveTasks();
  render();
  saveTasks();

}

// Clear completed
clearDoneBtn.addEventListener('click', () => {
  tasks = tasks.filter(t => !t.done);
  saveTasks();
  render();
});

// Clear all
clearAllBtn.addEventListener('click', () => {
  if (!confirm('Clear all tasks?')) return;
  tasks = [];
  saveTasks();
  render();
});

// Initial load
loadTasks();
// ----- Save Tasks in localStorage -----

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li span").forEach((item) => {
    tasks.push(item.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ----- Load Tasks when page opens -----
function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => addTask(task));
}

window.addEventListener("load", loadTasks);
// Smooth scroll effect for navbar links
document.querySelectorAll('.navbar nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple button click message
document.querySelector('.cta-btn').addEventListener('click', () => {
  alert('Thank you for your interest! We will contact you soon 😊');
});
// Reveal sections on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.about, .contact').forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('show');
    }
  });
});
