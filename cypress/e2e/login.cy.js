import LoginPage from '../pages/loginPages.js';

describe('Login Demoblaze', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/');
    });

    it('Login Successfully',{ tags: ['smoke' , 'sanity', 'regression'] }, () => {
        LoginPage.login('paijo123', 'paijo1234');
        LoginPage.verifyLoginSuccess('paijo123');
    });
})