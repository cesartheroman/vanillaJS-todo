import { fetchTodos } from "./API.js";
import ProxiedStore from "./Store.js";

export async function setTodos() {
  ProxiedStore.todosList = await fetchTodos();
}

export function loadTodoPage() {
  const main = document.querySelector("main");
  const todoPage = document.createElement("todo-page");

  main.appendChild(todoPage);
}

export function createTodo(newTodo) {
  ProxiedStore.todosList = [...ProxiedStore.todosList, newTodo];
}

export function getTodo(id) {
  const [todo] = ProxiedStore.todosList.filter((todo) => todo.id === id);
  return todo ? todo : null;
}

export function editTodos(id, editDetails) {
  const updatedTodosList = ProxiedStore.todosList.map((todo) => {
    if (todo.id === id) {
      return { ...todo, ...editDetails };
    } else {
      return todo;
    }
  });
  ProxiedStore.todosList = updatedTodosList;
}

export function deleteTodo(id) {
  const todo = getTodo(id);

  if (!todo) return null;

  const restOfTodos = ProxiedStore.todosList.filter((todo) => todo.id !== id);

  ProxiedStore.todosList = restOfTodos;
}
