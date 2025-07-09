class ProductPage {
    addFirstProductToCart() {
        cy.contains('Samsung galaxy s6').click();
        cy.contains('Add to cart').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added');
        });
    }

    goToCart() {
        cy.get('#cartur').click();
    }

    placeOrder() {
        cy.contains('Place Order').click();
        cy.get('#name').type('Tester');
        cy.get('#country').type('Indonesia');
        cy.get('#city').type('Jakarta');
        cy.get('#card').type('1234567890123456');
        cy.get('#month').type('07');
        cy.get('#year').type('2025');
        cy.contains('Purchase').click();
        cy.contains('Thank you for your purchase!');
        cy.get('.confirm').click();
    }
}

export default ProductPage;
