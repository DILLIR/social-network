import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

const data = {
    username: 'admin',
    age: 20,
    country: Country.UK,
    lastName: 'Doe',
    firstName: 'John',
    city: 'London',
    currency: Currency.USD,
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({
            ...data,
            firstName: '',
            lastName: '',
        });

        expect(result).toEqual([ValidateProfileError.FirstAndLastNameRequired]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({
            ...data,
            age: -1,
        });

        expect(result).toEqual([ValidateProfileError.AgeInvalid]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({
            ...data,
            country: undefined,
        });

        expect(result).toEqual([ValidateProfileError.CountryRequired]);
    });

    test('incorrect everything', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.FirstAndLastNameRequired,
            ValidateProfileError.AgeRequired,
            ValidateProfileError.CountryRequired,
        ]);
    });
});
