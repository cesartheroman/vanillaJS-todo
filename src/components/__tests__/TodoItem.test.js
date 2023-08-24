import { TodoItem } from '../TodoItem.js';

const createMockTemplate = () => {
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

const sampleTodo = {
  id: 1,
  name: 'Finish Todo App',
  completed: false,
  active: false,
};

describe('TodoItem', () => {
  let todoItem;

  beforeEach(() => {
    todoItem = new TodoItem();

    document.getElementById = jest.fn(() => createMockTemplate());

    todoItem.dataset.item = JSON.stringify(sampleTodo);
  });

  afterEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = '';
  });

  it('should call appendChild to add template content', () => {
    todoItem.appendChild = jest.spyOn(document.body, 'appendChild');

    todoItem.connectedCallback();

    expect(todoItem.appendChild).toHaveBeenCalled();
  });

  it('should set the name content from the dataset', () => {
    todoItem.connectedCallback();

    const todoName = todoItem.querySelector('.name').textContent;
    expect(todoName).toBe('Finish Todo App');
  });

  it('should call the edit button event handler when clicked', () => {
    todoItem.connectedCallback();

    const logSpy = jest.spyOn(console, 'log');
    const editButton = todoItem.querySelector('.edit-bttn');

    const clickEvent = new MouseEvent('click', { bubbles: true });
    editButton.dispatchEvent(clickEvent);

    expect(logSpy).toHaveBeenCalledWith('edit!');
  });

  it('should call the delete button event handler when clicked', () => {
    todoItem.connectedCallback();

    const logSpy = jest.spyOn(console, 'log');
    const deleteButton = todoItem.querySelector('.delete-bttn');

    const clickEvent = new MouseEvent('click', { bubbles: true });
    deleteButton.dispatchEvent(clickEvent);

    expect(logSpy).toHaveBeenCalledWith('delete!');
  });
});
