import { fetchTodos } from './API.js';

export async function setTodos(store) {
  store.todosList = await fetchTodos();
}

export function loadTodoPage() {
  const main = document.querySelector('main');
  const todoPage = document.createElement('todo-page');

  main.appendChild(todoPage);
}

export function getTodo(id, todos) {
  const [todo] = todos.filter((todo) => todo.id === id);
  return todo ? todo : null;
}

export function editTodo(id, todos, editDetails) {
  const todo = getTodo(id, todos);

  if (!todo) return null;

  const editedTodo = { ...todo, ...editDetails };

  return editedTodo;
}

export function deleteTodo(id, todos) {
  const restOfTodos = todos.filter((todo) => todo.id !== id);

  return restOfTodos;
}
