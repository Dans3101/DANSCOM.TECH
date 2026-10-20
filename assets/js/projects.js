/**
 * DANSCOM Projects Data and Interactive Controller
 * Owner: Daniel Musembi
 * Provides filterable portfolio, status markers, modal details, and verified link configs.
 */

window.DANSCOM_PROJECTS = [
  {
    id: 'danscomfx',
    title: 'DANSCOMFX Algorithmic Trading Framework',
    category: 'trading',
    categoryLabel: 'Trading Technology',
    status: 'prototype',
    statusLabel: 'Research Prototype',
    technologies: ['Pine Script v5', 'MetaTrader 5 MQL5', 'Python', 'TradingView Webhooks'],
    shortDesc: 'A rule-based algorithmic trading framework focused on strict risk-containment logic, automated position sizing, and volatility-adjusted execution experiments.',
    longDesc: 'DANSCOMFX is an ongoing personal research initiative exploring automated trading systems. Built on systematic quantitative principles rather than subjective prediction, it implements a hard 1% maximum portfolio risk per execution, automatic daily drawdown circuit breakers, and algorithmic order-management protocols via MT5 and TradingView webhooks. (Note: Experimental research only; not commercial fund management or financial advice).',
    purpose: 'To explore programmatic risk management, automated order routing, and systematic trade validation in currency and synthetic index markets.',
    challenges: 'Managing order slippage, handling network reconnect events in automated webhook listeners, and enforcing emotionless stop-loss execution without deviation.',
    nextSteps: 'Paper-forward testing across divergent volatility regimes and developing a lightweight telemetry dashboard for execution metrics.',
    githubUrl: 'https://github.com/DanielMusembi', // Replace with specific repo URL
    demoUrl: null, // Clearly marked placeholder
    featured: true
  },
  {
    id: 'deriv-bot',
    title: 'Deriv API Automated Execution Bot',
    category: 'trading',
    categoryLabel: 'Trading Technology',
    status: 'prototype',
    statusLabel: 'Technical Prototype',
    technologies: ['Deriv WebSocket API', 'JavaScript (ES6+)', 'Node.js', 'Chart.js'],
    shortDesc: 'A lightweight automation bot connecting directly to the Deriv WebSocket API for real-time tick analysis, session statistics, and risk-capped test trades.',
    longDesc: 'Engineered as a technical proof-of-concept for high-speed algorithmic connectivity. The bot streams tick data via WebSockets, calculates rolling moving averages and volatility bands, and triggers simulated execution tickets with hard mathematical limits on consecutive drawdowns. It operates with strict API token hygiene and zero client credential persistence.',
    purpose: 'Validate low-latency WebSocket communication and build resilient fail-safe error handling for automated market connectivity.',
    challenges: 'Handling sudden disconnects during high tick volume periods and ensuring client-side race conditions do not generate duplicate order requests.',
    nextSteps: 'Migrating tick aggregation logic to a local state engine with CSV audit logging.',
    githubUrl: 'https://github.com/DanielMusembi',
    demoUrl: null,
    featured: true
  },
  {
    id: 'ai-lead-pipeline',
    title: 'AI-Assisted Lead Qualification & CRM Pipeline',
    category: 'automation',
    categoryLabel: 'AI & Automation',
    status: 'case-study',
    statusLabel: 'Verified System',
    technologies: ['OpenAI / Gemini APIs', 'Google Workspace API', 'Zapier', 'Google Sheets'],
    shortDesc: 'An intelligent automation workflow that extracts incoming inquiry data, cleans lead records, queries public business registries, and formats CRM cards.',
    longDesc: 'Designed to eliminate repetitive data entry for virtual assistance clients. When a prospective client fills out an intake form, an automated webhook orchestrates an LLM pipeline to summarize client needs, categorize priority (Tier 1/2/3), verify company domains, and populate a structured Google Sheet with draft response templates prepared for human review.',
    purpose: 'Cut client inquiry triage time from 25 minutes to under 2 minutes while maintaining 100% human-in-the-loop oversight.',
    challenges: 'Preventing LLM hallucinations on unstructured client bios by enforcing strict JSON Schema response formatting and deterministic field parsing.',
    nextSteps: 'Adapting the pipeline for direct webhook integration with HubSpot and Notion databases.',
    githubUrl: 'https://github.com/DanielMusembi',
    demoUrl: null,
    featured: true
  },
  {
    id: 'danscom-pwa-portfolio',
    title: 'DANSCOM Static PWA Portfolio & Client Hub',
    category: 'web',
    categoryLabel: 'Web Development',
    status: 'live',
    statusLabel: 'Live Website',
    technologies: ['Pure HTML5', 'Vanilla CSS3', 'JavaScript ES6+', 'Service Workers', 'PWA Manifest'],
    shortDesc: 'A ultra-fast, zero-dependency multi-page static portfolio engineered specifically for free GitHub Pages deployment with full offline PWA capabilities.',
    longDesc: 'The very site you are viewing right now. Crafted to deliver sub-second page loads, zero runtime server costs, total GitHub Pages compatibility (both root and project subpaths), accessible semantic markup, dynamic client-side filtering, and resilient service worker offline caching.',
    purpose: 'Demonstrate professional frontend engineering, zero-server operational security, and seamless client presentation.',
    challenges: 'Ensuring relative asset linking across multi-tier GitHub Pages URLs and building accessible theme switching with zero layout shift.',
    nextSteps: 'Adding automated GitHub Actions audit workflows for Lighthouse score tracking.',
    githubUrl: 'https://github.com/DanielMusembi',
    demoUrl: './index.html',
    featured: true
  },
  {
    id: 'real-estate-va-system',
    title: 'Real Estate Transaction & Listing Support Engine',
    category: 'va',
    categoryLabel: 'Virtual Assistance',
    status: 'case-study',
    statusLabel: 'Operational Framework',
    technologies: ['Google Sheets', 'Canva Pro', 'Trello', 'MLS Portals', 'DocuSign Workflow'],
    shortDesc: 'A comprehensive operational toolkit for realtors and property managers: listing preparation, lead data hygiene, appointment dispatching, and escrow tracking.',
    longDesc: 'Built to support busy real estate brokers and property managers. Daniel Musembi applies structured investigative criminology techniques to verify property records, cross-check zoning and public title listings, format marketing materials, schedule client walkthroughs, and monitor compliance deadlines in transaction folders.',
    purpose: 'Allow property professionals to focus on relationship-building and closing while back-office details run with military precision.',
    challenges: 'Managing time-sensitive closing documents across multiple conflicting client schedules and local registry portals.',
    nextSteps: 'Developing automated SMS reminder triggers for pending document signatures.',
    githubUrl: null,
    demoUrl: './virtual-assistant.html',
    featured: false
  },
  {
    id: 'criminology-research-synthesizer',
    title: 'Investigative Research & Due Diligence Dossier',
    category: 'research',
    categoryLabel: 'Writing & Research',
    status: 'case-study',
    statusLabel: 'Methodology Framework',
    technologies: ['Academic Databases', 'OSINT Tools', 'Executive Briefings', 'Zotero', 'Markdown'],
    shortDesc: 'A rigorous open-source intelligence and academic research methodology for background checks, competitor intelligence, and regulatory policy briefs.',
    longDesc: 'Leveraging Daniel Musembi’s Bachelor of Arts in Criminology & Penology (Maasai Mara University, 2019–2023). Combines formal legal/penological research methodologies, OSINT cross-referencing, primary source verification, and structured executive synthesis to produce clear, un-inflated decision briefings for businesses and investors.',
    purpose: 'Transform noisy, fragmented internet data into verified, actionable intelligence with citations and risk matrices.',
    challenges: 'Filtering out disinformation, evaluating source credibility, and distilling 50-page regulatory filings into a 2-page decision brief.',
    nextSteps: 'Publishing standardized open-source due diligence templates for online researchers.',
    githubUrl: null,
    demoUrl: './writing-research.html',
    featured: false
  }
];

