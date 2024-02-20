/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: [
        {
            pattern:
                /bg-(green|yellow|orange|red|pink|purple|blue|cyan)-(100|200|300|400|500|600|700)/,
        },
        {
            pattern:
                /bg-(martian|solarian|earthling|neptunian|steel|gold|rose-gold|carbon|blaze-flash|fluff-flash|haze-flash|alien-flash)/,
        },
        {
            pattern: /bg-(grey)-(100|200|300|400|500|600|700|800|900|1000)/,
        },
    ],
    theme: {
        screens: {
            sm: '640px',
            // Mobile Breakpoint
            mbp: '733px',
            // Mobile Breakpoint
            md: '768px',
            lg: '1024px',
            // Titan Breakpoint
            tbp: '1100px',
            // Cirlce Breakpoint
            cbp: '1400px',
            xl: '1280px',
            '2xl': '1536px',
        },
        colors: {
            muted: {
                100: 'var(--greyscale-grey-70, #636366)',
            },
            silver: {
                100: 'var(--materials-silver, linear-gradient(196deg, #ECE6DC 11.11%, #D2CCC1 88.89%))',
            },
            green: {
                100: '#F2FFEC',
                200: '#E5FFDA',
                300: '#C6FFAC',
                400: '#63FF2C',
                500: '#33C300',
                600: '#248C00',
                700: '#185B00',
            },
            yellow: {
                100: '#FFFCD7',
                200: '#FFFAB6',
                300: '#FFF784',
                400: '#FEF13C',
                500: '#E0CA00',
                600: '#B5860E',
                700: '#563900',
            },
            orange: {
                100: '#FFE7E2',
                200: '#FFB9AA',
                300: '#FF7658',
                400: '#FF431A',
                500: '#CD2704',
                600: '#6F0700',
                700: '#430400',
            },
            red: {
                100: '#FFECEE',
                200: '#FFC1C5',
                300: '#FF7981',
                400: '#FF1A43',
                500: '#CD1435',
                600: '#7C0016',
                700: '#4B000D',
            },
            pink: {
                100: '#FEDDF5',
                200: '#FFB6EA',
                300: '#FF7EDB',
                400: '#FF1ABF',
                500: '#CE0796',
                600: '#730053',
                700: '#57003F',
            },
            purple: {
                100: '#F5E1FF',
                200: '#EBC0FF',
                300: '#DA8AFF',
                400: '#B61AFF',
                500: '#8B00CD',
                600: '#5F008C',
                700: '#3D005A',
            },
            blue: {
                100: '#EBEEFF',
                200: '#CDD5FF',
                300: '#A0B0FF',
                400: '#1A3FFF',
                500: '#0623BB',
                600: '#031886',
                700: '#000E56',
            },
            cyan: {
                100: '#D9F8FF',
                200: '#C5F4FF',
                300: '#9AEDFF',
                400: '#1AD6FF',
                500: '#0BAFD2',
                600: '#006980',
                700: '#003945',
            },
            white: '#FFFFFF',
            black: '#000000',
            paper: '#F2F2F2',
            grey: {
                100: '#F2F2F7',
                200: '#E5E5EA',
                300: '#D1D1D6',
                400: '#C7C7CC',
                500: '#AEAEB2',
                600: '#8E8E93',
                700: '#636366',
                800: '#48484A',
                900: '#1C1C1E',
                1000: '#0D0D0D',
            },

            steel: {
                'steel-low': '#D0D5E0',
                'steel-high': '#F7F9FF',
            },
            gold: {
                'gold-low': '#BBB29E',
                'gold-high': '#FDF4E0',
            },
            'rose-gold': {
                'rose-gold-low': '#AB8468',
                'rose-gold-high': '#FFD1B6',
            },
            carbon: {
                'carbon-low': '#151516',
                'carbon-high': '#212129',
            },
        },
        extend: {
            borderColor: (theme) => ({
                DEFAULT: theme('colors.grey.300'),
            }),
            backgroundImage: (theme) => ({
                //energy
                martian: `linear-gradient(45deg, ${theme(
                    'colors.red.400'
                )} 0%,  ${theme('colors.orange.400')} 100%)`,
                solarian: `linear-gradient(45deg, ${theme(
                    'colors.orange.400'
                )} 0%,  ${theme('colors.yellow.400')} 100%)`,
                earthling: `linear-gradient(45deg, ${theme(
                    'colors.green.400'
                )} 0%,  ${theme('colors.yellow.400')} 100%)`,
                neptunian: `linear-gradient(45deg, ${theme(
                    'colors.blue.400'
                )} 0%,  ${theme('colors.cyan.400')} 100%)`,

                //materials
                steel: `linear-gradient(45deg, ${theme(
                    'colors.steel.steel-low'
                )} 0%, ${theme('colors.steel.steel-high')} 100%)`,

                gold: `linear-gradient(45deg, ${theme(
                    'colors.gold.gold-low'
                )} 0%, ${theme('colors.gold.gold-high')} 100%)`,

                'rose-gold': `linear-gradient(45deg, ${theme(
                    'colors.rose-gold.rose-gold-low'
                )} 0%, ${theme('colors.rose-gold.rose-gold-high')} 100%)`,

                carbon: `linear-gradient(45deg, ${theme(
                    'colors.carbon.carbon-low'
                )} 0%, ${theme('colors.carbon.carbon-high')} 100%)`,

                adamant: `var(--materials-adamant, linear-gradient(0deg, #4EAE74 0%, #1D2622 100%))`,
                vanadium: `var(--materials-vanadium, linear-gradient(180deg, #0C0C0D 0%, #1A1A1E 100%))`,

                diamond: `var(--minerals-diamond, linear-gradient(180deg, #CCC3FF 0%, #F8E3FF 100%))`,

                ruby: 'var(--minerals-ruby, linear-gradient(0deg, #AC0B31 0%, #4A0B0F 100%))',

                iron: 'var(--materials-iron, linear-gradient(0deg, #CDCBC8 0%, #88837B 100%))',
                obsidian:
                    'var(--materials-obsidian, linear-gradient(180deg, #0C0C0D 0%, #33333D 100%))',

                //flashes
                'blaze-flash': `linear-gradient(45deg, ${theme(
                    'colors.red.400'
                )} 0%, ${theme('colors.yellow.400')} 100%)`,
                'fluff-flash': `linear-gradient(45deg, ${theme(
                    'colors.pink.400'
                )} 0%, ${theme('colors.yellow.400')} 100%)`,
                'haze-flash': `linear-gradient(45deg, ${theme(
                    'colors.purple.400'
                )} 0%, ${theme('colors.red.300')} 100%)`,
                'alien-flash': `linear-gradient(45deg, ${theme(
                    'colors.cyan.400'
                )} 0%, ${theme('colors.green.400')} 100%)`,
            }),
            borderRadius: {
                DEFAULT: '22px',
            },
        },
    },
    plugins: [require('daisyui')],
}
