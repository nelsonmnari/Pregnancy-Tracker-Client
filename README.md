# Pregnancy Tracker Website

A full-stack MERN web application for expectant mothers to track pregnancy progress, receive health advice, book appointments, chat with healthcare professionals, upload documents, and use an AI health assistant. The frontend is built with React (Vite), and the backend is powered by Node.js, Express, and MongoDB.

## Features

- User authentication (register/login)
- Dynamic pregnancy tracking (weeks, due date, progress bar)
- Swahili health advice with English translation
- Appointment booking with midwives
- Chat with doctor/nurse
- Document upload (prescriptions, reports)
- AI health assistant (OpenAI integration)

## Getting Started

### Prerequisites

- Node.js
- pnpm (or npm/yarn)

### Setup

1. Clone this repository:
   ```sh
   git clone <this-repo-url>
   cd client
   ```
2. Install dependencies:
   ```sh
   pnpm install
   ```
3. Create a `.env` file in the `client` folder:
   ```env
   VITE_API_URL=https://pregnancy-tracker-server.onrender.com/api
   ```
4. Start the development server:
   ```sh
   pnpm dev
   ```

### Backend

The backend source code and setup instructions are available here:
[Pregnancy Tracker Server (GitHub)](https://github.com/nelsonmnari/Pregnancy-Tracker-Server.git)

## Deployment

- Frontend: Vercel
- Backend: Render

## License

MIT

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
