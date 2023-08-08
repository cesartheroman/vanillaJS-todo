import API from './API.js';

export async function loadData() {
  app.store.todosList = await API.fetchTodos();
}

export async function getTodoById(id) {}
