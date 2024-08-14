// cypress - Spec
describe('My First Test Suite', function()
{
    it('My First Test Case', function()
{
    //test step
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get(".search-keyword").type("ca")
    cy.wait(2000)
    // Parent-Child chaining
    cy.get('.products').find('.product').should('have.length', 4)
})
})
