import { fileURLToPath, URL } from "node:url";
import * as dotenv from "dotenv";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from '@tailwindcss/vite'

dotenv.config({path: '../.env'});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    tailwindcss(),
  ],
  build: {
    minify: false
  },
  ssr: false,
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: process.env.CLIENT_PORT,
  }
});
