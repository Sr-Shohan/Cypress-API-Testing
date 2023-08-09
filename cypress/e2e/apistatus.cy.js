describe('API TESTING', ()=>{
    it('Existing user', ()=>{
        cy.request('/users/2').as('existingUser')
        cy.get('@existingUser')
        .its('status')
        .should('equal',200)
    })
    it('Non existing user', ()=>{
        cy.request({url :'/user/non-exist',failOnStatusCode:false }).as('nonExistUser')
        cy.get('@nonExistUser')
        .its('status')
        .should('equal',404)
    })
})