import { theme } from './tailwind/tailwind.config.js';

export const theme = {
    screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'custom': '1440px', // New breakpoint
    },
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px'
};



// Modify font here
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

document.body.style.fontFamily = 'Roboto, Arial, sans-serif';