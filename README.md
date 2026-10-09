# BrightNest Pro Services

Local family-owned handyman and painting services in Edmonton, Canada.
This is a modern Next.js 15 application statically exported for Cloudflare Pages.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_key_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Verification & Building

To ensure code quality before pushing, run the standard checks:

```bash
# Check TypeScript types
npm run type-check

# Lint the code
npm run lint

# Build for production (Static Export)
npm run build
```

The output will be placed in the `/out` directory, which is configured to be automatically deployed by Cloudflare Pages.

## 📦 Cloudflare Pages Deployment

This project is configured for **Static Export** (`output: 'export'`).
When setting up the project in Cloudflare Pages:

- **Framework preset:** Next.js (Static HTML Export)
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Node.js version:** The `.nvmrc` file specifies Node 20. Make sure your Cloudflare environment uses `NODE_VERSION=20`.

### Security & Headers
The `public/_headers` file contains the strict Content Security Policy (CSP), cache rules, and security headers required for production. Cloudflare Pages automatically applies these headers to the deployed site.
