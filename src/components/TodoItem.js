export class TodoItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.getElementById('todo-item-template');
    const content = template.content.cloneNode(true);

    const todoItem = JSON.parse(this.dataset.item);
    this.innerHTML = '';

    this.appendChild(content);

    this.querySelector('.name').textContent = `${todoItem.name}`;
    this.querySelector('.edit-bttn').addEventListener('click', (e) => {
      e.preventDefault();
      console.log('edit!');
    });
    this.querySelector('.delete-bttn').addEventListener('click', (e) => {
      e.preventDefault();
      console.log('delete!');
    });
  }
}

customElements.define('todo-item', TodoItem);
