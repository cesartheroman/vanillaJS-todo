export class TodoItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = '';

    const template = document.getElementById('todo-item-template');
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    const todoItem = JSON.parse(this.dataset.item);

    const todoName = this.querySelector('.name');
    todoName.textContent = `${todoItem.name}`;

    const editButton = this.querySelector('.edit-bttn');
    editButton.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('edit!');
    });

    const deleteButton = this.querySelector('.delete-bttn');
    deleteButton.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('delete!');
    });
  }
}

customElements.define('todo-item', TodoItem);
