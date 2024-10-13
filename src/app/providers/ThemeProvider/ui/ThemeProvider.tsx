import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { useJsonSettings } from '@/entities/User';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({
    children,
    initialTheme
}: ThemeProviderProps) => {
    const { theme: defaultTheme = Theme.LIGHT } = useJsonSettings();

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    useEffect(() => {
        if (defaultTheme) {
            setTheme(defaultTheme);
        }
    }, [defaultTheme]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme
        }),
        [theme]
    );

    document.body.className = theme;

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
