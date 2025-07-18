import SignupPage from '../support/pages/SignupPage';
import LoginPage from '../support/pages/LoginPage';
import ProductPage from '../support/pages/ProductPage';

const signupPage = new SignupPage();
const loginPage = new LoginPage();
const productPage = new ProductPage();

describe('Demoblaze Automation Test Flow', () => {
    const username = 'denrftea';
    const password = '123456abc';

    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/index.html');
    });

    it('Sign up a new user successfully', () => {
        signupPage.clickSignupLink();
        cy.wait(1000); 
        signupPage.enterUsername(username);
        signupPage.enterPassword(password);
        signupPage.clickSignupButton();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contain('Sign up successful');
        });
    });

    it('Login with the newly created user', () => {
        loginPage.clickLoginLink();
        cy.wait(1000); 
        loginPage.enterUsername(username);
        loginPage.enterPassword(password);
        loginPage.clickLoginButton();
        cy.get('#nameofuser').should('contain', 'Welcome');
    });

    it('Add product to cart and complete checkout process', () => {
        productPage.addFirstProductToCart();
        cy.wait(1000);
        productPage.goToCart();
        cy.wait(1000);
        productPage.placeOrder();
    });
});
