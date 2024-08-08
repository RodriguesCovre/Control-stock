// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,ts,vue}', // ajuste conforme a estrutura do seu projeto
  ],
  theme: {
    extend: {
      colors: {
        'branco-gelo': '#F7F9FD',
        'marrom-bombom': '#7C6255',
      },
    },
  },
  plugins: [],
}
