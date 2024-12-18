// //LoginPage.js
// class LoginPage {
//   constructor() {
//     // Locators
//     this.usernameInput = 'input[name="Email"]';
//     this.passwordInput = 'input[name="Password"]';
//     this.loginButton = 'input[type="submit"]';
//   }

//   visit() {
//     cy.visit('https://job.am/Account/Login');
//   }

//   enterUsername(username) {
//     cy.get(this.usernameInput).type(username);
//   }

//   enterPassword(password) {
//     cy.get(this.passwordInput).type(password);
//   }

//   clearFields() {
//     cy.get(this.usernameInput).clear();
//     cy.get(this.passwordInput).clear();
//   }

//   clickLoginButton() {
//     cy.get(this.loginButton).click();
//   }

//   verifyUsernameValue(value) {
//     cy.get(this.usernameInput).should('have.value', value);
//   }

//   verifyPasswordValue(value) {
//     cy.get(this.passwordInput).should('have.value', value);
//   }
// }

// export const loginPage = new LoginPage();


//LoginPage.js
class LoginPage {
  visit() {
    cy.visit('https://www.ha.am/%d5%ab%d5%b4-%d5%b0%d5%a1%d5%b7%d5%ab%d5%be%d5%a8/');
  }

  fillEmail(email) {
    cy.get('input[name="username"]').type(email);
  }

  fillPassword(password) {
    cy.get('#password').type(password);
  }
}

export default LoginPage;
