import { Profile } from '@/entities/Profile';

export enum ValidateProfileError {
    FirstAndLastNameRequired = 'First and Last name are required',
    AgeRequired = 'Age is required',
    AgeInvalid = 'Age must be a positive integer',
    CountryRequired = 'Country is required',
    NoData = 'No data',
    ServerError = 'Server error'
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateError?: ValidateProfileError[];
}
