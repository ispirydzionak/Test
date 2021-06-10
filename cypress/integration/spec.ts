// function to describe test purpose
describe('App Init Test', () => {

  // your application url constant
  const baseUrl = 'https://appery.io/app/view/017f025e-5f4f-45e8-aa9e-11bcc135583a/#/'

  // function describes every test's expected outcome
  it('should redirect to login page', () => {
    // test code inside
    // cy.visit(url) - necessary for every test, tells Test Runner to visit tested url first
    cy.visit(baseUrl);
    // cy.url() returns current url
    cy.url()
      // should function creates an assertion, in this case 'url should be EQUAL to baseurl+login'
      .should('equal', `${baseUrl}login`);
  })
})
