import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

const data = {
    username: 'admin',
    age: 20,
    country: Country.UK,
    lastName: 'Doe',
    firstName: 'John',
    city: 'London',
    currency: Currency.USD
};

describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toBeCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error update profile', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        });
        thunk.api.put.mockReturnValue(
            Promise.resolve({
                status: 403
            })
        );
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.ServerError]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {...data, lastName: ''}
            }
        });
       
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.FirstAndLastNameRequired]);
    });
});
