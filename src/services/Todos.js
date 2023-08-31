import { fetchTodos } from "./API.js";

export async function setTodos() {
  app.store.todosList = await fetchTodos();
}

export function loadTodoPage() {
  const main = document.querySelector("main");
  const todoPage = document.createElement("todo-page");

  main.appendChild(todoPage);
}

export function createTodo(newTodo) {
  app.store.todosList = [...app.store.todosList, newTodo]; 
  return app.store.todosList;
}

export function getTodo(id) {
  const [todo] = app.store.todosList.filter((todo) => todo.id === id);
  return todo ? todo : null;
}

export function editTodos(id, editDetails) {
  const updatedTodosList = app.store.todosList.map((todo) => {
    if (todo.id === id) {
      return { ...todo, ...editDetails };
    } else {
      return todo;
    }
  });

  return updatedTodosList;
}

export function deleteTodo(id) {
  const todo = getTodo(id);

  if (!todo) return null;

  const restOfTodos = app.store.todosList.filter((todo) => todo.id !== id);

  return restOfTodos;
}
