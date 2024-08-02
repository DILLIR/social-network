import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StateSchema } from '../../../../../app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            username: 'admin',
            age: 20,
            country: Country.UK,
            lastName: 'Doe',
            firstName: 'John',
            city: 'London',
            currency: Currency.USD
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data
            }
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
