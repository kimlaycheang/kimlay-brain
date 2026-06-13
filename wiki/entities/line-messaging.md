---
title: "LINE Messaging API"
type: entity
subtype: product
tags: [messaging, notifications, alerts]
created: 2026-04-23
updated: 2026-04-23
source_count: 1
---

## LINE Messaging API

Messaging platform used by [[wiki/entities/pratunam-family-house|Pratunam Family House]] for real-time staff notifications. Configured per-property via `line_notification_config` table.

### Usage

- **Booking confirmations**: New booking → LINE push to staff group
- **PMS failure alerts**: [[wiki/concepts/auto-refund|Auto-refund]] triggered → urgent LINE message
- **RPA bot alerts**: Bot goes offline → LINE alert via `rpa-heartbeat`
- **Daily reports**: Revenue summary via `daily-line-report`

### Configuration

- `LINE_CHANNEL_ACCESS_TOKEN` and `LINE_TARGET_CHAT_ID` stored as Supabase secrets (Project A)
- Per-property config in `line_notification_config` table (Project B) with `notify_success`, `notify_failure`, `notify_cancel` flags

## Sources

- [[wiki/sources/family-house-launch-gate|Unified Launch Gate Plan]]
