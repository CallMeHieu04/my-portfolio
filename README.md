# Phan Minh Hiếu (MiHi) — 3D Portfolio Website 🚀

Personal 3D portfolio website of **Phan Minh Hiếu (MiHi)** — AI Engineer & Full-Stack Developer, Information Technology student at Da Nang University of Science and Technology (Đại học Bách khoa - Đại học Đà Nẵng).

🌐 **Live Website:** [https://mihi.dpdns.org](https://mihi.dpdns.org)

## ✨ Features

- **Interactive 3D Scene:** Custom 3D character model and lighting built with Three.js & React Three Fiber.
- **Smooth Animations:** Scroll-driven animations powered by GSAP (`ScrollTrigger`) and Lenis smooth scrolling.
- **Projects & Experience (`/`, `/myworks`):** Centralized portfolio configuration in `src/config.ts` showcasing AI/ML, Full-Stack, and academic projects.
- **Chess & AI Chat (`/play`):** Play chess against the built-in `RedxChess` engine and chat directly with an AI persona powered by Groq via `/api/chat`.

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite, React Router v7
- **3D & Animation:** Three.js, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`, GSAP, Lenis
- **Chess & AI:** `chess.js`, `stockfish.js`, RedxChess WASM engine, Groq API (`/api/chat`)
- **Deployment & Analytics:** Vercel, `@vercel/analytics`, `@vercel/speed-insights`

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/CallMeHieu04/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Copy `.env.example` to `.env` and set your Groq API key (used by `/api/chat` on `/play`):
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   GROQ_MODEL=qwen/qwen3.8-27b
   ```

4. **Run locally**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

## 📬 Contact

- **GitHub:** [@CallMeHieu04](https://github.com/CallMeHieu04)
- **Email:** mihidut04@gmail.com
- **Website:** [https://mihi.dpdns.org](https://mihi.dpdns.org)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
