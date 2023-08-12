describe("API Tesitng", ()=>{
    it("POST error handling - Login", ()=>{
        cy.request({url :'/login',  method: "POST",failOnStatusCode: false,
            body:{
                "email": "peter@klaven"
            } 
        }).as('login')
        cy.get('@login').its('status').should('equal', 400)
        cy.get('@login').then((res)=>{
            expect(res.body.error).equal('Missing password')
            
        })
    })
})