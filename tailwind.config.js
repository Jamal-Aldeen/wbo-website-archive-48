
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'wbo-darkteal': '#687864',
          'wbo-darkblue': '#31708E',
          'wbo-blue': '#5085A5',
          'wbo-lightblue': '#8FC1E3',
          'wbo-offwhite': '#F7F9FB',
          'wbo-accent': '#31708E',  // Using darkblue as accent color
          'wbo-green': '#003333', // Adding new green accent color
          'background': '#FFFFFF',  // Adding explicit background color
          'foreground': '#111827',  // Adding explicit foreground color for text
        }
      },
    },
    plugins: [],
  }
  