export const updateProfile = (firstName: string, lastName: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.FirstName').clear().type(firstName);
    cy.getByTestId('ProfileCard.LastName').clear().type(lastName);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: {
        Authorization: 'Bearer'
    },
    body: {
        id: '5',
        firstName: 'test',
        lastName: 'user',
        age: 20,
        currency: 'EUR',
        country: 'USA',
        city: 'Ivano-Frankivsk',
        username: 'dillir',
        avatar: 'https://avatars.githubusercontent.com/u/44670502?v=1'
    }
});

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            updateProfile(firstName: string, lastName: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
