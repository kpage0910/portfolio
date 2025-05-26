# 🎨 Portfolio Customization Guide

## ✅ Dependencies & Setup Complete!

Your portfolio is now running at: **http://localhost:3000**

## 📝 Step-by-Step Customization

### 1. **Personal Information** (Lines 4-15 in `src/data/resume.tsx`)

Replace these with your details:

```typescript
export const DATA = {
  name: "Your Full Name", // Replace with your name
  initials: "YN", // Your initials
  url: "https://yourwebsite.com", // Your personal website URL
  location: "Your City, State", // Your location
  locationLink: "https://www.google.com/maps/place/yourcity", // Google Maps link
  description: "Your professional tagline", // Brief description of yourself
  summary: "Your detailed bio and background...", // Longer summary about you
  avatarUrl: "/your-photo.png", // Your profile photo (add to /public folder)
};
```

### 2. **Skills** (Lines 16-28)

Update with your technical skills:

```typescript
skills: [
  "JavaScript",
  "React",
  "Node.js",
  // Add your skills here
],
```

### 3. **Contact Information** (Lines 34-65)

Update your contact details and social media:

```typescript
contact: {
  email: "your.email@example.com",         // Your email
  tel: "+1234567890",                      // Your phone number
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/yourusername", // Your GitHub URL
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername", // Your LinkedIn URL
      icon: Icons.linkedin,
      navbar: true,
    },
    // Add or remove social platforms as needed
  },
},
```

### 4. **Work Experience** (Lines 67-150)

Replace with your work history:

```typescript
work: [
  {
    company: "Your Company Name",
    href: "https://company-website.com",
    badges: ["Remote", "Full-time"], // Optional badges
    location: "City, State",
    title: "Your Job Title",
    logoUrl: "/company-logo.png",    // Add company logo to /public folder
    start: "Month Year",
    end: "Month Year", // or "Present"
    description: "Describe what you accomplished in this role...",
  },
  // Add more work experiences
],
```

### 5. **Education** (Lines 152-180)

Update with your educational background:

```typescript
education: [
  {
    school: "Your University",
    href: "https://university-website.com",
    degree: "Your Degree",
    logoUrl: "/university-logo.png",  // Add logo to /public folder
    start: "Year",
    end: "Year",
  },
  // Add more education entries
],
```

### 6. **Projects** (Lines 182-300+)

Showcase your projects:

```typescript
projects: [
  {
    title: "Your Project Name",
    href: "https://project-website.com",
    dates: "Month Year - Month Year",
    active: true, // or false if no longer active
    description: "Describe your project and its impact...",
    technologies: ["React", "Node.js", "MongoDB"], // Technologies used
    links: [
      {
        type: "Website",
        href: "https://project-website.com",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/yourusername/project",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/project-screenshot.png", // Optional project image
    video: "https://video-url.com",   // Optional project video
  },
  // Add more projects
],
```

## 🖼️ Image Assets to Replace

### Required Images (in `/public` folder):

1. **`me.png`** - Your profile photo
2. **Company logos** - For each work experience
3. **School logos** - For each education entry
4. **Project images** - Screenshots of your projects

### Image Guidelines:

- **Profile photo**: 400x400px, square format
- **Company/School logos**: 200x200px, transparent background preferred
- **Project images**: 800x600px or 16:9 aspect ratio

## 🎨 Advanced Customization

### Colors & Theming

- Edit `tailwind.config.ts` to change color scheme
- The template supports dark/light mode automatically

### Adding New Sections

- Follow the existing pattern in `src/data/resume.tsx`
- Update the corresponding components in `src/components/`

### Blog Content

- Add blog posts in the `/content` directory
- Follow the existing markdown format

## 🚀 Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy automatically

### Option 2: Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Option 3: GitHub Pages

1. Add deployment workflow in `.github/workflows/`
2. Enable GitHub Pages in repository settings

## 🔧 Development Commands

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run linting
```

## 📱 Features Included

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light mode toggle
- ✅ Blog functionality
- ✅ SEO optimized
- ✅ Fast loading with Next.js
- ✅ Modern animations with Framer Motion
- ✅ Accessible components with Radix UI

## 🎯 Next Steps

1. **Replace all personal information** in `src/data/resume.tsx`
2. **Add your images** to the `/public` folder
3. **Test locally** at http://localhost:3000
4. **Deploy** to your preferred platform
5. **Share your portfolio** with the world!

---

**Need help?** Check the original template documentation or feel free to ask questions!
