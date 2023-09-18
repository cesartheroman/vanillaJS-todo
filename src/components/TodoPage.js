import { createTodo } from "../services/Todos.js";
import ProxiedStore from "../services/Store.js";

export class TodoPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.getElementById("todo-page-template");
    const content = template.content.cloneNode(true);

    this.appendChild(content);

    window.addEventListener("apptodoslistchange", () => {
      this.render();
    });

    const h1 = this.querySelector("h1");
    h1.textContent = "Cesar's Todos";

    const addTodoButton = this.querySelector(".create-todo-bttn");
    addTodoButton.addEventListener("click", () => {
      const newTodoInput = this.querySelector("#new-todo");
      console.log("newtodo input:", newTodoInput);
      newTodoInput.placeholder = "What needs to be done?";
      const newTodoName = newTodoInput.value;
      const newTodoId =
        ProxiedStore.todosList[ProxiedStore.todosList.length - 1].id;

      const newTodo = {
        id: newTodoId + 1,
        name: newTodoName,
        active: false,
        compeleted: false,
      };

      newTodoInput.value = "";
      createTodo(newTodo);
    });

    this.render();
  }

  render() {
    const list = this.querySelector("#todo-list");

    if (ProxiedStore.todosList) {
      list.innerHTML = "";

      for (let todo of ProxiedStore.todosList) {
        const todoItem = document.createElement("todo-item");
        todoItem.dataset.item = JSON.stringify(todo);

        this.querySelector("ul").appendChild(todoItem);
      }
    } else {
      list.innerHTML = "Loading...";
    }
  }
}

customElements.define("todo-page", TodoPage);