// Project rendering and filtering controller
window.initProjectsUI = function(containerId, isFeaturedOnly = false) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filterButtons = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('projectSearch');

  let currentCategory = 'all';
  let currentSearch = '';

  function render() {
    let filtered = window.DANSCOM_PROJECTS.filter(project => {
      if (isFeaturedOnly && !project.featured) return false;
      const matchesCategory = currentCategory === 'all' || project.category === currentCategory;
      const matchesSearch = !currentSearch || 
        project.title.toLowerCase().includes(currentSearch) ||
        project.shortDesc.toLowerCase().includes(currentSearch) ||
        project.technologies.some(t => t.toLowerCase().includes(currentSearch));
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-card);">
          <p style="color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 12px;">No projects found matching your criteria.</p>
          <button class="btn btn-secondary btn-sm" onclick="window.resetProjectFilters()">Clear Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(p => {
      const statusClass = p.status === 'live' ? 'badge-live' : 
                          p.status === 'prototype' ? 'badge-proto' : 
                          p.status === 'dev' ? 'badge-dev' : 'badge-concept';
      
      const techTags = p.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('');

      return `
        <article class="card project-card" data-id="${p.id}">
          <div class="project-meta-top">
            <span class="badge ${statusClass}">${p.statusLabel}</span>
            <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">${p.categoryLabel}</span>
          </div>
          <h3 class="card-title" style="margin-bottom: 10px;">${p.title}</h3>
          <p class="card-desc">${p.shortDesc}</p>
          <div class="project-tech-tags">
            ${techTags}
          </div>
          <div class="card-footer">
            <button class="btn btn-secondary btn-sm" onclick="window.openProjectModal('${p.id}')">
              View Details & Architecture
            </button>
            ${p.demoUrl ? `<a href="${p.demoUrl}" class="card-link" style="font-size: 0.8rem;">Explore &rarr;</a>` : ''}
          </div>
        </article>
      `;
    }).join('');
  }

  // Hook filter buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter') || 'all';
      render();
    });
  });

  // Hook search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = (e.target.value || '').trim().toLowerCase();
      render();
    });
  }

  window.resetProjectFilters = function() {
    currentCategory = 'all';
    currentSearch = '';
    if (searchInput) searchInput.value = '';
    filterButtons.forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-filter') === 'all');
    });
    render();
  };

  render();
};

