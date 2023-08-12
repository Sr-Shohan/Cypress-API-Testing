describe('API TESTING', ()=>{
    it('DELETE REQUEST', ()=>{
        cy.request({url : '/users/3', method: "DELETE",}).as('deleteUser')
        cy.get('@deleteUser').then((res)=>{
            expect(res.status).equal(204)
        })
    })
})