import { useState } from "react";

/* ── RESUME DATA ─────────────────────────────────────────────────────────── */
const DATA = {
  name: "Reb Emnacin",
  aka: "Jolts",
  tagline: "CS Student · Creator · AI Enthusiast",
  bio: `CS student at New Era University building things that spark ideas. I love working across the stack — databases to UI — always chasing that next "oh, that's clever" moment.`,
  status: "Open to Opportunities",
  github: "https://github.com/RebEmnacin",
  school: "New Era University",
  degree: "BS in Computer Science",
  schoolYear: "2024 – present",

  skills: {
    languages: ["Java", "Python", "JavaScript", "HTML", "CSS"],
    databases: ["MySQL"],
    tools: ["React", "FastAPI", "Figma", "VS Code", "IntelliJ", "Eclipse"],
  },

  stack: [
    { icon: "☕", name: "Java" },
    { icon: "🐍", name: "Python" },
    { icon: "⚡", name: "JavaScript" },
    { icon: "🌐", name: "HTML" },
    { icon: "🎨", name: "CSS" },
    { icon: "🗄️", name: "MySQL" },
    { icon: "⚛️", name: "React" },
    { icon: "🚀", name: "FastAPI" },
    { icon: "🎭", name: "Figma" },
    { icon: "☁️", name: "Oracle Cloud" },
    { icon: "🤖", name: "AI" },
  ],

  certs: [
    {
      org: "IBM · Cognitive Class",
      color: "#052FAD",
      emoji: "🗄️",
      title: "SQL and Relational Databases 101",
      url: "https://courses.cognitiveclass.ai/certificates/248159af4c5846d4ab620d5e39948f5e",
    },
    {
      org: "Oracle Cloud",
      color: "#F80000",
      emoji: "☁️",
      title: "OCI 2025 Certified Foundations Associate",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6941EF3CB5EB7C0833D64EF5BF8A257C21D53C11A362E7DD0DAB73518C59AF58",
    },
    {
      org: "Oracle Cloud",
      color: "#F80000",
      emoji: "📊",
      title: "Oracle Data Platform Foundations Associate",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=FC6BF38C8A976E45FFE6F233D652B85BF2EF4C7AEBBE068491AA129A001DBC33",
    },
    {
      org: "Oracle Cloud",
      color: "#F80000",
      emoji: "🤖",
      title: "OCI AI Foundations Associate (2025)",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=71CC11DCFE431802B2DE719C81F52F2AF2478ABAB7563607DBE6DB72E5B607C0",
    },
  ],

  projects: [
    {
      featured: true,
      emoji: "🍞",
      name: "breadcrumber",
      desc: "An AI-powered roadmap builder for creatives who struggle to start. ADHD-friendly project manager that breaks goals into bite-sized, achievable steps.",
      tags: ["React", "FastAPI", "Gemini AI", "Python"],
      url: "https://github.com/RebEmnacin/breadcrumber-app",
    },
    {
      featured: false,
      emoji: "🌐",
      name: "Portfolio Website",
      desc: "This very portfolio! Built with pure HTML, CSS and JS — then re-imagined in React. Deployed on GitHub Pages.",
      tags: ["HTML", "CSS", "JS", "React"],
      url: "https://github.com/RebEmnacin",
    },
    {
      featured: false,
      emoji: "🚧",
      name: "More Coming Soon",
      desc: "Currently cooking up new projects. Follow my GitHub for updates!",
      tags: ["In Progress"],
      url: null,
      placeholder: true,
    },
  ],
};

/* ── SVG ICONS ───────────────────────────────────────────────────────────── */
function HomeIcon()    { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>; }
function PersonIcon()  { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>; }
function StarIcon()    { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>; }
function MonitorIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>; }
function MailIcon()    { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>; }
function GithubIcon()  { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>; }
function ArrowIcon()   { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>; }
function ExtLinkIcon() { return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>; }

/* ── NAV CONFIG ──────────────────────────────────────────────────────────── */
const PAGES = [
  { id: "home",     label: "home.jsx",     icon: <HomeIcon /> },
  { id: "profile",  label: "profile.jsx",  icon: <PersonIcon /> },
  { id: "certs",    label: "certs.jsx",    icon: <StarIcon /> },
  { id: "projects", label: "projects.jsx", icon: <MonitorIcon /> },
  { id: "contact",  label: "contact.jsx",  icon: <MailIcon /> },
];

