import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    username: 'admin',
    age: 20,
    country: Country.UK,
    lastName: 'Doe',
    firstName: 'John',
    city: 'London',
    currency: Currency.USD
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true)
            )
        ).toEqual({
            readonly: true
        });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: {
                username: ''
            }
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit())
        ).toEqual({
            data,
            form: data,
            readonly: true,
            validateErrors: undefined
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {
                username: 'adm'
            }
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    username: 'admin'
                })
            )
        ).toEqual({
            form: {
                username: 'admin'
            }
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.ServerError]
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending)
        ).toEqual({
            isLoading: true,
            validateError: undefined
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateError: [ValidateProfileError.ServerError]
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))
        ).toEqual({
            isLoading: false,
            readonly: true,
            validateErrors: undefined,
            form: data,
            data
        });
    });
});
