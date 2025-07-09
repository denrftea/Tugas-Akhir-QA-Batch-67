class SignupPage {
    clickSignupLink() {
        cy.get('#signin2').click();
    }

    enterUsername(username) {
        cy.get('#sign-username').type(username);
    }

    enterPassword(password) {
        cy.get('#sign-password').type(password);
    }

    clickSignupButton() {
        cy.get('button[onclick="register()"]').click();
    }
}

export default SignupPage;
