import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit unirvet.site", () => {
  cy.visit("http://unirvet.site");
});

When("I Click at visit", () => {
  cy.get(":nth-child(5) > .nav-link > span").click();
});

Then("I should see a search bar", () => {
  cy.get("tbody > :nth-child(1) > :nth-child(1)").should(
    "have.text",
    "Pol García"
  );
});
