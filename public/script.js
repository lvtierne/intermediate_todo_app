// Select DOM elements
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const addTodoBtn = document.getElementById('add-todo');

// Function to render a single todo item
function renderTodoItem(todo) {
  const li = document.createElement('li');
  li.textContent = todo.text;

  // Only add 'completed' class if the task is completed
  if (todo.completed) {
    li.classList.add('completed');
  }

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  // Add event listener to delete the todo
  deleteBtn.addEventListener('click', () => deleteTodo(todo.id, li));

  // Add event listener to mark task as completed
  li.addEventListener('click', () => toggleComplete(todo, li));

  // Append delete button to the list item
  li.appendChild(deleteBtn);

  // Append the list item to the todo list
  todoList.appendChild(li);
}

// Function to add a new todo
function addTodo() {
  const newTodo = {
    id: Date.now().toString(),  // Generate a unique ID
    text: todoInput.value,      // Get the value from the input field
    completed: false,           // Default: task is not completed
  };

  if (todoInput.value.trim() === '') {
    alert('Please enter a task');
    return;
  }

  // Send new todo to the server
  fetch('/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTodo),
  })
  .then(response => response.json())
  .then(todo => {
    renderTodoItem(todo);    // Render the new task in the DOM
    todoInput.value = '';    // Clear the input field
  })
  .catch(error => {
    console.error('Error adding todo:', error);
  });
}

// Function to delete a todo
function deleteTodo(id, liElement) {
  fetch(`/api/todos/${id}`, {
    method: 'DELETE',
  })
  .then(() => {
    liElement.remove();   // Remove the todo item from the DOM
  })
  .catch(error => {
    console.error('Error deleting todo:', error);
  });
}

// Function to toggle a task's completion status
function toggleComplete(todo, liElement) {
  todo.completed = !todo.completed;

  // Send updated todo to the server
  fetch(`/api/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })
  .then(() => {
    liElement.classList.toggle('completed');  // Update UI: toggle the completed class
  })
  .catch(error => {
    console.error('Error toggling todo completion:', error);
  });
}

// Fetch all todos from the server when the page loads
function fetchTodos() {
  fetch('/api/todos')
    .then(response => response.json())
    .then(todos => {
      todos.forEach(todo => renderTodoItem(todo));  // Render each todo
    })
    .catch(error => {
      console.error('Error fetching todos:', error);
    });
}

// Event listener for adding a new todo
addTodoBtn.addEventListener('click', addTodo);

// Event listener for adding a new todo on "Enter" key press
todoInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      addTodo();
    }
  });

// Initial call to load all existing todos when the page loads
fetchTodos();
