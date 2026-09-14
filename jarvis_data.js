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

  // Tomorrow's actions — one pulled from each account's Slack channel.
  // Feeds the log, flag chip and "handle first"; most urgent first.
  // Mark the single most time-critical item with urgent:true.
  priorities: [
    {
      label: "Deliver the Hilary Duff O2 event",
      detail: "Lock venue location, media-wall delivery & timing; confirm emcee + pre-approved Q&A; call sheet out; tickets transferred",
      due: "Tue 15 Sep",
      account: "Aperol",
      urgent: true,
    },
    {
      label: "Build Yoto France Q4 creator list",
      detail: "PM list-build session — ~25 names, overindex on micros; add more Weds, vet Thurs, to client Thu EOD",
      due: "Tue 15 Sep",
      account: "Yoto France",
    },
    {
      label: "Lock Curaleaf September concepts",
      detail: "Confirm 3 influencer concepts + Tamzin / Stevie adhoc; brief Maddy with creators, past work & learnings",
      due: "Tue 15 Sep",
      account: "Curaleaf Clinic",
    },
    {
      label: "Resubmit Yoto UK Disney amends",
      detail: "allthatspretty & alexandremiwren amends for Disney approval; send September net-new creator rates",
      due: "Tue 15 Sep",
      account: "Yoto UK",
    },
    {
      label: "Progress Sarti content & gifting",
      detail: "Finalise Mason/Lewis versions for Campari; chase Lewis stories (cut if window closed); chase gifting addresses + analytics",
      due: "Tue 15 Sep",
      account: "Sarti",
    },
    {
      label: "Close out Courvoisier Café Royal reel",
      detail: "Confirm Georgia's amends (typo, responsible-drinking wording, #EnjoyResponsibly, stronger cocktail photo); await client sign-off",
      due: "Tue 15 Sep",
      account: "Courvoisier",
    },
  ],

  // Operational focus banner across the bottom of the HUD
  headline: "TOMORROW · TUE 15 SEP — SIX ACCOUNT ACTIONS QUEUED · HILARY DUFF O2 IS THE PRIORITY",

  // J.A.R.V.I.S.'s sign-off, folded into the ticker and the brief
  closer: "Six accounts live, Glenn. I'll keep watch.",
};
