import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
    },
    colors: {
      'mandy': {
        '50': '#fef2f3',
        '100': '#fde6e7',
        '200': '#fbd0d5',
        '300': '#f7aab2',
        '400': '#f27a8a',
        '500': '#ea546c',
        '600': '#d5294d',
        '700': '#b31d3f',
        '800': '#961b3c',
        '900': '#811a39',
        '950': '#48091a',
      },

      'saffron': {
        '50': '#fdfae9',
        '100': '#fcf5c5',
        '200': '#faea8e',
        '300': '#f7d74d',
        '400': '#f3c52c',
        '500': '#e2a910',
        '600': '#c3820b',
        '700': '#9c5d0c',
        '800': '#814a12',
        '900': '#6e3c15',
        '950': '#401e08',
      },

      'white': {
        '50': '#ffffff',
        '100': '#efefef',
        '200': '#dcdcdc',
        '300': '#bdbdbd',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#656565',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
        '950': '#292929',
      },
    }
  },
  plugins: [],
};
export default config;
