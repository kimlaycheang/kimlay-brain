---
title: "Stripe"
type: entity
subtype: product
tags: [payments, fintech, saas]
created: 2026-04-23
updated: 2026-04-23
source_count: 1
---

## Stripe

Online payment processing platform used by [[wiki/entities/pratunam-family-house|Pratunam Family House]] for guest checkout. Handles THB currency transactions via Checkout Sessions.

### Role in System

- **Checkout Sessions**: Created by `create-checkout` edge function with 10-minute expiry (aligned with [[wiki/concepts/booking-hold|booking hold]])
- **Webhooks**: `checkout.session.completed` and `checkout.session.expired` events trigger the [[wiki/concepts/stripe-webhook|stripe-webhook]] handler
- **Retry behavior**: Stripe retries failed webhooks up to ~16 times over ~3 days — this is a key factor in [[wiki/concepts/dedup-pattern|dedup]] design
- **[[wiki/concepts/auto-refund|Auto-refund]]**: `stripe.refunds.create()` called automatically when PMS insertion fails

### Known Issues

- Webhook retries can cause duplicate PMS bookings if idempotency guard is missing
- Stripe settles T+2, OTAs settle monthly — no reconciliation tool exists

## Sources

- [[wiki/sources/family-house-launch-gate|Unified Launch Gate Plan]]
