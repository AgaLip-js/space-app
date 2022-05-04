// .storybook/preview.js
import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

import { theme } from '../src/theme/MainTheme';

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [theme]));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: [
      { name: 'dark', value: '#173248' },
      { name: 'light', value: '#17324885' },
      { name: 'white', value: 'white' },
      { name: 'gold', value: '#d8af54' },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}