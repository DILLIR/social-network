import { fireEvent, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('sidebar', () => {
    test('Test render', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        componentRender(<SidebarWithTranslation />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toggle', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        componentRender(<SidebarWithTranslation />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
