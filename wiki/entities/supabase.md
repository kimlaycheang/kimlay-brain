---
title: "Supabase"
type: entity
subtype: product
tags: [database, backend, edge-functions, postgres]
created: 2026-04-23
updated: 2026-04-23
source_count: 1
---

## Supabase

Open-source Firebase alternative providing PostgreSQL databases, edge functions (Deno-based), authentication, and storage. [[wiki/entities/pratunam-family-house|Pratunam Family House]] runs **two separate Supabase projects**:

### Project A — Guest Website (`ask-without-cost-main`)

Edge functions: `create-checkout`, `stripe-webhook`, `check-booking-conflicts`, `public-rooms`, `verify-payment`, `passport-ocr`, `ai-assistant`, `send-contact-message`

Key tables: `bookings`, `booking_holds`, `branches`, `booking_flow_logs`

### Project B — PMS (`mind-meter-app-main`)

Edge functions: `rpa-sync`, `check-availability`, `inbound-booking`, `public-bookings`, `booking-cron`, `rpa-heartbeat`, `rpa-self-heal`, `daily-line-report`, `payment-bot`, and more (24 total)

Key tables: `bookings`, `rooms`, `room_types`, `availability_current`, `rpa_bot_status`, `rpa_selectors`, `inbound_bookings_raw`

### Architecture Implications

- Two databases means no JOINs across website bookings and PMS data
- Financial reconciliation requires cross-project API or ETL
- Each project has independent RLS policies and auth

## Sources

- [[wiki/sources/family-house-launch-gate|Unified Launch Gate Plan]]
