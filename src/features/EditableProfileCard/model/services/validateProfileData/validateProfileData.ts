import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NoData];
    }

    const {
        firstName, lastName, age, country,
    } = profile;

    const errors: ValidateProfileError[] = [];

    if (!firstName || !lastName) {
        errors.push(ValidateProfileError.FirstAndLastNameRequired);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.AgeRequired);
    }

    if (age && age < 0) {
        errors.push(ValidateProfileError.AgeInvalid);
    }

    if (!country) {
        errors.push(ValidateProfileError.CountryRequired);
    }

    return errors;
};
