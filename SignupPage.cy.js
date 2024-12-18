// // signupPage.js
// class SignupPage {
//   // Locators
//   get nameInput() {
//     return cy.get('input[name="FullName"]');
//   }

//   get emailInput() {
//     return cy.get('input[name="Email"]');
//   }

//   get passwordInput() {
//     return cy.get('input[name="Password"]');
//   }

//   get signupButton() {
//     return cy.get('input[type="submit"]');
//   }

//   // Methods
//   fillSignupForm(name, email, password) {
//     this.nameInput.type(name);
//     this.emailInput.type(email);
//     this.passwordInput.type(password);
//   }

//   submitForm() {
//     this.signupButton.click();
//   }

//   verifyFields(name, email, password) {
//     this.nameInput.should('have.value', name);
//     this.emailInput.should('have.value', email);
//     this.passwordInput.should('have.value', password);
//   }
// }

// export default new SignupPage();


// signupPage.js
class SignupPage {
  visit() {
    cy.visit('https://www.ha.am/%d5%ab%d5%b4-%d5%b0%d5%a1%d5%b7%d5%ab%d5%be%d5%a8/');
  }

  fillFirstName(name) {
    cy.get('input[name="billing_first_name"]').type(name);
  }

  fillLastName(surname) {
    cy.get('input[name="billing_last_name"]').type(surname);
  }

  fillEmail(email) {
    cy.get('input[name="email"]').type(email);
  }

  fillPhone(phone) {
    cy.get('input[name="billing_phone"]').type(phone);
  }

  fillPassword(password) {
    cy.get('#reg_password').type(password);
  }
}

export default SignupPage;
