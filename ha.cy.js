//search
import SearchPage from './SearchPage-copy-1.cy';

describe('Search Functionality Test', () => {
  const searchPage = new SearchPage();

  beforeEach(() => {
    searchPage.visit();
  });

  it('should display search results when a query is entered', () => {
    const searchQuery = 'test query';
    searchPage.enterSearchQuery(searchQuery);
    searchPage.submitSearch();
    cy.wait(1000);
    searchPage.verifySearchResultsVisible();
  });

  it('should show no results message when no results are found', () => {
    const searchQuery = 'nonexistent query';
    searchPage.enterSearchQuery(searchQuery);
    searchPage.submitSearch();
    cy.wait(1000);
    searchPage.verifyNoResultsMessage();
  });
});

//signup
import SignupPage from './SignupPage.cy';

describe('Signup Functionality Test (Without Confirm Password)', () => {
  const signupPage = new SignupPage();

  beforeEach(() => {
    signupPage.visit();
  });

  it('should disable the submit button when the email format is invalid', () => {
    signupPage.fillFirstName('John');
    signupPage.fillLastName('Doe');
    signupPage.fillEmail('invalidemail');
    signupPage.fillPhone('1234567890');
    signupPage.fillPassword('Password123!');
  });

  it('should disable the submit button when the password is too short', () => {
    signupPage.fillFirstName('John');
    signupPage.fillLastName('Doe');
    signupPage.fillEmail('johndoe@example.com');
    signupPage.fillPhone('1234567890');
    signupPage.fillPassword('Pwd123');
  });

  it('should disable the submit button when the telephone number format is invalid', () => {
    signupPage.fillFirstName('John');
    signupPage.fillLastName('Doe');
    signupPage.fillEmail('johndoe@example.com');
    signupPage.fillPhone('123');
    signupPage.fillPassword('Password123!');
  });

  it('should disable the submit button when required fields are missing', () => {
    cy.get('input[name="billing_first_name"]').clear();
    cy.get('input[name="billing_last_name"]').clear();
    cy.get('input[name="email"]').clear();
    cy.get('input[name="billing_phone"]').clear();
    cy.get('#reg_password').clear();
  });
});

//login
import LoginPage from './LoginPage.cy';

describe('Login Functionality Test', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should disable the login button when email is missing', () => {
    loginPage.fillPassword('Password123!');
  });

  it('should disable the login button when password is missing', () => {
    loginPage.fillEmail('johndoe@example.com');
  });

  it('should not log in with incorrect credentials', () => {
    loginPage.fillEmail('johndoe@example.com');
    loginPage.fillPassword('WrongPassword123!');
  });

  it('should successfully log in with valid credentials', () => {
    loginPage.fillEmail('johndoe@example.com');
    loginPage.fillPassword('Password123!');
  });
});
