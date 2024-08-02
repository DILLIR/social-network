import { Country } from "entities/Country/types/country";
import { Currency } from "entities/Currency/types/currency";

export enum ValidateProfileError {
    FirstAndLastNameRequired = 'First and Last name are required',
    AgeRequired = 'Age is required',
    AgeInvalid = 'Age must be a positive integer',
    CountryRequired = 'Country is required',
    NoData = 'No data',
    ServerError = 'Server error'
}


export interface Profile {
    firstName?: string;
    lastName?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateError?: ValidateProfileError[];
}
