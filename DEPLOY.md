# Deploy — Portfolio

This portfolio is a static Next.js 14 site. The cheapest, fastest way to get it live is **Vercel** (the company that builds Next.js — auto-deploys are a single click).

## Quick deploy (~2 minutes)

### Step 1: Create a Vercel account

- Open https://vercel.com and sign up with your GitHub account.

### Step 2: Import the repo

1. Click **Add New** → **Project**.
2. Pick `brunombpereira/portfolio` from the list.
3. Vercel auto-detects Next.js. Defaults are correct — no need to touch anything.
4. (Optional) Add an Environment Variable:
   - Name: `NEXT_PUBLIC_SITE_URL`
   - Value: the URL you expect to use, e.g. `https://portfolio-brunombpereira.vercel.app`
     This is used for canonical URLs and OG metadata. If you skip it, defaults are used.
5. Click **Deploy**. Wait ~90 seconds.

### Step 3: (Optional) Rename to something cleaner

After the first deploy Vercel gives you `https://portfolio-<hash>.vercel.app`. To get a nicer URL:

- **Project → Settings → Domains** → add a project-level domain like `portfolio-brunombpereira.vercel.app` (free).
- Or buy a custom domain (~€10/year, e.g. `brunoborlido.dev`) and point it at Vercel via DNS.

### Step 4: Auto-deploy is now on

Every push to `main` on GitHub triggers a redeploy. Edit `src/data/profile.ts` or `src/data/projects.ts`, push, and the site updates in ~90s.

## How to update content

99% of edits are to two files:

- `src/data/profile.ts` — name, bio, stack, links.
- `src/data/projects.ts` — list of projects.

Both are plain TypeScript. Adding a project is a typed object literal:

```ts
{
  title: "Some Project",
  context: "Year · Context",
  description: "1-2 sentences.",
  highlights: ["Bullet 1", "Bullet 2"],
  tech: ["Tech 1", "Tech 2"],
  links: [{ label: "Code →", url: "https://..." }],
  group: "open-source", // or "work" or "academic"
}
```

No CMS, no markdown, no build pipeline beyond `next build`.

## Troubleshooting

**Build fails with type errors**

- Run `npm run build` locally first to catch them before push.

**OG image or canonical URL is wrong**

- Set the `NEXT_PUBLIC_SITE_URL` env var on Vercel to your final URL.
