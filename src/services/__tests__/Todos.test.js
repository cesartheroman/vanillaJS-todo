import * as TodoService from '../Todos.js';
import todos from '../__fixtures__/todos.js';

describe('Todo Service', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(todos),
    })
  );

  beforeEach(() => {
    fetch.mockClear();
  });

  test('todosList should be empty before initialization', async () => {
    const testStore = { todosList: null };
    expect(testStore.todosList).toBe(null);
  });

  test('setTodos should set initilal Todos to Store', async () => {
    const testStore = { todosList: null };
    await TodoService.setTodos(testStore);

    expect(testStore.todosList.length).toBeGreaterThan(0);
  });

  test('loadTodoPage should create todo-page element and append it', () => {
    document.body.innerHTML = `
      <main>
      </main>
    `;

    TodoService.loadTodoPage();

    const todoPageElement = document.body.querySelector('todo-page');
    const parentChild = document.querySelector('main > todo-page');
    expect(todoPageElement).not.toBe(null);
    expect(parentChild).not.toBe(null);
  });

  test('getTodo should get the todo by ID', () => {
    const todo = TodoService.getTodo(1, todos);

    expect(todo).toEqual({
      id: 1,
      name: 'Finish Todo App',
      completed: false,
      active: false,
    });
  });

  test('getTodo should return null if todo does not exist', () => {
    const todo = TodoService.getTodo(10, todos);

    expect(todo).toBe(null);
  });

  test('editTodo should return edited todo', () => {
    const editDetails = { name: 'My first edit' };
    const todo = TodoService.editTodo(1, todos, editDetails);

    expect(todo).toEqual({
      id: 1,
      name: 'My first edit',
      completed: false,
      active: false,
    });
  });

  test('deleteTodo should return null if todo does not exist', () => {
    const restOfTodos = TodoService.deleteTodo(10, todos);

    expect(restOfTodos).toBe(null);
  });

  test('deleteTodo should delete the todo', () => {
    const restOfTodos = TodoService.deleteTodo(1, todos);

    expect(restOfTodos.length).toBeLessThan(todos.length);
  });
});
