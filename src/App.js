import Store from './services/Store.js';
import { loadData, loadComponents } from './services/Todos.js';

import { TodoPage } from './components/TodoPage.js';

window.app = {};
app.store = Store;

window.addEventListener('DOMContentLoaded', () => {
  loadData();
  loadComponents();
});
