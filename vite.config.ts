import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({command}) => {
  const config: UserConfig = {
    plugins: [
      react(),
      tailwindcss(),
    ],
  }

  if (command !== "serve") {
    config.base = "/oscars-2025/";
  }

  return config;
})
