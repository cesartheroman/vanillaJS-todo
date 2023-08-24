import { TodoPage } from '../TodoPage.js';
import Store from '../../services/Store.js';
import {
  createMockTodoPageTemplate,
  sampleTodo,
} from '../__fixtures__/index.js';

window.app = {};
app.store = Store;

describe('TodoPage', () => {
  let todoPage;
  beforeEach(() => {
    todoPage = new TodoPage();

    document.getElementById = jest.fn(() => createMockTodoPageTemplate());
  });

  it('should call appendChild to add template content', () => {
    todoPage.appendChild = jest.spyOn(document.body, 'appendChild');

    todoPage.connectedCallback();

    expect(todoPage.appendChild).toHaveBeenCalled();
  });

  it.todo('should add eventListener');

  it.todo('shoudl call this.render');

  it.todo('should show loading text if todosList is empty');

  it.todo('should call appendChild with todoItem');
});
//TODO: describe block for connectedCallback
//should call appendCHild
//should addEventListener
//should call this.render()

//if get into DOM manipulation for checking text on the page
//if todo list is null should see "loading..."
