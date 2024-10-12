import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';
import { User } from '../../../src/entities/User/model/types/user';
import { selectByTestID } from '../../helpers/selectByTestID';

export const login = (username = 'testuser', password = '123') => {
    cy.log(`Logging in as ${username}`);

    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/login',
            body: {
                username,
                password
            }
        })
        .then(({ body }) => {
            window.localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(body)
            );
            return body;
        });
};

export const getByTestId = (id: string) => cy.get(selectByTestID(id));

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            login(email?: string, password?: string): Chainable<User>;
            getByTestId(id: string): Chainable<ReturnType<typeof cy.get>>;
        }
    }
}
