describe('Canada', () => {
    it('edit passagem', () => {
        cy.visit('https://www.aircanada.com/us/en/aco/home.html');

        cy.get('#bkmg-tab-button-flight > abc-ripple.ng-star-inserted > .abc-ripple-wrapper').click();

        cy.get('#bkmgFlights_origin_trip_1').click();

        cy.get('#bkmgFlights_origin_trip_1').type ('São Paulo');

        cy.get('#bkmgFlights_destination_trip_1').type('Toronto');

        cy.get('#bkmgFlights_travelDates_1-formfield-1').click();

        cy.get('#bkmgFlights_travelDates_1-date-2022-03-21 > .date').click();

        cy.get('#bkmgFlights_travelDates_1-date-2022-03-31 > .date').click();

        cy.get('#bkmgFlights_travelDates_1-formfield-2').click();

        cy.get('#bkmgFlights_travelDates_1_confirmDates > .ng-star-inserted > .abc-ripple-wrapper').click();

        cy.get('#bkmgFlights_travelDates_1_confirmDates > .ng-star-inserted > .abc-ripple-wrapper').click();

        cy.get('#bkmgFlights_findButton > .ng-star-inserted > .abc-ripple-wrapper').click();
    });
});