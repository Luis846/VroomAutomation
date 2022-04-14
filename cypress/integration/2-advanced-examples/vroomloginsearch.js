
/// <reference types="Cypress" />


describe('Vroom site visit and search', function (){

    before(()=>{
        cy.visit(Cypress.env('url'))
    })




    // it('user visits site and logs in', function(){

    //     cy.get('[data-cg-ft="nav-menu-sign-in"]').click()
    //     cy.get('[data-cg-ft="login-email-input"]').type('luis.rivera846@gmail.com')
    //     cy.dataSelector('login-next-button').click()
    //     cy.go('back')


    // })

    it.only('searches for a car', function() {

        // cy.BrandSelector('Toyota')
        // cy.BrandSelector('Toyota', 'Supra')does not activate next select after choosing first. scrapping
        // cy.get('#dealFinderZipUsedId_dealFinderForm').type('33027').should('have.value', '33027')
        // cy.get('#dealFinderForm_0').click()
        cy.location('protocol').should('contains', 'https')
        cy.location('hostname').should('eq','www.vroom.com')
        cy.location('pathname').should('eq', '/supra')
        
        cy.SelectCar('Supra')
        cy.ColorCheckbox('black')
        cy.wait(2000)
        cy.get('.sc-hQYpqk').find('.sc-ByBTK.dXFovK').each(($el,index,$list) =>{
            const textDetails = $el.text()
            if(textDetails.includes('A91 Edition')){
                cy.get('.sc-hQYpqk').eq(index).click()
            } else{
                cy.get('.sc-hQYpqk').eq(1).click()
            }
        })
    

    })

})