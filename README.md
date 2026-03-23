# Sumit Kumar — Developer Portfolio

A modern, ATS-friendly developer portfolio website built with pure HTML5, TailwindCSS (CDN), and Vanilla JavaScript. Zero build process required.

## 🚀 Live Demo
[https://mrsumitkumar.github.io](https://mrsumitkumar.github.io) *(update with your actual URL)*

## ✨ Features
- ⚡ Particle canvas animation hero section
- 🎨 Brutal-minimal dark aesthetic with electric blue accents
- 📱 Fully responsive (mobile-first)
- 🔤 Typing animation with role cycling
- 🔍 Project filter by technology
- 📋 One-click email copy with toast notification
- ✅ Real-time contact form validation
- 🔝 Back-to-top button
- 🌊 Scroll-triggered reveal animations
- 🍔 Animated hamburger mobile menu
- ♿ Accessible (ARIA labels, semantic HTML, focus states)

## 📁 File Structure
```
portfolio/
├── index.html          # Complete single-file portfolio
├── resume.pdf          # Add your resume here
└── README.md
```

## 🚀 GitHub Pages Deployment

### 1. Initialize repository
```bash
git init
git add .
git commit -m "Initial portfolio commit"
```

### 2. Create GitHub repository
- Go to [github.com/new](https://github.com/new)
- Name it: `username.github.io` (for root domain) OR any name (for project page)
- Keep it public

### 3. Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages
- Go to **Settings → Pages**
- Source: **Deploy from a branch**
- Branch: **main** → **/ (root)**
- Click **Save**

### 5. Access your portfolio
- Root domain repo: `https://YOUR_USERNAME.github.io`
- Project repo: `https://YOUR_USERNAME.github.io/REPO_NAME`

### 6. Custom Domain (optional)
- Add a `CNAME` file with your domain: `echo "yourdomain.com" > CNAME`
- Configure DNS: add CNAME record pointing to `YOUR_USERNAME.github.io`

## 🔧 Customization

### Update personal details
Search for and replace in `index.html`:
- `sumit952818@gmail.com` → your email
- `+91-8393042166` → your phone
- `linkedin.com/in/mrsumitkumar` → your LinkedIn
- `mrsumitkumar` → your GitHub username

### Add your resume
- Place your resume PDF as `resume.pdf` in the root folder
- The "Download Resume" button links to `resume.pdf`

### Replace profile photo
- Add `profile.jpg` to the root folder
- Update the avatar `<div>` in the About section to use `<img src="profile.jpg" alt="Sumit Kumar" />`

### Update project links
- Search for `href="#"` in project cards and replace with actual GitHub/demo URLs

## 🎨 Tech Stack
- HTML5 (semantic, ATS-friendly)
- TailwindCSS v3 via CDN
- Vanilla JavaScript (no dependencies)
- Google Fonts: Bebas Neue + Sora + JetBrains Mono
- Canvas API for particle animation

## 📄 License
© 2026 Sumit Kumar. All rights reserved.
