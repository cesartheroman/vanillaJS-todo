import * as TodoService from '../Todos.js';
import todos from '../__fixtures__/todos.js';
import Store from '../Store.js';

describe('Todo Service', () => {
  window.app = {};
  app.store = Store;

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(todos),
    })
  );

  afterEach(() => {
    app.store.todosList = todos;
  })

  test('todosList should be empty before initialization', async () => {
    expect(app.store.todosList).toBe(null);
  });

  test('setTodos should set initilal Todos to Store', async () => {
    await TodoService.setTodos();

    expect(app.store.todosList.length).toBeGreaterThan(0);
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

  test('createTodo should create a new todo', () => {
    const newTodo = { 
      id: 69,
      name: "New todo",
      completed: false,
      active: false
    }

    const updatedTodos = TodoService.createTodo(newTodo);
    expect(updatedTodos).toEqual([...todos, newTodo]);
  });

  test('getTodo should get the todo by ID', () => {
    const todo = TodoService.getTodo(1);

    expect(todo).toEqual({
      id: 1,
      name: 'Finish Todo App',
      completed: false,
      active: false,
    });
  });

  test('getTodo should return null if todo does not exist', () => {
    const todo = TodoService.getTodo(10);

    expect(todo).toBe(null);
  });

  test('editTodo should return edited todo with rest of todos', () => {
    const editedTodo = { 
      id: 1,
      name: 'My first edit', 
      completed: false,
      active: false,
    };
    const updatedTodos = TodoService.editTodos(editedTodo.id, editedTodo);

    expect([
        { id: 1, name: 'My first edit', completed: false, active: false },
        {
          id: 2,
          name: 'Finish JUC Tech Challenge',
          completed: false,
          active: false
        },
        {
          id: 3,
          name: 'Finish Expense Tracker',
          completed: false,
          active: false
        }
      ]).toEqual(updatedTodos);
  });

  test('deleteTodo should return null if todo does not exist', () => {
    const restOfTodos = TodoService.deleteTodo(10);

    expect(restOfTodos).toBe(null);
  });

  test('deleteTodo should delete the todo', () => {
    const restOfTodos = TodoService.deleteTodo(1);

    expect(restOfTodos.length).toBeLessThan(todos.length);
  });
});
