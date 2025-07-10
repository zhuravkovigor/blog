This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## SEO Features

This blog includes the following SEO features:

### RSS Feed

- **URL**: `/rss.xml`
- Automatically generated RSS feed with all published posts
- Includes title, description, publication date, and permalink for each post
- Proper XML formatting with UTF-8 encoding

### Sitemap

- **URL**: `/sitemap.xml`
- Dynamic sitemap generation including:
  - Homepage with highest priority
  - All published blog posts with their last modification dates
  - Proper change frequency and priority settings

### Robots.txt

- **URL**: `/robots.txt`
- Search engine crawler instructions
- Allows all pages except API routes
- References the sitemap location

### Configuration

- Site configuration centralized in `lib/constants.ts`
- Environment variables in `.env.local` for site URL
- Metadata includes RSS feed link in HTML head
- Footer includes links to RSS and sitemap

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
