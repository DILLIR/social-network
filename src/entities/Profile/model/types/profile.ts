import { Country } from 'entities/Country/types/country';
import { Currency } from 'entities/Currency/types/currency';

export interface Profile {
    id?: string;
    firstName?: string;
    lastName?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

