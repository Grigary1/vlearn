/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',             
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'course-details-heading-small': ['26px', { lineHeight: '36px' }],
        'course-details-heading-large': ['36px', { lineHeight: '44px' }],
        'home-heading-small': ['28px', { lineHeight: '34px' }],
        'home-heading-large': ['48px', { lineHeight: '56px' }],
        'default': ['15px', { lineHeight: '21px' }],
      },
    },
  },
  plugins: [],
};
