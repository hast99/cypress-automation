import signupPages from '../pages/signupPages.js';

describe('Signup Demoblaze', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/');
    });

    it('Signup Successfully', { tags: ['smoke', 'regression'] }, () => {
        const username = `user${Date.now()}`;
        const password = 'password123';
        signupPages.signup(username, password);
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Sign up successful.');
        });
    });

    it('Signup with existing username', { tags: ['regression'] }, () => {
        const existingUsername = 'paijo123';
        const password = 'paijo1234';
        signupPages.signup(existingUsername, password);
        cy.on('window:alert', (str) => {
            expect(str).to.equal('This user already exist.');
        });
    });

    it('Signup with empty username', { tags: ['regression'] }, () => {
        const password = 'password123';
        signupPages.signup('', password);
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.');
        });
        cy.wait(2000);
    });

    it('Signup with empty password', { tags: ['regression'] }, () => {
        const username = `user${Date.now()}`;
        signupPages.signup(username, '');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.');
        });
        cy.wait(2000);
    });

})