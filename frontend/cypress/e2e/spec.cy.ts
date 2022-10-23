describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3001/");

    cy.contains("Polling");

    cy.wait(5000);
    cy.get(".select").click();
    cy.wait(15000);
    cy.get(".minute").click();
    cy.wait(15000);


    cy.get(".select").click();
    cy.wait(1000);
    cy.get(".seconds").click();
    cy.wait(5000);


    cy.get(".slider").click();

    cy.wait(5000);

  });
});