/* ── CSS-IN-JS ───────────────────────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@400;500&display=swap');

  *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
  :root{
    --bg:#060608;--bg2:#0d0d12;--bg3:#141420;
    --border:#1e1e2e;--border2:#2a2a3f;
    --text:#8b8baa;--text-h:#f0efff;--text-m:#c4c3e0;
    --accent:#FDDA0D;
    --sans:'Syne',sans-serif;
    --serif:'Instrument Serif',Georgia,serif;
    --mono:'DM Mono',monospace;
  }
  body{background:var(--bg);font-family:var(--sans);color:var(--text);overflow-x:hidden;-webkit-font-smoothing:antialiased}
  button{cursor:pointer;font-family:var(--sans)}
  a{text-decoration:none}
  input,textarea{font-family:var(--sans)}

  /* grid bg */
  .grid-bg{
    position:fixed;inset:0;pointer-events:none;z-index:0;
    background-image:linear-gradient(var(--border) 1px,transparent 1px),
                     linear-gradient(90deg,var(--border) 1px,transparent 1px);
    background-size:48px 48px;opacity:.35;
  }

  /* noise overlay */
  .noise{
    position:fixed;inset:0;pointer-events:none;z-index:1;opacity:.03;mix-blend-mode:overlay;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  /* sidebar */
  .sidebar{
    position:fixed;left:0;top:0;bottom:0;width:68px;
    background:rgba(6,6,8,.92);border-right:1px solid var(--border);
    display:flex;flex-direction:column;align-items:center;
    padding:20px 0 24px;gap:4px;z-index:100;backdrop-filter:blur(12px);
  }
  .sidebar-logo{
    width:42px;height:42px;margin-bottom:18px;
    display:flex;align-items:center;justify-content:center;
  }
  .sidebar-logo img{
    width:42px;height:42px;object-fit:contain;
    filter:drop-shadow(0 0 12px rgba(253,218,13,.7));
    transition:filter .2s;
  }
  .sidebar-logo img:hover{filter:drop-shadow(0 0 20px rgba(253,218,13,1))}
  .nav-btn{
    width:44px;height:44px;border:none;background:none;border-radius:10px;
    display:flex;align-items:center;justify-content:center;
    color:var(--text);transition:background .2s,color .2s;position:relative;
  }
  .nav-btn:hover,.nav-btn.active{background:var(--border2);color:var(--accent)}
  .nav-tooltip{
    position:absolute;left:calc(100% + 12px);
    background:var(--bg3);border:1px solid var(--border2);
    color:var(--text-h);font-size:10px;font-weight:600;
    padding:4px 10px;border-radius:6px;white-space:nowrap;
    opacity:0;pointer-events:none;transition:opacity .2s;
    font-family:var(--mono);letter-spacing:.04em;
  }
  .nav-btn:hover .nav-tooltip{opacity:1}

  /* main layout */
  .app{margin-left:68px;min-height:100vh;position:relative;z-index:2}

  /* two-column home layout */
  .home-grid{
    min-height:100vh;display:grid;
    grid-template-columns:1fr 1fr;
  }
  .home-left{
    display:flex;flex-direction:column;justify-content:center;
    padding:80px 56px;border-right:1px solid var(--border);position:relative;
  }
  .home-right{
    display:flex;flex-direction:column;justify-content:center;
    padding:80px 56px;gap:32px;
  }

  /* status pill */
  .status-pill{
    display:inline-flex;align-items:center;gap:8px;
    background:rgba(253,218,13,.07);border:1px solid rgba(253,218,13,.25);
    padding:6px 16px;border-radius:100px;
    font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;
    color:var(--accent);width:fit-content;margin-bottom:32px;
  }
  .status-dot{
    width:7px;height:7px;border-radius:50%;background:#22c55e;
    box-shadow:0 0 0 2px rgba(34,197,94,.25);
    animation:blink 2s ease-in-out infinite;
  }
  @keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}

  /* hero typography */
  .hero-name{
    font-family:var(--serif);
    font-size:clamp(56px,7vw,110px);
    font-weight:400;line-height:.92;color:var(--text-h);
    letter-spacing:-2px;margin-bottom:10px;
  }
  .hero-name em{font-style:italic;color:var(--accent);text-shadow:0 0 48px rgba(253,218,13,.35)}
  .hero-aka{font-family:var(--mono);font-size:12px;color:var(--text);margin-bottom:24px;letter-spacing:.06em}
  .hero-sub{font-size:15px;color:var(--text-m);line-height:1.75;margin-bottom:40px;max-width:380px}

  /* buttons */
  .btn-main{
    display:inline-flex;align-items:center;gap:8px;
    background:var(--accent);color:#0a0800;
    font-family:var(--sans);font-weight:700;font-size:13px;
    padding:11px 24px;border-radius:8px;border:none;
    transition:all .2s;letter-spacing:.03em;
  }
  .btn-main:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(253,218,13,.35);background:#ffe033}
  .btn-ghost{
    display:inline-flex;align-items:center;gap:8px;
    background:transparent;color:var(--text-m);
    font-family:var(--sans);font-weight:600;font-size:13px;
    padding:11px 24px;border-radius:8px;border:1px solid var(--border2);
    transition:all .2s;
  }
  .btn-ghost:hover{border-color:rgba(253,218,13,.4);color:var(--accent)}
  .hero-btns{display:flex;gap:10px;flex-wrap:wrap}

  /* stat cards */
  .stat-card{
    background:var(--bg2);border:1px solid var(--border);
    border-radius:16px;padding:22px 24px;position:relative;overflow:hidden;
  }
  .stat-card::before{
    content:'';position:absolute;top:0;right:0;width:120px;height:120px;
    background:radial-gradient(circle at 100% 0%,rgba(253,218,13,.07) 0%,transparent 65%);
  }
  .stat-num{font-family:var(--serif);font-size:48px;color:var(--accent);line-height:1;margin-bottom:4px}
  .stat-label{font-family:var(--mono);font-size:11px;color:var(--text);letter-spacing:.08em}
  .stat-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px}

  /* quick links */
  .quick-link{
    display:flex;align-items:center;gap:12px;
    background:var(--bg2);border:1px solid var(--border);
    border-radius:12px;padding:14px 18px;color:var(--text-h);
    transition:all .2s;font-size:13px;font-weight:600;width:100%;text-align:left;
  }
  .quick-link:hover{border-color:rgba(253,218,13,.4);transform:translateX(4px);color:var(--accent)}
  .quick-link svg{opacity:.5;transition:opacity .2s}
  .quick-link:hover svg{opacity:1}
  .ql-arrow{margin-left:auto;opacity:.3;transition:all .2s}
  .quick-link:hover .ql-arrow{opacity:1;transform:translateX(3px)}

  /* stack ticker */
  .ticker-wrap{border-top:1px solid var(--border);overflow:hidden;position:relative;padding:16px 0}
  .ticker-wrap::before,.ticker-wrap::after{
    content:'';position:absolute;top:0;bottom:0;width:80px;z-index:2;
  }
  .ticker-wrap::before{left:0;background:linear-gradient(90deg,var(--bg),transparent)}
  .ticker-wrap::after{right:0;background:linear-gradient(-90deg,var(--bg),transparent)}
  .ticker-track{display:flex;gap:28px;width:max-content;animation:ticker 22s linear infinite}
  @keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  .ticker-item{
    display:flex;align-items:center;gap:7px;
    font-size:12px;font-weight:600;color:var(--text);white-space:nowrap;letter-spacing:.04em;
  }
  .ticker-sep{color:var(--border2);font-size:18px}

  /* PAGE WRAPPER */
  .page-wrap{max-width:860px;margin:0 auto;padding:60px 48px 100px}
  .page-eyebrow{
    font-family:var(--mono);font-size:10px;color:var(--accent);
    letter-spacing:.14em;text-transform:uppercase;margin-bottom:10px;
    display:flex;align-items:center;gap:10px;
  }
  .page-eyebrow::after{content:'';flex:1;height:1px;background:var(--border)}
  .page-title{
    font-family:var(--serif);font-size:clamp(38px,5vw,64px);
    font-weight:400;color:var(--text-h);line-height:1.02;letter-spacing:-1px;margin-bottom:44px;
  }
  .page-title em{font-style:italic;color:var(--accent)}

  /* section heads */
  .sec-head{
    font-family:var(--mono);font-size:10px;color:var(--text);
    letter-spacing:.14em;text-transform:uppercase;
    margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--border);
    display:flex;align-items:center;gap:6px;
  }
  .sec-head::before{content:'//';color:var(--accent)}
  .info-section{margin-bottom:38px}

  /* profile card */
  .profile-card{
    background:var(--bg2);border:1px solid var(--border);
    border-radius:18px;padding:32px;margin-bottom:28px;
    display:flex;gap:24px;align-items:flex-start;position:relative;overflow:hidden;
  }
  .profile-card::before{
    content:'';position:absolute;top:0;right:0;width:180px;height:180px;
    background:radial-gradient(circle at 100% 0%,rgba(253,218,13,.06) 0%,transparent 60%);
  }
  .avatar{
    width:76px;height:76px;border-radius:16px;flex-shrink:0;
    background:linear-gradient(135deg,rgba(253,218,13,.18),rgba(253,218,13,.05));
    border:1px solid rgba(253,218,13,.28);
    display:flex;align-items:center;justify-content:center;font-size:34px;
  }
  .profile-info h2{font-family:var(--serif);font-size:26px;color:var(--text-h);letter-spacing:-.4px;margin-bottom:3px}
  .profile-handle{font-family:var(--mono);font-size:11px;color:var(--text);margin-bottom:12px}
  .profile-bio{font-size:14px;color:var(--text-m);line-height:1.78;margin-bottom:14px;max-width:440px}
  .tags{display:flex;flex-wrap:wrap;gap:8px}
  .tag{
    background:rgba(253,218,13,.08);border:1px solid rgba(253,218,13,.2);
    color:#c4a800;font-size:10px;font-weight:700;
    padding:4px 12px;border-radius:100px;letter-spacing:.04em;
  }

  /* education */
  .edu-card{
    background:var(--bg2);border:1px solid var(--border);
    border-radius:14px;padding:20px 22px;
    display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;
  }
  .edu-name{font-weight:700;color:var(--text-h);font-size:14px;margin-bottom:3px}
  .edu-deg{font-size:12px;color:var(--text)}
  .badge{
    background:var(--accent);color:#0a0800;
    font-family:var(--mono);font-size:11px;font-weight:600;
    padding:4px 14px;border-radius:100px;
  }

  /* pills */
  .pills{display:flex;flex-wrap:wrap;gap:8px}
  .pill{
    background:var(--bg3);border:1px solid var(--border2);
    color:var(--text-m);font-family:var(--mono);font-size:11px;font-weight:600;
    padding:5px 14px;border-radius:100px;transition:all .2s;
  }
  .pill:hover{border-color:rgba(253,218,13,.4);color:var(--accent);background:rgba(253,218,13,.06)}

  /* certs */
  .cert-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:14px}
  .cert-card{
    background:var(--bg2);border:1px solid var(--border);border-radius:18px;
    overflow:hidden;display:flex;flex-direction:column;
    transition:all .22s;position:relative;
  }
  .cert-card:hover{border-color:rgba(253,218,13,.4);transform:translateY(-4px);box-shadow:0 20px 40px rgba(0,0,0,.4)}
  .cert-banner{
    height:130px;display:flex;align-items:center;justify-content:center;
    font-size:48px;position:relative;border-bottom:1px solid var(--border);
  }
  .issuer-chip{
    position:absolute;top:11px;left:11px;
    font-family:var(--mono);font-size:9px;font-weight:700;
    padding:3px 10px;border-radius:100px;letter-spacing:.06em;
  }
  .cert-body{padding:18px 20px 20px;flex:1;display:flex;flex-direction:column;gap:8px}
  .cert-body h3{font-family:var(--serif);font-size:16px;font-weight:400;color:var(--text-h);line-height:1.35}
  .cert-issuer{font-family:var(--mono);font-size:10px;color:var(--text)}
  .verify-link{
    display:inline-flex;align-items:center;gap:6px;width:fit-content;
    background:rgba(253,218,13,.1);border:1px solid rgba(253,218,13,.25);
    color:var(--accent);font-size:10px;font-weight:700;
    padding:5px 12px;border-radius:8px;margin-top:4px;transition:all .2s;
    font-family:var(--mono);
  }
  .cert-card:hover .verify-link{background:var(--accent);color:#0a0800}

  /* projects */
  .feat-card{
    background:var(--bg2);border:1px solid var(--border);border-radius:20px;
    padding:36px 40px;margin-bottom:24px;display:block;
    color:var(--text-h);transition:all .22s;position:relative;overflow:hidden;
  }
  .feat-card::before{
    content:'';position:absolute;inset:0;
    background:linear-gradient(135deg,rgba(253,218,13,.04) 0%,transparent 55%);
    transition:opacity .3s;
  }
  .feat-card:hover{border-color:rgba(253,218,13,.4);transform:translateY(-3px);box-shadow:0 24px 60px rgba(0,0,0,.5)}
  .feat-deco{position:absolute;right:-16px;bottom:-16px;font-size:110px;opacity:.05;pointer-events:none;line-height:1}
  .feat-label{
    display:inline-flex;align-items:center;gap:6px;
    background:var(--accent);color:#0a0800;
    font-family:var(--mono);font-size:10px;font-weight:700;
    padding:4px 12px;border-radius:100px;letter-spacing:.08em;margin-bottom:16px;
  }
  .feat-card h2{
    font-family:var(--serif);font-size:clamp(26px,4vw,42px);
    font-weight:400;color:var(--text-h);letter-spacing:-1px;margin-bottom:10px;line-height:1.1;
  }
  .feat-hl{color:var(--accent)}
  .feat-card p{color:var(--text-m);font-size:14px;line-height:1.72;max-width:440px;margin-bottom:22px}
  .feat-cta{
    display:inline-flex;align-items:center;gap:8px;
    background:var(--accent);color:#0a0800;
    font-family:var(--sans);font-weight:700;font-size:12px;
    padding:9px 20px;border-radius:8px;transition:all .2s;
  }
  .feat-cta:hover{background:#ffe033;transform:translateX(2px)}
  .proj-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px}
  .proj-card{
    background:var(--bg2);border:1px solid var(--border);border-radius:16px;
    padding:22px 20px;color:var(--text-h);display:flex;flex-direction:column;gap:10px;
    transition:all .22s;
  }
  .proj-card:hover{border-color:rgba(253,218,13,.35);transform:translateY(-3px);box-shadow:0 16px 32px rgba(0,0,0,.4)}
  .proj-card.placeholder{opacity:.5}
  .proj-card.placeholder:hover{transform:none;box-shadow:none;border-color:var(--border)}
  .proj-icon{font-size:24px}
  .proj-card h3{font-family:var(--serif);font-size:16px;font-weight:400;line-height:1.3}
  .proj-card p{font-size:12px;color:var(--text);line-height:1.65;flex:1}
  .proj-tags{display:flex;flex-wrap:wrap;gap:6px}
  .proj-tag{
    background:rgba(253,218,13,.08);border:1px solid rgba(253,218,13,.2);
    color:#c4a800;font-family:var(--mono);font-size:9px;font-weight:700;
    padding:3px 9px;border-radius:100px;letter-spacing:.04em;
  }
  .proj-link{font-family:var(--mono);font-size:11px;color:var(--accent);margin-top:auto}

  /* contacts */
  .contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:32px}
  .contact-link{
    display:flex;align-items:center;gap:14px;
    background:var(--bg2);border:1px solid var(--border);
    border-radius:14px;padding:18px 20px;color:var(--text-h);transition:all .22s;
  }
  .contact-link:hover{border-color:rgba(253,218,13,.4);transform:translateX(4px);box-shadow:-4px 0 0 var(--accent),0 8px 28px rgba(0,0,0,.3)}
  .contact-icon{
    width:44px;height:44px;border-radius:10px;flex-shrink:0;
    background:rgba(253,218,13,.08);border:1px solid rgba(253,218,13,.2);
    display:flex;align-items:center;justify-content:center;font-size:20px;
  }
  .contact-info h3{font-size:13px;font-weight:700;color:var(--text-h);margin-bottom:2px}
  .contact-info p{font-family:var(--mono);font-size:10px;color:var(--text)}
  .contact-arrow{margin-left:auto;color:var(--text);transition:all .2s;opacity:.5}
  .contact-link:hover .contact-arrow{transform:translateX(4px);color:var(--accent);opacity:1}

  /* form */
  .form-card{background:var(--bg2);border:1px solid var(--border);border-radius:20px;padding:36px}
  .form-card h2{font-family:var(--serif);font-size:28px;color:var(--text-h);margin-bottom:4px;letter-spacing:-.5px}
  .form-card>p{font-size:13px;color:var(--text);margin-bottom:24px}
  .form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px}
  .form-group{margin-bottom:12px}
  .form-label{display:block;font-family:var(--mono);font-size:9px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--text);margin-bottom:6px}
  .form-input{
    width:100%;padding:10px 14px;
    background:var(--bg3);border:1px solid var(--border2);
    border-radius:10px;font-size:13px;color:var(--text-h);outline:none;
    transition:border-color .2s,box-shadow .2s;
  }
  .form-input:focus{border-color:rgba(253,218,13,.5);box-shadow:0 0 0 3px rgba(253,218,13,.08)}
  textarea.form-input{resize:vertical;min-height:110px}
  .form-submit{
    width:100%;background:var(--accent);color:#0a0800;
    font-family:var(--sans);font-weight:700;font-size:13px;
    padding:12px;border:none;border-radius:10px;
    transition:all .2s;letter-spacing:.03em;margin-top:4px;
  }
  .form-submit:hover{background:#ffe033;transform:translateY(-2px);box-shadow:0 8px 24px rgba(253,218,13,.3)}
  .form-success{background:#052912;border:1px solid #22c55e;color:#22c55e}

  /* sec divider */
  .sec-div{display:flex;align-items:center;gap:12px;margin:8px 0 14px}
  .sec-div-label{font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--text);white-space:nowrap}
  .sec-div-line{flex:1;height:1px;background:var(--border)}

  /* animations */
  @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
  .fade-up{animation:fadeUp .45s ease both}
  .fade-up-1{animation:fadeUp .45s ease .05s both}
  .fade-up-2{animation:fadeUp .45s ease .1s both}
  .fade-up-3{animation:fadeUp .45s ease .15s both}
  .fade-up-4{animation:fadeUp .45s ease .2s both}
  .fade-up-5{animation:fadeUp .45s ease .25s both}
`;

/* ── TICKER ──────────────────────────────────────────────────────────────── */
function Ticker({ stack }) {
  const doubled = [...stack, ...stack, ...stack, ...stack];
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((s, i) => (
          <span key={i} className="ticker-item">
            <span>{s.icon}</span>{s.name}
            {i < doubled.length - 1 && <span className="ticker-sep">·</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── HOME PAGE ───────────────────────────────────────────────────────────── */
function HomePage({ goTo }) {
  const totalCerts    = DATA.certs.length;
  const totalProjects = DATA.projects.filter(p => !p.placeholder).length;
  const totalSkills   = Object.values(DATA.skills).flat().length;

  return (
    <>
      <div className="home-grid">
        {/* LEFT */}
        <div className="home-left">
          <div className="status-pill fade-up">
            <span className="status-dot" />
            {DATA.status}
          </div>
          <h1 className="hero-name fade-up-1">Hi, I'm<br /><em>Reb</em></h1>
          <div className="hero-aka fade-up-2">// a.k.a {DATA.aka} · CS Student · Creator</div>
          <p className="hero-sub fade-up-3">{DATA.bio}</p>
          <div className="hero-btns fade-up-4">
            <button className="btn-main" onClick={() => goTo("projects")}>
              <MonitorIcon /> View My Work
            </button>
            <button className="btn-ghost" onClick={() => goTo("contact")}>
              Get in Touch <ArrowIcon />
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="home-right fade-up-1">
          <div className="stat-row">
            <div className="stat-card">
              <div className="stat-num">{totalCerts}</div>
              <div className="stat-label">certifications</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">{totalProjects}</div>
              <div className="stat-label">projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">{totalSkills}</div>
              <div className="stat-label">skills</div>
            </div>
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:"6px" }}>
            <div style={{ fontFamily:"var(--mono)", fontSize:"10px", color:"var(--text)", letterSpacing:".1em", textTransform:"uppercase", marginBottom:"6px" }}>// explore</div>
            {[
              { icon:"👤", label:"Profile & Education",       page:"profile"  },
              { icon:"🏆", label:"Certifications (IBM, Oracle)", page:"certs" },
              { icon:"💼", label:"Projects & Work",            page:"projects" },
              { icon:"📬", label:"Get In Touch",               page:"contact"  },
            ].map(item => (
              <button key={item.page} className="quick-link" onClick={() => goTo(item.page)}>
                <span style={{ fontSize:"18px" }}>{item.icon}</span>
                <span style={{ fontSize:"13px", fontWeight:"600", color:"var(--text-h)" }}>{item.label}</span>
                <span className="ql-arrow"><ArrowIcon /></span>
              </button>
            ))}
          </div>

          <a href={DATA.github} target="_blank" rel="noreferrer"
            style={{ display:"inline-flex", alignItems:"center", gap:"8px", fontFamily:"var(--mono)", fontSize:"11px", color:"var(--text)", padding:"10px 16px", borderRadius:"10px", border:"1px solid var(--border)", transition:"all .2s", marginTop:"4px" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(253,218,13,.4)"; e.currentTarget.style.color="var(--accent)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.color="var(--text)"; }}>
            <GithubIcon /> github.com/RebEmnacin <ExtLinkIcon />
          </a>
        </div>
      </div>

      <Ticker stack={DATA.stack} />
    </>
  );
}

/* ── PROFILE PAGE ────────────────────────────────────────────────────────── */
function ProfilePage() {
  return (
    <div className="page-wrap">
      <div className="page-eyebrow">About Me</div>
      <h1 className="page-title">Who is<br /><em>Jolts?</em></h1>

      <div className="profile-card fade-up">
        <div className="avatar">⚡</div>
        <div className="profile-info">
          <h2>{DATA.name}</h2>
          <div className="profile-handle">@RebEmnacin · a.k.a {DATA.aka}</div>
          <p className="profile-bio">{DATA.bio}</p>
          <div className="tags">
            <span className="tag">⚡ Open to Opportunities</span>
            <span className="tag">🎓 CS Student</span>
            <span className="tag">🛠️ Creator</span>
            <span className="tag">🤖 AI Enthusiast</span>
          </div>
        </div>
      </div>

      <div className="info-section fade-up-1">
        <div className="sec-head">Education</div>
        <div className="edu-card">
          <div>
            <div className="edu-name">{DATA.school}</div>
            <div className="edu-deg">{DATA.degree}</div>
          </div>
          <span className="badge">{DATA.schoolYear}</span>
        </div>
      </div>

      <div className="info-section fade-up-2">
        <div className="sec-head">Languages</div>
        <div className="pills">
          {DATA.skills.languages.map(s => <span key={s} className="pill">{s}</span>)}
        </div>
      </div>

      <div className="info-section fade-up-3">
        <div className="sec-head">Databases</div>
        <div className="pills">
          {DATA.skills.databases.map(s => <span key={s} className="pill">{s}</span>)}
        </div>
      </div>

      <div className="info-section fade-up-4">
        <div className="sec-head">Tools & Frameworks</div>
        <div className="pills">
          {DATA.skills.tools.map(s => <span key={s} className="pill">{s}</span>)}
        </div>
      </div>
    </div>
  );
}

/* ── CERTS PAGE ──────────────────────────────────────────────────────────── */
function CertsPage() {
  return (
    <div className="page-wrap">
      <div className="page-eyebrow">Credentials</div>
      <h1 className="page-title">My <em>Certifications</em></h1>
      <div className="cert-grid">
        {DATA.certs.map((c, i) => (
          <a key={i} href={c.url} target="_blank" rel="noreferrer"
            className="cert-card fade-up"
            style={{ animationDelay: `${i * 0.07}s` }}>
            <div className="cert-banner"
              style={{ background: `linear-gradient(135deg, #0a0a14, ${c.color}18)` }}>
              {c.emoji}
              <span className="issuer-chip"
                style={{ background: c.color, color: "#fff" }}>{c.org}</span>
            </div>
            <div className="cert-body">
              <h3>{c.title}</h3>
              <div className="cert-issuer">{c.org}</div>
              <span className="verify-link">↗ Verify Certificate <ExtLinkIcon /></span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ── PROJECTS PAGE ───────────────────────────────────────────────────────── */
function ProjectsPage() {
  const featured = DATA.projects.find(p => p.featured);
  const others   = DATA.projects.filter(p => !p.featured);
  return (
    <div className="page-wrap">
      <div className="page-eyebrow">Portfolio</div>
      <h1 className="page-title">Things I've <em>Built</em></h1>

      <div className="sec-div">
        <span className="sec-div-label">Featured</span>
        <span className="sec-div-line" />
      </div>

      <a href={featured.url} target="_blank" rel="noreferrer" className="feat-card fade-up">
        <div className="feat-deco">{featured.emoji}</div>
        <span className="feat-label">⭐ Featured Project</span>
        <h2><span className="feat-hl">{featured.name}</span></h2>
        <p>{featured.desc}</p>
        <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginBottom:"20px" }}>
          {featured.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
        </div>
        <span className="feat-cta">View on GitHub <ArrowIcon /></span>
      </a>

      <div className="sec-div">
        <span className="sec-div-label">All Projects</span>
        <span className="sec-div-line" />
      </div>

      <div className="proj-grid">
        {others.map((p, i) => p.url ? (
          <a key={i} href={p.url} target="_blank" rel="noreferrer"
            className={`proj-card fade-up${p.placeholder ? " placeholder" : ""}`}
            style={{ animationDelay: `${i * 0.07}s` }}>
            <div className="proj-icon">{p.emoji}</div>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <div className="proj-tags">{p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}</div>
            <div className="proj-link">View on GitHub →</div>
          </a>
        ) : (
          <div key={i} className="proj-card placeholder fade-up"
            style={{ animationDelay: `${i * 0.07}s` }}>
            <div className="proj-icon">{p.emoji}</div>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <div className="proj-tags">{p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── CONTACT PAGE ────────────────────────────────────────────────────────── */
function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", message:"" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name:"", email:"", message:"" });
  };

  return (
    <div className="page-wrap">
      <div className="page-eyebrow">Let's Talk</div>
      <h1 className="page-title">Get in <em>Touch</em></h1>

      <div className="contact-grid">
        <a href={DATA.github} target="_blank" rel="noreferrer" className="contact-link fade-up">
          <div className="contact-icon">🐙</div>
          <div className="contact-info">
            <h3>GitHub</h3>
            <p>github.com/RebEmnacin</p>
          </div>
          <span className="contact-arrow"><ArrowIcon /></span>
        </a>
        <a href="mailto:reb@email.com" className="contact-link fade-up-1">
          <div className="contact-icon">✉️</div>
          <div className="contact-info">
            <h3>Email</h3>
            <p>Drop me a message anytime</p>
          </div>
          <span className="contact-arrow"><ArrowIcon /></span>
        </a>
      </div>

      <form onSubmit={handleSubmit} className="form-card fade-up-2">
        <h2>Say Hello 👋</h2>
        <p>Fill out the form and I'll get back to you as soon as possible.</p>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input className="form-input" type="text" placeholder="Juan dela Cruz"
              value={form.name} onChange={e => setForm({...form, name:e.target.value})} required />
          </div>
          <div className="form-group">
            <label className="form-label">Your Email</label>
            <input className="form-input" type="email" placeholder="juan@email.com"
              value={form.email} onChange={e => setForm({...form, email:e.target.value})} required />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea className="form-input" placeholder="What's on your mind?"
            value={form.message} onChange={e => setForm({...form, message:e.target.value})} required />
        </div>
        <button type="submit" className={`form-submit${sent ? " form-success" : ""}`}>
          {sent ? "✓ Sent! I'll get back to you soon." : "Send Message ⚡"}
        </button>
      </form>
    </div>
  );
}

/* ── ROOT APP ─────────────────────────────────────────────────────────────── */
export default function App() {
  const [page, setPage] = useState("home");
  const [animKey, setAnimKey] = useState(0);

  const goTo = (id) => {
    setPage(id);
    setAnimKey(k => k + 1);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const pageMap = {
    home:     <HomePage goTo={goTo} />,
    profile:  <ProfilePage />,
    certs:    <CertsPage />,
    projects: <ProjectsPage />,
    contact:  <ContactPage />,
  };

  return (
    <>
      <style>{css}</style>
      <div className="grid-bg" />
      <div className="noise" />

      {/* SIDEBAR */}
      <nav className="sidebar">
        <div className="sidebar-logo">
          <img
            src="/Reb_logo.png"
            alt="Jolts"
            onError={e => { e.target.style.display="none"; e.target.nextSibling.style.display="flex"; }}
          />
          <span style={{ display:"none", fontSize:"22px", alignItems:"center", justifyContent:"center" }}>⚡</span>
        </div>

        {PAGES.map((p) => (
          <button
            key={p.id}
            className={`nav-btn${page === p.id ? " active" : ""}`}
            onClick={() => goTo(p.id)}
          >
            {p.icon}
            <span className="nav-tooltip">{p.label}</span>
          </button>
        ))}
      </nav>

      {/* MAIN */}
      <main className="app" key={animKey}>
        {pageMap[page]}
      </main>
    </>
  );
}