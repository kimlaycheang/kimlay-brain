# PROGRESS.md — Task Log (append-only)

## 2026-06-22 — Hermes bot fix
- Fixed: TELEGRAM_ALLOWED_USERS=5878052919 added to worker-primary and worker-free .env
- Fixed: Boss gateway stopped (was competing with worker-free for same bot token)
- Result: Both @Hermes_Nay_bot and @Claude_kimlay_bot confirmed sending to group -5278393902

## 2026-06-22 — Day 1 team setup complete
- [2026-06-22] BOSS+WORKERS — Phase 1 PC team complete
- [2026-06-22] VPS — Swap 2GB added, 3 dead bots removed, PM2 clean 6 processes
- [2026-06-22] DOCS — CORE-CONTEXT, CLAUDE.md, AI-TOOLS-REFERENCE synced to GitHub
- [2026-06-22] SECURITY — Pratunam website C1/C2/H2/H3/H4 fixed, all edge functions deployed via Lovable
- [2026-06-22] ROUTING — Hermes !w1/!w2 gateway-level routing confirmed working
- [2026-06-22] PHASE1 — AI team complete: Boss(Claude)+Worker1(DeepSeek !w1)+Worker2(Qwen !w2) online
- [2026-06-22] WORKER-FREE — switched to DeepSeek V4-Flash primary, Qwen free fallback, api_max_retries=1
