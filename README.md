# ExpiryGuard

Track every subscription, document, warranty, and medicine expiry in one place —
with in-app popups, browser push notifications, and email-ready reminder windows.

## Run it locally

```bash
npm install
npm run dev
```

It opens at `http://localhost:5173`. **It works immediately with zero setup** —
without a `.env` file it runs in demo mode, storing data in the browser's
localStorage so you (or a buyer) can click through the whole product right away.

## Connect a real database (free)

1. Create a free project at [supabase.com](https://supabase.com)
2. In your Supabase project: **SQL Editor → New query** → paste the contents of
   `supabase/schema.sql` → Run
3. In your Supabase project: **Settings → API** → copy the Project URL and anon key
4. Copy `.env.example` to `.env` and fill in those two values
5. Restart `npm run dev` — the app now uses real auth + a real database

## Deploy for free

- Push this folder to a GitHub repo
- Import it at [vercel.com](https://vercel.com) (free tier)
- Add the two `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` environment variables
  in Vercel's project settings
- Deploy — you'll get a live URL in under a minute

## What's built

- **Auth** — sign up / log in (Supabase Auth, or demo mode with no backend)
- **Dashboard** — items sorted by urgency, color-coded (overdue / critical / upcoming / tracked)
- **Add item** — name, category, expiry date, custom reminder window, notes
- **Reminders** — in-app popup toast on load + native browser notifications
  (via the free Notification API — no paid push service required)
- **Categories** — subscriptions, documents, warranties, medicine, food, other
- **Row-level security** — each user only ever sees their own data

## What's intentionally left for you to wire up before selling

- **Payments / pro tier**: the UI and data model support a `reminder_days` per item
  and unlimited categories already. To add a paid tier, the cleanest free option is
  [RevenueCat](https://www.revenuecat.com) (has a generous free tier) or Stripe Checkout —
  gate item count (e.g. free = 10 items, pro = unlimited) using a `pro` flag on the user.
- **Email reminders**: pair with a free tier of [Resend](https://resend.com) or
  Supabase's built-in email, triggered by a daily cron (Supabase Edge Functions has
  a free scheduled-functions tier).

## Tech stack

React 18 + Vite + Tailwind CSS + Supabase (Postgres + Auth). No paid services required to run or demo it.