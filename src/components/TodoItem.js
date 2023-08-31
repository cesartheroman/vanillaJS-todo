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

    const todoName = this.querySelector(".todo-name");
    todoName.textContent = `${todoItem.name}`;
    
    //TODO: finish logic for handling edit button and then handling
    //submission of the edited todo
    // const submitEditedTodo = () => {
    //   
    // };

    const editTodoInput = this.querySelector('#edit-todo');
    editTodoInput.addEventListener('submit', () => {
      submitEditedTodo(); 
    })

    const eventHandler = (event) => {
      const className = event.target.className;

      if (className === "edit-bttn") {
        const editTodoInput = this.querySelector('#edit-todo');
        editTodoInput.hidden =  false;
        console.log(editTodoInput);
        // const editDetails = { name: "editedName" };
        // editTodos(todoItem.id, editDetails)
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
