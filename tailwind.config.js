/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ice-white': '#F8FAFC',
        'cobalt-blue': '#1D4ED8',
        'sky-blue': '#3882F6',
        'aqua-blue': '#0EA5E9',
        'charcoal-slate': '#1F2937',
        'soft-blue': '#DBEAFE',
        'card-white': '#FFFFFF',
        // Semantic aliases
        primary: {
          DEFAULT: '#1D4ED8',
          hover: '#3882F6',
          light: '#DBEAFE',
        },
        accent: {
          DEFAULT: '#0EA5E9',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#DBEAFE',
          muted: '#F1F5F9',
        },
        text: {
          main: '#1F2937',
          muted: '#4B5563',
          light: '#6B7280',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(29, 78, 216, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card': '0 10px 30px -5px rgba(29, 78, 216, 0.07), 0 4px 10px -2px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 40px -10px rgba(29, 78, 216, 0.12), 0 8px 16px -4px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 25px -5px rgba(14, 165, 233, 0.35)',
      }
    },
  },
  plugins: [],
}
