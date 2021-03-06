module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        12: 'repeat(12, minmax(0, 1fr))',
      },
      width: {
        xl: '1280px',
      },
      backgroundColor: (theme) => ({
        button: 'var(--bg-button)',
        buttonFocused: 'var(--bg-button__hover)',
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
  plugins: [],
};
