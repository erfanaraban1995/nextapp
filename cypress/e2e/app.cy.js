describe('Navigation', () => {
  it('should render home page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="contactUs"]').click()
    cy.url().should('include', '/contactUs')
    cy.get('h1').contains('contact us')
  })
})
