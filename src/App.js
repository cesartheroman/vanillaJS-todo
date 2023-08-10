import Store from './services/Store.js';
import { loadTodos, loadComponents } from './services/Todos.js';
import { TodoPage } from './components/TodoPage.js';
import { TodoItem } from './components/TodoItem.js';

window.app = {};
app.store = Store;

window.addEventListener('DOMContentLoaded', () => {
  loadTodos();
  loadComponents();
});
