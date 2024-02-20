import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://server-0hgd.onrender.com:10000",
      "/uploads/": "https://server-0hgd.onrender.com:10000",
    },
  },
});
