import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import type { Config } from "tailwindcss";

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      spacing: {
        '75': '300px',  // Custom spacing for positioning
      },
      height: {
        'scan-line': '5px',
        'job-card': '50px',
        'portfolio': '400px',
        'notification': '50px',
      },
      width: {
        'portfolio': '300px',
        'job-card': '300px',
        'notification': '200px',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'rounded-portfolio': '8px',
        'rounded-job': '5px',
        'rounded-notification': '5px',
        'rounded-search-box': '25px',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        logoBlue: "#5899FF",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'scan-line-blue': '#00f',  // Custom color for the scan line
        'notification-green': '#90EE90',
        'job-bg': '#000',  // Black background for the job cards and portfolio
      },
      boxShadow: {
        'trailing-light': '0 0 15px rgba(0, 0, 255, 0.8), 0 0 30px rgba(0, 0, 255, 0.5)',
        'scan-line-glow': '0 0 15px rgba(0, 0, 255, 0.7)',
        'search-box': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'notification-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
      backgroundColor: {
        'highlight': '#ffeb3b',
      },
      textColor: {
        'highlight': '#000',
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function({ addComponents }) {
      addComponents({
        '.section': {
          transition: 'background-color 0.3s ease, color 0.3s ease',
        },
        '.section.highlight': {
          backgroundColor: '#ffeb3b', // This can be replaced with a Tailwind color class if preferred
          color: '#000', // This can be replaced with a Tailwind color class if preferred
        },
      });
    },
  ],
} satisfies Config;

export default config;
