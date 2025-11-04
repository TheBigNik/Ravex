export const ravexTheme = {
  colors: {
    background: '#0A090C',
    surface: '#F5F3F5',
    primary: '#4BB3FD',
    accent: '#CAFE48',
    royal: '#0E34A0',
    textPrimary: '#0A090C',
    textInverse: '#F5F3F5',
    textMuted: 'rgba(245, 243, 245, 0.64)',
  },
  radius: {
    sm: '12px',
    md: '16px',
    lg: '24px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
  },
  fonts: {
    brand: "'Bolina Script', 'Brush Script MT', cursive",
    ui: "'InterVariable', 'Inter', 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
} as const;

export type RavexTheme = typeof ravexTheme;
