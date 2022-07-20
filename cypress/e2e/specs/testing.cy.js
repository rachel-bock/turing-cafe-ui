describe('Test Cafe Reservations', () => {

  beforeEach (() => {
    cy.visit('http://localhost:3000');
  }) 


  it('visits the homepage', () => {
    cy.visit('http://localhost:3000');
  });

  it('should contain a form', () => {
    cy.get("h1")
      .contains('Turing Cafe Reservations');
  });

  it('should contain 9 prior reservations', () => {
    cy.get(".reservation-card")
      .should("have.length", 11);
  });

  it('Can populate the reservation form', () => {
    cy.get("input").first()
    .type("Rachel")
    .should("have.value", "Rachel")
    .next().type("12/28")
    .should("have.value", "12/28")
    .next().type("12:00")
    .should("have.value", "12:00")
    .next().type("2")
    .should("have.value", 2)
  });

  it('Can create a new reservation', () => {
    cy.get("input").first()
    .type("Rachel")
    .next().type("12/28")
    .next().type("12:00")
    .next().type("2")
    .get("button").first().click()
  });

})