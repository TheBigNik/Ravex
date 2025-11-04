import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './popup.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        royal: 'var(--color-royal)',
        text: {
          primary: 'var(--color-text-primary)',
          inverse: 'var(--color-text-inverse)',
          muted: 'var(--color-text-muted)',
        },
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      fontFamily: {
        sans: ['var(--font-ui)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-brand)', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
      },
    },
  },
  plugins: [],
};
