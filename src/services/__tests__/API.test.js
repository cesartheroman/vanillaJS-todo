import { fetchTodos, URL } from '../API.js';
import todos from '../__fixtures__/todos.js';

describe('API Service', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(todos),
    })
  );

  beforeEach(() => {
    fetch.mockClear();
  });

  test('fetchTodos should be called with correct URL', async () => {
    await fetchTodos();

    expect(fetch).toHaveBeenCalledWith(URL);
  });

  test('response should be parsed for client', async () => {
    const fetchedTodos = await fetchTodos(URL);

    expect(fetchedTodos).toEqual(todos);
  });

  test('handles exception with null', async () => {
    fetch.mockImplementationOnce(() => Promise.reject('API failure'));

    const todos = await fetchTodos();

    expect(todos).toEqual(null);
  });
});
