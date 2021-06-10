describe('My First Test', () => {
  // your application url
  const baseUrl = 'https://appery.io/app/view/017f025e-5f4f-45e8-aa9e-11bcc135583a/#/'

  it('Visits the initial project page', () => {
    cy.visit(baseUrl);
    cy.contains('Welcome');
    cy.contains('sandbox app is running!');
  })
})
