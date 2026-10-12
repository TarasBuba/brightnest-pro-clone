# BrightNest Pro Services

Local family-owned handyman and painting services in Edmonton, Canada.
This is a modern Next.js static-export application hosted on Cloudflare Pages.

## 🚀 Quick Start

1. **Prerequisites:**
   - Node.js >= 22 (see `.nvmrc`)
   - npm

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory (see `.env.example`):
   ```env
   NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🛠️ Scripts & Quality Verification

- **`npm run dev`**: Start the Next.js development server.
- **`npm run build`**: Build the static export into the `/out` directory.
- **`npm run lint`**: Run ESLint checks across the codebase.
- **`npm run type-check`**: Run TypeScript compiler validation (`tsc --noEmit`).
- **`npm run verify`**: Run full deterministic verification gate (`type-check` + `lint` + `build` + `check-export.mjs`).
- **`npm run lhci`**: Run Lighthouse CI assertions against the static build output (`./out`).

```bash
# Run complete verification gate
npm run verify
```

## 📦 Cloudflare Pages Deployment

This project is configured for static HTML export (`output: 'export'`, trailing slash enabled).

### Cloudflare Pages Build Settings

- **Framework preset:** None / Next.js (Static HTML Export)
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Environment variables:**
  - `NODE_VERSION`: `22`
  - `NEXT_PUBLIC_WEB3FORMS_KEY`: your Web3Forms access key

### Domain & Redirects (www -> apex)

- The canonical domain is `https://brightnestpro.ca`.
- Configure a redirect from `www.brightnestpro.ca` to `https://brightnestpro.ca` via Cloudflare **Bulk Redirects** or **Redirect Rules** (301 Permanent Redirect).

### Security Headers & Hosting Note

The `public/_headers` file configures strict Content Security Policy (CSP), permissions policies, Cross-Origin-Opener-Policy, and cache headers.
> [!NOTE]
> `public/_headers` rules are automatically parsed and applied when hosted on Cloudflare Pages. They do not apply when previewing on platforms like Vercel.

## 🔍 Post-Deploy SEO Checklist

After deploying the site to production:

1. **Google Search Console (GSC):**
   - Add a Domain property for `brightnestpro.ca` via DNS TXT verification.
   - Submit the XML sitemap: `https://brightnestpro.ca/sitemap.xml`.
   - Run URL Inspection for critical routes: `/`, `/about/`, `/book/`, and request indexing.
2. **Google Business Profile (GBP):**
   - Create and verify the business profile for BrightNest Pro Services in Edmonton, AB.
   - Once published, update `siteConfig.profiles.googleBusiness` in `src/shared/config/site.ts` with the GBP URL.
3. **Rich Results Test:**
   - Run Google's [Rich Results Test](https://search.google.com/test/rich-results) on `https://brightnestpro.ca/` to verify LocalBusiness, WebSite, and Organization schema markup.
