import { createContext, useContext, useEffect, useState, useMemo, ReactNode, FC, createElement } from 'react';
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import { createCustomTheme } from '../theme/muiTheme';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  [key: string]: any; // Allow any props to be passed (including Figma data attributes)
}

export function ThemeProvider({ children, ...figmaProps }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const muiTheme = useMemo(() => createCustomTheme(theme), [theme]);

  // Use createElement to programmatically create MUI ThemeProvider without JSX
  // This prevents Figma props from being forwarded
  const muiProvider = useMemo(
    () => createElement(
      MUIThemeProvider,
      { theme: muiTheme },
      createElement(CssBaseline),
      children
    ),
    [muiTheme, children]
  );

  return createElement(
    ThemeContext.Provider,
    { value: { theme, setTheme, toggleTheme } },
    muiProvider
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}