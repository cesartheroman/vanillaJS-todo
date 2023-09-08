const Store = {
  todosList: null,
};

let proxiedStore = new Proxy(Store, {
  set(target, property, value) {
    target[property] = value;

    if (property === "todosList") {
      const newEvent = new Event("apptodoslistchange");
      window.dispatchEvent(newEvent);
      return true;
    }
  },
});

export default proxiedStore;
