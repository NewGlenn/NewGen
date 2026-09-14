/**
 * jarvis_data.js
 * ---------------------------------------------------------------------------
 * Single source of data for dashboard.html. Nothing in the dashboard's markup
 * or script is hard-coded content — every string and number rendered in the
 * HUD is read from window.JARVIS_DATA at load time. Edit this file to change
 * what J.A.R.V.I.S. reports; the dashboard itself never needs to change.
 * ---------------------------------------------------------------------------
 */
window.JARVIS_DATA = {
  // Top-left header
  greeting: "GOOD EVENING, GLENN",
  generated: "SYSTEM SYNC — SEP 14 2026 · 06:12 PDT",

  // Top-right connector status list. status: "online" | "offline"
  connectors: [
    { name: "Gmail",            status: "online"  },
    { name: "Google Calendar",  status: "online"  },
    { name: "Google Drive",     status: "online"  },
    { name: "ClickUp",          status: "online"  },
    { name: "Stripe",           status: "offline" },
    { name: "YouTube Studio",   status: "offline" },
  ],

  // Right-hand stats panel: thin glowing funnel bars
  content: {
    funnel: [
      { label: "Subscribers", value: 84200 },
      { label: "Leads",       value: 1380  },
      { label: "Qualified",   value: 412   },
      { label: "Customers",   value: 96    },
    ],
  },

  // Sponsor ledger, shown under the funnel bars and woven into the ticker
  sponsors: [
    { name: "Aurora Optics",  tier: "Platinum", amount: 18000 },
    { name: "Solace Audio",   tier: "Gold",     amount: 9500  },
    { name: "Vantage Gear",   tier: "Gold",     amount: 8000  },
    { name: "Nimbus Cloud",   tier: "Silver",   amount: 4200  },
  ],

  // Streaming activity log + "what should I handle first" both draw on this.
  // One entry may carry kind:"payment" — it drives the amber payment-due chip.
  priorities: [
    {
      label: "Approve Q3 sponsor contract — Aurora Optics",
      detail: "Legal redlines returned, needs signature",
      due: "Today 5:00 PM",
    },
    {
      label: "Record response to community AMA",
      detail: "42 unanswered questions queued",
      due: "Tomorrow",
    },
    {
      label: "Pay studio lease invoice",
      detail: "Net-15 terms, auto-pay disabled",
      due: "Sep 16",
      kind: "payment",
      amount: 4250,
    },
    {
      label: "Review analytics dip on Tuesday upload",
      detail: "Retention down 8% at the 2:10 mark",
      due: "This week",
    },
  ],

  // Big banner figure across the bottom of the HUD
  headline: "MTD REVENUE $128,460 — 14% AHEAD OF FORECAST",

  // J.A.R.V.I.S.'s sign-off line, folded into the ticker and the brief
  closer: "Standing by whenever you need me, Glenn.",
};
