/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dusk: {
          950: '#07040D',
          900: '#0D0818',
          850: '#120C22',
          800: '#170F2C',
          750: '#1E1538',
          700: '#261B46',
          border: 'rgba(168, 85, 247, 0.18)',
          'border-hover': 'rgba(192, 132, 252, 0.35)',
        },
        accent: {
          DEFAULT: '#C084FC', // radiant lavender
          light: '#E9D5FF',
          dark: '#A855F7',
          deep: '#9333EA',
          magenta: '#D946EF',
          glow: 'rgba(168, 85, 247, 0.4)',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
          highlight: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(168, 85, 247, 0.25)',
        'glow-md': '0 0 30px rgba(168, 85, 247, 0.35)',
        'glow-lg': '0 0 50px rgba(168, 85, 247, 0.45)',
        'glow-magenta': '0 0 30px rgba(217, 70, 239, 0.35)',
        'pill': '0 4px 20px -2px rgba(168, 85, 247, 0.4)',
        'card-dusk': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(168, 85, 247, 0.15)',
      },
      backgroundImage: {
        'dusk-aurora': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(168, 85, 247, 0.28), rgba(217, 70, 239, 0.12), transparent 70%)',
        'purple-radial': 'radial-gradient(circle at 50% 40%, rgba(147, 51, 234, 0.22) 0%, transparent 60%)',
        'pill-gradient': 'linear-gradient(135deg, #A855F7 0%, #D946EF 100%)',
        'glass-gradient': 'linear-gradient(180deg, rgba(23, 15, 44, 0.75) 0%, rgba(13, 8, 24, 0.85) 100%)',
      },
      animation: {
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 5s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '0.9', transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
