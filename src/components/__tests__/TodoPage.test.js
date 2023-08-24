import { TodoPage } from '../TodoPage.js';

describe('TodoPage', () => {
  it.skip('should call the connectedCallback function', () => {
    const todoPage = new TodoPage();
    console.log(TodoPage);
    expect(todoPage).toHaveBeenCalledTimes(1);
  });
});
//TODO: describe block for connectedCallback
//should call appendCHild
//should addEventListener
//should call this.render()

//if get into DOM manipulation for checking text on the page
//if todo list is null should see "loading..."
