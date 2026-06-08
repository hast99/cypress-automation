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
        // Ini membantu mencegah error yang mungkin terjadi jika kita mencoba untuk berinteraksi dengan elemen yang belum muncul di halaman.
        // clear() digunakan untuk membersihkan input field sebelum kita mengetikkan username baru. Ini memastikan bahwa tidak ada teks yang tersisa dari percobaan sebelumnya yang dapat mempengaruhi hasil tes.
        // type(username) digunakan untuk memasukkan nilai username yang diberikan ke dalam input field setelah memastikan bahwa elemen tersebut sudah terlihat dan membersihkannya terlebih dahulu.
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