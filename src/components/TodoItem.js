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

    const todoName = this.querySelector('.toggle');
    todoName.innerHTML = `${todoItem.name}`; 

    const eventHandler = (event) => {
      const className = event.target.className;
      const editTodoInput = this.querySelector('.todo-name');

      if (className === "edit-bttn") {
        todoName.hidden = true;
        editTodoInput.hidden = false;
        editTodoInput.placeholder = `${todoItem.name}`;
        saveButton.hidden = false;
      }

      if(className === 'save-todo') {
        const editDetails = {name: editTodoInput.value }

        editTodos(todoItem.id, editDetails)
      }

      if (className === "delete-bttn") {
        deleteTodo(todoItem.id);
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

    const saveButton = this.querySelector('.save-todo');
    saveButton.addEventListener('click', (e) => {
      e.preventDefault();
      eventHandler(e);
    })
  }
}
customElements.define("todo-item", TodoItem);
