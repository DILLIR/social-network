import { BrowserRouter } from 'react-router-dom';
import { Theme } from '../../../../app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const RouterDecorator = (Story: any) => (
    <BrowserRouter>{Story()}</BrowserRouter>
);
