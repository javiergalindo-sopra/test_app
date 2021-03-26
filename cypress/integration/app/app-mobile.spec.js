describe('App', () => {
  beforeEach(() => {
    cy.viewport('iphone-8');
  });

  it('should show the login page on app init', () => {
    cy.visit('/');
    cy.get('[data-testid=login-page]');
  });
});
