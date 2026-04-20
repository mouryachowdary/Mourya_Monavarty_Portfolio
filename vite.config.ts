import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()].filter(Boolean),
  build: {
    target: "es2020",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return undefined;
          }

          if (id.includes("framer-motion")) {
            return "motion";
          }

          if (
            id.includes("react") ||
            id.includes("react-dom") ||
            id.includes("react-router-dom") ||
            id.includes("scheduler")
          ) {
            return "react-vendor";
          }

          if (id.includes("lucide-react")) {
            return "icons";
          }

          if (id.includes("@radix-ui")) {
            return "radix";
          }

          const modulePath = id.split("node_modules/")[1];
          if (!modulePath) {
            return "vendor";
          }

          const moduleParts = modulePath.split("/");
          const packageName = moduleParts[0].startsWith("@")
            ? `${moduleParts[0]}-${moduleParts[1]}`
            : moduleParts[0];

          return `vendor-${packageName.replace("@", "")}`;
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
