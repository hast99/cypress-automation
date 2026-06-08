class ProductPages {

    elements = {
        nameProduct: (productName) => cy.contains('a', productName),
        addToCartButton: () => cy.contains('a', 'Add to cart'),
        categoryProduct: (category) => cy.contains('a', category),
        cartButton: () => cy.contains('a', 'Cart'),
        placeOrderButton: () => cy.contains('button', 'Place Order'),
        purchaseButton: () => cy.contains('button', 'Purchase'),
        alertMessage: () => cy.get('.sweet-alert'),
        successMessage: () => cy.contains('h2', 'Thank you for your purchase!'),
        okButton: () => cy.contains('button', 'OK'),
        homeButton: () => cy.contains('a', 'Home')
    }

    addMoreProduct(category, productName) {
        this.elements.homeButton().click();

        this.elements.categoryProduct(category)
            .should('be.visible')
            .click();

        this.elements.nameProduct(productName)
            .should('be.visible')
            .click();

        cy.on('window:alert', (text) => {
            expect(text).to.equal('Product added.');
        });

        this.elements.addToCartButton()
            .should('be.visible')
            .click();
    }

    fillOrderForm(name, country, city, card, month, year) {
        this.elements.cartButton().click();
        cy.wait(2000)
        this.elements.placeOrderButton().click();

        if (name) cy.get('#name').type(name);
        cy.wait(500)
        if (country) cy.get('#country').type(country);
        cy.wait(500)
        if (city) cy.get('#city').type(city);
        cy.wait(500)
        if (card) cy.get('#card').type(card);
        cy.wait(500)
        if (month) cy.get('#month').type(month);
        cy.wait(500)
        if (year) cy.get('#year').type(year);

        this.elements.purchaseButton().click();
    }

    verifyPurchaseSuccess() {
        this.elements.alertMessage().should('be.visible');
        this.elements.successMessage().should('be.visible');
        this.elements.okButton().click();
    }
}

export default new ProductPages();