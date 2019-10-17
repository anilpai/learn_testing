import { cyan, italic } from "ansi-colors";

context("Actions", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/actions");
  });

  it(".type() - type into a DOM element", () => {
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com")

      // .type() with special characters
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")

      // .type() with key modifiers
      .type("{alt}{option}")
      .type("{ctrl}{option}")
      .type("{meta}{command}{cmd}")
      .type("{shift}")

      // Delay each keypress by 0.1 sec
      .type("slow.typing@email.com", { delay: 100 })
      .should("have.value", "slow.typing@email.com");

    cy.get(".action-disabled")
      .type("disabled error checking", { force: true })
      .should("have.value", "disabled error checking");
  });
});
