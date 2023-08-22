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
