---
title: "Guru PMS"
type: entity
subtype: product
tags: [ota, pms, rpa, hospitality]
created: 2026-04-23
updated: 2026-04-23
source_count: 1
---

## Guru PMS

Property management system used as an OTA aggregation layer. [[wiki/entities/pratunam-family-house|Pratunam Family House]] integrates via [[wiki/concepts/rpa-sync|RPA bots]] running on a VPS that scrape the Guru web interface.

### Integration

- RPA bot scrapes bookings and availability from Guru PMS web UI
- Synced to PMS database via `rpa-sync` edge function (`action: sync_booking` and `action: sync_availability`)
- Bot health monitored via `rpa-heartbeat` and `rpa-bot-status` table
- Selector self-healing via AI-powered `rpa-self-heal` function

### Known Limitations

- Bot code lives on VPS — not in the auditable codebase
- No 2FA challenge detection documented
- No exponential backoff for anti-bot detection

## Sources

- [[wiki/sources/family-house-launch-gate|Unified Launch Gate Plan]]
