---
title: "Pratunam Family House"
type: entity
subtype: org
tags: [hotel, bangkok, thailand, hospitality, rpa, channels, audience]
created: 2026-04-23
updated: 2026-06-18
source_count: 2
---

## Pratunam Family House

A budget hotel in the Pratunam district of Bangkok, Thailand. Operates multiple branches under the same brand, targeting international budget travelers (backpackers, SE Asian tourists).

### Tech Stack

- **Guest-facing website**: Vite + React + TailwindCSS, hosted via Supabase (Project A: `ask-without-cost-main`)
- **PMS (Property Management System)**: Vite + React dashboard, hosted via Supabase (Project B: `mind-meter-app-main`)
- **Payments**: [[wiki/entities/stripe|Stripe]] checkout sessions with THB currency
- **Notifications**: [[wiki/entities/line-messaging|LINE Messaging API]] for staff alerts, Gmail SMTP for guest vouchers
- **OTA integration**: RPA bots on a VPS scraping [[wiki/entities/guru-pms|Guru PMS]] and [[wiki/entities/zuzu-pms|Zuzu PMS]], plus AI-parsed email ingestion from Agoda/Booking.com/Expedia/Hostelworld
- **Languages**: 7 translations (EN, TH, ZH, VI, KM, MY, MS)

### Key Risks Identified

- [[wiki/concepts/dedup-pattern|Dedup]] race conditions in the booking pipeline
- [[wiki/concepts/overbooking-detection|Overbooking]] from OTA+website race window
- Two separate databases make financial reconciliation difficult
- Zero automated tests for the critical payment path

## Branches

| | FM1 | FM2 |
|---|---|---|
| Soi | Soi 15 | Soi 17 |
| PMS | [[wiki/entities/zuzu-pms\|Zuzu]] | [[wiki/entities/guru-pms\|Guru]] (PR6667) |
| Rooms | ~30 | 34 |
| Occupancy | ~43% (low, marketing priority) | ~87–150% Nov–Jun |
| Channels | OTA only | OTA + Facebook + Telegram/Viber/WhatsApp |

## Channel Performance (FM2, Jun 2025–Jun 2026)

- **Facebook direct**: 2.98M THB revenue, ADR 1,613 THB (highest of all channels), 26% of FM2 revenue
- **OTA top nationalities by value index**: Philippines 1.59x · Malaysia 1.38x · Indonesia 1.10x · Thailand 0.47x (low)
- **Direct channel audience**: Myanmar-led (books via Facebook/Telegram); 56–73% nationality untagged in PMS
- **Website-direct**: Lovable + Supabase site — blocked by Stripe bug, do not go live until fixed

## Seasonality

- High season: Nov–May/Jun
- Low season: Jul–Oct (current) — FM1 occupancy drops hardest; content creation urgent
- Booking lead time ~23 days → promote 3–4 weeks ahead

## Active Issues

- **Ghost Record Bug**: 851 zero-price records (420 ghost-deleted, 431 legitimate); Apr 17–May 10; root cause unknown
- **Nationality tagging gap**: staff must tag nationality on all direct bookings entered into Guru/Zuzu

## Sources

- [[wiki/sources/family-house-launch-gate|Unified Launch Gate Plan]]
- [[wiki/sources/pratunam-business-canon|Business Canon (single source of truth)]]
