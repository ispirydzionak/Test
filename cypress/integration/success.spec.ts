// tests for our Success Page
describe('Success Page Test', () => {

  // url to success page
  const baseUrl = 'https://appery.io/app/view/017f025e-5f4f-45e8-aa9e-11bcc135583a/#/success'

  // function that executes before each test, in our case useful to cy.visit() our tested url
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  // lets test that we are not on login page and that we have an image
  it('url should not contain "login" and image should exist', () => {
    cy.url().should('not.include', 'login');
    cy.get('ion-content.md > .md').should('exist');
  });
})
