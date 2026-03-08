# Anshuman Verma - VLSI & Digital Design Portfolio

<!-- GitHub badges -->

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Top Language](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Built with React](https://img.shields.io/badge/React-18.2.0-61dafb?logo=react)](https://react.dev/)
[![Built with Three.js](https://img.shields.io/badge/Three.js-r161-000000?logo=three.js)](https://threejs.org/)

## 📊 Overview

A 3D VLSI & Digital Design Portfolio built with React.js 18, Three.js, and TypeScript. Showcasing RTL design projects, protocol verification work, and embedded systems expertise with interactive 3D visualizations.

**Developer:** Anshuman Verma  
**GitHub:** [@itsmeAnshuman](https://github.com/itsmeAnshuman)  
**Repository:** [Anshuman-vlsi-portfolio](https://github.com/itsmeAnshuman/Anshuman-vlsi-portfolio)  
**LinkedIn:** [Anshuman Verma](https://www.linkedin.com/in/anshuman-verma-8b5829257/)

## 🌐 Live Demo

🔗 **[View Live Portfolio](https://itsmeanshuman1.netlify.app)**

## 📝 Description

**Anshuman's VLSI & Digital Design Portfolio** is a fully functional portfolio website built with React.js 18 and Three.js. It features interactive 3D visualizations, RTL project showcases, and is fully responsive across all devices.

<details><summary><b>Folder Structure</b></summary>

```bash
Anshuman-vlsi-portfolio/
├── src/
├   ├── App.tsx
├   ├── globals.css
├   ├── main.tsx
├   ├── vite.env.d.ts
├   ├── components/
├   ├   ├── atoms/
├   ├   ├   └── Header.tsx
├   ├   ├── canvas/
├   ├   ├   ├── Ball.tsx
├   ├   ├   ├── Computers.tsx
├   ├   ├   ├── Earth.tsx
├   ├   ├   ├── Stars.tsx
├   ├   ├   └── index.ts
├   ├   ├── layout/
├   ├   ├   ├── Loader.tsx
├   ├   ├   └── Navbar.tsx
├   ├   ├── sections/
├   ├   ├   ├── About.tsx
├   ├   ├   ├── Contact.tsx
├   ├   ├   ├── Education.tsx
├   ├   ├   ├── Experience.tsx
├   ├   ├   ├── Feedbacks.tsx
├   ├   ├   ├── Hero.tsx
├   ├   ├   ├── Tech.tsx
├   ├   ├   └── Works.tsx
├   ├   └── index.ts
├   ├── constants/
├   ├   ├── config.ts
├   ├   ├── styles.ts
├   ├   └── index.ts
├   ├── hoc/
├   ├   ├── SectionWrapper.tsx
├   ├   └── index.ts
├   ├── utils/
├   ├   └── motion.ts
├   ├── types/
├   ├   └── index.d.ts
├   └── assets/
├       └── index.ts
├── public/
├   ├── desktop_pc/
├   ├── planet/
├   └── logo.svg
├── .env
├── .gitignore
├── index.html
├── LICENSE
├── README.md
├── package.json
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

</details>

## 📖 Table of Contents

<details><summary>Table of Contents</summary>

- [Live Demo](#-live-demo)
- [Description](#-description)
- [Technologies Used](#-technologies-used)
- [Get Started](#-get-started)
  - [Prerequisites](#-prerequisites)
  - [Installation and Run Locally](#-installation-and-run-locally)
  - [Scripts](#-scripts)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Acknowledgements](#-acknowledgements)
- [Contact](#-contact)
- [License](#-license)

</details>

## ✨ Technologies Used

<details><summary><b>Portfolio</b> is built using the following technologies:</summary>

- [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript for safer, scalable code.
- [Vite](https://vitejs.dev/): Fast build tool for modern web projects.
- [React.js](https://reactjs.org/): Front-end JavaScript library for building user interfaces.
- [Three.js](https://threejs.org/): 3D graphics library for interactive visualizations in the browser.
- [Framer Motion](https://www.framer.com/motion/): Production-ready motion library for React.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for rapid UI development.
- [EmailJS](https://www.emailjs.com/): Client-side email sending service.
- [ESLint](https://eslint.org/): Static code analysis tool for JavaScript/TypeScript.

</details><br/>

[![Technologies Used](https://skillicons.dev/icons?i=ts,vite,react,threejs,tailwind,netlify)](https://skillicons.dev)

## 🧰 Get Started

To get this project up and running in your development environment, follow these step-by-step instructions.

### 📋 Prerequisites

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [Git](https://git-scm.com/downloads)

### ⚙️ Installation and Run Locally

**Step 0:**

Note :bangbang: the application uses EmailJS to send emails from the contact form. Create an account at [EmailJS](https://emailjs.com/) and set the environment variables in a `.env` file.

**Step 1:**

Clone this repo:

```bash
git clone https://github.com/itsmeAnshuman/Anshuman-vlsi-portfolio.git
```

**Step 2:**

Install dependencies:

```bash
npm install
```

**Step 3:**

Run the development server:

```bash
npm run dev
```

**Step 4:**

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 📜 Scripts

| Script             | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`      | Installs dependencies                       |
| `npm run dev`      | Starts local dev server at `localhost:5173` |
| `npm run build`    | Build your production site to `./dist/`     |
| `npm run preview`  | Boot up a local static web server           |
| `npm run lint`     | Run ESLint                                  |

## 🔒 Environment Variables

Create a `.env` file in the root directory and add the following:

```env
VITE_EMAILJS_SERVICE_ID=<your_service_id>
VITE_EMAILJS_TEMPLATE_ID=<your_template_id>
VITE_EMAIL_JS_ACCESS_TOKEN=<your_access_token>
```

## 🚀 Deployment

#### Deploy to production (manual)

```bash
npm run build
```

#### Deploy on Netlify

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/itsmeAnshuman/Anshuman-vlsi-portfolio)

## 💎 Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/)
- [Three.js](https://threejs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Vertical Timeline Component](https://www.npmjs.com/package/react-vertical-timeline-component)
- [React Parallax Tilt](https://www.npmjs.com/package/react-parallax-tilt)
- [EmailJS](https://www.emailjs.com/)
- [JavaScript Mastery](https://www.jsmastery.pro/)

## 📞 Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Anshuman_Verma-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/anshuman-verma-8b5829257/)
[![GitHub](https://img.shields.io/badge/GitHub-itsmeAnshuman-181717?style=flat&logo=github)](https://github.com/itsmeAnshuman)
[![Email](https://img.shields.io/badge/Email-anshumanverma555@gmail.com-red?style=flat&logo=gmail)](mailto:anshumanverma555@gmail.com)

## 📋 License

**Anshuman's VLSI & Digital Design Portfolio** is open source software licensed as MIT — See [LICENSE](https://github.com/itsmeAnshuman/Anshuman-vlsi-portfolio/blob/main/LICENSE) for more details.
