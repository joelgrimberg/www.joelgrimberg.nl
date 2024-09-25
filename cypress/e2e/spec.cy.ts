describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should show the Title', () => {
    cy.contains('Joël Grimberg')
  })

  it('Should load a blog post', () => {
    cy.contains('Blog').click()
    cy.contains('First post').click()
    cy.url().should('include', '/blog/first-post')
    cy.contains('First post')
  })

  it('Should be able to use the Social Links inside the header', () => {
    cy.get('[test-id=twitter-link]')
      .should('be.visible')
      .and('have.attr', 'href', 'https://twitter.com/joelgrimberg')

    cy.get('[test-id=github-link]')
      .should('be.visible')
      .and('have.attr', 'href', 'https://github.com/joelgrimberg')
  })

  it('Should be able to use the Social Links inside the footer', () => {
    cy.get('[test-id=twitter-link-footer]')
      .scrollIntoView()
      .should('be.visible')
      .and('have.attr', 'href', 'https://twitter.com/joelgrimberg')

    cy.get('[test-id=github-link-footer]')
      .scrollIntoView()
      .should('be.visible')
      .and('have.attr', 'href', 'https://github.com/joelgrimberg')
  })
})
