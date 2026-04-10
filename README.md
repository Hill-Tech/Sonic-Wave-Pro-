# 🎧 SonicWave Pro — Premium Scrollytelling Experience

A high-end, "Awwwards-level" landing page for the fictional **SonicWave Pro** wireless headphones. This project features a sophisticated scroll-linked 3D "explosion" animation where the product disassembles into its core components as the user explores.

![Demo Preview](./demo.mp4)

<video src="./demo.mp4" controls width="100%"></video>

## ✨ Key Features

- **Scroll-Linked 3D Animation**: A 174-frame image sequence rendered via HTML5 Canvas for silky-smooth performance.
- **Seamless Visual Blending**: The UI background matches the image sequence precisely to create an "infinite depth" effect.
- **Parallax Text Overlays**: Cinematic typography fades and slides in sync with the product's assembly state.
- **High-Performance Rendering**: Uses a requestAnimationFrame-based Canvas loop to ensure 60fps scrubbing.
- **Pure Dark Mode**: Minimalist luxury aesthetic using a deep `#0a0a0a` palette.

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Rendering**: HTML5 Canvas API
- **Typography**: Outfit (Headings) & Inter (Body)
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd sonicwave-pro/app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Access the site**
   - Local: `http://localhost:3000`
   - Network: `http://<your-ip>:3001` (if running with `--hostname 0.0.0.0`)

## 🏗 Project Structure

```text
app/
├── public/
│   └── frames/         # 174-frame JPG sequence
├── src/
│   ├── app/
│   │   ├── globals.css  # Tailwind v4 & Design Tokens
│   │   ├── layout.tsx   # Root layout & Font setup
│   │   └── page.tsx     # Main assembly page
│   └── components/
│       ├── Hero.tsx     # Landing section
│       ├── ScrollSequence.tsx # Canvas & Scroll Logic
│       └── FooterCTA.tsx      # Pre-order section
```

## 🤖 AI-Driven Creation Process

This project was built using a "90/10" AI-human pattern. Below are the prompts and workflows used to generate the assets and code.

### 1. Asset Generation (Visuals)
The product visuals were generated using **Google Whisk** and **Google Veo**.

**Start Frame Prompt:**
> Ultra-premium product photography of wireless headphones, matte black finish with brushed aluminum accents... Deep black background with subtle gradient... luxury tech aesthetic.

**End Frame (Exploded View) Prompt:**
> Using the provided headphone image as reference, create a precise exploded view along a horizontal central axis. Separate components symmetrically... shell → ear cushions → driver unit → internal frame → circuit board → battery module.

**Video Animation (Veo):**
> Smooth mechanical product disassembly animation starting from a fully assembled... to a perfectly aligned exploded view. Camera completely static... Movement must feel engineered and realistic.

### 2. UI & Interaction (Code)
The core logic was built using a high-level creative developer persona.

**Builder Prompt:**
> Build a high-end "Scrollytelling" landing page for "SonicWave Pro". The core mechanic is a scroll-linked animation that plays an image sequence... Seamless Blending: The background MUST match the image sequence background exactly.

## 🌐 Deployment

### Vercel (Recommended)
The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub.
2. Import the repository in Vercel.
3. Vercel will automatically detect Next.js and deploy.

### Netlify
1. Connect your GitHub to [Netlify](https://www.netlify.com/).
2. Set the build command to `npm run build`.
3. Set the publish directory to `.next`.

---
*Built with ❤️  by Hill Trex.*