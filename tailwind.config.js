module.exports = {
  content: {
    files: ["./src/**/*.{html,js,ts}", "./public/*.html"],
    transform: {
      tsx: tailwindTransform,
    },
    presets: [
    require('@acmecorp/base-tailwind-config')
    ],
    important: '#blog',
    prefix: 'tw-',
    theme: {
      borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
    },
      spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      },
      screens: {
    'sm': {'min': '640px', 'max': '767px'},
    'md': {'min': '768px', 'max': '1023px'},
    'lg': {'min': '1024px', 'max': '1279px'},
    'xl': {'min': '1280px', 'max': '1535px'},
    '2xl': {'min': '1536px'},
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
     backgroundSize: ({ theme }) => ({
      auto: 'auto',
      cover: 'cover',
      contain: 'contain'
    }),
      colors: {
      'black': '#303a3f',
      'pink': '#e2717f',
      'yellow': '#ffb12b',
      'green': '#def6e5',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
      fontFamily: {
      sans: [
        'ui-sans-serif', 'system-ui', 'Inter var, sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
      ],
    },
    extend: {
      filter: ['hover', 'focus'],
    },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }) {
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/container-queries'),
    })
  ],
  }
}
