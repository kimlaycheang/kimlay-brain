---
title: Pratunam Family House — Business Canon
updated: 2026-06-17
note: Single source of truth. Skills and AI tools must defer to this file.
---

# Pratunam Family House — Business Canon

## 2 Branches

| | FM1 | FM2 |
|---|---|---|
| Soi | Soi 15 | Soi 17 |
| PMS | Zuzu | Guru (PR6667) |
| Rooms | ~30 | 34 |
| Occupancy | ~43% needs guests | ~87-150% Nov-Jun |
| Channels | OTA only | OTA + Facebook + Telegram/Viber/WhatsApp |
| Priority | Marketing priority | Proven engine, copy to FM1 |

## Channel Map

OTA (Agoda, Booking, Trip.com, Tiket, Traveloka, Expedia)
- nationality captured, Trip.com = #1 at FM2

MESSAGING-DIRECT (Live, staff key manually)
- Facebook page, Telegram Soi 17, Viber, WhatsApp
- Facebook = 2.98M THB revenue, ADR 1613 THB highest of all channels
- 26% of FM2 revenue

WEBSITE-DIRECT (Not live yet)
- Lovable+Supabase website, has Stripe bug, do not go live until fixed

## Real Audience (PMS Jun 2025-Jun 2026)

OTA channel (tagged):
- Philippines #1 value index 1.59x
- Thailand #2 value index 0.47x low value
- Indonesia #3 value index 1.10x
- Malaysia #4 value index 1.38x
- China via Trip.com/Ctrip significant volume

Direct channel (untagged, falls in N/A 56-73%):
- Myanmar-led, book via Facebook/Telegram, high ADR
- FB video ad 318K reach CPC 0.26 THB feeds this channel, not vanity

Data gap fix:
- Staff must tag nationality when entering direct bookings into Guru/Zuzu

## Seasonality
- High season: Nov to May/Jun
- LOW season: Jul to Oct, entering now
- Booking lead time ~23 days, promote 3-4 weeks ahead
- FM1 drops lowest in low season, urgent to create content now

## Languages
English, Filipino/Tagalog, Indonesian, Thai, Burmese (direct channel), Chinese, Malay
Khmer = native speaker review before posting always

## RPA System
- Stack: Node.js + Puppeteer, VPS 72.62.196.38, PM2
- Supabase: ysbyfqhstlwoelrmdeof (Lovable-owned)
- Kim chose RPA over API deliberately (no lock-in + future PMS product)
- Do NOT suggest Bardeen/Axiom/UiPath/n8n/API

Ghost Record Bug (active):
- 851 zero-price records, 420 ghost deleted, 431 legitimate
- Started Apr 17 stopped May 10
- Root cause not found yet, check edge function logs + git commits

## Rules
- n8n: use only if no better option exists
- Lovable + Claude Code: never edit same file at same time
- Alerts: LINE for RPA ops, Telegram for content approval
- Khmer: native speaker before publishing always
