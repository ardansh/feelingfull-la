# FeelingFullLA

A highschool-run nonprofit website for FeelingFullLA — a Los Angeles project
reducing food waste and fighting hunger. Built with Next.js 16, React 19, and
Tailwind CSS v4.

## Pages

- **Home** — hero, real photo gallery, and animated impact stats (100,000+ lbs donated).
- **Mission** — mission statement and program pillars.
- **Partners** — Nourish LA, St. Mark's Parish, Westside Food Bank, Upward Bound, UCLA Food Pantry, St. Joseph's.
- **Volunteer** — sign-up form (name, occupation, why they want to volunteer).
- **Contact** — for vendors & food banks (name + reason of contact), plus direct email.

## Getting Started

```bash
npm install   # first time only
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it. Edit `app/page.tsx`
(or any file under `app/`) and the page auto-updates.

## Photos

Site photos live in `public/` as `gallery-1.png` … `gallery-7.png` and are shown
in the home page gallery (`app/page.tsx`). To swap a photo, replace the file in
`public/` (keep the same name) or add a new one and reference it in the `GALLERY`
array in `app/page.tsx`.

## Deploy (GitHub + Vercel)

1. **Create an empty GitHub repo** at https://github.com/new — name it
   `feelingfull-la`, set it Public, and do **not** add a README, .gitignore, or
   license (the project already has commits).
2. **Push the code:**
   ```bash
   git remote add origin https://github.com/<your-username>/feelingfull-la.git
   git push -u origin main
   ```
   The first push opens a browser to log in to GitHub (one time).
3. **Connect Vercel:** go to https://vercel.com/new, sign in with GitHub, import
   the `feelingfull-la` repo, and click **Deploy**. Vercel auto-detects Next.js —
   no settings to change.
4. Every future `git push` to `main` automatically redeploys the live site.
