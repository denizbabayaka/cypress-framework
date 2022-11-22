describe('Hooks', () => {
    before(() => {
        cy.log("runs once before all tests in the block");
    })
    after(() => {
        cy.log("runs once after all tests in the block");

    })
    beforeEach(() => {
        cy.log("runs before each test in the block");

    })
    afterEach(() => {
        cy.log("runs after each test in the block");

    });

    it('Test case 1', () => {
        cy.log("Test case 1");
    })
    it('Test case 2', () => {
        cy.log("Test case 2");
    });
})