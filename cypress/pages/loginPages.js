class LoginPage {

    elements = {
        loginHeader: () => cy.get('#login2'),
        usernameInput: () => cy.get('#loginusername'),
        passwordInput: () => cy.get('#loginpassword'),
        loginButton: () => cy.contains('button', 'Log in'),
        welcomeUser: () => cy.get('#nameofuser')
    }

    openLoginModal(){
        this.elements.loginHeader().click();
    }

    enterUsername(username){
        this.elements.usernameInput().should('be.visible').clear().type(username);
        // should('be.visible') digunakan untuk memastikan bahwa elemen input username sudah terlihat sebelum kita mencoba untuk mengisinya. 
        // clear() digunakan untuk membersihkan input field sebelum kita mengetikkan username baru.
    }

    enterPassword(password){
        this.elements.passwordInput().should('be.visible').clear().type(password);
    }

    clickLogin(){
        this.elements.loginButton().click();
    }

    login(username, password){
        this.openLoginModal();
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }

    verifyLoginSuccess(username){
        this.elements.welcomeUser().should('contain.text', `Welcome ${username}`);
    }
}

export default new LoginPage();