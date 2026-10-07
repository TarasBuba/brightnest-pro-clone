# BrightNest Pro Services

This is the source code for the official website of **BrightNest Pro Services**, an Edmonton-based family business providing professional handyman, deck restoration, and interior/exterior painting services.

## Overview

The site is a fast, responsive, and SEO-optimized landing page built with modern web technologies:

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Forms:** [Web3Forms](https://web3forms.com/) (Serverless email forwarding)
- **Validation:** [Zod](https://zod.dev/) & React Hook Form
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com)

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Web3Forms access key:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
   *(You can generate a free key at [Web3Forms](https://web3forms.com/).)*

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Commands & Checks

Before committing code or deploying, run these checks to ensure code quality:

- **Type Checking:**
  ```bash
  npm run type-check
  ```
- **Linting:**
  ```bash
  npm run lint
  ```
- **Production Build:**
  ```bash
  npm run build
  ```

## Contact Form (Web3Forms)

The `/book` page features a serverless contact form. It uses Web3Forms to email submissions directly to the business owners without needing a backend database. 

- It includes a `botcheck` honeypot field to block simple spam bots.
- Client-side validation is handled via Zod and React Hook Form.

## License & Copyright

&copy; 2026 BrightNest Pro Services. All rights reserved. 
Design and development by the BrightNest Pro team.
