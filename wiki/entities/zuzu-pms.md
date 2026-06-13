---
title: "Zuzu PMS"
type: entity
subtype: product
tags: [ota, pms, rpa, hospitality]
created: 2026-04-23
updated: 2026-04-23
source_count: 1
---

## Zuzu PMS

Property management system, similar to [[wiki/entities/guru-pms|Guru PMS]], used as an OTA aggregation layer. Integrated via [[wiki/concepts/rpa-sync|RPA bots]] on the same VPS.

### Integration

- Same architecture as Guru PMS: RPA scraper → `rpa-sync` edge function → PMS database
- Shares the `rpa_bot_status`, `rpa_selectors`, and `availability_current` tables
- Source value in booking: `zuzu`

## Sources

- [[wiki/sources/family-house-launch-gate|Unified Launch Gate Plan]]
