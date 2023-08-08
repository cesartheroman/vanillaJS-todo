import Store from './services/Store.js';
import { loadData } from './services/TodoMenu.js';

window.app = {};
app.store = Store;

window.addEventListener('DOMContentLoaded', () => {
  loadData();
});

module.exports = app;
