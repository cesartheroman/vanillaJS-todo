export class TodoPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const template = document.getElementById('todo-page-template');
    const content = template.content.cloneNode(true);

    this.root.appendChild(content);

    this.render();
  }

  render() {
    console.log('hi there!');
  }
}

customElements.define('todo-page', TodoPage);
