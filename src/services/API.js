const API = {
  url: 'http://localhost:3000/todos',
  fetchTodos: async () => {
    const result = await fetch(API.url);
    return await result.json();
  },
};

export default API;
