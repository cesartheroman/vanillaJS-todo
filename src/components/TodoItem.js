import { editTodos, deleteTodo } from "../services/Todos.js";

export class TodoItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = "";

    const template = document.getElementById("todo-item-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    const todoItem = JSON.parse(this.dataset.item);

    const todoName = this.querySelector(".name");
    todoName.textContent = `${todoItem.name}`;

    const eventHandler = (event) => {
      const className = event.target.className;

      if (className === "edit-bttn") {
        const editDetail = { name: "editedName" };
        const updatedTodosList = editTodos(todoItem.id, editDetail);

        app.store.todosList = updatedTodosList;
      }
      if (className === "delete-bttn") {
        console.log(deleteTodo(todoItem.id));
      }
    };

    const editButton = this.querySelector(".edit-bttn");
    editButton.addEventListener("click", (e) => {
      e.preventDefault();
      eventHandler(e);
    });

    const deleteButton = this.querySelector(".delete-bttn");
    deleteButton.addEventListener("click", (e) => {
      e.preventDefault();
      eventHandler(e);
    });
  }
}
customElements.define("todo-item", TodoItem);
