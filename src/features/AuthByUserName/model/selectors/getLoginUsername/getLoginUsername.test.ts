import { StateSchema } from '../../../../../app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginIsLoading.test', () => {
    test('should return username value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'adminQwertt',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('adminQwertt');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
