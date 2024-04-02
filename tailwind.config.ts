import type { Config } from "tailwindcss";
const config: Config = {
        content: [
                "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
                "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
                "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        ],
        theme: {
                extend: {
                        backgroundImage: {
                                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                                "gradient-conic":
                                        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                        },
                        colors: {
                                bn3: '#8c57ff',
                                bn: '#8c57ff',
                                bn2: '#403468',
                                main: '#1b1b37',
                                head: '#323259',
                                lef: '#383452',
                                rit: '#312d4b',
                        },
                        boxShadow: {
                                shadow1: '0px 8px 16px 0px rgb(26, 31, 51);'
                        }
                },
        },
        plugins: [],
};
export default config;
