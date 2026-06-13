---
title: "Pratunam Family House"
type: entity
subtype: org
tags: [hotel, bangkok, thailand, hospitality]
created: 2026-04-23
updated: 2026-04-23
source_count: 1
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

## Sources

- [[wiki/sources/family-house-launch-gate|Unified Launch Gate Plan]]
