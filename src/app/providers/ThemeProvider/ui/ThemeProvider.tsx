import { LOCAL_STORAGE_KEY, Theme, ThemeContext } from "../lib/ThemeContext";
import { FC, ReactNode, useMemo, useState } from "react";

interface ThemeProviderProps {
    initialTheme?: Theme;
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider : FC<ThemeProviderProps> = ({children, initialTheme} : {children: ReactNode} & ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider
            value={defaultProps}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
