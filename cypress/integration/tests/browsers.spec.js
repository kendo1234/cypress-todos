describe("Test in chrome", { browser: "chrome" }, () => {
  it("run a test in a different browser defined in the describe block", () => {
    cy.get(".footer").should("not.exist");
    cy.get(".todo-list").should("not.exist");
  });
});
