---
title: "eTIMS integration, explained"
description: "What KRA's eTIMS actually requires, how real-time e-invoicing works, and how Corebalt bakes compliant receipts into POS and ERP without slowing the till down."
date: 2026-06-14
author: "Corebalt"
---

If you sell goods or services in Kenya, **eTIMS** — KRA's electronic Tax Invoice Management System — isn't optional. Every tax invoice has to be transmitted to KRA and stamped before it's valid. Done badly, that's a compliance risk and a slow checkout. Done right, the customer never even notices. Here's how we approach it across **Corebalt POS** and **[Corebalt ERP](https://erp.corebalt.co.ke)**.

## What eTIMS actually requires

At its core, eTIMS means:

- Each invoice is sent to KRA **at the point of sale**, not batched up later.
- KRA returns a **control unit invoice number (CU)** and a verifiable QR code.
- That CU and QR must appear on the receipt you hand the customer.
- Your sales records and KRA's records must reconcile, line by line.

## The hard part: doing it in real time

A till can't freeze while it waits on an external API. Our integration signs and transmits the invoice in the background and handles the realities of a live network:

- **Idempotent submission** — a retried invoice never double-files.
- **Resilient queueing** — if connectivity drops, sales continue and invoices transmit the moment the link is back, in order.
- **Reconciliation** — a scheduled job compares local sales against KRA's records and flags any gaps for a human, instead of letting them rot silently.

This is the same philosophy we bring to [M-Pesa integration](/blog/mpesa-integration-done-right) — the easy demo is the API call; the real product is everything around the failure cases.

## Built in, not bolted on

Because compliance lives in the shared Corebalt core, eTIMS receipts are automatic in POS and ERP alike — no separate middleware, no manual exports. And the same invoicing engine extends to VAT and e-invoicing regimes in other markets as you grow.

Want compliant receipts that don't slow you down? [Book a demo](/#contact) and we'll show you the full flow.
