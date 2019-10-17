describe("user clicks submit", () => {
  it("logs in user", () => {
    cy.visit("/")
      .get('[type="submit"]')
      .click()
      .get(".App-header > div")
      .should("have.text", "You're logged in!");
  });
});
