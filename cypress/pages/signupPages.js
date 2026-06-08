class signupPages {
    elements = {
        signupHeader: () => cy.get('#signin2'),
        usernameInput: () => cy.get('#sign-username'),
        passwordInput: () => cy.get('#sign-password'),
        signupButton: () => cy.contains('button', 'Sign up')
    }

    openSignupModal() {
        this.elements.signupHeader().click();
    }

    enterUsername(username) {
        this.elements.usernameInput().should('be.visible').clear().type(username);
    }

    enterPassword(password) {
        this.elements.passwordInput().should('be.visible').clear().type(password);
    }

    clickSignup() {
        this.elements.signupButton().click();
    }

    signup(username, password) {
        this.openSignupModal();
        if (username) {
            this.enterUsername(username);
        }
        if (password) {
            this.enterPassword(password);
        }
        this.clickSignup();
    }
}

export default new signupPages();