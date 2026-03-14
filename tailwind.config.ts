import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				void: '#06060f',
				'deep-space': '#0a0a1a',
				nebula: '#111128',
				'imperial-red': '#c0392b',
				crimson: '#e74c3c',
				sakura: '#ffb7c5',
				'sakura-deep': '#ff8fa3',
				'saber-blue': '#4fc3f7',
				'saber-green': '#66bb6a',
				gold: '#ffd700',
				jade: '#00b894',
				'grogu-green': '#90c95b',
				beskar: '#b0b8c4',
				'mando-blue': '#2d5a7b',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'star-wars-gradient': 'linear-gradient(135deg, #06060f 0%, #111128 30%, #0a0a1a 70%, #06060f 100%)',
				'japan-gradient': 'linear-gradient(135deg, #1a0a0f 0%, #0a0a1a 50%, #0f0a1a 100%)',
				'hero-gradient': 'linear-gradient(135deg, rgba(192,57,43,0.3) 0%, rgba(17,17,40,0.8) 50%, rgba(45,90,123,0.3) 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			animation: {
				'float': 'float 3s ease-in-out infinite',
				'float-slow': 'float-slow 4s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'holographic': 'holographic-shimmer 4s linear infinite',
				'saber-glow': 'saber-glow 2s ease-in-out infinite',
				'red-saber': 'red-saber-glow 2s ease-in-out infinite',
				'spin-slow': 'spin 8s linear infinite',
			},
			fontFamily: {
				display: ['Inter', 'sans-serif'],
			},
			boxShadow: {
				'saber-red': '0 0 15px rgba(192, 57, 43, 0.4), 0 0 30px rgba(192, 57, 43, 0.2)',
				'saber-blue': '0 0 15px rgba(79, 195, 247, 0.4), 0 0 30px rgba(79, 195, 247, 0.2)',
				'sakura': '0 0 15px rgba(255, 183, 197, 0.3), 0 0 30px rgba(255, 183, 197, 0.1)',
				'imperial': '0 0 20px rgba(192, 57, 43, 0.3), 0 4px 60px rgba(192, 57, 43, 0.1)',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
