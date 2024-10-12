let profileId : string;

describe('User opens his profile page', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`/profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Profile successfully opens', () => {
        cy.getByTestId('ProfileCard.FirstName').should('have.value', 'test');
    });
    it('User edits profile', () => {
        const newFirstName = 'John';
        const newLastName = 'Doe';
        cy.updateProfile(newFirstName, newLastName);
        cy.getByTestId('ProfileCard.FirstName').should('have.value', newFirstName);
        cy.getByTestId('ProfileCard.LastName').should('have.value', newLastName);
    });
});
