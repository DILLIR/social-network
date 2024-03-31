import { Theme } from '../../../../app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (Theme: Theme) => (Story: any) => (
    <div
        className={`app ${Theme}`}
        style={{
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            // width: '100dvw',
            // height: '100dvh',
        }}
    >
        {Story()}
    </div>
);
