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
  peds: 0.98,
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
      { label: "≥260", pts: 4 }
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
  },

  // ---- USCE ----
  {
    id: "usce_months",
    dimension: "usce",
    title: "Hands-on U.S. clinical experience duration",
    options: [
      { label: "0 weeks", pts: 0 },
      { label: "1–4 weeks", pts: 1 },
      { label: "5–8 weeks", pts: 2 },
      { label: "9–12 weeks", pts: 3 },
      { label: ">12 weeks", pts: 4 }
    ]
  },
  {
    id: "usce_quality",
    dimension: "usce",
    title: "USCE quality / role",
    options: [
      { label: "Observation only (no notes/presentations)", pts: 0 },
      { label: "Observership w/ presentations", pts: 1 },
      { label: "Externship / sub-internship style (active)", pts: 2 },
      { label: "Multiple active rotations w/ strong feedback", pts: 3 }
    ]
  },

  // ---- Letters & Network ----
  {
    id: "us_lors",
    dimension: "letters",
    title: "Strong U.S. letters of recommendation (LORs) in target specialty",
    options: [
      { label: "0", pts: 0 },
      { label: "1", pts: 1 },
      { label: "2", pts: 2 },
      { label: "3+", pts: 3 }
    ]
  },
  {
    id: "mentor",
    dimension: "letters",
    title: "Mentorship / advocacy",
    options: [
      { label: "No mentor", pts: 0 },
      { label: "Informal mentor", pts: 1 },
      { label: "Active mentor (feedback + strategy)", pts: 2 },
      { label: "Mentor with program connections/advocacy", pts: 3 }
    ]
  },

  // ---- Research ----
  {
    id: "pubs",
    dimension: "research",
    title: "Peer-reviewed publications (any field)",
    options: [
      { label: "0", pts: 0 },
      { label: "1", pts: 1 },
      { label: "2–3", pts: 2 },
      { label: "4–6", pts: 3 },
      { label: "7+", pts: 4 }
    ]
  },
  {
    id: "specialty_research",
    dimension: "research",
    title: "Specialty-aligned scholarly work (abstracts, posters, QI, etc.)",
    options: [
      { label: "None", pts: 0 },
      { label: "1 activity", pts: 1 },
      { label: "2–3 activities", pts: 2 },
      { label: "4+ activities", pts: 3 }
    ]
  },

  // ---- English & Communication ----
  {
    id: "oet",
    dimension: "english",
    title: "Medical English credential (OET/IELTS/TOEFL) + performance comfort",
    options: [
      { label: "Not taken / low confidence", pts: 0 },
      { label: "Taken (pass/ok) but needs practice", pts: 1 },
      { label: "Strong + confident clinical communication", pts: 2 }
    ]
  },
  {
    id: "presentation",
    dimension: "english",
    title: "Oral case presentation ability in English",
    options: [
      { label: "Not comfortable; needs scripting", pts: 0 },
      { label: "Basic structure; inconsistent clarity", pts: 1 },
      { label: "Clear, concise, time-bounded (3–5 min)", pts: 2 },
      { label: "Strong + handles questions fluidly", pts: 3 }
    ]
  },

  // ---- Strategy ----
  {
    id: "signals",
    dimension: "strategy",
    title: "Program targeting: IMG-friendly + visa + geography strategy",
    options: [
      { label: "No clear list", pts: 0 },
      { label: "Partial list (limited research)", pts: 1 },
      { label: "Curated list aligned with profile", pts: 2 },
      { label: "Curated list + outreach/networking + backups", pts: 3 }
    ]
  },
  {
    id: "apps_volume",
    dimension: "strategy",
    title: "Application breadth plan (realistic number of programs)",
    hint: "Not “more is always better,” but insufficient volume is a common failure mode for IMGs.",
    options: [
      { label: "Not defined", pts: 0 },
      { label: "Low (likely insufficient)", pts: 1 },
      { label: "Moderate (reasonable)", pts: 2 },
      { label: "High (broad, still targeted)", pts: 3 }
    ]
  },

  // ---- Professionalism ----
  {
    id: "reliability",
    dimension: "professional",
    title: "Reliability behaviors (deadlines, responsiveness, follow-through)",
    options: [
      { label: "Inconsistent", pts: 0 },
      { label: "Mostly consistent", pts: 1 },
      { label: "Highly consistent; proactive", pts: 2 },
      { label: "Pro-level (systems, checklists, early delivery)", pts: 3 }
    ]
  },
  {
    id: "teamwork",
    dimension: "professional",
    title: "Teamwork & feedback (US clinical culture)",
    options: [
      { label: "Struggles with feedback/team roles", pts: 0 },
      { label: "Accepts feedback; still adapting", pts: 1 },
      { label: "Good team member; asks for help appropriately", pts: 2 },
      { label: "Strong collaborator; anticipates needs", pts: 3 }
    ]
  },

  // ---- PGY-1 Skills (EPA/Milestones) ----
  {
    id: "hpi_exam",
    dimension: "pgy1",
    title: "History & Physical (H&P) + problem representation",
    options: [
      { label: "Needs significant work", pts: 0 },
      { label: "Basic; misses key differentials", pts: 1 },
      { label: "Solid; organized; reasonable ddx", pts: 2 },
      { label: "Strong; efficient; anticipates next steps", pts: 3 }
    ]
  },
  {
    id: "notes_emr",
    dimension: "pgy1",
    title: "Clinical documentation (SOAP/admit note) + EMR comfort",
    options: [
      { label: "No EMR/note-writing practice", pts: 0 },
      { label: "Some practice; needs templates/structure", pts: 1 },
      { label: "Comfortable; accurate & concise", pts: 2 },
      { label: "High efficiency; high-quality notes", pts: 3 }
    ]
  },
  {
    id: "sick_patient",
    dimension: "pgy1",
    title: "Recognize sick patient + escalation (calling senior/rapid response)",
    options: [
      { label: "Uncertain; delays escalation", pts: 0 },
      { label: "Recognizes but unsure of first steps", pts: 1 },
      { label: "Recognizes + initiates basics + escalates early", pts: 2 },
      { label: "Strong; calm; organized initial management", pts: 3 }
    ]
  }
];

