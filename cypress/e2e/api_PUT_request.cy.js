describe('API TESTING', ()=>{
    it('PUT reqeust testing', ()=>{
        cy.request({url: '/users/2', method : "PUT", body: {
            "name": "shohanur",
            "job": "zion resident"
        }}).as('updateUser')

        cy.get("@updateUser").then((res)=>{
            cy.log(JSON.stringify(res.body))
            expect(res.body.name).equal('shohanur')
        })
    })
})