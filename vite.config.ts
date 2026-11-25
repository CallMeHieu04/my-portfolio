import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

// Dev-only: serve /api/chat (Vercel serverless function in api/chat.js) from the Vite dev server
const devApiChat = (): Plugin => ({
  name: "dev-api-chat",
  apply: "serve",
  configureServer(server) {
    const env = loadEnv(server.config.mode, process.cwd(), "");
    if (env.GROQ_API_KEY && !process.env.GROQ_API_KEY) {
      process.env.GROQ_API_KEY = env.GROQ_API_KEY;
    }

    server.middlewares.use("/api/chat", async (req, res) => {
      const chunks: Buffer[] = [];
      for await (const chunk of req) chunks.push(chunk as Buffer);
      const raw = Buffer.concat(chunks).toString("utf8");

      let body: unknown = {};
      try {
        body = raw ? JSON.parse(raw) : {};
      } catch {
        body = {};
      }

      const shimReq = { method: req.method, body };
      const shimRes = {
        status(code: number) {
          res.statusCode = code;
          return shimRes;
        },
        json(data: unknown) {
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(data));
          return shimRes;
        },
      };

      try {
        const mod = await server.ssrLoadModule("/api/chat.js");
        await mod.default(shimReq, shimRes);
      } catch (error) {
        console.error("Dev /api/chat error:", error);
        shimRes.status(500).json({ error: "Dev API error" });
      }
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), devApiChat()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three', 'three-stdlib'],
          'react-three': ['@react-three/fiber', '@react-three/drei'],
          'gsap': ['gsap'],
          'vendor': ['react', 'react-dom', 'react-router-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ['three', 'gsap', 'lenis']
  }
});