// Project modal viewer
window.openProjectModal = function(id) {
  const project = window.DANSCOM_PROJECTS.find(p => p.id === id);
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('projectModalBody');
  if (!modal || !modalBody) return;

  const statusClass = project.status === 'live' ? 'badge-live' : 
                      project.status === 'prototype' ? 'badge-proto' : 
                      project.status === 'dev' ? 'badge-dev' : 'badge-concept';

  modalBody.innerHTML = `
    <div style="margin-bottom: 20px;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
        <span class="badge ${statusClass}">${project.statusLabel}</span>
        <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">${project.categoryLabel}</span>
      </div>
      <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 12px; color: var(--text-primary);">${project.title}</h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7; margin-bottom: 20px;">${project.longDesc}</p>
    </div>

    <div style="display: grid; gap: 16px; margin-bottom: 24px; background: var(--bg-surface); padding: 18px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
      <div>
        <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--accent-blue); margin-bottom: 4px;">Primary Purpose</h4>
        <p style="font-size: 0.9rem; color: var(--text-primary);">${project.purpose}</p>
      </div>
      <div>
        <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--accent-cyan); margin-bottom: 4px;">Technical Challenges Addressed</h4>
        <p style="font-size: 0.9rem; color: var(--text-primary);">${project.challenges}</p>
      </div>
      <div>
        <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); margin-bottom: 4px;">Planned Next Steps</h4>
        <p style="font-size: 0.9rem; color: var(--text-primary);">${project.nextSteps}</p>
      </div>
    </div>

    <div style="margin-bottom: 24px;">
      <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 8px;">Technologies & Tools</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 6px;">
        ${project.technologies.map(t => `<span class="tech-tag" style="font-size: 0.8rem; padding: 4px 10px;">${t}</span>`).join('')}
      </div>
    </div>

    ${project.category === 'trading' ? `
      <div class="risk-box" style="margin: 20px 0;">
        <svg class="risk-box-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <div>
          <div class="risk-box-title">Financial Technology Research Disclaimer</div>
          <p class="risk-box-desc">This project represents personal algorithmic code architecture and mathematical experiments only. It does not provide financial advice, guarantee trading profits, or offer third-party asset management.</p>
        </div>
      </div>
    ` : ''}

    <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: flex-end; padding-top: 16px; border-top: 1px solid var(--border-subtle);">
      ${project.githubUrl ? `
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          Repository Placeholder
        </a>
      ` : ''}
      <a href="./contact.html?service=${project.category}" class="btn btn-primary btn-sm">
        Inquire About This Capability
      </a>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};
