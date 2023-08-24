export const createMockTodoItemTemplate = () => {
  const mockTemplate = document.createElement('template');
  mockTemplate.innerHTML = `
  <li>
    <p class="name"></span>
    <p class="toolbar">
       <button class="edit-bttn">✏️</button>
       <button class="delete-bttn">🗑️</button>
    </p>
  </li>
`;

  return mockTemplate;
};

export const createMockTodoPageTemplate = () => {
  const mockTemplate = document.createElement('template');
  mockTemplate.innerHTML = `
  <section class="app-container">
    <h1></h1>
    <div id="todo-input">
      <input type="text" id="new-todo" name="new-todo" />
      <button>Add</button>
    </div>
    <ul id="todo-list"></ul>
  </section>
`;

  return mockTemplate;
};
export const sampleTodo = {
  id: 1,
  name: 'Finish Todo App',
  completed: false,
  active: false,
};

export default sampleTodo;