// =========================
// 4) Build the form UI
// =========================
const qContainer = document.getElementById("questionBlocks");

function buildQuestions() {
  qContainer.innerHTML = "";
  QUESTIONS.forEach(q => {
    const wrap = document.createElement("div");
    wrap.className = "qblock";

    const title = document.createElement("div");
    title.className = "qtitle";
    title.textContent = q.title;
    wrap.appendChild(title);

    const sel = document.createElement("select");
    sel.id = q.id;
    q.options.forEach((opt, idx) => {
      const o = document.createElement("option");
      o.value = String(idx);
      o.textContent = opt.label;
      sel.appendChild(o);
    });
    wrap.appendChild(sel);

    if (q.hint) {
      const hint = document.createElement("div");
      hint.className = "qhint";
      hint.textContent = q.hint;
      wrap.appendChild(hint);
    }

    qContainer.appendChild(wrap);
  });
}

// =========================
// 5) Scoring
// =========================
function initDimensionAccumulator() {
  const acc = {};
  DIMENSIONS.forEach(d => {
    acc[d.key] = { earned: 0, possible: 0 };
  });
  return acc;
}

// Map new candidate background fields to a 0..100 backgroundScore.
// Rubric (max 100 points total, split evenly across 5 categories):
// - Volunteering (0..20)
// - Work experience (0..20)
// - Research time (0..20)
// - Advanced degrees (0..20)
// - Timeline expectation (0..20)
function mapBackgroundScore() {
  // Volunteering
  const vol = document.getElementById("volunteering")?.value;
  const volMap = { none: 0, lt6m: 5, "6to12m": 10, "1to2y": 15, gt2y: 20 };
  const volPts = volMap[vol] ?? 0;

  // Work experience
  const work = document.getElementById("workExperience")?.value;
  const workMap = { none: 0, lt1y: 5, "1to3y": 10, gt3y: 20 };
  const workPts = workMap[work] ?? 0;

  // Research time
  const res = document.getElementById("researchTime")?.value;
  const resMap = { none: 0, lt6m: 5, "6to12m": 10, "1to2y": 15, gt2y: 20 };
  const resPts = resMap[res] ?? 0;

  // Advanced degrees (checkboxes) - assign points per degree up to 20
  const degIds = ["degree_phd", "degree_master", "degree_mph", "degree_other"];  
  let degCount = 0;
  degIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.checked) degCount += 1;
  });
  // Map: 0 -> 0, 1 -> 10, 2 -> 15, 3+ -> 20
  let degPts = 0;
  if (degCount === 1) degPts = 10;
  else if (degCount === 2) degPts = 15;
  else if (degCount >= 3) degPts = 20;

  // Timeline expectation
  const t = document.getElementById("timelineExpect")?.value;
  const tMap = { immediate: 20, "6to12m": 15, "1to2y": 10, gt2y: 5, undecided: 0 };
  const tPts = tMap[t] ?? 0;

  const total = volPts + workPts + resPts + degPts + tPts; // 0..100
  return {
    backgroundPoints: total,
    backgroundScore: Math.round(Math.max(0, Math.min(100, total)))
  };
}

