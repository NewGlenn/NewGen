/**
 * jarvis_data.js
 * ---------------------------------------------------------------------------
 * Single source of data for dashboard.html — the J.A.R.V.I.S. command center
 * retooled for NewGen operations. Everything the HUD renders is read from
 * window.JARVIS_DATA at load time; edit this file to change what J.A.R.V.I.S.
 * reports. In production these values would be populated from ClickUp,
 * Calendar, Gmail and Slack — the figures below are illustrative examples.
 * ---------------------------------------------------------------------------
 */
window.JARVIS_DATA = {
  // Top-left header
  greeting: "GOOD EVENING, GLENN",
  generated: "WORKSPACE SYNC — SEP 14 2026 · 18:32 BST",

  // Top-right connector status list. status: "online" | "offline"
  connectors: [
    { name: "Gmail",            status: "online"  },
    { name: "Slack",            status: "online"  },
    { name: "Google Calendar",  status: "online"  },
    { name: "ClickUp",          status: "online"  },
    { name: "Google Drive",     status: "online"  },
  ],

  // Right-hand panel: task pipeline by status (thin glowing bars)
  workload: {
    stages: [
      { label: "To Do",       value: 9  },
      { label: "In Progress", value: 6  },
      { label: "In Review",   value: 4  },
      { label: "Done · 7d",   value: 18 },
    ],
  },

  // Accounts you work on, shown under the pipeline and woven into the ticker.
  // status: "On Track" | "Active" | "At Risk" | "Blocked"
  accounts: [
    { name: "Atlas Rebrand",     status: "On Track", tasks: 6 },
    { name: "Meridian Launch",   status: "Active",   tasks: 5 },
    { name: "Northwind Studios", status: "At Risk",  tasks: 4 },
    { name: "Vantage Media",     status: "On Track", tasks: 3 },
    { name: "Harbour & Co",      status: "Blocked",  tasks: 2 },
  ],

  // Priorities feed the streaming log, the flag chip and "handle first".
  // Mark the single most urgent item with overdue:true to drive the amber chip.
  priorities: [
    {
      label: "Finalise Atlas rebrand master deck",
      detail: "Client review call at 2:00 PM",
      due: "Today 11:00",
    },
    {
      label: "Approve Northwind edit v3",
      detail: "Sitting in the review queue 2 days",
      due: "Yesterday",
      overdue: true,
    },
    {
      label: "Send Meridian launch timeline",
      detail: "Team is blocked awaiting your sign-off",
      due: "Tomorrow",
    },
    {
      label: "Unblock Harbour asset delivery",
      detail: "Waiting on legal clearance to ship",
      due: "This week",
    },
  ],

  // Operational focus banner across the bottom of the HUD
  headline: "FOCUS TODAY — SHIP THE ATLAS DECK BY 2PM · CLEAR THE REVIEW QUEUE · UNBLOCK HARBOUR",

  // J.A.R.V.I.S.'s sign-off, folded into the ticker and the brief
  closer: "Your queue is under control, Glenn. I'll keep watch.",
};
