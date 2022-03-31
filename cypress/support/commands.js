Cypress.Commands.add("createDefaultTodos", () => {
  const TODO_ITEM_ONE = "Buy Milk";
  const TODO_ITEM_TWO = "Pay Rent";
  const TODO_ITEM_THREE = "Pickup Dry Cleaning";

  let cmd = Cypress.log({
    name: "create default todos",
    consoleProps() {
      return {
        "Inserted Todos": [TODO_ITEM_ONE, TODO_ITEM_TWO, TODO_ITEM_THREE],
      };
    },
  });

  cy.get(".new-todo", { log: false })
    .type(`${TODO_ITEM_ONE}{enter}`, { log: false })
    .type(`${TODO_ITEM_TWO}{enter}`, { log: false })
    .type(`${TODO_ITEM_THREE}{enter}`, { log: false });

  cy.get(".todo-list li", { log: false }).then((listItems) => {
    cmd.set({ el: listItems }).snapshot().end();
  });

  //get by selector command
  Cypress.Commands.add("getBySel", (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args);
  });
  //Example Usage
  //cy.getBySel("signup-first-name").type("Bob")

  //Login command
  Cypress.Commands.add("loginByApi", (username, password) => {
    return cy.request("POST", `http://localhost:3000/login`, {
      username,
      password,
    });
  });
  //Example Usage
  // describe("POST /login", function () {
  //   it("login as user", function () {
  //     cy.loginByApi("jdoe", "password123").then((response) => {
  //       expect(response.status).to.eq(200)
  //     })
  //   })
  // })
});
