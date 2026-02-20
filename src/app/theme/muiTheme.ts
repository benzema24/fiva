import { createTheme } from '@mui/material/styles';

export const createCustomTheme = (mode: 'light' | 'dark') => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#3B82F6' : '#1E40AF',
        light: '#60A5FA',
        dark: '#1E3A8A',
      },
      secondary: {
        main: '#f0b51d',
        light: '#F59E0B',
        dark: '#D97706',
      },
      background: {
        default: mode === 'dark' ? '#0A0A0A' : '#FFFFFF',
        paper: mode === 'dark' ? '#1A1A1A' : '#F9FAFB',
      },
      text: {
        primary: mode === 'dark' ? '#F9FAFB' : '#0A0A0A',
        secondary: mode === 'dark' ? '#9CA3AF' : '#6B7280',
      },
    },
    typography: {
      fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
      h1: {
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontWeight: 700,
        letterSpacing: '-0.01em',
      },
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollBehavior: 'smooth',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
          },
        },
      },
    },
  });
};
