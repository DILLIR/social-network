import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18ForTests';

interface RenderComponentOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export function renderComponent(
    component: ReactNode,
    { route = '/', initialState }: RenderComponentOptions = {}
) {
    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}
