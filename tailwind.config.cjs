/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Raleway', 'sans-serif']
            },
        },
    },
    plugins: [
        plugin(({addComponents, theme, addUtilities}) => {
            addComponents({}),
                addUtilities({
                    '.flex-center-between': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    },
                })
        }),
    ],
}
