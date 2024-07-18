import type { Config } from 'tailwindcss';
import { Colors } from './components/colors/Colors';
import tailwindColors from 'tailwindcss/colors';
import Color from 'color';

const brighten = (color: string, amount: number) => {
    return Color(color).lighten(amount).hex();
};

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'ui-sans-serif', 'system-ui']
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                black: Colors.black,
                white: Colors.white,
                primary: Colors.primary,
                secondary: Colors.secondary,
                success: Colors.success,
                danger: Colors.danger,
                warning: Colors.warning,
                darkgreen: Colors.darkgreen,
                mediumgreen: Colors.mediumgreen,
                lightgrey: Colors.lightgrey,
                primaryHover: brighten(Colors.primary, 0.2),
                secondaryHover: brighten(Colors.secondary, 0.2),
                successHover: brighten(Colors.success, 0.2),
                dangerHover: brighten(Colors.danger, 0.2),
                warningHover: brighten(Colors.warning, 0.2),
                darkgreenHover: brighten(Colors.darkgreen, 0.2),
                mediumgreenHover: brighten(Colors.mediumgreen, 0.2),
                lightgreyHover: brighten(Colors.lightgrey, 0.2),
                ...tailwindColors,
            },
        },
    },
    plugins: [],
};

export default config;
