export class TodoPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const template = document.getElementById('todo-page-template');
    const content = template.content.cloneNode(true);

    this.root.appendChild(content);

    const h1 = this.root.querySelector('h1');
    h1.textContent = "Cesar's Todos";

    window.addEventListener('apptodoslistchange', () => {
      this.render();
    });

    this.render();
  }

  render() {
    const list = this.root.querySelector('#todo-list');

    if (app.store.todosList) {
      list.innerHTML = '';

      for (let todo of app.store.todosList) {
        const todoItem = document.createElement('todo-item');
        todoItem.dataset.item = JSON.stringify(todo);

        this.root.querySelector('ul').appendChild(todoItem);
      }
    } else {
      list.innerHTML = 'Loading...';
    }
  }
}

customElements.define('todo-page', TodoPage);
