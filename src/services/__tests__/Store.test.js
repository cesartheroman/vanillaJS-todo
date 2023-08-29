import Store from '../Store.js';
import todos from '../__fixtures__/todos.js';

describe('Store Service', () => {
  const testStore = Store;

  it('should initialize with null', () => {
    expect(testStore).toEqual({ todosList: null });
  });

  it('should dispatch a new event', () => {
    const eventSpy = jest.spyOn(window, 'dispatchEvent');
    testStore.todosList = todos;

    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'apptodoslistchange' })
    );
  });
});
