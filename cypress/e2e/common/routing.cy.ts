import { selectByTestID } from '../../helpers/selectByTestID';

describe('Routing', () => {
    describe('Unauthorized user', () => {
        it('Open main page', () => {
            cy.visit('/');
            cy.get(selectByTestID('MainPage')).should('exist');
        });
        it('Open profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestID('MainPage')).should('exist');
        });
        it('Open non existing page', () => {
            cy.visit('/sdfsdfsdfsdfsdf');
            cy.get(selectByTestID('NotFoundPage')).should('exist');
        });
    });
    describe('Authorized user', () => {
        beforeEach(() => {
            cy.login();
        });

        it('Open main page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestID('ProfilePage')).should('exist');
        });

        it('Open articles page', () => {
            cy.visit('/articles');
            cy.get(selectByTestID('ArticlesPage')).should('exist');
        });
    });
});
