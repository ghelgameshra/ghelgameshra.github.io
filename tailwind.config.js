/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'main': '#0f172a',
                'dark': '#1e293bff',
                'secondary': '#183351',
            }
        },
    },
    plugins: [],
}