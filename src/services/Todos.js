import API from './API.js';

export async function loadTodos() {
  app.store.todosList = await API.fetchTodos();
}

export function loadComponents() {
  const main = document.querySelector('main');
  const todoPage = document.createElement('todo-page');

  main.appendChild(todoPage);
}

export async function getTodo(id) {
  if (app.store.todosList === null) {
    await loadTodos();
  }

  for (let todo of app.store.todosList) {
    if (todo.id === id) return todo;
  }

  return null;
}

export async function editTodo(id) {}

export async function deleteTodo(id) {}
