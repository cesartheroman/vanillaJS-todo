import { TodoPage } from "../TodoPage.js";
import Store from "../../services/Store.js";
import { createMockTodoPageTemplate } from "../__fixtures__/index.js";

window.app = {};
app.store = Store;

describe("TodoPage", () => {
  let todoPage;
  beforeEach(() => {
    todoPage = new TodoPage();

    document.getElementById = jest.fn(() => createMockTodoPageTemplate());
  });

  it("should call appendChild to add template content", () => {
    todoPage.appendChild = jest.spyOn(document.body, "appendChild");

    todoPage.connectedCallback();
    const templateFragment = new DocumentFragment();

    expect(todoPage.appendChild).toHaveBeenCalled();
    expect(todoPage.appendChild).toHaveBeenCalledWith(templateFragment);
  });

  it("should call this.render", () => {
    todoPage.render = jest.spyOn(todoPage, "render");

    todoPage.connectedCallback();

    expect(todoPage.render).toHaveBeenCalled();
  });

  it("should show loading text if todosList is empty", () => {
    todoPage.connectedCallback();

    const loadingText = todoPage.querySelector("#todo-list").innerHTML;

    expect(loadingText).toBe("Loading...");
  });

  it("should call appendChild with todoItem", () => {
    todoPage.connectedCallback();

    const ulElement = todoPage.querySelector("ul");
    ulElement.appendChild = jest.spyOn(document.body, "appendChild");

    const templateFragment = new DocumentFragment();

    expect(ulElement.appendChild).toHaveBeenCalled();
    expect(ulElement.appendChild).toHaveBeenCalledWith(templateFragment);
  });
});
