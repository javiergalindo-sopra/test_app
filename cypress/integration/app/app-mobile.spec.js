describe('App', () => {
  beforeEach(() => {
    cy.viewport('iphone-8');
  });

  it('should show the login page on app init', () => {
    cy.visit('/');
    cy.get('[data-testid=login-page]');
  });

  it('should check if the provided email is invalid', () => {
    cy.visit('/');

    cy.get('input[name=email]').type('aaa');
    cy.get('input[name=email]').blur();

    cy.contains('El email introducido es inválido');
  });

  it('should check if the provided password is invalid', () => {
    cy.visit('/');

    cy.get('input[name=password]').type('aaa');
    cy.get('input[name=password]').blur();

    cy.contains('La contraseña debe contener almenos 5 caracteres');
  });

  it('should allow to submit the login form', () => {
    cy.visit('/');

    cy.get('input[name=email]').type('tester@test.com');
    cy.get('input[name=password]').type('123456');
    cy.get('.login-form__submit-button').click();

    cy.contains('El email introducido es inválido').should('not.exist');

    cy.contains('La contraseña debe contener almenos 5 caracteres').should(
      'not.exist'
    );
  });
});
