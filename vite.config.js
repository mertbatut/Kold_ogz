import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      'gsap': 'gsap',
      'gsap/ScrollTrigger': 'gsap/ScrollTrigger',
    },
  },
});
