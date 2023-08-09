describe("REST API TESTING",()=>{
    it("single user", ()=>{
        cy.request('/users/3').then((response)=>{
            cy.log(JSON.stringify(response.headers))
            
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(200)
        })
    })
})