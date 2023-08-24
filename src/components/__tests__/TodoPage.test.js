import { TodoPage } from '../TodoPage.js';

describe(TodoPage, () => {
  it.skip('should render the component in the DOM', () => {
    const test = new TodoPage();

    console.log(test);
  });
});
//TODO: describe block for connectedCallback
//should call appendCHild
//should addEventListener
//should call this.render()

//if get into DOM manipulation for checking text on the page
//if todo list is null should see "loading..."
