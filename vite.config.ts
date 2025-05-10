import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      ...(isDev ? [componentTagger()] : []), // Only include componentTagger in development
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "dist", // Ensure this matches Cloudflare Pages build output
    },
  };
});