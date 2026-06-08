import LoginPage from '../pages/loginPages.js';
import ProductPage from '../pages/productPages.js';

describe('Product Demoblaze', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/');
        LoginPage.login('paijo123', 'paijo1234');
    });

    it('Add Product to Cart', { tags: ['smoke', 'sanity', 'regression'] }, () => {
        ProductPage.addMoreProduct('Phones','Samsung galaxy s6');
    });
    it('Add 2 Product to Cart and Place Order', { tags: ['smoke', 'sanity', 'regression'] }, () => {
        ProductPage.addMoreProduct('Phones','Nokia lumia 1520');
        cy.wait(1000)
        ProductPage.addMoreProduct('Phones', 'Nexus 6');
        cy.wait(1000)
        ProductPage.fillOrderForm('Paijo', 'Indonesia', 'Jakarta', '1234567890123456', '12', '2025');
        cy.wait(1000)
        ProductPage.verifyPurchaseSuccess();
    });
    it('Add phone,laptop, monitor to cart', { tags: ['regression'] }, () => {
        ProductPage.addMoreProduct('Phones', 'Nokia lumia 1520');
        ProductPage.addMoreProduct('Laptops', 'Sony vaio i5');
        ProductPage.addMoreProduct('Monitors', 'Apple monitor 24');
        ProductPage.fillOrderForm('Paijo', 'Indonesia', 'Jakarta', '1234567890123456', '12', '2025');
        ProductPage.verifyPurchaseSuccess();
    });
    it('Blank chart and empty order fields', { tags: ['regression'] }, () => {
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Please fill out Name and Creditcard.');
        });

        ProductPage.fillOrderForm('', '', '', '', '', '');
        cy.on('window:alert', (text) => {
            console.log('ALERT:', text); // Log the alert text for debugging
        });
    });
})