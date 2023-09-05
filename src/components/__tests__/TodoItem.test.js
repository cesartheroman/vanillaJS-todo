import { TodoItem } from '../TodoItem.js';
import {Store} from '../../services/Store.js';
import {
  createMockTodoItemTemplate,
  sampleTodo,
} from '../__fixtures__/index.js';

window.app = {};
app.store = Store;

describe('TodoItem', () => {
  let todoItem;

  beforeEach(() => {
    todoItem = new TodoItem();

    document.getElementById = jest.fn(() => createMockTodoItemTemplate());

    todoItem.dataset.item = JSON.stringify(sampleTodo);
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

  it.skip('should call the edit button event handler when clicked', () => {
    todoItem.connectedCallback();

    const logSpy = jest.spyOn(console, 'log');
    const editButton = todoItem.querySelector('.edit-bttn');

    const clickEvent = new MouseEvent('click', { bubbles: true });
    editButton.dispatchEvent(clickEvent);

    expect(logSpy).toHaveBeenCalledWith('edit!');
  });

  it.skip('should call the delete button event handler when clicked', () => {
    todoItem.connectedCallback();

    const logSpy = jest.spyOn(console, 'log');
    const deleteButton = todoItem.querySelector('.delete-bttn');

    const clickEvent = new MouseEvent('click', { bubbles: true });
    deleteButton.dispatchEvent(clickEvent);

    expect(logSpy).toHaveBeenCalledWith('delete!');
  });
});
