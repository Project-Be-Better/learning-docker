import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Adjust if you're serving from a subdirectory
  plugins: [react()],
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: "0.0.0.0", // This is correct for Docker
    origin: "http://localhost:3000", // Use localhost or actual host IP
  },
});
