/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'bgSpan': "url(./assets/historia/bgSpan.png)"
            }
        },
    },
    plugins: [],
}