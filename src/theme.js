import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
        white: {
          800: '#FAFAFA',
          900: '#FFFFFF',
        },
        grey: {
          100: '#FAFAFA',
          200: '#FAFAFA',
          300: '#FAFAFA',
          400: '#FAFAFA',
          500: '#FAFAFA', // For Gret Text
          600: '#FAFAFA',
          700: '#FAFAFA',
          800: '#FAFAFA',
          900: '#FAFAFA', //
        },
        primary: {
          100: '#FAFAFA',
          200: '#FAFAFA',
          300: '#FAFAFA',
          400: '#FAFAFA',
          500: '#FAFAFA', // For Gret Text
          600: '#FAFAFA',
          700: '#FAFAFA',
          800: '#FAFAFA',
          900: '#FAFAFA', //
        },
        greenAccent: {
          100: '#FAFAFA',
          200: '#FAFAFA',
          300: '#FAFAFA',
          400: '#FAFAFA',
          500: '#FAFAFA', // For Gret Text
          600: '#FAFAFA',
          700: '#FAFAFA',
          800: '#FAFAFA',
          900: '#FAFAFA', //
        },
        redAccent: {
          100: '#FAFAFA',
          200: '#FAFAFA',
          300: '#FAFAFA',
          400: '#FAFAFA',
          500: '#FAFAFA', // For Gret Text
          600: '#FAFAFA',
          700: '#FAFAFA',
          800: '#FAFAFA',
          900: '#FAFAFA', //
        },
        blueAccent: {
          100: '#FAFAFA',
          200: '#FAFAFA',
          300: '#FAFAFA',
          400: '#FAFAFA',
          500: '#FAFAFA', // For Gret Text
          600: '#FAFAFA',
          700: '#FAFAFA',
          800: '#FAFAFA',
          900: '#FAFAFA', //
        },
        sideBarShadow: {
          100: '#FAFAFA',
          200: '#FAFAFA',
          300: '#FAFAFA',
          400: '#FAFAFA',
          500: '#FAFAFA', // For Gret Text
          600: '#FAFAFA',
          700: '#FAFAFA',
          800: '#FAFAFA',
          900: '#FAFAFA', //
        },
      }
    : {
        white: {
          100: '#FAFAFA',
          200: '#FAFAFA',
          300: '#FAFAFA',
          400: '#FAFAFA',
          500: '#FAFAFA', // For Gret Text
          600: '#FAFAFA',
          700: '#FAFAFA',
          800: '#FAFAFA',
          900: '#FAFAFA', //
        },
        grey: {
          100: '#FAFAFA',
          200: '#FAFAFA',
          300: '#FAFAFA',
          400: '#FAFAFA',
          500: '#FAFAFA', // For Gret Text
          600: '#FAFAFA',
          700: '#FAFAFA',
          800: '#FAFAFA',
          900: '#FAFAFA', //
        },
        primary: {
          100: '#FAFAFA',
          200: '#FAFAFA',
          300: '#FAFAFA',
          400: '#FAFAFA',
          500: '#FAFAFA', // For Gret Text
          600: '#FAFAFA',
          700: '#FAFAFA',
          800: '#FAFAFA',
          900: '#FAFAFA', //
        },
        greenAccent: {
          100: '#FAFAFA',
          200: '#FAFAFA',
          300: '#FAFAFA',
          400: '#FAFAFA',
          500: '#FAFAFA', // For Gret Text
          600: '#FAFAFA',
          700: '#FAFAFA',
          800: '#FAFAFA',
          900: '#FAFAFA', //
        },
        redAccent: {
          100: '#FAFAFA',
          200: '#FAFAFA',
          300: '#FAFAFA',
          400: '#FAFAFA',
          500: '#FAFAFA', // For Gret Text
          600: '#FAFAFA',
          700: '#FAFAFA',
          800: '#FAFAFA',
          900: '#FAFAFA', //
        },
        blueAccent: {
          100: '#FAFAFA',
          200: '#FAFAFA',
          300: '#FAFAFA',
          400: '#FAFAFA',
          500: '#FAFAFA', // For Gret Text
          600: '#FAFAFA',
          700: '#FAFAFA',
          800: '#FAFAFA',
          900: '#FAFAFA', //
        },
        sideBarShadow: {
          100: '#FAFAFA',
          200: '#FAFAFA',
          300: '#FAFAFA',
          400: '#FAFAFA',
          500: '#FAFAFA', // For Gret Text
          600: '#FAFAFA',
          700: '#FAFAFA',
          800: '#FAFAFA',
          900: '#FAFAFA', //
        },
        solids: {
          black: '#000000',
          white: '#FFFFFF',
          purple: '#C792C8',
          purpleBright: '#C25BC5',
          orange: '#ECC283',
          orangeBright: '#D48B1D',
          green: '#BDEE77',
          mainButton: '#72B216',
          pinkBright: '#DB66A5',
        },
        extra: {
          iconBackground: '#E7F4F8',
          grey1: '#363636',
          grey2: '#757575',
          grey3: '#A7A7A7',
          grey4: '#D8D8D8',
          grey5: '#ECECEC',
        },
        likertScale: {
          left: '#EC9C83',
          right: '#BDEE77',
          thumb: '#757575',
          mark: '#757575',
        },
        verticalFiller: {
          100: '#FAFAFA',
          200: '#FAFAFA',
          300: '#FAFAFA',
          400: '#FAFAFA',
          500: '#FAFAFA', // For Gret Text
          600: '#FAFAFA',
          700: '#FAFAFA',
          800: '#FAFAFA',
          900: '#FAFAFA', //
        },
        personality: {
          openness: '#51B4CB',
          conscientious: '#DA78AD',
          extraversion: '#D39A45',
          agreeableness: '#8EC144',
          neuroticism: '#C775C9',
        },
        parentDashboard: {
          1: '#E9E6D1',
        },
        subjectsFocus: {
          100: '#BDEE77',
          200: '#ECC283',
          300: '#A1D8E4',
          400: '#FC99CE',
          500: '#C792C8',
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: '#fcfcfc',
            },
          }),
    },
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
