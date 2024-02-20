import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://server-p0fu.onrender.com",
      "/uploads/": "https://server-p0fu.onrender.com",
    },
  },
});
