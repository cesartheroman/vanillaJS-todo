import API from './API.js';

export async function loadData() {
  app.store.todosList = await API.fetchTodos();
}

export async function loadComponents() {
  const cache = document.querySelector('main');
  const todoPage = document.createElement('todo-page');
  // const todoInput = document.createElement('todo-input');
  // const todoItem = document.createElement('todo-item');

  cache.innerHTML = '';
  cache.appendChild(todoPage);

  window.scrollX = 0;
  window.scrollY = 0;
}

export async function getTodoById(id) {}
