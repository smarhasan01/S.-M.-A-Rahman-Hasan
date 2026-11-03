# S. M. A. Rahman Hasan — Designer Portfolio

A modern, premium, fully responsive personal portfolio website crafted for **S. M. A. Rahman Hasan**, Graphic Designer and UI/UX Designer.

Built with **React**, **Vite**, and **Tailwind CSS**, closely inspired by the dark aesthetic, glowing purple-blue gradient accents, and layout of the reference design mockup.

---

## ✨ Features

- **Dark Premium Aesthetic**: Signature `#171719` dark canvas with purple and blue ambient lighting and radial glows.
- **Hero Section**:
  - Exact layout recreation: "Hi, It's S M A Rahman Hasan" with massive gradient display typography for "Hasan".
  - Profile photo encased in a glowing purple hexagonal frame.
  - Interactive call-to-action buttons: "Hire Me" and "Contact Me".
- **About Me**:
  - Highlights creative design philosophy, visual communication, and user-centered digital experiences.
  - Interactive stat counters (years of experience, projects delivered, client satisfaction).
- **Services (The Service We Provide For You)**:
  - Three modern cards for **Graphic Design**, **UI/UX Design**, and **Brand Identity** with features checklist and hover glow effects.
- **Design Tools Ecosystem**:
  - Recreates the iconic connected node constellation from the reference design.
  - Interactive tool nodes for **Adobe Photoshop**, **Adobe Illustrator**, **Canva**, **Figma**, and **Adobe XD**.
  - Curved glowing fiber-optic SVG paths connecting to the glowing central **SMA** brand orb with dynamic Graphic Design / UI & UX orbit nodes.
- **Skills with Interactive Customizer**:
  - Categorized under "Design Core" and "Product & Systems".
  - Animated gradient progress bars.
  - Live interactive customizer mode allowing real-time preview of adjustments.
- **Portfolio Gallery & Case Study Modals**:
  - Category filters: **All**, **Logo Design**, **Branding**, **Social Media Design**, **Mockups**, and **UI/UX Design**.
  - High-resolution visual project mockups.
  - Detail view modal showing project goals, scope, deliverables, and tools used.
- **Work Experience & Learning Journey**:
  - Dual-mode timeline featuring glowing circular nodes and dashed connectors matching the reference layout.
  - Easily toggle between **Work & Client Experience** and **Projects & Learning Journey**.
- **Contact Section**:
  - Interactive inquiry form with client-side validation.
  - Celebratory confetti feedback upon submission.
  - 1-click email copy to clipboard with instant feedback.
- **Footer**:
  - S M A RAHMAN HASAN branding, quick navigation links, social platform handles, and smooth back-to-top button.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18 or higher)
- npm

### Installation & Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready output will be generated in the `dist` directory.

4. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 🛠️ How to Customize Your Content

All data, text, links, and projects are centralized in a single file for quick and easy editing:

📁 **`src/data/portfolioData.js`**

### 1. Update Personal Info & Social Links
Open `src/data/portfolioData.js` and modify `personalInfo`:
- `email`: Change to your preferred contact email.
- `location`: Update your location or timezone.
- `socialLinks`: Update URLs for your Behance, Dribbble, LinkedIn, Instagram, etc.

### 2. Update Profile Photo & Logo
- Profile photo: Replace `public/profile_hex.png` with your portrait image.
- Logo: Replace `public/images/hasan-logo.png.png` with your custom logo mark.

### 3. Add or Modify Portfolio Projects
Edit the `portfolioProjects` array in `src/data/portfolioData.js`. You can add new projects, update categories, add deliverables, or change preview images.

### 4. Adjust Skills & Experience
- Skills: Update the `skillsList` array with your desired percentages.
- Work Experience: Update the `workExperience` array with your actual companies, positions, dates, and achievements.

---

## 🚢 Deployment

This site can be deployed instantly to **Vercel**, **Netlify**, or **GitHub Pages**:

- **Vercel**: Import the repository and select Vite as the preset.
- **Netlify**: Set build command to `npm run build` and publish directory to `dist`.
