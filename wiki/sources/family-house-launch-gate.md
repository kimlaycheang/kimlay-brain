---
title: "Pratunam Family House — Unified Launch Gate Plan"
type: source
tags: [hotel, booking-system, dedup, stripe, pms, launch-gate]
date_ingested: 2026-04-23
original_file: "raw/Family house implementation_plan"
---

## Overview

A comprehensive audit and launch-readiness plan for the Pratunam Family House hotel booking system. The system consists of two Supabase projects: a guest-facing website (`ask-without-cost-main`) handling Stripe payments, and a PMS backend (`mind-meter-app-main`) managing rooms, availability, and RPA bot synchronization with OTA platforms (Agoda, Booking.com, etc.).

The audit identified **two critical dedup bugs** in the payment-to-PMS pipeline that could cause duplicate bookings and double-charges. It also cataloged 18 audit items across architecture, financial reconciliation, staff operations, disaster recovery, testing strategy, and international guest UX — prioritized into 5 execution phases.

## Key Claims

- **Critical Bug #1**: The [[wiki/concepts/rpa-sync|rpa-sync]] function uses a SELECT-then-INSERT pattern for dedup by `external_ref`, creating a race condition under concurrent requests — no UNIQUE constraint exists at the database level
- **Critical Bug #2**: The [[wiki/concepts/stripe-webhook|stripe-webhook]] has no idempotency guard; Stripe retries (up to 16x) can re-execute the entire PMS insertion + email flow
- The original critical bug (charge → email → PMS fail → guest has receipt, no room) has been **code-fixed** with auto-refund, but **never tested** with simulated failures
- Three booking ingestion paths exist: Website→Stripe→PMS, OTA Email→AI parse→auto-book, Public API→direct insert
- The system has **zero automated tests** for the critical booking path
- An OTA+Website race condition can cause overbookings (2-5 minute window between OTA booking and RPA sync)
- Financial reconciliation is impossible without cross-database queries (two separate Supabase projects)
- A `booking_holds` GiST exclusion constraint prevents concurrent website-vs-website double-bookings, but NOT website-vs-OTA

## Notable Quotes

- "NO MANUAL VERIFICATION IS SUFFICIENT FOR PRODUCTION"
- "IF bots are already running → STOP THEM IMMEDIATELY and verify dedup"
- "The critical bug fix is code-complete. However, no automated test covers the failure path"

## Entities Mentioned

- [[wiki/entities/pratunam-family-house|Pratunam Family House]] — the hotel business
- [[wiki/entities/stripe|Stripe]] — payment processor
- [[wiki/entities/supabase|Supabase]] — database + edge functions platform (two projects)
- [[wiki/entities/line-messaging|LINE Messaging API]] — alert/notification channel
- [[wiki/entities/guru-pms|Guru PMS]] — OTA property management system (scraped by RPA)
- [[wiki/entities/zuzu-pms|Zuzu PMS]] — OTA property management system (scraped by RPA)

## Concepts Mentioned

- [[wiki/concepts/dedup-pattern|Dedup Pattern]] — idempotency and duplicate prevention in distributed systems
- [[wiki/concepts/rpa-sync|RPA Sync]] — bot-based scraping of OTA platforms to sync bookings/availability
- [[wiki/concepts/stripe-webhook|Stripe Webhook]] — server-to-server payment event handler
- [[wiki/concepts/booking-hold|Booking Hold]] — temporary inventory lock during checkout
- [[wiki/concepts/auto-refund|Auto-Refund]] — automatic Stripe refund when PMS insertion fails
- [[wiki/concepts/overbooking-detection|Overbooking Detection]] — cron-based overlap detection across booking sources

## Open Questions

1. Are RPA bots currently running in production? (affects UNIQUE constraint migration safety)
2. Is there a staging environment for the PMS?
3. Should `inbound-booking` set `external_ref` on auto-booked bookings?
4. Is the hotel VAT-registered? (Thai law compliance)
5. When overbooking detected, should OTA always win over website booking?

## Sources

- [raw/Family house implementation_plan](raw/Family%20house%20implementation_plan)
