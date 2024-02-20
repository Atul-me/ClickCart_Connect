import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base:"/ClickCart_Connect/",
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://server-0hgd.onrender.com",
      "/uploads/": "https://server-0hgd.onrender.com",
    },
  },
});
