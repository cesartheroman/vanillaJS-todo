import { fetchTodos } from './API.js';

export async function setTodos() {
  app.store.todosList = await fetchTodos();
}

export function loadTodoPage() {
  const main = document.querySelector('main');
  const todoPage = document.createElement('todo-page');

  main.appendChild(todoPage);
}

export function getTodo(id) {
  const [todo] = app.store.todosList.filter((todo) => todo.id === id);
  return todo ? todo : null;
}

export function editTodo(id, editDetails) {
  const todo = getTodo(id, app.store.todosList);

  if (!todo) return null;

  const editedTodo = { ...todo, ...editDetails };

  return editedTodo;
}

export function deleteTodo(id) {
  const todo = getTodo(id);

  if (!todo) return null;

  const restOfTodos = app.store.todosList.filter((todo) => todo.id !== id);

  return restOfTodos;
}
