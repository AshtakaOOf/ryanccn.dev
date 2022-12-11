const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{11ty.js,njk,liquid}',
    './src/_11ty/shortcodes/*.js',
    './src/assets/scripts/inlinedScript.ts',
  ],
  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
        satoshi: ['Satoshi', ...defaultTheme.fontFamily.sans],
      },

      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              'font-style': 'normal',
            },
            'blockquote p:first-of-type::before': {
              content: '',
            },
            'blockquote p:last-of-type::after': {
              content: '',
            },
          },
        },
      },

      colors: ({}) => ({
        brand: {
          hn: '#F0652F',
          twitter: '#1DA1F2',
          github: '#181717',
          mastodon: '#6364FF',
          kofi: '#FF5E5B',
          discord: '#5865F2',
        },

        tag: {
          1: 'rgb(var(--ctp-red))',
          2: 'rgb(var(--ctp-peach))',
          3: 'rgb(var(--ctp-green))',
          4: 'rgb(var(--ctp-blue))',
          0: 'rgb(var(--ctp-lavender))',
        },
      }),
    },
  },

  variants: {
    extend: {},
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@catppuccin/tailwindcss')({
      prefix: 'ctp',
      // defaultFlavor: 'latte',
    }),
  ],
};
