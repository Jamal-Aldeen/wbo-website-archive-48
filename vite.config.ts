import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/wbo-website-archive-48/", // Added for GitHub Pages subdirectory
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure public files are copied
   // Ensure output directory matches your deploy script
    chunkSizeWarningLimit: 600, // Optional: Suppress chunk size warning
  },
}));