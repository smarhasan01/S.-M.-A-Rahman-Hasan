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
        dark: {
          bg: '#171719',
          card: '#1b1b20',
          surface: '#202028',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.04)',
        },
        brand: {
          purple: '#6d5dfc',
          deepPurple: '#5542f6',
          violet: '#8c52ff',
          blue: '#4361ee',
          cyan: '#38bdf8',
          accent: '#7952ec',
          orange: '#f97316',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'Outfit', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 35px -5px rgba(109, 93, 252, 0.45)',
        'glow-blue': '0 0 35px -5px rgba(67, 97, 238, 0.4)',
        'glow-accent': '0 0 50px -10px rgba(140, 82, 255, 0.5)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
        'button-glow': '0 0 25px rgba(109, 93, 252, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #4f46e5 100%)',
        'hasan-text-gradient': 'linear-gradient(180deg, #5f6bf8 0%, #3d4dc6 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'ambient-drift': 'ambientDrift 16s ease-in-out infinite',
        'ambient-drift-rev': 'ambientDriftRev 20s ease-in-out infinite',
        'glow-shimmer': 'glowShimmer 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.01)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        ambientDrift: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(25px, -30px) scale(1.06)' },
          '66%': { transform: 'translate(-20px, 15px) scale(0.96)' },
        },
        ambientDriftRev: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-30px, 25px) scale(1.05)' },
          '66%': { transform: 'translate(20px, -20px) scale(0.94)' },
        },
        glowShimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
