import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile/model/types/profile';
import { withTranslation } from 'react-i18next';
import { renderComponent } from '../../../../shared/lib/tests/componentRender/componentRender';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';
import { $api } from 'shared/api/api';

const profile: Profile = {
    id: '1',
    username: 'Ihor',
    age: 21,
    country: Country.UK,
    lastName: 'Doe',
    firstName: 'Ihor',
    city: 'London',
    currency: Currency.USD
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile
        },
        user: {
            authData: {
                id: '1'
            }
        }
    },
    asyncReducers: { profile: profileReducer }
};

describe('features/EditableProfileCard', () => {
    test('Test readonly must be switched to false', async () => {
        const ProfileWithTranslation = withTranslation()(EditableProfileCard);
        renderComponent(<ProfileWithTranslation id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton')
        ).toBeInTheDocument();
    });

    test('Test data must be the same after the cancel', async () => {
        const ProfileWithTranslation = withTranslation()(EditableProfileCard);
        renderComponent(<ProfileWithTranslation id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));

        await userEvent.type(
            screen.getByTestId('ProfileCard.FirstName'),
            'John'
        );

        await userEvent.type(
            screen.getByTestId('ProfileCard.LastName'),
            'Doess'
        );

        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('John');
        expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('Doess');

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelButton')
        );

        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('Ihor');
        expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('Doe');
    });

    test('Error must appear', async () => {
        const ProfileWithTranslation = withTranslation()(EditableProfileCard);
        renderComponent(<ProfileWithTranslation id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton')
        );

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });
    
    test("If we don't have errors the PUT request must be sent", async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        const ProfileWithTranslation = withTranslation()(EditableProfileCard);
        renderComponent(<ProfileWithTranslation id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));

        await userEvent.type(
            screen.getByTestId('ProfileCard.FirstName'),
            'John'
        );

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton')
        );

        expect(mockPutReq).toHaveBeenCalled();
    });
});
