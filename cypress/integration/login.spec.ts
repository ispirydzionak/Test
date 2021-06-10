// tests for our Login Page
describe('Login Page Test', () => {

  // url to login page
  const baseUrl = 'https://appery.io/app/view/017f025e-5f4f-45e8-aa9e-11bcc135583a/#/login'

  // bad credentials to failed login test
  const badCredentials = {
    username: 'john',
    password: '123'
  };

  // good credentials to successful login test
  const goodCredentials = {
    username: 'alex',
    password: 'pass'
  };

  // function that executes before each test, in our case useful to cy.visit() our tested url
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  // first test: checking if header is 'Login Page'
  it('should have header Login Page', () => {
    // cy.get() allows to select DOM element by css-selector
    cy.get('.header-md > .toolbar-title-default > .md')
      // header contains text 'Login Page'
      .contains('Login Page');
  });

  // second test: should show popup element on badCredentials input
  it('show popup toast element on badCredentials input', () => {
    // getting our username input
    cy.get(':nth-child(1) > .ng-untouched > .native-input')
      // typing bad username into the input
      .type(badCredentials.username);
    // getting our password input
    cy.get(':nth-child(2) > .ng-untouched > .native-input')
      // typing bad password into the input
      .type(badCredentials.password);
    // getting Login button
    cy.get('.button')
      // and click on it
      .click();
    // getting toast element
    cy.get('ion-toast')
      // it should exist
      .should('exist');
  });

  // third test: should show route to success page on goodCredentials input
  it('should show route to success page on goodCredentials input', () => {
    // getting our username input
    cy.get(':nth-child(1) > .ng-untouched > .native-input')
      // typing good username into the input
      .type(goodCredentials.username);
    // getting our password input
    cy.get(':nth-child(2) > .ng-untouched > .native-input')
      // typing good password into the input
      .type(goodCredentials.password);
    // getting Login button
    cy.get('.button')
      // and click on it
      .click();
    // url should be success
    cy.url().should('equal', 'https://appery.io/app/view/017f025e-5f4f-45e8-aa9e-11bcc135583a/#/success');
  });
})
