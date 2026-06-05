# Corebalt website

Marketing and product-showcase site for Corebalt — a Nairobi-based software studio.
Built with [Astro](https://astro.build): fast static HTML, reusable components, and a Markdown blog.

## Develop

```bash
npm install      # once
npm run dev      # local dev server with hot reload (http://localhost:4321)
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
├─ styles/global.css          Global styles (design tokens + all component CSS)
├─ data/products.ts           Product catalogue — edit here to add/change products
├─ components/                Reusable UI: Header, Footer, ProductCard, ContactModal, BrandMark
├─ layouts/BaseLayout.astro   Shared <head>, fonts, header/footer/modal, global scripts
├─ content/blog/*.md          Blog posts (Markdown + frontmatter)
├─ content.config.ts          Blog content schema
└─ pages/
   ├─ index.astro             Homepage
   └─ blog/                   Blog index + individual post pages
```

## Common edits

- **Add/edit a product:** edit `src/data/products.ts`.
- **Write a blog post:** add a `.md` file in `src/content/blog/` with `title`, `description`, `date` frontmatter.
- **Change colors/spacing:** the design tokens live at the top of `src/styles/global.css`.

## Contact form

The "Book a demo" form currently opens the visitor's email client (no backend).
To deliver submissions straight to an inbox, follow the commented instructions in
`src/components/ContactModal.astro` (Formspree / Web3Forms).

## Deployment

Static build (`npm run build` → `dist/`). Designed to deploy on Cloudflare Pages
or Netlify via connected Git repo (auto-deploy on push to `main`).

The original hand-written single-file design is preserved at `reference/original-design.html`.
