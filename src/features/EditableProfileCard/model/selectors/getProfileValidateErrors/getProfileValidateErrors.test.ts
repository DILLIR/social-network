import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

describe('getProfileValidateErrors.test', () => {
    test('should work fine', () => {
        const error = [ValidateProfileError.AgeRequired];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: error,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(error);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
