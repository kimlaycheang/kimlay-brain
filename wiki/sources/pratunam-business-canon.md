---
title: "Pratunam Family House — Business Canon"
type: source
tags: [hotel, bangkok, thailand, hospitality, rpa, pms, channels, seasonality, audience]
date_ingested: 2026-06-18
original_file: "raw/Pratunam-Business-Canon.md"
---

## Overview

The single source of truth for Pratunam Family House business operations. Covers two branches (FM1 Soi 15 and FM2 Soi 17), their channel mix, real audience data from PMS (Jun 2025–Jun 2026), seasonality, languages, RPA system details, and standing operational rules. All skills and AI tools must defer to this file.

## Key Claims

- **FM1 (Soi 15)**: ~30 rooms, Zuzu PMS, OTA-only, ~43% occupancy — marketing priority needing urgent content in low season
- **FM2 (Soi 17)**: 34 rooms, Guru PMS (PR6667), OTA + messaging-direct channels, ~87–150% occupancy Nov–Jun — proven engine to replicate at FM1
- **Facebook direct channel**: 2.98M THB revenue, ADR 1,613 THB (highest of all channels), 26% of FM2 revenue
- **Website-direct**: Lovable + Supabase site exists but has a Stripe bug — do NOT go live until fixed
- **Top OTA nationality by value index**: Philippines 1.59x > Malaysia 1.38x > Indonesia 1.10x > Thailand 0.47x (low value)
- **Direct channel audience**: Myanmar-led, books via Facebook/Telegram, high ADR; 56–73% of direct bookings fall in N/A nationality bucket due to missing staff tagging
- **FB video ad**: 318K reach, CPC 0.26 THB — feeds the direct channel, not vanity metric
- **Booking lead time**: ~23 days → promote 3–4 weeks ahead of target dates
- **Low season**: Jul–Oct; FM1 drops hardest — content creation is urgent now
- **Ghost Record Bug (active)**: 851 zero-price records; 420 ghost-deleted, 431 legitimate; started Apr 17, stopped May 10; root cause unknown — check edge function logs + git commits

## Entities Mentioned

- [[wiki/entities/pratunam-family-house|Pratunam Family House]] — hotel business, both branches
- [[wiki/entities/guru-pms|Guru PMS]] — used at FM2 (project PR6667)
- [[wiki/entities/zuzu-pms|Zuzu PMS]] — used at FM1
- [[wiki/entities/supabase|Supabase]] — project `ysbyfqhstlwoelrmdeof` (Lovable-owned), backs RPA system
- [[wiki/entities/stripe|Stripe]] — payment processor; has active bug blocking website-direct launch
- [[wiki/entities/line-messaging|LINE Messaging API]] — alerts channel for RPA ops

## Key Rules (Operational)

- **RPA stack**: Node.js + Puppeteer on VPS 72.62.196.38, managed by PM2. No Bardeen/Axiom/UiPath/n8n/API substitution.
- **n8n**: use only if no better option exists
- **Lovable + Claude Code**: never edit the same file simultaneously
- **Alerts**: LINE for RPA ops; Telegram for content approval
- **Khmer content**: native speaker review required before publishing — always

## Open Questions

1. Ghost Record Bug root cause — edge function logs and git commits between Apr 17–May 10 not yet reviewed
2. Nationality tagging gap — staff process to be enforced for direct bookings in Guru/Zuzu
3. Stripe bug specifics on the website-direct channel — blocking go-live

## Sources

- [raw/Pratunam-Business-Canon.md](raw/Pratunam-Business-Canon.md)
