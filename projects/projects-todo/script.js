// Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');

// Load tasks from localStorage
window.addEventListener('load', () => {
  const saved = JSON.parse(localStorage.getItem('tasks')) || [];
  saved.forEach(task => addTask(task));
});

// Add new task
addBtn.addEventListener('click', () => {
  const val = taskInput.value.trim();
  if(!val) return alert("Enter a task!");
  addTask(val);
  saveTasks();
  taskInput.value = '';
});

// Function to add task
function addTask(text){
  const li = document.createElement('li');
  li.textContent = text;

  // Click to mark completed
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

// Save tasks
function saveTasks(){
  const tasks = [];
  taskList.querySelectorAll('li').forEach(li => {
    tasks.push({text: li.firstChild.textContent, done: li.classList.contains('completed')});
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks with done status
function addTask(taskObj){
  let text, done=false;
  if(typeof taskObj === 'object'){text=taskObj.text; done=taskObj.done;}
  else text=taskObj;

  const li = document.createElement('li');
  li.textContent = text;
  if(done) li.classList.add('completed');

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
    saveTasks();
  });

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
// ----------------------
// Clear All Tasks
// ----------------------
clearBtn.addEventListener('click', () => {
  taskList.innerHTML = '';      // UI se sab tasks hatao
  localStorage.removeItem('tasks'); // storage se bhi delete karo
});
