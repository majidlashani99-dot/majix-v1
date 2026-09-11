# MAJIX

Production-oriented Telegram Mini App architecture for earning virtual MJX credits, tasks, football predictions and wallet operations.

## Run locally

1. Install Node.js 20+, Docker and npm.
2. Copy `.env.example` to `.env`.
3. Run `docker compose up -d postgres redis`.
4. Run `npm install`, `npm run db:push`, `npm run db:seed`.
5. Run `npm run dev`. Web is on `5173`, API on `4000`, admin on `5174`.

`MOCK_MODE=true` supplies demo authentication, matches and task data. Production must configure Telegram signature validation and licensed sports/odds providers before enabling real integrations. MJX is an internal virtual ledger; every reward is recorded in `WalletTransaction` with idempotency protection and database transactions.

## Architecture

`apps/web` is the mobile-first Telegram-compatible UI. `apps/api` exposes authenticated REST endpoints. `apps/admin` is the operations shell. Prisma schema includes users, wallets, immutable ledger transactions, tasks, video sessions, referrals, predictions, withdrawals, notifications, achievements and audit logs. Provider interfaces should be added under `apps/api/src/providers` for licensed sports, odds and market data integrations.

## Telegram

Set the bot menu button to the web app URL and pass `Telegram.WebApp.initData` to `/auth/telegram`. The demo endpoint accepts a Telegram id for local development; production validation must use the bot token HMAC procedure and never trust `initDataUnsafe` for identity.
