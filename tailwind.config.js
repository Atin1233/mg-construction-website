module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#FEF3E6',
          200: '#FCE4C0',
          300: '#FAD59A',
          400: '#F7B64F',
          500: '#F49803',
          600: '#DC8803',
          700: '#926502',
          800: '#6E4E02',
          900: '#493701',
        },
        construction: {
          orange: '#F49803',
          darkGray: '#2D3748',
          mediumGray: '#4A5568',
          lightGray: '#EDF2F7',
          concrete: '#C4C4C4',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};
