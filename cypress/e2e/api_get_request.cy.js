describe('API TESTING', ()=>{
    it('GET request',()=>{
        cy.request({url: '/users/2', method: "GET"}).as('user')
        cy.get('@user').then((res)=>{
            cy.log(JSON.stringify(res.body))
            expect(res.body.data.id).equal(2)
            expect(res.status).equal(200)
      
        })
        })
})
