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
    // document.getElementById = jest.fn(() => createMockTodoItemTemplate());

    todoItem.dataset.item = JSON.stringify(sampleTodo);
    todoItem.appendChild = jest.spyOn(document.body, 'appendChild');
    // todoItem.querySelector = jest.spyOn(document.body, 'querySelector').mockImplementation((selector) => {
    //   switch(selector) {
    //     case '.toggle':
    //       return document.createElement('label');
    //     case '.todo-name':
    //       return document.createElement('input');
    //     case '.edit-bttn': case'.delete-bttn': case '.save-todo': 
    //       return document.createElement('button');
    //   }
    // });

  });
/**
 * @jest-environment jsdom
 */
  it('should call appendChild to add template content', () => {
    todoItem.connectedCallback();
    const validateElement = document.getElementsByClassName('.toggle');
    console.log(validateElement);

    expect(todoItem.appendChild).toHaveBeenCalled();
  });

  it('should set the name content from the dataset', () => {
    todoItem.connectedCallback();

    const todoName = todoItem.querySelector('.toggle').innerHTML;
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
