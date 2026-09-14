/**
 * jarvis_data.js
 * ---------------------------------------------------------------------------
 * Data source for dashboard.html — J.A.R.V.I.S. command center for NewGen.
 * Accounts, statuses and priorities below were grounded in the live Slack
 * #account-* channels on 14 Sep 2026. Statuses are a read of recent channel
 * activity — adjust any of them here and the HUD updates on reload.
 * (Pipeline counts remain an illustrative weekly snapshot until wired to
 * ClickUp.)
 * ---------------------------------------------------------------------------
 */
window.JARVIS_DATA = {
  // Top-left header
  greeting: "GOOD EVENING, GLENN",
  generated: "WORKSPACE SYNC — SEP 14 2026 · 20:05 BST",

  // Top-right connector status list. status: "online" | "offline"
  connectors: [
    { name: "Gmail",            status: "online" },
    { name: "Slack",            status: "online" },
    { name: "Google Calendar",  status: "online" },
    { name: "ClickUp",          status: "online" },
    { name: "Google Drive",     status: "online" },
  ],

  // Right-hand panel: task pipeline by status (illustrative weekly snapshot)
  workload: {
    stages: [
      { label: "To Do",       value: 12 },
      { label: "In Progress", value: 7  },
      { label: "In Review",   value: 5  },
      { label: "Done · 7d",   value: 23 },
    ],
  },

  // The accounts you work on. status: "On Track" | "Active" | "At Risk" | "Blocked"
  // focus = a short read of the current workstream from the Slack channel.
  accounts: [
    { name: "Aperol",          status: "At Risk",  focus: "Hilary Duff O2" },
    { name: "Sarti",           status: "At Risk",  focus: "content review" },
    { name: "Yoto France",     status: "Active",   focus: "Q4 list build" },
    { name: "Curaleaf Clinic", status: "Active",   focus: "Sept concepts" },
    { name: "Yoto UK",         status: "On Track", focus: "Sept delivery" },
    { name: "Courvoisier",     status: "On Track", focus: "reel approved" },
  ],

  // Priorities feed the log, the flag chip and "handle first" — most urgent
  // first. Mark the single most time-critical item with urgent:true.
  priorities: [
    {
      label: "Lock Hilary Duff O2 event logistics",
      detail: "Venue location, media wall, emcee & Q&A still open — event is tomorrow",
      due: "Tomorrow · Tue 15 Sep",
      account: "Aperol",
      urgent: true,
    },
    {
      label: "Build Yoto France Q4 creator list",
      detail: "~25 names by Weds, full-quarter list to client Thursday EOD",
      due: "Wed–Thu",
      account: "Yoto France",
    },
    {
      label: "Finalise Curaleaf September concepts",
      detail: "Pick 3 influencer concepts + Tamzin / Stevie creators",
      due: "This week",
      account: "Curaleaf Clinic",
    },
    {
      label: "Review Sarti Mason & Lewis content",
      detail: "Serve-order errors to resolve; decision due on cutting Lewis",
      due: "This week",
      account: "Sarti",
    },
    {
      label: "Action Yoto UK Disney amends",
      detail: "allthatspretty resubmission before Disney approval",
      due: "This week",
      account: "Yoto UK",
    },
  ],

  // Operational focus banner across the bottom of the HUD
  headline: "FOCUS — HILARY DUFF O2 TOMORROW · YOTO FRANCE Q4 LIST BY THU · CURALEAF SEPT CONCEPTS",

  // J.A.R.V.I.S.'s sign-off, folded into the ticker and the brief
  closer: "Six accounts live, Glenn. I'll keep watch.",
};
