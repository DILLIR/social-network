import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18n from '@/shared/config/i18n/i18ForTests';
import { ThemeProvider } from '@/app/providers/ThemeProvider/testing';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line fs-path-checker/layer-imports
import '@/app/styles/index.scss';

interface RenderComponentOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: Theme;
}

interface TestProviderProps {
    children: ReactNode;
    options?: RenderComponentOptions;
}

export function TestProvider({ children, options = {} }: TestProviderProps) {
    const {
        route = '/',
        initialState,
        asyncReducers,
        theme = Theme.LIGHT
    } = options;
    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                asyncReducers={asyncReducers}
                initialState={initialState}
            >
                <I18nextProvider i18n={i18n}>
                    <ThemeProvider initialTheme={theme}>
                        <div className={`app ${theme}`}>{children}</div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}

export function componentRender(
    component: ReactNode,
    options: RenderComponentOptions = {}
) {
    return render(<TestProvider options={options}>{component}</TestProvider>);
}
