---
title: "M-Pesa integration, done right"
description: "STK push is the easy part. Reconciliation, retries and idempotency are what separate a demo from a production payment system."
date: 2026-05-20
author: "Corebalt"
---

Nearly every Kenyan business that takes digital payments takes them over M-Pesa. So getting the integration right isn't a nice-to-have — it's the difference between a system you can trust with money and one you can't.

Here's how we think about it across every Corebalt product.

## STK push is the easy part

Triggering an STK push prompt on a customer's phone via the Daraja API is a single request. The hard part is everything that happens *after* the customer taps their PIN.

- The callback might arrive seconds later — or not at all.
- The same callback can be delivered more than once.
- Network timeouts mean a payment can succeed on Safaricom's side while your request appears to have failed.

## Idempotency and reconciliation

Every transaction gets a unique reference before the STK push goes out. When a callback arrives, we match on that reference and treat the write as idempotent — a duplicate callback can never double-credit an account.

Then, on a schedule, we reconcile against Safaricom's records directly. Anything our system thinks is pending but Safaricom has settled gets resolved automatically; genuine mismatches get flagged for a human.

## Why it matters

This is the unglamorous work that doesn't show up in a demo. But it's exactly what you want when the system is handling a loan repayment, a till sale, or a payroll run.

It's also why M-Pesa support lives in the shared Corebalt core, not in each product separately — we build it once, harden it once, and every product inherits it.

Want to see it in action? [Book a demo](/#contact).
