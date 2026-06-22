# CORE-CONTEXT — Kim's AI Team

> Single source of truth. Never put API keys or passwords in this file.
> Last updated: 2026-06-22
> Canonical location: E:\Obsidian+claude\my vault\CORE-CONTEXT.md (kimlay-brain repo)
> VPS mirror: /opt/obsidian-vault/CORE-CONTEXT.md

## Owner

**Kimlay Cheang (Kim)**
- Cambodian, based in Bangkok, Thailand
- Solo operator across 4 businesses
- Languages: Khmer (native), Thai (fluent), English (can read/type, prefers Thai responses)
- Always reply in Thai

## The 4 Businesses

### 1. Pratunam Family House (Hotel)
- Budget hotel, Bangkok Pratunam district
- **FM1** — Soi 15, ~30 rooms, Zuzu channel manager, PMS: Lovable + Supabase
- **FM2** — Soi 17, ~34 rooms, Guru channel manager, PMS: Lovable + Supabase
- OTA guests: Philippines #1, Thailand #2, Indonesia #3
- Direct/Facebook guests: Myanmar-led
- GitHub: kimlaycheang/mind-meter-app (PMS), kimlaycheang/ask-without-cost (website)
- VPS paths: /opt/hotel-project/pratunam-pms, /opt/hotel-project/hotel-website
- **Current status (June 2026):**
  - Phase 1 complete: overbooking fix, kill switch, Puppeteer RPA bot syncs 34 rooms every 5 min
  - Phase 2 in progress: fixing supabase-client.js internal server error, shadow mode
  - Phase 3 pending: Zuzu bot, Gmail reconciliation, go live
  - Website NOT live yet (waiting for Phase 2 verification)

### 2. BT Express (Cross-Border Buying Agent)
- Thailand → Cambodia buying/shipping service (formerly "Buy Thai Product" — rebranded for political sensitivity)
- 273 customers on Telegram (@Buy_Thai_Express_bot)
- Supabase project: mwfpcelosrnobtyocson (Lovable-owned)
- Branch UUIDs: Bangkok=17155bfe, Phnom Penh=08525cf9, Poipet=a6f942f2
- **Current status:** Facebook publishing blocked (Business License renewal pending); CMO content pipeline working
- **Content rules:** NEVER mention "Thai" publicly; demand-side framing only; no border politics

### 3. Cambodia Logistics (Freight Forwarding)
- Thailand → Cambodia freight, ~40 staff, 79K Facebook followers
- Border closed since June 2025; B2B transformation in progress
- Supabase: ydwtkencvvdniwdoxfeq; GitHub: kimlaycheang/shipment-buddy-01
- Content pillars: Monday=Market Intelligence, Thursday=Education, Saturday=Service Excellence
- Destinations: Phnom Penh, Poipet, Siem Reap, Rongkuer; transit always 5–7 days
- CTAs: Line @cambo | Telegram @CamboXpress | 0853941877
- **Content rules:** demand-side framing only; NEVER mention Thai wholesale markets; NEVER mention border politics

### 4. TravelBusAsia (Transport)
- Bus/van from Khaosan Road, Bangkok to southern Thai destinations
- **Foreign tourists ONLY** — Thai nationals legally prohibited
- 99% bookings via 12Go platform; fleet: 4 buses, 20 vans
- Offices: Pratunam + Khaosan Road Soi Rambuttri
- Routes: Koh Samui, Koh Phangan, Koh Tao, Krabi, Phuket, Surat Thani, Chumphon
- Cambodia route permanently closed
- **Content rules:** English only; NO Thai language; never target Thai nationals; no prices in posts

## AI Team Structure

| Role | Profile | Model | Bot | Handles |
|------|---------|-------|-----|---------|
| Boss | Claude terminal (this session) | claude-sonnet-4-6 | — | Strategy, planning, analysis |
| Worker 1 | `worker-primary` | deepseek/deepseek-v4-flash | @Hermes_Nay_bot | Coding, complex tasks, multi-step planning |
| Worker 2 | `worker-free` | qwen/qwen3-coder:free | @Claude_kimlay_bot | Simple drafts, repeat tasks, basic content |

**Telegram routing:**
- `/w1 [task]` → Worker 1 picks up
- `/w2 [task]` → Worker 2 picks up
- If Worker 2 replies ESCALATE → Kim relays with `/w1 [same task]`
- If Worker 1 fails 3× → sends ⚠️ WORKER1_FAILED alert to Kim

**Approval checkpoint:** Kim must explicitly say "go ahead" or "ทำเลย" before any worker executes irreversible actions.

## Hard Rules (apply to every task)

1. **n8n is PERMANENTLY BANNED** across all projects
2. **Never deploy without Kim's approval**
3. **git pull before editing → git push after finishing** — always
4. Never edit the same file from Lovable and PC at the same time
5. Lovable = UI only; Workers = code/execution; Boss = strategy/planning
6. **Ship one real result before building more infrastructure** (ContentOS v5/v6/v7 failure pattern)
7. Never put API keys/tokens/passwords in this file or any committed file
8. No SSH to VPS (72.62.196.38) from local PC without Kim's explicit instruction

## Content Global Rules

- All **Khmer text** needs native-speaker review before publishing — output `khmer_review` status only
- All workers reply in Thai
- Never invent data — only use Kim's actual numbers

## Current Tech Stack

- **Frontend/UI:** Lovable (all 3 active projects)
- **Backend:** Supabase (each project has its own project)
- **Bots:** Telegram (Worker 1 @Hermes_Nay_bot, Worker 2 @Claude_kimlay_bot, VPS @HermesNIM)
- **AI tools:** Claude Sonnet 4-6 (Boss/terminal), DeepSeek V4-Flash (Worker 1), Qwen3-Coder (Worker 2)
- **RPA:** Puppeteer + PM2 on VPS (72.62.196.38)
- **VPS:** Hostinger, 72.62.196.38
- **Brain repo:** https://github.com/kimlaycheang/kimlay-brain.git (E:\Obsidian+claude\my vault)
