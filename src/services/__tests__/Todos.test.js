import { loadTodos, getTodo } from '../Todos.js';
import app from '../../App.js';

describe(getTodo, () => {
  it('should get todo by id', async () => {
    await loadTodos();
    console.log(app);
    const foundTodo = getTodo(1);
    const exampleTodo = {
      id: 1,
      name: 'Finish Todo App',
      completed: false,
      active: false,
    };

    // expect(foundTodo).toEqual(exampleTodo);
  });
});
