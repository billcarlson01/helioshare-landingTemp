/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-blue-100',
    'text-purple-600',
    'bg-green-500',
    'hover:bg-green-700',
    'text-white',
    'bg-yellow-200',
    'bg-pink-200',
    'text-gray-800',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
