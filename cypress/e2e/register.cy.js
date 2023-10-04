describe('Test validation register form', () => {
  it('should render register page', () => {
    cy.visit('http://localhost:3000/register')
    cy.get('input#firstName').type('erfan')
    cy.get('input#lastName').type('araban')
    // cy.get('#evidences').click()
    cy.get('button').click()
  })
})
