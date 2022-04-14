

describe('Intercept car brand', () => {

    before(() =>{
        cy.visit(Cypress.env('url') + 'cars/toyota/gr-supra')
    })

    it('Initial validation', () =>{
        cy.get('ul[data-component="MakesView"]')
        .should('exist')
        .and('contain', 'Acura')
        .and('contain', 'Audi')
        .and('contain', 'BMW')
    })

    it('Mocked API', () =>{

        
    })
})