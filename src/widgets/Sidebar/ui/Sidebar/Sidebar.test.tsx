import { fireEvent, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { Sidebar } from './Sidebar';
import { renderComponent } from '../../../../shared/lib/tests/componentRender/componentRender';

describe('sidebar', () => {
    test('Test render', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        renderComponent(<SidebarWithTranslation />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toggle', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        renderComponent(<SidebarWithTranslation />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
