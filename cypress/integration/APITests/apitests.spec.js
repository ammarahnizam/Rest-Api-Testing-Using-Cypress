describe('Scenarios to test movie suggestions api', () => {
    it('SHOULD show 200 response for a request', () => {
        cy.request('GET', '/api/v1/suggestions?q=Alien&sortBy=rotten_tomatoes').then((response) => {

            expect(response.status).equal(200);


        });
    });

    it('SHOULD show correct response body when movie name is given and rotten_tomatoes is used as sorting key', () => {
        cy.request('GET', '/api/v1/suggestions?q=Alien&sortBy=rotten_tomatoes').then((response) => {
            expect(response.body[0]).to.include({ rotten_tomatoes: "R3", film: "Alien" });

        });
    });

    it('SHOULD show correct response body when movie name is given and audience_score is used as sorting key', () => {
        cy.request('GET', '/api/v1/suggestions?q=Avatar&sortBy=audience_score').then((response) => {
            expect(response.body[0]).to.include({ audience_score: "8", film: "Avatar" });

        });
    });


    it('SHOULD show a single movie suggestion as response if movie name is "Persona and no sorting key is selected"', () => {
        cy.request('GET', '/api/v1/suggestions?q=Persona').then((response) => {
            expect(response.body).to.have.lengthOf(1);

        });
    });

    it('SHOULD show an empty response if no movie name and sorting key are provided', () => {
        cy.request('GET', '/api/v1/suggestions?q=--').then((response) => {
            expect(response.body).to.be.empty;

        });
    });

    it('SHOULD show an empty response if wrong movie name is provided and no sorting key is selected', () => {
        cy.request('GET', '/api/v1/suggestions?q=owl').then((response) => {
            expect(response.body).to.be.empty;

        });
    });


    it('SHOULD show an empty response if no movie name is provided and sorting key "rotten tomatoes" is selected', () => {
        cy.request('GET', '/api/v1/suggestions?q=--&sortBy=rotten_tomatoes').then((response) => {
            expect(response.body).to.be.empty;

        });
    });


    it('SHOULD show an empty response if no movie name is provided and sorting key "audience score" is selected', () => {
        cy.request('GET', '/api/v1/suggestions?q=--&sortBy=audience_score').then((response) => {
            expect(response.body).to.be.empty;

        });
    });

    it('Validate the header', () => {
        cy.request('/api/v1/suggestions?q=Jaws')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });


});