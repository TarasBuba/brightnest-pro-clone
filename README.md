# BrightNest Pro Services

Local family-owned handyman and painting services in Edmonton, Canada.
This is a Next.js static-export application configured for Cloudflare Pages.

## Quick Start

1. **Prerequisites:**
   - Node.js >= 22 (see `.nvmrc`)
   - npm

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts & Quality Verification

- **`npm run dev`**: Start the Next.js development server.
- **`npm run build`**: Build the static export into the `/out` directory.
- **`npm run lint`**: Run ESLint checks across the codebase.
- **`npm run type-check`**: Run TypeScript compiler validation (`tsc --noEmit`).
- **`npm run verify`**: Run full verification gate (`type-check` + `lint` + `build` + `check-export.mjs`).
- **`npm run lhci`**: Run Lighthouse CI assertions against the static build output (`./out`).

```bash
npm run verify
```

## Cloudflare Pages Deployment

This project is configured for static HTML export (`output: 'export'`, trailing slash enabled).

### Cloudflare Pages Build Settings

- **Framework preset:** Next.js (Static HTML Export)
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Environment variables:**
  - `NODE_VERSION`: `22`
  - `NEXT_PUBLIC_WEB3FORMS_KEY`: your Web3Forms access key

### Security Headers

The `public/_headers` file configures Content Security Policy (CSP), permissions policies, Cross-Origin-Opener-Policy, and cache headers on Cloudflare Pages.
