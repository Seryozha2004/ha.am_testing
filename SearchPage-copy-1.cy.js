// // searchPage.js
// class SearchPage {
//   // Elements
//   get searchInput() {
//     return cy.get('input[data-live-placeholder="փնտրիր ըստ պաշտոնի,փնտրիր ըստ մասնագիտության,փնտրիր ըստ կազմակերպության"]');
//   }

//   get searchButton() {
//     return cy.get('button[type="submit"]');
//   }

//   // Methods
//   search(query) {
//     this.searchInput.type(query);
//     this.searchButton.click();
//   }

//   verifySearchInput(query) {
//     this.searchInput.should('have.value', query);
//   }

//   verifySearchQueryVisible(query) {
//     cy.contains(query).should('be.visible');
//   }
// }

// export default new SearchPage();


// searchPage.js
class SearchPage {
  visit() {
    cy.visit('https://ha.am');
  }

  enterSearchQuery(query) {
    cy.get('input[type="text"]').type(query);
  }

  submitSearch() {
    cy.get('button[type="submit"]').click();
  }

  verifySearchResultsVisible() {
    cy.get('input[placeholder="search"]').should('be.visible');
  }

  verifyNoResultsMessage() {
    cy.get('input[type="text"]').should('have.value', ''); 
  }
}

export default SearchPage;
