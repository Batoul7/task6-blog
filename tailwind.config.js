/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter:'"Inter", sans-serif'
      },
      colors: {
        "myprimary" : "#090D1F",
        "mytitle" : "#1A1A1A",
        "myborder" : "#00000057",
        "purple" :"#7F56D9",
        "mypurple": " #6941C6",
        "bgpurple":"#F9F5FF",
        "myblue": " #3538CD",
        "bgblue":"#EEF4FF",
        "mypink": "#C11574",
        "bgpink":"#FDF2FA",
        "mygreen": "#027A48",
        "bggreen":"#ECFDF3",
        "myred": "#C4320A",
        "bgred":"#FFF6ED",
        "mygray" : "#667085",
        "mytextdark":"#C0C5D0",
        "myback":"#F9F5FF"
      },
      spacing:{
        "7.5" :"30px",
        "13" :"54px",
        "15" :"60px",
        "3.5" :"14px",
        "x18" : "18px"
      },
      fontSize: {
        "xxl" : "243.8px",
        "8.5xl" : "160.8px"
      },
      screens : {
        "mymd" : "789px",
        "myxl" : "1440px",
        "mysm":"367px",
        "4xl" : "1921px"
      },
      animation: {
        spinSlow: 'spin 2s linear infinite',
        swirl: 'swirl 0.8s ease-in-out infinite',
      },
      keyframes: {
        swirl: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }
    },
  },
  plugins: [],
}

