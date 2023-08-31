import { createTodo } from "../services/Todos.js";

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

    const addTodoButton = this.querySelector('.create-todo-bttn');

    addTodoButton.addEventListener('click', () => {
      const todoName = this.querySelector('#new-todo').value;
      const newId = app.store.todosList[app.store.todosList.length - 1].id;
      const newTodo = {
        id: newId + 1,
        name: todoName,
        active: false,
        compeleted: false
      }

     createTodo(newTodo); 

    })

    this.render();
  }

  render() {
    const list = this.querySelector("#todo-list");

    if (app.store.todosList) {
      list.innerHTML = "";

      for (let todo of app.store.todosList) {
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
