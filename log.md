# Wiki Log
*Append-only. Format: `## [YYYY-MM-DD] type | Title`*
*Types: ingest | query | lint | note*

---

## [2026-04-20] note | Wiki initialized
- Schema: `CLAUDE.md` created at project root (`c:/Users/kimla/Obsidian+claude/`)
- Structure: `raw/`, `raw/assets/`, `wiki/entities/`, `wiki/concepts/`, `wiki/sources/`, `wiki/queries/` created
- Files: `index.md`, `log.md`, `wiki/overview.md` initialized
- Status: Ready for first ingest

## [2026-04-23] ingest | Family house launch gate
- Source: `raw/Family house implementation_plan`
- Output: `wiki/sources/family-house-launch-gate.md`
- Entities created: pratunam-family-house, stripe, supabase, guru-pms, zuzu-pms, line-messaging

## [2026-06-13] note | Session — Hotel PMS + Hermes setup
- Hotel PMS Phase 1: overbooking fix DONE, kill switch DONE, Puppeteer RPA bot IN PROGRESS
- Hermes AI agent: VPS (72.62.196.38) configured, Obsidian vault auto-sync every 5 min
- Hermes Desktop: gemma4:12b model downloading
- Budget locked: $35/month (Claude Pro $20 + Google AI Plus THB350 + Lovable Lite $5)
- Created: 01-Pratunam/pms-status.md, 05-Projects/hermes-setup.md, 06-Meetings/2026-06-13.md

## [2026-06-14] note | Knowledge base restructured
- Created full business overviews: 01-Pratunam, 02-BTExpress, 03-CambodiaLogistics, 04-TravelBusAsia
- Added KIM.md (identity), RULES.md (AI team rules)
- Pushed to remote branch

## [2026-06-16] note | AI Orchestrator bot built
- Created: `ai-orchestrator/` with 6 files (orchestrator.js, nim-client.js, models.json, .env.example, install.sh, README.md)
- Routes: plan→Nemotron-Ultra, code→DeepSeek-Flash, content→GLM-5.1, vision→Nemotron-Omni, audit→human review
- Fallbacks: GLM-5.1→MiniMax-M2.7, DeepSeek-Flash→DeepSeek-Pro (auto on 429)
- Security: only CHAT_ID=-5278393902 accepted
- Deploy target: VPS 72.62.196.38 /opt/ai-orchestrator/ via PM2 (pending Kim approval)
- Vault audit: all core docs current; log.md + index.md updated
