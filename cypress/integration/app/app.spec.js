describe('App', () => {
  beforeEach(() => {
    cy.viewAsDesktop();
  });

  it('should show the login page on app init', () => {
    cy.visit('/');
    cy.get("[data-testid='login-page']");
  });
});
