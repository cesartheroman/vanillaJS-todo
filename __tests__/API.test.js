import app from '../src/App.js';

describe('Fetch all todos from server', () => {
  it('todos should be an array of objects', async () => {
    const todos = app.store.todosList;
    console.log('todos: ', todos);
    expect(todos.length).toBe(3);
  });
});
