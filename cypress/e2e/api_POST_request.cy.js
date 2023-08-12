describe('API TESTNG', ()=>{
    it('POST request', ()=>{
        cy.request({url: '/users', method: 'POST', body: {
            "name": "morpheus",
            "job": "leader"
        }}).as('createUser')
        cy.get('@createUser').then((res)=>{
            expect(res.status).equal(201)
            cy.log(JSON.stringify(res.body))
            expect(res.body.name).equal('morpheus')
        })
    })
})