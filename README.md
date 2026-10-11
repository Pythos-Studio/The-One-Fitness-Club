# The One Fitness Club — Liquid Strength website demo
Website concept crafted by Pythos Studio. React + Vite + TypeScript + Tailwind + Framer Motion + GSAP.

## Run
```
npm install
npm run dev
npm run build
```

## Before launch (owner-verified details)
- `src/config/business.ts`: WhatsApp number (digits with country code), phone, address, hours, Maps link. The inquiry button stays disabled until the WhatsApp number is set.
- `src/data/membership.ts`: plans and prices. `price: null` shows "Contact us for current membership plans". The ₹8,999 annual offer in the reference is not published until confirmed.
- `src/data/gallery.ts` + `public/images/`: add real, permitted photos (WebP). Missing images show a branded placeholder. Hero uses `/images/hero.webp`, About `/images/about.webp`, final CTA `/images/final.webp`, programs `/images/program-*.webp`.
- `src/data/programs.ts`, `articles.ts`: confirm programs, edit sample articles.

## Deploy
1. Push to GitHub. 2. In Vercel: Add New Project, import the repo (Vite preset auto-detected). 3. Deploy. No environment variables needed.

No admin dashboard, database, or live Instagram sync exists; content is edited in the data files.
