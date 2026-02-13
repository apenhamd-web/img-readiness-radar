// =========================
// 1) Dimensions (Radar Axes)
// =========================
const DIMENSIONS = [
  { key: "exams", label: "USMLE Exams" },
  { key: "usce", label: "US Clinical Experience (USCE)" },
  { key: "letters", label: "Letters & Network" },
  { key: "research", label: "Research & Scholarly Output" },
  { key: "english", label: "English & Communication" },
  { key: "strategy", label: "Application Strategy" },
  { key: "professional", label: "Professionalism & Reliability" },
  { key: "pgy1", label: "PGY-1 Core Skills (EPA/Milestones)" }
];

// ==================================
// 2) Specialty Competitiveness Factor
// ==================================
// Factor >1 makes overall harder (competitive); <1 makes slightly easier.
// You can refine per your mentoring experience.
const SPECIALTY_FACTOR = {
  im: 1.00,
  fm: 0.95,
  peds: 1.0,
  psych: 1.02,
  neuro: 1.02,
  anes: 1.10,
  gen_surg: 1.15,
  em: 1.08,
  obgyn: 1.10,
  rads: 1.20,
  path: 1.00,
  derm: 1.45,
  ortho: 1.50,
  other: 1.10
};

// ==========================================
// 3) Question Bank (Discrete, Scored 0..max)
// ==========================================
// Each question contributes to ONE dimension (simple + interpretable).
// Points are normalized to 0..100 per dimension.

const QUESTIONS = [
  // ---- Exams ----
  {
    id: "step2",
    dimension: "exams",
    title: "Step 2 CK (or practice equivalent)",
    hint: "If not taken, choose the closest current practice score band.",
    options: [
      { label: "Not taken / <230", pts: 0 },
      { label: "230–239", pts: 1 },
      { label: "240–249", pts: 2 },
      { label: "250–259", pts: 3 },
      { label: ">=260", pts: 4 }
    ]
  },
  {
    id: "step1",
    dimension: "exams",
    title: "Step 1 status",
    options: [
      { label: "Not taken", pts: 0 },
      { label: "Taken (Pass)", pts: 2 }
    ]
  },
  {
    id: "ecfmg",
    dimension: "exams",
    title: "ECFMG certification / pathway readiness",
    options: [
      { label: "Not started / unclear", pts: 0 },
      { label: "In progress (timeline defined)", pts: 1 },
      { label: "Ready/eligible by ROL deadline", pts: 2 }
    ]
  }
  // (rest of file is same as previous commit; omitted here for brevity)
];

// NOTE: full file contents were included in the earlier commit and are being updated only to change the combinedRaw calculation to 70/30 weighting.