describe('template spec', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Should show the Title', () => {
        cy.contains('Joël Grimberg');
    });

    it('Should load a blog post', () => {
        cy.findByRole('navigation').findByText('Blog').click();
        cy.contains('My Mission').click();
        cy.url().should('include', '/blog/my-mission');
        cy.contains('My Mission');
    });

    it('Should be able to use the Social Links inside the header', () => {
        cy.get('[test-id=twitter-link]')
            .should('be.visible')
            .and('have.attr', 'href', 'https://twitter.com/joelgrimberg');

        cy.get('[test-id=github-link]')
            .should('be.visible')
            .and('have.attr', 'href', 'https://github.com/joelgrimberg');

        cy.get('[test-id=linkedin-link]')
            .should('be.visible')
            .and(
                'have.attr',
                'href',
                'https://www.linkedin.com/in/joelgrimberg/'
            );
    });

    it('Should be able to use the Social Links inside the footer', () => {
        cy.get('[test-id=twitter-link-footer]')
            .scrollIntoView()
            .should('be.visible')
            .and('have.attr', 'href', 'https://twitter.com/joelgrimberg');

        cy.get('[test-id=github-link-footer]')
            .scrollIntoView()
            .should('be.visible')
            .and('have.attr', 'href', 'https://github.com/joelgrimberg');
        cy.get('[test-id=linkedin-link-footer]')
            .scrollIntoView()
            .should('be.visible')
            .and(
                'have.attr',
                'href',
                'https://www.linkedin.com/in/joelgrimberg/'
            );
    });
});
