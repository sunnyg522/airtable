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

import '@testing-library/cypress/add-commands'

Cypress.Commands.add('createUser', (fullName, email, password)=>{
    cy.contains('email').type(email)
      cy.contains('Continue').click()
      cy.get('input[name="fullName"]').click().type(fullName)
      cy.get('input[name="password"]').click().type(password)
      cy.contains('Continue').click()
})

//Command to clean onboarding screens
Cypress.Commands.add('clearOnboarding',()=>{
    // cy.get('input[id="coworker1"]').click().type(coworker1)
      cy.contains('Skip').click()
      cy.contains('Skip').click()
      cy.contains('Skip').click()
      cy.contains('Go to homescreen').click()
})

//Command to create a new Base
Cypress.Commands.add('createBase',(baseName)=>{
    cy.get('div[aria-label="Create Base from scratch"]').click()
    cy.get('.edit').click().type(baseName+'{enter}')
})

//Command to add a collabrator
Cypress.Commands.add('addCollabrator',(email)=>{
    cy.contains('Share').click()
    cy.get('.pt2 > :nth-child(3) > :nth-child(2)').click()
    cy.get('input[placeholder="Invite more base collaborators via email"').type(email)
    cy.get(':nth-child(2) > .selectMenu > .focus-container > .items-center').click().then(()=>{
        cy.get('.hdropdown > :nth-child(2)').click()
    })
    cy.contains('Send invite').click()
})

//Command to verify collabrator got added
Cypress.Commands.add('verifyCollabrator',(email)=>{
      cy.findAllByTitle(email).each(($value)=>{
        if($value === email)
          expect($value).equals(email)
      })
})

//Command to add collabrator during onboarding process
Cypress.Commands.add('addCollabratorDuringOnBoarding', (coworker1)=>{
    // Add corabrator and add him as editor
    cy.get('input[id="coworker1"]').click().type(coworker1)
    cy.get('.inviteButton').click()
    cy.contains('Skip').click()
    cy.contains('Go to homescreen').click()
})