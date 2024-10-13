import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteProfile
} from '@/shared/const/router';
import { UserRole } from '@/entities/User';
import AppRouter from './AppRouter';

describe('AppRouter', () => {
    test('Page must be rendered correctly', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout()
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Page not found', async () => {
        componentRender(<AppRouter />, {
            route: '/asfjksdjkfs'
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Redirect unauthorize user onto main page', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('10'),
            initialState: {
                user: {
                    _inited: false
                }
            }
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Access to private page by authorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _inited: true,
                    authData: {}
                }
            }
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('Access denied (missing role)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {}
                }
            }
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Access granted', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {
                        roles: [UserRole.ADMIN]
                    }
                }
            }
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