function scoreForm() {
  const acc = initDimensionAccumulator();

  QUESTIONS.forEach(q => {
    const sel = document.getElementById(q.id);
    const chosenIdx = parseInt(sel.value, 10);
    const chosen = q.options[chosenIdx];

    const maxPts = Math.max(...q.options.map(o => o.pts));
    acc[q.dimension].earned += chosen.pts;
    acc[q.dimension].possible += maxPts;
  });

  // Convert to 0..100 per dimension
  const dimScores = {};
  DIMENSIONS.forEach(d => {
    const { earned, possible } = acc[d.key];
    dimScores[d.key] = possible === 0 ? 0 : Math.round((earned / possible) * 100);
  });

  // Compute background score from new fields
  const { backgroundPoints, backgroundScore } = mapBackgroundScore();

  // Competitiveness adjustment on overall score (simple, transparent):
  // Combine mean of radar dimensions with backgroundScore (equal weighting):
  const meanDim = Math.round(
    DIMENSIONS.reduce((sum, d) => sum + dimScores[d.key], 0) / DIMENSIONS.length
  );

  const combinedRaw = Math.round((meanDim + backgroundScore) / 2);

  const specialty = document.getElementById("specialty").value;
  const factor = SPECIALTY_FACTOR[specialty] ?? 1.1;

  const overallAdj = Math.max(0, Math.min(100, Math.round(combinedRaw / factor)));

  return { dimScores, meanDim, backgroundScore, combinedRaw, overallAdj, factor };
}

// =========================
// 6) Recommendations
// =========================
const ACTION_MAP = {
  exams: [
    "If Step 2 CK is below your specialty target, prioritize a re-take strategy only if clearly beneficial; otherwise strengthen USCE + letters.",
    "Build a calendar: ECFMG pathway, documents, and deadlines aligned to ROL timeline."
  ],
  usce: [
    "Secure active USCE (not just observation): presentations, note-writing, feedback.",
    "Aim for rotations with faculty who write strong, specialty-relevant LORs."
  ],
  letters: [
    "Target 2–3 strong specialty LORs; request letters early with CV + PS + bullet points.",
    "Build mentorship: one person for strategy + one for clinical performance feedback."
  ],
  research: [
    "Add specialty-aligned scholarly work (QI, case reports, posters).",
    "Prioritize quality and mentorship over sheer publication count."
  ],
  english: [
    "Practice structured oral presentations weekly; record and self-review.",
    "Do mock interviews with time pressure and behavioral prompts."
  ],
  strategy: [
    "Create an IMG-friendly program list (visa, geography, prior IMG intake) and apply broadly but targeted.",
    "Develop parallel plans: backup specialty or preliminary year strategy if needed."
  ],
  professional: [
    "Implement reliability systems: weekly deliverables, response-time rules, checklisting.",
    "Practice feedback loops: ask for feedback explicitly after each clinical session."
  ],
  pgy1: [
    "Drill H&P → assessment/plan; focus on problem representation + prioritized differential.",
    "Practice EMR note templates and escalation scripts (sick patient, SBAR)."
  ]
};

