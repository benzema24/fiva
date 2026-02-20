import { createContext, useContext, useEffect, useState, useMemo, ReactNode } from 'react';
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import { createCustomTheme } from '../theme/muiTheme';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Wrapper component to isolate Figma props
function ThemeWrapper({ children }: { children: ReactNode }) {
  return <div style={{ display: 'contents' }}>{children}</div>;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
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

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <ThemeWrapper>
        <MUIThemeProvider theme={muiTheme}>
          <CssBaseline />
          {children}
        </MUIThemeProvider>
      </ThemeWrapper>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}