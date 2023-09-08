// import Store from "./services/Store.js";
import { setTodos, loadTodoPage } from "./services/Todos.js";
import { TodoPage } from "./components/TodoPage.js";
import { TodoItem } from "./components/TodoItem.js";

window.addEventListener("DOMContentLoaded", () => {
  setTodos();
  loadTodoPage();
});