function buildPriorities(dimScores) {
  // pick 3 lowest dimensions
  const sorted = [...DIMENSIONS]
    .map(d => ({ key: d.key, label: d.label, score: dimScores[d.key] }))
    .sort((a, b) => a.score - b.score);

  const top3 = sorted.slice(0, 3);
  return top3.map(item => ({
    ...item,
    actions: ACTION_MAP[item.key] ?? []
  }));
}

// =========================
// 7) Chart
// =========================
let radarChart;

function renderChart(dimScores) {
  const labels = DIMENSIONS.map(d => d.label);
  const data = DIMENSIONS.map(d => dimScores[d.key]);

  const ctx = document.getElementById("radarChart");

  if (radarChart) {
    radarChart.data.labels = labels;
    radarChart.data.datasets[0].data = data;
    radarChart.update();
    return;
  }

  radarChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels,
      datasets: [{
        label: "Readiness (0–100)",
        data
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: { stepSize: 20 }
        }
      },
      plugins: {
        legend: { display: true }
      }
    }
  });
}

// =========================
// 8) Render Results Table
// =========================
function renderDimensionTable(dimScores) {
  const div = document.getElementById("dimensionTable");
  const rows = DIMENSIONS.map(d => {
    const s = dimScores[d.key];
    const band = s >= 80 ? "Strong" : s >= 60 ? "Developing" : s >= 40 ? "At risk" : "Critical";
    return `<tr>
      <td>${d.label}</td>
      <td>${s}</td>
      <td><span class="badge">${band}</span></td>
    </tr>`;
  }).join("");

  div.innerHTML = `
    <table class="table">
      <thead><tr><th>Dimension</th><th>Score</th><th>Band</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderPriorities(priorities) {
  const ol = document.getElementById("priorities");
  ol.innerHTML = "";

  priorities.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `<b>${p.label}</b> (Score: ${p.score})<br/>` +
      `<ul>${p.actions.map(a => `<li>${a}</li>`).join("")}</ul>`;
    ol.appendChild(li);
  });
}

// =========================
// 9) Export JSON
// =========================
function downloadJson(payload) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `img_readiness_${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// =========================
// 10) Wire up buttons
// =========================
document.getElementById("analyzeBtn").addEventListener("click", () => {
  const { dimScores, meanDim, backgroundScore, combinedRaw, overallAdj, factor } = scoreForm();

  renderChart(dimScores);
  renderDimensionTable(dimScores);

  document.getElementById("overallScore").textContent = `${overallAdj} / 100`;
  document.getElementById("compAdj").textContent = `×${factor.toFixed(2)} specialty factor`;

  const priorities = buildPriorities(dimScores);
  renderPriorities(priorities);

  // Build profile export including the new fields
  const degrees = [];
  ["degree_phd", "degree_master", "degree_mph", "degree_other"].forEach(id => {
    const el = document.getElementById(id);
    if (el && el.checked) degrees.push(el.value || id);
  });

  const profileObj = {
    specialty: document.getElementById("specialty").value,
    imgType: document.getElementById("imgType").value,
    yearsSinceGradBand: document.getElementById("graduation").value,
    volunteering: document.getElementById("volunteering").value,
    workExperience: document.getElementById("workExperience").value,
    researchTime: document.getElementById("researchTime").value,
    advancedDegrees: degrees,
    timelineExpect: document.getElementById("timelineExpect").value
  };

  // Store latest result for export
  window.__latestPayload = {
    timestamp: new Date().toISOString(),
    profile: profileObj,
    scores: {
      byDimension: dimScores,
      meanDimensionScore: meanDim,
      backgroundScore,
      combinedRaw,
      overallAdjusted: overallAdj,
      competitivenessFactor: factor
    }
  };
});

document.getElementById("resetBtn").addEventListener("click", () => {
  document.getElementById("readinessForm").reset();
  document.getElementById("overallScore").textContent = "—";
  document.getElementById("compAdj").textContent = "—";
  document.getElementById("dimensionTable").innerHTML = "";
  document.getElementById("priorities").innerHTML = "";
  if (radarChart) {
    radarChart.destroy();
    radarChart = null;
  }
});

document.getElementById("downloadJsonBtn").addEventListener("click", () => {
  if (!window.__latestPayload) return;
  downloadJson(window.__latestPayload);
});

// Initialize
buildQuestions();