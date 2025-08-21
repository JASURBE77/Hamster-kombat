import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

import { VitePWA } from 'vite-plugin-pwa'
// https://vite.dev/config/

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "Mening PWA loyiham",
        short_name: "PWA",
        description: "Bu mening React + PWA loyiham",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "https://joybox.uz/wp-content/uploads/2024/06/photo_2024-03-18_17-12-17.jpg",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "https://joybox.uz/wp-content/uploads/2024/06/photo_2024-03-18_17-12-17.jpg",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
})