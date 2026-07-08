import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        'bg-secondary': '#F6F7F9',
        'bg-tertiary': '#F0F1F4',
        text: '#0B0C0E',
        'text-muted': '#5B5F66',
        'text-faint': '#8A8E96',
        accent: '#3457D5',
        'accent-soft': '#EEF1FC',
        border: {
          DEFAULT: '#E7E8EB',
          strong: '#D7D9DE',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jbmono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: '8px',
        md: '14px',
        lg: '20px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(15,15,20,0.04), 0 1px 1px rgba(15,15,20,0.03)',
        md: '0 8px 24px rgba(15,15,20,0.06), 0 2px 8px rgba(15,15,20,0.04)',
        lg: '0 24px 64px rgba(15,15,20,0.10), 0 8px 24px rgba(15,15,20,0.06)',
      },
      maxWidth: {
        content: '1180px',
      },
      keyframes: {
        pulseRing: {
          '0%': { transform: 'scale(0.6)', opacity: '0.5' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
      animation: {
        'pulse-ring': 'pulseRing 2.2s ease-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
