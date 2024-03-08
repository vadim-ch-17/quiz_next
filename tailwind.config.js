/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
      },
    },
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        darkPrimary: "#15154C",
        mediumPrimary: "#3C3F7E",
        lightPrimary: "#4545A8",
        xlPripary: '#31315B',
        primary: '#FF6F61',
        secondary: '#6B5B95',
        pink: '#C261E8',
        mediumPink: '#D986FA',
        hoverPink: '#DD88FE',
        lightPink: '#EDE7FF',
        blue: '#7777EF',
        hoverBlue: '#9D9DFD',
        white: '#FFFFFF',
        black: '#000000',
        grey: '#F5F5F5',
        extraDarkGray: "#444A59",
        darkGrey: '#A9A9A9',
        lightGrey: '#f0f3f8',
        grayXl: '#D9D9D9',
        gray2Xl: '#E9EAED',
        gray3Xl: '#E3E8F1',
        gray4Xl: '#F0F3F8',
        gray5Xl: '#949CB6',
        gray6Xl: '#B8BECA',
        gray7Xl: '#AEB5C6',
        error: '#FF0000',
        success: '#008000',
        gold: '#FEC34B'

      },
      backgroundImage: {
        'gray-gradient': "linear-gradient(180deg, #E3E8F1 61.16%, rgba(227, 232, 241, 0) 100%)"
      },
      fontFamily: {
        // "dayOne": ["Days One", "sans-serif"],
        // mulish: ["Mulish", "sans-serif"],
      },
      boxShadow: {
        default: '0px 10px 30px 0px rgba(24, 31, 123, 0.2)',
        card: '10px 10px 30px 0px #181F7B33',

      },
      fontSize: {
        'title': 'clamp(2.125rem, 10vw, 6.875rem)',
        'subTitle': 'clamp(25px, 6vw, 40px)',
      },
      keyframes: {
        align: {
          from: {
            "z-index": "-1",
          },
          to: {
            "z-index": "5",
          },
        },
        "show-bottom": {
          from: {
            transform: "translateY(100px)",
          },
          to: {
            transform: "translateY(0px)",
          },
        },
        topLabel: {
          from: {
            top: "0px",
            color: "#949cb6",
            "font-size": "0.875rem"
          },
          to: {
            top: "-24px",
            "font-size": "0.625rem",
            color: "#6874dc"
          }
        }
      },
      animation: {
        zIndex: "0.7s linear 0.5s align forwards",
        "show-bottom": "0.5s linear show-bottom forwards",
      },
      zIndex: {
        under: "-1",
        z4: "4",
        40: "40",
        100: "100",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.typography': {
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
