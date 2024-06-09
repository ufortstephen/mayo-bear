import localFont from 'next/font/local'

const Montserrat = localFont({
    src: [
        // { path: './fonts/Montserrat-Black.ttf', weight: '900' },
        { path: './fonts/Montserrat-Bold.ttf', weight: '700' },
        // { path: './fonts/Montserrat-SemiBold.ttf', weight: '600' },
        // { path: './fonts/Montserrat-Medium.ttf', weight: '500' },
        { path: './fonts/Montserrat-Regular.ttf', weight: '400' },
        // { path: './fonts/Montserrat-Light.ttf', weight: '300' },
        // { path: './fonts/Montserrat-ExtraLight.ttf', weight: '200' },
        // { path: './fonts/Montserrat-Thin.ttf', weight: '100' },
    ],
})

const Skincake = localFont({
    src: [{ path: './fonts/Skincake.ttf', weight: '400' }],
})
const Geom = localFont({
    src: [{ path: './fonts/Geom-Regular.ttf', weight: '400' }],
})

export { Montserrat, Skincake, Geom }
