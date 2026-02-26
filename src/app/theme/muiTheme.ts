import { createTheme } from '@mui/material/styles';

export const createCustomTheme = (mode: 'light' | 'dark') => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#2A3F5C' : '#223A5C',
        light: '#3E5068',
        dark: '#0F2A4A',
      },
      secondary: {
        main: '#C4993B',
        light: '#D4BA7A',
        dark: '#A67D2A',
      },
      background: {
        default: mode === 'dark' ? '#0A1628' : '#FDFCFA',
        paper: mode === 'dark' ? '#11203A' : '#F7F5F0',
      },
      text: {
        primary: mode === 'dark' ? '#FFFFFF' : '#0F2A4A',
        secondary: mode === 'dark' ? '#B8C5D6' : '#3E5068',
      },
      divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.12)',
      accent: {
        main: '#C4993B',
        light: '#D4BA7A',
        dark: '#A67D2A',
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