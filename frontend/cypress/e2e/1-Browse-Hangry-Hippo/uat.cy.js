describe('Shows Appeteasers', () => {
  it('Connects to Dev Server', () => {
    cy.visit('https://hangryhippo.quantic.host/');
  });

  it('selects Handhelds', () => {
    cy.contains('Handhelds').click();
    cy.contains('Cheese Burger').should('exist');
    cy.contains('Fajita Tacos').should('exist');
    cy.contains('Tater Tots').should('not.exist');
    cy.contains('Buffalo Wings').should('not.exist');
  });

  it('selects Appeteasers', () => {
    cy.contains('Appeteasers').click();
    cy.contains('Tater Tots').should('exist');
    cy.contains('Buffalo Wings').should('exist');
    cy.contains('Cheese Burger').should('not.exist');
    cy.contains('Fajita Tacos').should('not.exist');
  });
});