const posts = [
  {
    slug: "jwt-authentication",
    title: "JWT Authentication in ASP.NET Core: A Practical Guide",
    category: ".NET",
    date: "July 2026",
    read: "8 min read",
    icon: "fa-shield-halved",
    color: "linear-gradient(135deg,#5d2bbd,#a270ff)",
    excerpt:
      "A practical way to reason about authentication, claims, middleware, and the security decisions behind a .NET API.",
    sections: [
      [
        "Why this pattern matters",
        "JWTs let an API verify a signed token without keeping a server-side session for every request. That makes them a natural fit for a React front end talking to an ASP.NET Core API. The real value, though, is not the token format; it is designing a clear boundary between identity, permissions, and application data.",
      ],
      [
        "The request flow",
        "A user submits credentials over HTTPS. The API validates them against its identity store, creates only the claims the application needs, signs a short-lived token, and returns it to the client. On later requests, the client sends an Authorization header. ASP.NET Core authentication middleware validates the signature, issuer, audience, and expiry before protected endpoints run.",
      ],
      [
        "A small configuration example",
        "<pre><code>builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)\n  .AddJwtBearer(options =&gt; {\n    options.TokenValidationParameters = new TokenValidationParameters {\n      ValidateIssuer = true,\n      ValidateAudience = true,\n      ValidateLifetime = true,\n      ValidateIssuerSigningKey = true\n    };\n  });</code></pre>",
      ],
      [
        "Claims and authorization",
        "Use claims to express who a user is and what they are allowed to do. A role or policy should protect a route; the UI should not be the only gatekeeper. In a platform such as Virudhi, role-based authorization can keep administrative actions separate from normal user actions.",
      ],
      [
        "Security checklist",
        "Always use HTTPS, keep signing keys outside source control, set a reasonable expiry, validate every important token parameter, and never place sensitive data inside a JWT payload. If a long-lived experience is needed, design refresh-token storage and revocation deliberately instead of simply increasing access-token lifetime.",
      ],
      [
        "What I would test",
        "Test a valid request, a missing token, an expired token, a token with an incorrect audience, and a user who is authenticated but lacks the necessary role. These tests make authentication behaviour visible before it becomes a production incident.",
      ],
    ],
  },
  {
    slug: "production-rest-apis",
    title: "Building Production-Ready REST APIs in ASP.NET Core",
    category: ".NET",
    date: "July 2026",
    read: "9 min read",
    icon: "fa-diagram-project",
    color: "linear-gradient(135deg,#4d257e,#d15da7)",
    excerpt:
      "The API habits that make an application easier to maintain, support, and explain to clients and teammates.",
    sections: [
      [
        "Start with a useful contract",
        "A REST API is a contract with its consumers. Stable routes, explicit request and response models, predictable status codes, and clear validation errors reduce friction for both the front end and support teams.",
      ],
      [
        "Keep controllers thin",
        "Controllers should translate HTTP concerns into application calls. Put business rules in services and isolate data access behind a focused layer. This keeps code easier to test and makes changes less risky as an application grows.",
      ],
      [
        "Validate early and return useful errors",
        "Validate inputs at the boundary. A 400 response should tell the caller what needs attention without exposing internal implementation details. Consistent error shapes are especially helpful when a React UI, a mobile app, and support staff all need to understand the same failure.",
      ],
      [
        "Handle unexpected errors once",
        "Centralised exception-handling middleware prevents a different error format from leaking out of every controller. It should log enough context for investigation while returning a safe, user-friendly response.",
      ],
      [
        "Logging is a product feature",
        "Logs should answer: what happened, to whom, when, and with which correlation ID? Good logs make production support faster and let a team explain an incident clearly to a client.",
      ],
      [
        "A practical checklist",
        "Use asynchronous calls, paginate collection endpoints, authorize sensitive actions, avoid exposing database entities directly, version breaking API changes, and document examples in Swagger or a readable README. These choices are more valuable than adding complexity for its own sake.",
      ],
    ],
  },
  {
    slug: "react-folder-structure",
    title: "A React Folder Structure That Scales with the Team",
    category: "React",
    date: "July 2026",
    read: "7 min read",
    icon: "fa-folder-tree",
    color: "linear-gradient(135deg,#176b82,#35a9dc)",
    excerpt:
      "A simple feature-oriented layout that keeps components, API calls, state, and routes understandable as a product grows.",
    sections: [
      [
        "The problem with one large components folder",
        "Early React projects often start with components, pages, and utilities in broad folders. That works briefly, but it becomes difficult to see which files belong to a feature or who owns a change.",
      ],
      [
        "Organise around features",
        "A practical approach is to group files by business capability: auth, farms, inventory, users, or reports. Each feature can contain its components, hooks, API module, tests, and styles. Shared UI elements stay in a common folder.",
      ],
      [
        "A suggested layout",
        "<pre><code>src/\n  app/        // routes and providers\n  features/\n    auth/\n    inventory/\n    reports/\n  components/ // reusable UI\n  services/   // shared HTTP client\n  utils/</code></pre>",
      ],
      [
        "Keep the API layer deliberate",
        "Do not spread fetch calls across visual components. A small API module per feature gives one clear place for request URLs, payloads, error handling, and response mapping.",
      ],
      [
        "State belongs close to its use",
        "Start with local state. Move state into context or Redux only when multiple distant parts of the application genuinely need it. This reduces accidental re-renders and makes the data flow easier to explain.",
      ],
      [
        "The goal is clarity",
        "There is no universal perfect tree. A good structure is one a new teammate can navigate quickly and change safely. Revisit it as the product and team evolve.",
      ],
    ],
  },
  {
    slug: "react-performance",
    title: "React Performance: Measure Before You Optimise",
    category: "React",
    date: "July 2026",
    read: "8 min read",
    icon: "fa-gauge-high",
    color: "linear-gradient(135deg,#0b7089,#2d9cff)",
    excerpt:
      "A measured approach to responsive dashboards: identify real bottlenecks, then use memoization, lists, and loading states intentionally.",
    sections: [
      [
        "Performance is an experience, not a checklist",
        "Users feel delay when an interaction blocks, a table stalls, or a page shifts unexpectedly. Start with the React DevTools Profiler and browser performance tools before changing code.",
      ],
      [
        "Avoid unnecessary renders",
        "React.memo can help a pure component avoid work when its props have not changed. useMemo is useful for expensive derived values, while useCallback is useful only when a stable function reference matters. They are tools, not defaults.",
      ],
      [
        "Treat large lists differently",
        "A list with hundreds of rows should not necessarily render hundreds of DOM nodes at once. Virtualisation renders the visible window and keeps scrolling smooth. Pagination and server-side filtering can reduce work further.",
      ],
      [
        "Keep queries responsive",
        "Debounce search input, show meaningful loading states, and cancel or ignore stale requests when the user changes filters quickly. This is often more noticeable to users than a micro-optimisation in rendering.",
      ],
      [
        "Split what users do not need yet",
        "Lazy-load routes or heavy components that are not part of the first screen. This reduces initial JavaScript cost and improves the first useful interaction.",
      ],
      [
        "A sensible workflow",
        "Measure the baseline, identify the slow interaction, make one change, and measure again. Record the user impact rather than assuming a performance technique helped.",
      ],
    ],
  },
  {
    slug: "dotnet-job-market-india",
    title: "The .NET Job Market in India: A Skills-First View",
    category: "Career",
    date: "July 2026",
    read: "8 min read",
    icon: "fa-chart-line",
    color: "linear-gradient(135deg,#96410d,#dc892a)",
    excerpt:
      "A dated market snapshot for early-career .NET developers: where demand is moving and how to make a credible, skills-first profile.",
    sections: [
      [
        "A market snapshot — July 2026",
        "India’s technology market is growing, but hiring is selective. NASSCOM projected the industry to approach $300 billion in FY2026 after FY2025 revenue of about $282.6 billion. Its 2025 outlook described demand around AI-led delivery, cloud-native technologies, cybersecurity, ER&D, and GCCs. This is context, not a guarantee of openings for every stack.",
      ],
      [
        "What this means for .NET developers",
        "Core C# and ASP.NET Core remain valuable where teams maintain or modernise enterprise systems. The stronger profile combines API design, SQL, Git, testing, security, and the ability to work with a modern front end such as React. Cloud familiarity is increasingly useful because organisations are modernising delivery, not just writing new controllers.",
      ],
      [
        "Skills employers are signalling",
        "The World Economic Forum reports that AI, big data, networks, and cybersecurity are among the fastest-growing skill areas globally. For India, its 2025 analysis points to skills-based hiring and broader talent pools. For an early-career developer, that favours demonstrable work: a deployed project, thoughtful README, clear API documentation, and evidence of collaboration.",
      ],
      [
        "A realistic plan for 1–2 years of experience",
        "Strengthen your existing .NET and React base first. Build one complete project with authentication, validation, logs, and tests. Learn one cloud deployment path. Practise explaining technical decisions to a non-technical audience. This combination is also relevant to customer success, solutions engineering, and developer-facing roles.",
      ],
      [
        "Avoid a misleading salary headline",
        "Compensation varies sharply by company type, city, role scope, and interview performance. Treat salary data from job portals as a rough reference, not a market fact. Focus applications on roles that explicitly state 0–2 or 1–3 years and match the work you can demonstrate.",
      ],
      [
        "Sources",
        '<ul class="sources"><li><a href="https://community.nasscom.in/communities/nasscom-insights/technology-sector-india-strategic-review-2025" target="_blank" rel="noopener">NASSCOM Strategic Review 2025</a></li><li><a href="https://www.weforum.org/stories/2025/04/the-future-of-jobs-in-india-employers-seek-to-boost-tech-talent-to-drive-ai-and-digital-technology-growth/" target="_blank" rel="noopener">World Economic Forum: The future of jobs in India</a></li><li><a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/3-skills-outlook/" target="_blank" rel="noopener">World Economic Forum: Skills outlook</a></li></ul>',
      ],
    ],
  },
  {
    slug: "rrt-leadership",
    title: "What Leading a Rapid Response Team Taught Me",
    category: "Leadership",
    date: "July 2026",
    read: "7 min read",
    icon: "fa-people-group",
    color: "linear-gradient(135deg,#7a2347,#ee3c7b)",
    excerpt:
      "Lessons from leading an eight-member team through critical production incidents: calm communication, ownership, and learning loops.",
    sections: [
      [
        "The work starts before the incident",
        "A response team is most effective when responsibilities and escalation paths are clear beforehand. During a critical issue, ambiguity creates duplicated effort and prevents good communication.",
      ],
      [
        "Create one shared picture",
        "The first practical step is a short incident record: impact, owner, current hypothesis, next action, and next stakeholder update. A shared source of truth lets engineers investigate without losing the business context.",
      ],
      [
        "Communicate in plain language",
        "Clients and internal stakeholders need clarity, not raw debugging output. A useful update states the impact, what the team knows, what it is doing next, and when the next update will arrive.",
      ],
      [
        "Give people ownership, not just tasks",
        "Leading an eight-member RRT meant making priorities visible, helping teammates unblock each other, and letting the right person take the technical lead. Coaching under pressure is still coaching.",
      ],
      [
        "Turn incidents into system improvements",
        "After recovery, a blameless review should surface an actionable change: monitoring, test coverage, runbook steps, ownership, or a safer deployment path. Recurring issues reduce when the system improves, not when people simply work longer.",
      ],
      [
        "My key takeaway",
        "Technical leadership is a communication practice. It connects the customer impact, the engineering investigation, and the next durable improvement.",
      ],
    ],
  },
  {
    slug: "campus-recruitment",
    title: "Representing My Company During Campus Recruitment",
    category: "Community",
    date: "July 2026",
    read: "6 min read",
    icon: "fa-users",
    color: "linear-gradient(135deg,#7a5314,#e1a13b)",
    excerpt:
      "What a multi-college recruitment drive in Odisha taught me about employer branding, listening, and creating a respectful candidate experience.",
    sections: [
      [
        "Representing more than a job description",
        "During a campus recruitment drive across three engineering colleges in Odisha, I represented the company to students who were trying to understand both the roles and the culture behind them. That made every interaction an employer-branding moment.",
      ],
      [
        "Start with the audience’s questions",
        "Students wanted to know what the technology work looked like, how they could prepare, and what growth might look like. A clear presentation works best when it leaves room for those questions instead of treating the audience as passive listeners.",
      ],
      [
        "Make technical conversations welcoming",
        "Interviewing and technical discussions are not only evaluation tools. They also shape whether candidates feel respected. Explaining the process, listening carefully, and giving candidates enough context improves the experience for everyone.",
      ],
      [
        "Coordinate the invisible work",
        "Travel, schedules, college contacts, communication, interview flow, and follow-up all affect whether a drive runs smoothly. Good event execution depends on these details being owned early.",
      ],
      [
        "What I carried forward",
        "The experience strengthened skills that matter beyond recruiting: listening, public speaking, relationship building, coordination, and explaining technical work in plain language. Those are the same skills behind effective community and developer-relations work.",
      ],
    ],
  },
  {
    slug: "communication-engineers",
    title: "Why Communication Is a Superpower for Software Engineers",
    category: "Community",
    date: "July 2026",
    read: "6 min read",
    icon: "fa-microphone-lines",
    color: "linear-gradient(135deg,#2c506f,#528cb6)",
    excerpt:
      "Technical ability matters; the ability to make work understandable, actionable, and inclusive makes it travel farther.",
    sections: [
      [
        "Communication is part of delivery",
        "A feature is not fully delivered when code merges. Someone must understand the requirement, test the outcome, explain the trade-offs, and support the user. Communication makes each of those steps more reliable.",
      ],
      [
        "Translate without oversimplifying",
        "A strong technical explanation does not remove the truth; it selects the right level of detail for the audience. A client may need impact and options, while an engineer needs logs, constraints, and a reproduction path.",
      ],
      [
        "Public speaking is a learnable engineering skill",
        "Seminars, presentations, debates, and MC work taught me that preparation beats confidence alone. Start with the problem, use one clear example, pause for questions, and end with the action the audience should take.",
      ],
      [
        "Good meetings have an outcome",
        "Before a meeting, state its purpose. During it, make decisions visible. After it, record owners and next steps. This small habit prevents conversation from becoming invisible work.",
      ],
      [
        "Community grows through generosity",
        "Sharing a useful note, a clear README, or a respectful answer to a beginner can make a technical space more welcoming. Communities are built through repeated, useful interactions, not only large events.",
      ],
      [
        "A practical next step",
        "Choose one recent technical decision and explain it in 200 words for a non-technical colleague. Then explain it in 200 words for another developer. The difference will sharpen both your communication and your engineering judgment.",
      ],
    ],
  },
];
function escapeHtml(value) {
  return value.replace(
    /[&<>'"]/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        c
      ],
  );
}
function card(p) {
  return `<article class="card" data-category="${p.category.toLowerCase()}"><div class="cover" style="background:${p.color}"><i class="fa-solid ${p.icon}"></i></div><div class="card-body"><div class="meta">${p.date} &nbsp;·&nbsp; ${p.read}</div><h2>${p.title}</h2><p class="excerpt">${p.excerpt}</p><span class="tag">${p.category}</span><br><a class="read-link" href="articles/${p.slug}.html">Read article <i class="fa-solid fa-arrow-right"></i></a></div></article>`;
}
function initHome() {
  const grid = document.querySelector("#postGrid");
  if (!grid) return;
  const search = document.querySelector("#search");
  const empty = document.querySelector("#empty");
  let active = "all";
  function draw() {
    const q = search.value.toLowerCase().trim();
    const shown = posts.filter(
      (p) =>
        (active === "all" || p.category.toLowerCase() === active) &&
        (p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q)),
    );
    grid.innerHTML = shown.map(card).join("");
    empty.style.display = shown.length ? "none" : "block";
  }
  document.querySelector("#filters").addEventListener("click", (e) => {
    if (!e.target.matches("button")) return;
    document
      .querySelectorAll("#filters button")
      .forEach((x) => x.classList.remove("active"));
    e.target.classList.add("active");
    active = e.target.dataset.category;
    draw();
  });
  search.addEventListener("input", draw);
  draw();
}
function initArticle() {
  const root = document.querySelector("[data-slug]");
  if (!root) return;
  const p = posts.find((x) => x.slug === root.dataset.slug);
  if (!p) return;
  document.title = `${p.title} | Engineering Insights`;
  document.querySelector("#articleCategory").textContent = p.category;
  document.querySelector("#articleTitle").textContent = p.title;
  document.querySelector("#articleSubtitle").textContent = p.excerpt;
  document.querySelector("#articleMeta").textContent =
    `Published ${p.date} · ${p.read} · By Poornima Jain`;
  const body = document.querySelector("#articleBody"),
    toc = document.querySelector("#tocList");
  body.innerHTML =
    p.sections
      .map(
        (s, i) =>
          `<section id="section-${i + 1}"><h2>${s[0]}</h2><div>${s[1]}</div></section>`,
      )
      .join("") +
    '<div class="callout"><strong>Note:</strong> This article reflects practical learning and personal experience. Adapt examples to your project, security requirements, and team standards.</div>';
  toc.innerHTML = p.sections
    .map(
      (s, i) => `<li><a href="#section-${i + 1}">${escapeHtml(s[0])}</a></li>`,
    )
    .join("");
  const index = posts.indexOf(p);
  const prev = posts[(index - 1 + posts.length) % posts.length],
    next = posts[(index + 1) % posts.length];
  document.querySelector("#articleNav").innerHTML =
    `<a href="${prev.slug}.html">← ${prev.title}</a><a href="${next.slug}.html">${next.title} →</a>`;
}
document.addEventListener("DOMContentLoaded", () => {
  initHome();
  initArticle();
});
