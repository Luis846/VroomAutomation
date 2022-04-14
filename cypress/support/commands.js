// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
// Cypress.Commands.add('dataSelector', (testId) => {

//     cy.get(`[data-cg-ft='${testId}']`)

// })
// Cypress.Commands.add('dataShort', (testId) => {

//     cy.get(`[datacgft='${testId}']`)

// })

Cypress.Commands.add('SelectCar', (model) =>{
    cy.get('input[type="text"]').type(model)
    cy.get('ul[role="listbox"]').contains(model).click()
    cy.get('.MuiChip-label').contains(model).should('be.visible')

    
})

Cypress.Commands.add('ColorCheckbox', (color) =>{
    const upperCased = color.charAt(0).toUpperCase() + color.slice(1)
    cy.get('div [data-qa="Color"]').click()
        cy.get('#'+upperCased).check({force: true}).should('be.checked')
})
//
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
