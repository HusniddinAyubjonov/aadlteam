import "dotenv/config"
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: Number(process.env.PORT) || 3010,
  },
});
