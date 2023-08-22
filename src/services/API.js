export const URL = 'http://localhost:3000/todos';

export async function fetchTodos() {
  try {
    const result = await fetch(URL);
    const response = await result.json();
    return response;
  } catch (err) {
    return null;
  }
}

//TODO: fetchTodos should be testable by itself outside object
//maybe url is a constant
//1st: Test that fetch is called with the correct URL.
//2nd: Make sure data that we're getting from response is stringified
//return is string and on client side test that it's parsed
//TODO: refactor this object for more modular
//Resuse todos for example for reuse in other tests or test files.
