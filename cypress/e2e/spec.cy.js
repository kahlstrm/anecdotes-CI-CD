describe('Anecdotes E2E tests', () => {
  before(() => {
    cy.request('GET', 'http://localhost:5000/api/testing/reset')
  })
  it('shows correct things on the website', () => {
    cy.visit('http://localhost:5000')
    cy.contains('Anecdotes')
  })
  it('shows results from the database', () => {
    cy.visit('http://localhost:5000')
    cy.contains('Premature optimization is the root of all evil.')
  })
  it('pressing a vote button increases the count both on the frontend and the backend', () => {
    cy.visit('http://localhost:5000')
    cy.contains('Premature optimization is the root of all evil.')
      .parent()
      .contains('has 3')
      .contains('vote')
      .click()
      .parent()
      .contains('has 4')
      .reload()
    cy.contains('Premature optimization is the root of all evil.')
      .parent()
      .contains('has 4')
  })
})
