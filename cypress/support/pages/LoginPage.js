class LoginPage {
    clickLoginLink() {
        cy.get('#login2').click();
    }

    enterUsername(username) {
        cy.get('#loginusername').type(username);
    }

    enterPassword(password) {
        cy.get('#loginpassword').type(password);
    }

    clickLoginButton() {
        cy.get('button[onclick="logIn()"]').click();
    }
}

export default LoginPage;
