describe('API TESTING', ()=>{
    it('Status code validation', ()=>{
        cy.request('/users/2').as('existingUser')
        cy.get('@existingUser').its('status').should('equal',200)
    })
})