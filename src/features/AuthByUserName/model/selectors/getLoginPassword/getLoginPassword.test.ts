import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '../../../../../app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginIsLoading.test', () => {
    test('should return password value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'password123'
            }
        };
        expect(getLoginPassword(state as StateSchema)).toEqual("password123");
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual("");
    });
});
