describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://unirvet.site");
    cy.get(":nth-child(5) > .nav-link > span").click();
    cy.get("tbody > :nth-child(1) > :nth-child(1)").should(
      "have.text",
      "Pol García"
    );
    cy.get(':nth-child(1) > [style="text-align:center"] > a').click();
  });
});
