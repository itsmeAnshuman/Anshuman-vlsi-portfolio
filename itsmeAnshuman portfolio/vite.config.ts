import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      // Force correct MIME type for PDF files
      name: "pdf-mime-fix",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.endsWith(".pdf")) {
            res.setHeader("Content-Type", "application/pdf");
            res.setHeader("Content-Disposition", "inline");
          }
          next();
        });
      },
    },
  ],
});
