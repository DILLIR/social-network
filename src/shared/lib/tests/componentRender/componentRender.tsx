import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18ForTests';

interface RenderComponentOptions {
    route?: string;
}

export function renderComponent(
    component: ReactNode,
    { route = '/' }: RenderComponentOptions = {}
) {
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
        </MemoryRouter>
    );
}
