/**
 * DANSCOM Portfolio & Work Samples Controller
 * Founder: Daniel Musembi
 * High-fidelity demonstration samples covering:
 * 1. Lead Generation (ICP scoring, qualification, lead tracking)
 * 2. Virtual Assistance (Email management, calendar scheduling, data entry, administrative support)
 * 3. Business Research (Market research, competitor analysis, business intelligence)
 * 4. Provider Verification (Services, locations, contact details, verification status registry)
 * 5. CRM & Data Management (Customer records, spreadsheets, follow-up tracking)
 * 6. AI & Automation (AI-powered business support & workflow automation)
 *
 * NOTE: Demonstration samples feature realistic simulated benchmark data engineered
 * by Daniel Musembi to showcase execution standards without breaching client confidentiality.
 */

window.DANSCOM_PROJECTS = [
  // 1. LEAD GENERATION
  {
    id: 'lead-generation',
    title: 'B2B Executive Lead Generation & ICP Qualification Pipeline',
    category: 'lead-gen',
    categoryLabel: 'Lead Generation',
    status: 'demo-sample',
    statusLabel: 'Portfolio Demonstration Sample',
    featured: true,
    isSampleWork: true,
    badgeClass: 'badge-demo',
    shortDesc: 'A complete B2B prospect research and qualification pipeline featuring Ideal Customer Profile (ICP) multi-tier scoring, verified executive email/phone discovery, and CRM-ready lead tracking sheets.',
    longDesc: 'Engineered by Daniel Musembi to demonstrate enterprise lead sourcing rigor. Prospect lists are built using multi-variable ICP criteria (annual revenue, employee headcount, modern tech stack, and budgetary authority). Every lead record undergoes a 5-step verification process—including real-time SMTP handshakes and domain syntax validation—to guarantee sub-2% email bounce rates. Records include custom outbound personalization hooks and automated follow-up cadences.',
    objective: 'Deliver verified, high-converting B2B prospect intelligence directly to sales pipelines while eliminating manual data enrichment overhead and protecting client domain reputation.',
    methodology: [
      'ICP Persona Definition & Exclusion Filters (Industry, Geography, Headcount, Tech Stack)',
      'Decision-Maker Identification (VP of RevOps, CTO, Head of Procurement, C-Suite)',
      'Multi-Pass Contact Enrichment & SMTP Verification (<2% Bounce SLA)',
      'Personalized Outbound Hook Research (Recent funding, hiring spikes, news releases)',
      'Data Cleansing & Direct Import Schema Formatting for HubSpot / Salesforce'
    ],
    technologies: ['Apollo.io', 'LinkedIn Sales Navigator', 'Hunter.io', 'NeverBounce', 'Google Sheets (QUERY/ARRAY)', 'HubSpot CRM'],
    deliverables: [
      'Enriched Master Prospect Database (14 verified fields per contact)',
      'Custom ICP Scoring Matrix (Tier 1: 85–100 pts, Tier 2: 70–84 pts)',
      'Deliverability Hygiene Audit Report with Zero Catch-All Bounce Risk',
      'Personalized Cold Outreach Hook Formula & 3-Step Email Sequence Templates',
      'Lead Velocity & Conversion Stage Tracker Sheet'
    ],
    metrics: [
      { label: 'Sample Leads Qualified', value: '148 Records' },
      { label: 'Deliverability Rate', value: '98.6%' },
      { label: 'Average ICP Score', value: '92.4 / 100' },
      { label: 'SLA Turnaround', value: '48 Hours' }
    ],
    previewMockup: `
      <div class="card-preview-mockup">
        <div class="card-preview-mockup-row" style="color: var(--accent-gold); font-weight: 700;">
          <span>Target Company</span><span>Decision Maker</span><span>ICP Score</span><span>Status</span>
        </div>
        <div class="card-preview-mockup-row">
          <span>Apex Logistics Global</span><span>VP RevOps (Sarah J.)</span><span style="color: #34d399;">96 / 100</span><span class="table-badge table-badge-verified">Verified</span>
        </div>
        <div class="card-preview-mockup-row">
          <span>CloudSphere Solutions</span><span>CTO (Marcus S.)</span><span style="color: #34d399;">93 / 100</span><span class="table-badge table-badge-tier1">Tier 1</span>
        </div>
        <div class="card-preview-mockup-row">
          <span>Vantage Health Analytics</span><span>Head of Procurement</span><span style="color: #34d399;">89 / 100</span><span class="table-badge table-badge-verified">Qualified</span>
        </div>
      </div>
    `,
    sampleDataTable: {
      headers: ['Company', 'Contact Person & Title', 'Location & Size', 'Verified Email', 'Direct Phone', 'ICP Score', 'Outreach Stage', 'Qualification Note'],
      rows: [
        ['Apex Logistics Global', 'Sarah Jenkins<br><small style="color: var(--text-muted);">VP of Revenue Operations</small>', 'Austin, TX<br><small>380 Employees</small>', '<code style="color: #38bdf8;">s.jenkins@apexlogistics-demo.com</code>', '+1 (512) 555-0194', '<span class="table-badge table-badge-tier1">96 (Tier 1)</span>', '<span class="table-badge table-badge-verified">Discovery Booked</span>', 'Recently secured $18M Series B; scaling SDR team from 4 to 12. Tech stack: HubSpot + Outreach.'],
        ['CloudSphere Solutions', 'Marcus Sterling<br><small style="color: var(--text-muted);">Chief Technology Officer</small>', 'London, UK<br><small>140 Employees</small>', '<code style="color: #38bdf8;">m.sterling@cloudsphere-demo.io</code>', '+44 20 7946 0912', '<span class="table-badge table-badge-tier1">93 (Tier 1)</span>', '<span class="table-badge table-badge-active">Follow-Up #2 Sent</span>', 'Expanding European cloud security footprint; seeking offshore DevOps & administrative infrastructure.'],
        ['Vantage Health Analytics', 'Elena Rostova<br><small style="color: var(--text-muted);">Head of Procurement</small>', 'Chicago, IL<br><small>1,250 Employees</small>', '<code style="color: #38bdf8;">e.rostova@vantagehealth-demo.org</code>', '+1 (312) 555-0143', '<span class="table-badge table-badge-tier1">89 (Tier 1)</span>', '<span class="table-badge table-badge-pending">Proposal Under Review</span>', 'Multi-state healthcare compliance audit; looking to outsource medical provider verification workflows.'],
        ['Meridian Capital Advisory', 'David K. Vance<br><small style="color: var(--text-muted);">Managing Partner</small>', 'New York, NY<br><small>45 Employees</small>', '<code style="color: #38bdf8;">d.vance@meridiancap-demo.com</code>', '+1 (212) 555-0188', '<span class="table-badge table-badge-tier1">91 (Tier 1)</span>', '<span class="table-badge table-badge-verified">Discovery Scheduled</span>', 'High-touch boutique M&A advisory. Needs dedicated executive assistant for calendar, travel & due diligence dossiers.'],
        ['NovaRetail Commerce', 'Chloe Tremblay<br><small style="color: var(--text-muted);">Director of E-Commerce</small>', 'Montreal, CA<br><small>220 Employees</small>', '<code style="color: #38bdf8;">c.tremblay@novaretail-demo.ca</code>', '+1 (514) 555-0176', '<span class="table-badge table-badge-active">84 (Tier 2)</span>', '<span class="table-badge table-badge-active">Pitch Delivered</span>', 'Multi-channel Shopify Plus merchant. High volume of customer support tickets and provider vendor management.'],
        ['Solis Energy Tech', 'Henrik Lindqvist<br><small style="color: var(--text-muted);">Chief Operating Officer</small>', 'Stockholm, SE<br><small>95 Employees</small>', '<code style="color: #38bdf8;">h.lindqvist@solisenergy-demo.se</code>', '+46 8 123 4567', '<span class="table-badge table-badge-tier1">88 (Tier 1)</span>', '<span class="table-badge table-badge-active">Initial Inquiry Sent</span>', 'Clean energy hardware; requires daily market intelligence on Nordic regulatory changes.']
      ]
    }
  },

  // 2. VIRTUAL ASSISTANCE
  {
    id: 'virtual-assistance',
    title: 'Executive Virtual Operations: Inbox Zero, Scheduling & Admin Support',
    category: 'va',
    categoryLabel: 'Virtual Assistance',
    status: 'demo-sample',
    statusLabel: 'Portfolio Demonstration Sample',
    featured: true,
    isSampleWork: true,
    badgeClass: 'badge-demo',
    shortDesc: 'A comprehensive executive virtual assistance demonstration showcasing Inbox Zero triage protocols, color-coded multi-timezone calendar scheduling (EST/GMT/EAT), administrative data entry, and daily briefing packs.',
    longDesc: 'Illustrates high-efficiency executive operations tailored for busy founders, real estate brokers, and C-Suite leaders. Daniel Musembi establishes disciplined triage systems that categorize communications into actionable priorities (Action Required, VIP Clients, Delegated/Pending, Reference/Archive), draft context-rich responses, coordinate cross-continental stakeholder meetings with zero scheduling conflicts, and generate morning executive briefings.',
    objective: 'Reclaim 15–20 hours per week for executives by institutionalizing error-free calendar management, inbox prioritization, and seamless administrative support.',
    methodology: [
      'Inbox Triage & Tagging Rules (Action Required, VIP, Delegated, Reference)',
      'Context-Aware Draft Preparation (Matching executive voice and tone)',
      'Multi-Timezone Calendar Coordination with Protected Focus Buffers',
      'Daily 08:00 AM Morning Executive Briefing Compilation',
      'Confidential Expense Logging & Invoice Auditing'
    ],
    technologies: ['Google Workspace (Gmail, Calendar, Drive)', 'Microsoft 365 Outlook', 'Calendly / Chili Piper', 'Notion Workspace', 'Slack Enterprise', 'Clockwise Timezone Coordinator', 'Expensify'],
    deliverables: [
      'Comprehensive Inbox Zero SOP & Canned Email Response Library (25+ Scenarios)',
      'Executive Color-Coded Calendar System with Multi-Timezone Buffer Rules',
      'Daily 08:00 AM Morning Executive Briefing Document',
      'International Travel Itinerary & Logistics Pack with Timezone Sync',
      'Monthly Expense Reconciliation & Invoice Audit Spreadsheets'
    ],
    metrics: [
      { label: 'Daily Inbox Volume', value: '120+ Emails Triaged' },
      { label: 'Timezone Reach', value: 'EST, GMT, CET, EAT' },
      { label: 'Calendar Conflict Rate', value: '0.0%' },
      { label: 'Executive Time Reclaimed', value: '18 hrs / week' }
    ],
    previewMockup: `
      <div class="card-preview-mockup">
        <div class="card-preview-mockup-row" style="color: var(--accent-gold); font-weight: 700;">
          <span>Daily Workflow</span><span>Triage Category</span><span>Action Taken</span>
        </div>
        <div class="card-preview-mockup-row">
          <span>Board Deck Review</span><span class="table-badge table-badge-tier1">P1 Immediate</span><span>Flagged + Slot Booked</span>
        </div>
        <div class="card-preview-mockup-row">
          <span>VIP Contract Renewal</span><span class="table-badge table-badge-verified">VIP Client</span><span>DocuSign Prepped</span>
        </div>
        <div class="card-preview-mockup-row">
          <span>London Team Sync</span><span class="table-badge table-badge-active">Calendar EST/GMT</span><span>Buffer Enforced</span>
        </div>
      </div>
    `,
    sampleDataTable: {
      headers: ['Email Subject & Sender', 'Priority Level', 'Timezone Context', 'Action Executed by VA', 'Draft Response Summary', 'Follow-up SLA'],
      rows: [
        ['Urgent: Q3 Board Deck Sign-off<br><small style="color: var(--text-muted);">From: Board Chair (A. Sterling)</small>', '<span class="table-badge table-badge-tier1">P1 Immediate</span>', 'US Eastern (EST)', 'Flagged in Slack VIP channel; reserved 14:00 EST focus block on executive calendar; compiled 1-page financial summary.', 'Drafted acknowledgment confirming executive review by 15:00 EST.', '<span style="color: #34d399; font-weight: 700;">Within 15 Mins</span>'],
        ['Retainer Contract Extension: 6-Month Scope<br><small style="color: var(--text-muted);">From: Sarah Jenkins (Apex Logistics)</small>', '<span class="table-badge table-badge-verified">VIP Client</span>', 'US Central (CST)', 'Pulled current hours reconciliation spreadsheet; prepped draft extension addendum in DocuSign; attached performance summary.', 'Drafted warm acceptance note with DocuSign review link ready for executive sign-off.', '<span style="color: #34d399; font-weight: 700;">Within 30 Mins</span>'],
        ['Keynote Speaker Invitation: European Tech Summit<br><small style="color: var(--text-muted);">From: Conference Director (Berlin)</small>', '<span class="table-badge table-badge-active">P2 Scheduling</span>', 'Central Europe (CET)', 'Vetted attendee metrics & speaking honorarium against criteria; held tentative date slot with 48h travel buffer.', 'Drafted inquiry requesting stage technical requirements and session format details.', '<span style="color: var(--accent-gold);">Same Day</span>'],
        ['AWS Cloud Infrastructure Q2 Invoice Audit<br><small style="color: var(--text-muted);">From: DevOps Team / Billing</small>', '<span class="table-badge table-badge-active">P3 Admin Ops</span>', 'All Regions', 'Reconciled invoice against departmental budget threshold; flagged $340 unallocated compute instance to tech lead.', 'Logged in Expensify ledger; queued approved balance for Friday accounts payable batch.', '<span style="color: var(--text-muted);">24 Hours</span>'],
        ['Timezone Reschedule: UK M&A Advisory Call<br><small style="color: var(--text-muted);">From: David Vance (Meridian)</small>', '<span class="table-badge table-badge-verified">Calendar Triage</span>', 'London GMT / Nairobi EAT', 'Resolved conflicting client meeting; coordinated 3 mutual opening windows using Calendly executive link.', 'Sent polite rescheduling confirmation with updated Google Meet link and dial-in pin.', '<span style="color: #34d399; font-weight: 700;">Within 20 Mins</span>']
      ]
    }
  },

  // 3. BUSINESS RESEARCH
  {
    id: 'business-research',
    title: 'B2B Market Sizing & SaaS Competitor Intelligence Dossier',
    category: 'research',
    categoryLabel: 'Business Research',
    status: 'demo-sample',
    statusLabel: 'Portfolio Demonstration Sample',
    featured: true,
    isSampleWork: true,
    badgeClass: 'badge-demo',
    shortDesc: 'In-depth competitor intelligence and market viability research. Features a 4-competitor benchmark matrix, pricing structure analysis, OSINT company background checks, and an executive decision memo.',
    longDesc: 'Leverages Daniel Musembi’s criminology and investigative research background to conduct thorough, verified secondary research. By cross-referencing industry publications, regulatory filings, customer reviews, and pricing models, the framework synthesizes noisy market data into objective, cited decision matrices. It highlights competitor vulnerabilities, underserved market niches, and realistic addressable market sizing.',
    objective: 'Equip executives and investors with objective, verified competitive intelligence and market entry feasibility data to de-risk commercial strategy decisions.',
    methodology: [
      'Secondary Data Collection across Industry Databases & SEC / Regulatory Filings',
      'OSINT Investigation into Competitor Leadership, Funding & Corporate Filings',
      'Feature-by-Feature Competitor Benchmark & Pricing Elasticity Matrix',
      'SWOT Analysis with Specific Focus on Market Vulnerabilities',
      'Executive 2-Page Decision Synthesis Memo with Annotated Citations'
    ],
    technologies: ['Statista', 'Crunchbase Intelligence', 'SEMrush Market Explorer', 'Google Scholar', 'Notion Knowledge Hub', 'OSINT Verification Frameworks', 'Excel Financial Models'],
    deliverables: [
      '18-Page Comprehensive Market Research Dossier (Executive Summary Preview)',
      'Multi-Competitor Feature, Pricing & Positioning Benchmark Matrix',
      'SWOT & Competitive Vulnerability Gap Analysis',
      'Target Customer Persona Dossiers with Willingness-to-Pay Bands',
      'Primary & Secondary Source Bibliography with Verification Scores'
    ],
    metrics: [
      { label: 'Competitors Mapped', value: '12 In-Depth' },
      { label: 'Data Points Cross-Checked', value: '250+ Metrics' },
      { label: 'Source Verification Score', value: '100% Primary/Cited' },
      { label: 'Decision Memo Format', value: 'Executive 2-Pager' }
    ],
    previewMockup: `
      <div class="card-preview-mockup">
        <div class="card-preview-mockup-row" style="color: var(--accent-gold); font-weight: 700;">
          <span>Competitor Platform</span><span>Pricing Model</span><span>Core Advantage</span><span>Identified Gap</span>
        </div>
        <div class="card-preview-mockup-row">
          <span>CloudDesk Pro</span><span>$49–$199/seat</span><span>Deep Salesforce Integration</span><span style="color: #fbbf24;">Slow Off-Hours Support</span>
        </div>
        <div class="card-preview-mockup-row">
          <span>OpsFlow Suite</span><span>$29–$89/seat</span><span>Clean UX / Quick Onboarding</span><span style="color: #f87171;">Lacks SOC2 Compliance</span>
        </div>
        <div class="card-preview-mockup-row">
          <span>AgileSupport 360</span><span>$120–$350/seat</span><span>Enterprise SLA & Governance</span><span style="color: #fbbf24;">$5,000 Setup Surcharge</span>
        </div>
      </div>
    `,
    sampleDataTable: {
      headers: ['Competitor Platform', 'Target Market Segment', 'Pricing Tier & Model', 'Market Share Est.', 'Key Architectural Strength', 'Critical Vulnerability / Market Gap', 'DANSCOM Strategic Recommendation'],
      rows: [
        ['CloudDesk Pro', 'Mid-Market (50–250 Seats)', '$49 – $199 / seat / mo', '28.4%', 'Extensive native Salesforce & HubSpot two-way integrations.', 'Customer satisfaction drops sharply during US/EU off-hours (average ticket resolution >14 hours).', 'Target CloudDesk churn accounts with guaranteed 24/7 coverage and dedicated administrative retainers.'],
        ['OpsFlow Suite', 'SMBs & Early-Stage (<50 Seats)', '$29 – $89 / seat / mo', '19.2%', 'Intuitive drag-and-drop workflow builder with low learning curve.', 'No SOC2 Type II compliance or enterprise audit logs; no custom webhook endpoints.', 'Capture growing startups needing institutional data compliance before their Series A audit.'],
        ['AgileSupport 360', 'Enterprise (500+ Seats)', '$120 – $350 / seat / mo', '34.1%', 'Rigorous regulatory compliance, dedicated account rep, and 99.99% uptime guarantee.', 'High friction: requires mandatory $5,000 setup surcharge and strict annual contracts with no trial.', 'Position flexible monthly retainers with zero onboarding surcharge for agile executive teams.'],
        ['WorkPulse AI', 'Tech Startups & Agencies', '$19 – $59 / seat / mo', '8.3%', 'Aggressive generative AI prompt generation and automated canned answers.', 'High hallucination rate on unstructured client data; high customer turnover (12% annual churn).', 'Differentiate with Daniel Musembi’s 100% human-in-the-loop verification protocol.']
      ]
    }
  },

  // 4. PROVIDER VERIFICATION
  {
    id: 'provider-verification',
    title: 'Multi-Point Healthcare & Contractor Provider Verification Registry',
    category: 'verification',
    categoryLabel: 'Provider Verification',
    status: 'demo-sample',
    statusLabel: 'Portfolio Demonstration Sample',
    featured: true,
    isSampleWork: true,
    badgeClass: 'badge-demo',
    shortDesc: 'A structured provider database featuring primary source credential verification, state licensing board lookups, physical location confirmation, malpractice insurance checks, and automated quarterly audit trails.',
    longDesc: 'Designed for healthcare networks, telehealth platforms, general contractor marketplaces, and compliance-critical organizations. Daniel Musembi applies investigative criminology principles to perform primary source verification: querying official government licensing registries, checking the OIG/SAM federal exclusion databases, confirming physical clinic addresses via geocoding and telephone audit, and recording tamper-resistant verification timestamps.',
    objective: 'Protect organizations against credential fraud, regulatory penalties, and compliance exposure through systematic, multi-point provider vetting.',
    methodology: [
      'Primary Source Query: State Professional Licensing Boards (Status, Expiration, Sanctions)',
      'Federal Registry Validation (NPI Registry, OIG Exclusions, SAM.gov Debarment)',
      'Physical Address & Commercial Facility Verification via Geocoding & Phone Audit',
      'Active Malpractice / Liability Insurance Certificate Cross-Checking',
      'Standardized Audit Dossier Assembly with Tamper-Resistant Verification Timestamps'
    ],
    technologies: ['State Board Official Licensing Portals', 'NPI National Registry', 'OIG / SAM Exclusion Databases', 'Google Maps Geocoding & Street Audit', 'Airtable Relational Database', 'Verification SOP Guidelines'],
    deliverables: [
      'Comprehensive Provider Verification Master Database with Real-Time Status',
      'Standardized 6-Point Provider Credentialing SOP & Verification Checklist',
      'Discrepancy & Fraud Detection Flagging Protocol',
      'Quarterly License Expiration & Recertification Tracking Calendar',
      'Audit-Ready Credential Dossiers for Regulatory Inspections'
    ],
    metrics: [
      { label: 'Sample Providers Vetted', value: '85 Records' },
      { label: 'Primary Source Checks', value: '6 Steps / Provider' },
      { label: 'Discrepancy Catch Rate', value: '100% Flagged' },
      { label: 'Re-Audit Frequency', value: 'Every 90 Days' }
    ],
    previewMockup: `
      <div class="card-preview-mockup">
        <div class="card-preview-mockup-row" style="color: var(--accent-gold); font-weight: 700;">
          <span>Provider & Specialty</span><span>License / NPI</span><span>Facility Location</span><span>Audit Result</span>
        </div>
        <div class="card-preview-mockup-row">
          <span>Dr. Arthur Vance, MD</span><span>NPI #1841295730</span><span>New York, NY</span><span class="table-badge table-badge-verified">Verified Active</span>
        </div>
        <div class="card-preview-mockup-row">
          <span>Elena Torres, PT DPT</span><span>NPI #1922384711</span><span>San Francisco, CA</span><span class="table-badge table-badge-verified">Verified Active</span>
        </div>
        <div class="card-preview-mockup-row">
          <span>Dr. Rajiv Patel, DDS</span><span>NPI #1639201488</span><span>Chicago, IL</span><span class="table-badge table-badge-pending">Renewal Due</span>
        </div>
      </div>
    `,
    sampleDataTable: {
      headers: ['Provider Name & Title', 'Specialty Service', 'License & NPI Identifier', 'Physical Location / Clinic', 'Contact Details', 'Verification Status', 'Insurance Coverage', 'Last Audit Date & Officer'],
      rows: [
        ['Dr. Arthur Vance, MD', 'Orthopedic Surgery & Sports Medicine', 'NPI: 1841295730<br><small style="color: var(--text-muted);">NY Board: MD-892144</small>', 'Manhattan Orthopedic Center<br><small>420 Lexington Ave, New York, NY</small>', '+1 (212) 555-0177<br><small>office@vanceortho-demo.com</small>', '<span class="table-badge table-badge-verified">VERIFIED - Active</span>', '$2M / $4M Malpractice Active (Exp 2027)', '2026-10-15<br><small style="color: var(--accent-gold);">D. Musembi (Board Checked)</small>'],
        ['Elena Torres, PT, DPT', 'Physical Therapy & Rehabilitation', 'NPI: 1922384711<br><small style="color: var(--text-muted);">CA Board: PT-45120</small>', 'Bay Area Motion Health<br><small>580 Market St, San Francisco, CA</small>', '+1 (415) 555-0129<br><small>elena@baymotion-demo.com</small>', '<span class="table-badge table-badge-verified">VERIFIED - Active</span>', '$1M Professional Liability (Exp 2028)', '2026-10-22<br><small style="color: var(--accent-gold);">D. Musembi (Clean Record)</small>'],
        ['Horizon Behavioral Health', 'Outpatient Mental Health & Therapy', 'Facility NPI: 1477893201<br><small style="color: var(--text-muted);">TX Health: FAC-3301</small>', '780 Congress Ave, Suite 400<br><small>Austin, TX 78701</small>', '+1 (512) 555-0199<br><small>intake@horizonbh-demo.org</small>', '<span class="table-badge table-badge-verified">AUDIT PASSED</span>', 'Commercial General & Malpractice Active', '2026-11-01<br><small style="color: var(--accent-gold);">D. Musembi (8 Clinicians Vetted)</small>'],
        ['Dr. Rajiv Patel, DDS', 'Pediatric & Family Dentistry', 'NPI: 1639201488<br><small style="color: var(--text-muted);">IL Board: DDS-99124</small>', 'Lakefront Dental Care<br><small>200 E Randolph St, Chicago, IL</small>', '+1 (312) 555-0182<br><small>care@lakefrontdental-demo.com</small>', '<span class="table-badge table-badge-pending">RENEWAL PENDING</span>', 'Active Policy through 2027', '2026-10-29<br><small style="color: #fbbf24;">D. Musembi (CE Audit Queued)</small>'],
        ['Apex Occupational Care', 'Urgent Care & Occupational Health', 'Facility NPI: 1053429817<br><small style="color: var(--text-muted);">FL Health: OCC-5520</small>', '1200 Brickell Ave<br><small>Miami, FL 33131</small>', '+1 (305) 555-0164<br><small>admin@apexoccupational-demo.com</small>', '<span class="table-badge table-badge-verified">VERIFIED - Active</span>', 'Comprehensive Policy Package', '2026-11-04<br><small style="color: var(--accent-gold);">D. Musembi (CLIA Waiver Confirmed)</small>'],
        ['Marcus Sterling Contractors', 'Commercial General Contracting', 'Lic: CGC-1528991<br><small style="color: var(--text-muted);">WA Dept of Labor & Ind.</small>', '500 Union St, Suite 120<br><small>Seattle, WA 98101</small>', '+1 (206) 555-0140<br><small>bids@sterlingbuilders-demo.com</small>', '<span class="table-badge table-badge-verified">VERIFIED - Active</span>', '$5M General Liability + Active Surety Bond', '2026-10-18<br><small style="color: var(--accent-gold);">D. Musembi (Bond Verified)</small>']
      ]
    }
  },

  // 5. CRM & DATA MANAGEMENT
  {
    id: 'crm-data-management',
    title: 'Multi-Stage B2B CRM Architecture & Customer Data Hygiene System',
    category: 'crm',
    categoryLabel: 'CRM & Data Management',
    status: 'demo-sample',
    statusLabel: 'Portfolio Demonstration Sample',
    featured: true,
    isSampleWork: true,
    badgeClass: 'badge-demo',
    shortDesc: 'A robust CRM data hygiene and customer pipeline framework. Standardizes international record formats, manages multi-stage deal lifecycles, and automates stale-lead follow-up alerts with 100% data health.',
    longDesc: 'A poorly maintained CRM costs companies deals and creates operational chaos. This demonstration illustrates Daniel Musembi’s systematic approach to CRM architecture and database hygiene: establishing standardized contact schemas, executing deduplication scripts, standardizing telephone/address formats across global regions, mapping 5 pipeline deal stages, and implementing automated scheduled follow-up alerts so high-value opportunities never stall.',
    objective: 'Transform disorganized customer databases into high-converting, standardized pipeline assets with zero duplicates and automated follow-up accountability.',
    methodology: [
      'Standardized Field Schema Definition (E.164 Phones, ISO Country Codes, Domain Normalization)',
      'Deduplication & Record Merging using Deterministic Match Rules',
      '5-Stage Pipeline Lifecycle Configuration (Discovery, Demo, Proposal, Negotiation, Closed)',
      'Automated Stale-Record Alerts for Deals Exceeding Stage Inactivity Thresholds',
      'Data Health Auditing: Weekly Completeness, Bounce-Rate & Enrichment Verification'
    ],
    technologies: ['HubSpot CRM', 'Airtable Relational Bases', 'Google Sheets Power Formulas (ARRAYFORMULA, REGEX, QUERY)', 'Zapier Automation', 'Data Cleaning & Deduplication Scripts'],
    deliverables: [
      'Standardized CRM Data Dictionary & Custom Field Schema Architecture',
      'Automated Pipeline Stage Tracking Sheet with Deal Probability Weighting',
      'Deduplication & Hygiene Audit Protocol (Zero Duplicate Records)',
      'Scheduled Follow-Up Alert Trigger System with SLA Rules',
      'Executive Weekly Pipeline Health & Conversion Analytics Dashboard'
    ],
    metrics: [
      { label: 'Cleaned Record Volume', value: '2,500+ Accounts' },
      { label: 'Data Completeness Score', value: '100% Standardized' },
      { label: 'Pipeline Stages Mapped', value: '5 Conversion Steps' },
      { label: 'Duplicate Rate Post-Audit', value: '0.0%' }
    ],
    previewMockup: `
      <div class="card-preview-mockup">
        <div class="card-preview-mockup-row" style="color: var(--accent-gold); font-weight: 700;">
          <span>Account Name</span><span>Deal Value</span><span>Pipeline Stage</span><span>Data Health</span>
        </div>
        <div class="card-preview-mockup-row">
          <span>Horizon Health Partners</span><span>$48,000</span><span class="table-badge table-badge-tier1">Proposal Sent</span><span style="color: #34d399;">100% Verified</span>
        </div>
        <div class="card-preview-mockup-row">
          <span>Bluefin FinTech Systems</span><span>$120,000</span><span class="table-badge table-badge-verified">Negotiation</span><span style="color: #34d399;">100% Verified</span>
        </div>
        <div class="card-preview-mockup-row">
          <span>Kinetic Global Logistics</span><span>$35,000</span><span class="table-badge table-badge-verified">Closed-Won</span><span style="color: #34d399;">100% Verified</span>
        </div>
      </div>
    `,
    sampleDataTable: {
      headers: ['Customer Account', 'Deal Value & Weight', 'Current Pipeline Stage', 'Primary Decision Maker', 'Last Touchpoint', 'Scheduled Follow-Up Action', 'Data Hygiene Score'],
      rows: [
        ['Horizon Health Partners', '$48,000<br><small style="color: var(--accent-gold);">Weighted: $36,000 (75%)</small>', '<span class="table-badge table-badge-tier1">Proposal Sent</span>', 'Dr. Sarah Jenkins<br><small style="color: var(--text-muted);">COO</small>', '2026-11-03 (Video Demo)', '<span style="color: #34d399; font-weight: 700;">Proposal Review Call: 2026-11-09</span>', '<span class="table-badge table-badge-verified">100% Clean</span>'],
        ['Bluefin FinTech Systems', '$120,000<br><small style="color: var(--accent-gold);">Weighted: $108,000 (90%)</small>', '<span class="table-badge table-badge-verified">Contract Negotiation</span>', 'Marcus Vance<br><small style="color: var(--text-muted);">VP Engineering</small>', '2026-11-05 (Legal Redlines)', '<span style="color: #34d399; font-weight: 700;">Execute Master Agreement: 2026-11-10</span>', '<span class="table-badge table-badge-verified">100% Clean</span>'],
        ['Kinetic Global Logistics', '$35,000<br><small style="color: #34d399;">Weighted: $35,000 (100%)</small>', '<span class="table-badge table-badge-verified">Closed-Won (Retainer)</span>', 'Elena Rostova<br><small style="color: var(--text-muted);">Head of Procurement</small>', '2026-11-01 (Contract Signed)', 'Milestone 1 Operations Review: 2026-11-15', '<span class="table-badge table-badge-verified">100% Clean</span>'],
        ['Solis Renewable Energy', '$82,000<br><small style="color: var(--text-muted);">Weighted: $20,500 (25%)</small>', '<span class="table-badge table-badge-active">Discovery Scheduled</span>', 'Henrik Lindqvist<br><small style="color: var(--text-muted);">COO</small>', '2026-11-06 (Intake Form)', '<span style="color: #38bdf8;">Technical Discovery Call: 2026-11-11</span>', '<span class="table-badge table-badge-verified">100% Clean</span>'],
        ['Crestview Media Group', '$24,000<br><small style="color: var(--text-muted);">Weighted: $9,600 (40%)</small>', '<span class="table-badge table-badge-pending">Follow-Up Alert Triggered</span>', 'Chloe Tremblay<br><small style="color: var(--text-muted);">Director of Ops</small>', '2026-10-28 (Email Update)', '<span style="color: #fbbf24; font-weight: 700;">Send Custom Case Study by 2026-11-08</span>', '<span class="table-badge table-badge-verified">100% Clean</span>']
      ]
    }
  },

  // 6. AI & AUTOMATION
  {
    id: 'ai-automation-pipeline',
    title: 'Intelligent AI-Powered Business Support & Multi-App Workflow Automation',
    category: 'automation',
    categoryLabel: 'AI & Automation',
    status: 'demo-sample',
    statusLabel: 'Portfolio Demonstration Sample',
    featured: true,
    isSampleWork: true,
    badgeClass: 'badge-demo',
    shortDesc: 'An end-to-end operational automation engine that receives incoming customer inquiries, extracts structured entities using AI, drafts personalized human-review responses, and synchronizes data across CRM, Slack, and Google Workspace.',
    longDesc: 'Practical AI implementation designed to replace repetitive manual data transcription without losing human oversight. Incoming webhooks trigger an LLM prompt engineered with strict JSON schema constraints. The AI categorizes priority, extracts key parameters (budget, timeline, intent), checks CRM records for existing conversations, and posts a formatted approval card to Slack. With one click, the operator approves or tweaks the draft, dispatching the response and updating all connected systems.',
    objective: 'Compress inquiry turnaround time from 25 minutes to under 45 seconds while ensuring 100% human-in-the-loop accuracy and zero robotic hallucinations.',
    methodology: [
      'Webhook Ingestion & Payload Normalization (Form, Email, or API Trigger)',
      'Deterministic LLM Extraction with Strict JSON Schema Validation',
      'Human-in-the-Loop Slack / Email Approval Gate with 1-Click Action Buttons',
      'Bi-Directional Synchronization across HubSpot, Google Sheets, & Notion',
      'Automated Circuit Breaker & Error Fallback with Admin Alerts'
    ],
    technologies: ['Make.com (Integromat)', 'Zapier Webhooks', 'Gemini / Claude API', 'Google Workspace API', 'Slack Enterprise Webhooks', 'HubSpot CRM Webhooks'],
    deliverables: [
      'Visual Workflow Blueprint & Node-by-Node Architecture Diagram',
      'Production Prompt Templates with Strict JSON Schema Validation',
      'Human-in-the-Loop Slack / Email Approval Gate Interface',
      'Fail-Safe Error Handling & Automated Retry Circuit Breakers',
      'ROI Audit Report (Calculating 24 minutes saved per intake ticket)'
    ],
    metrics: [
      { label: 'Time per Ticket', value: '25m -> 45s' },
      { label: 'JSON Schema Validity', value: '100% Deterministic' },
      { label: 'Human Oversight', value: '100% Approval Gate' },
      { label: 'Monthly Hours Saved', value: '45+ Operator Hours' }
    ],
    previewMockup: `
      <div class="card-preview-mockup">
        <div class="card-preview-mockup-row" style="color: var(--accent-gold); font-weight: 700;">
          <span>Workflow Node</span><span>Module</span><span>Status</span>
        </div>
        <div class="card-preview-mockup-row">
          <span>01. Webhook Ingest</span><span>Custom JSON Listener</span><span class="table-badge table-badge-verified">Active 200 OK</span>
        </div>
        <div class="card-preview-mockup-row">
          <span>02. LLM Entity Parse</span><span>Gemini JSON Schema</span><span class="table-badge table-badge-tier1">Parsed in 0.8s</span>
        </div>
        <div class="card-preview-mockup-row">
          <span>03. Human Approval</span><span>Slack Interactive Block</span><span class="table-badge table-badge-active">Operator Gated</span>
        </div>
      </div>
    `,
    isSimulator: true
  },

  // Technical & Historical Prototypes
  {
    id: 'danscomfx',
    title: 'DANSCOMFX Algorithmic Trading Framework',
    category: 'trading',
    categoryLabel: 'Trading Technology',
    status: 'prototype',
    statusLabel: 'Research Prototype',
    featured: false,
    isSampleWork: false,
    technologies: ['Pine Script v5', 'MetaTrader 5 MQL5', 'Python', 'TradingView Webhooks'],
    shortDesc: 'A rule-based algorithmic trading framework focused on strict risk-containment logic, automated position sizing, and volatility-adjusted execution experiments.',
    longDesc: 'DANSCOMFX is an ongoing personal research initiative exploring automated trading systems. Built on systematic quantitative principles rather than subjective prediction, it implements a hard 1% maximum portfolio risk per execution, automatic daily drawdown circuit breakers, and algorithmic order-management protocols via MT5 and TradingView webhooks. (Note: Experimental research only; not commercial fund management or financial advice).',
    objective: 'Explore programmatic risk management, automated order routing, and systematic trade validation in currency and synthetic index markets.',
    challenges: 'Managing order slippage, handling network reconnect events in automated webhook listeners, and enforcing emotionless stop-loss execution without deviation.',
    nextSteps: 'Paper-forward testing across divergent volatility regimes and developing a lightweight telemetry dashboard for execution metrics.',
    githubUrl: 'https://github.com/DanielMusembi',
    demoUrl: null,
    metrics: [
      { label: 'Max Risk / Trade', value: '1.0% Hard Cap' },
      { label: 'Script Language', value: 'Pine Script v5' },
      { label: 'Execution Protocol', value: 'MT5 Webhook' },
      { label: 'Nature', value: 'Research Only' }
    ]
  },
  {
    id: 'deriv-bot',
    title: 'Deriv API Automated Execution Bot',
    category: 'trading',
    categoryLabel: 'Trading Technology',
    status: 'prototype',
    statusLabel: 'Technical Prototype',
    featured: false,
    isSampleWork: false,
    technologies: ['Deriv WebSocket API', 'JavaScript (ES6+)', 'Node.js', 'Chart.js'],
    shortDesc: 'A lightweight automation bot connecting directly to the Deriv WebSocket API for real-time tick analysis, session statistics, and risk-capped test trades.',
    longDesc: 'Engineered as a technical proof-of-concept for high-speed algorithmic connectivity. The bot streams tick data via WebSockets, calculates rolling moving averages and volatility bands, and triggers simulated execution tickets with hard mathematical limits on consecutive drawdowns. It operates with strict API token hygiene and zero client credential persistence.',
    objective: 'Validate low-latency WebSocket communication and build resilient fail-safe error handling for automated market connectivity.',
    challenges: 'Handling sudden disconnects during high tick volume periods and ensuring client-side race conditions do not generate duplicate order requests.',
    nextSteps: 'Migrating tick aggregation logic to a local state engine with CSV audit logging.',
    githubUrl: 'https://github.com/DanielMusembi',
    demoUrl: null,
    metrics: [
      { label: 'Protocol', value: 'WebSockets API' },
      { label: 'Latency', value: 'Sub-100ms' },
      { label: 'Risk Control', value: 'Drawdown Circuit' },
      { label: 'Nature', value: 'Prototype' }
    ]
  },
  {
    id: 'danscom-pwa-portfolio',
    title: 'DANSCOM Digital Hub & Progressive Web Application',
    category: 'web',
    categoryLabel: 'Web Development',
    status: 'live',
    statusLabel: 'Live Website',
    featured: false,
    isSampleWork: false,
    technologies: ['HTML5', 'Modern CSS3', 'JavaScript (ES6+)', 'Service Workers', 'PWA Manifest'],
    shortDesc: 'A high-performance, dark-first progressive web application and digital portfolio with offline capabilities and sub-second load times.',
    longDesc: 'Engineered to deliver instant page loads, accessible semantic markup, dynamic client-side filtering, and resilient service worker offline caching. Features responsive navigation, theme persistence, and zero unnecessary dependencies.',
    objective: 'Deliver an uncompromisingly fast, accessible, and elegant digital portfolio and client portal.',
    challenges: 'Designing smooth zero-layout-shift theme transitions and crafting offline-first service worker cache resilience.',
    nextSteps: 'Expanding interactive client intake modules and continuous performance monitoring.',
    githubUrl: 'https://github.com/DanielMusembi',
    demoUrl: './index.html',
    metrics: [
      { label: 'Architecture', value: 'Static PWA' },
      { label: 'Performance', value: '99+ Lighthouse' },
      { label: 'Offline Support', value: 'Service Worker' },
      { label: 'Branding', value: 'Black & Gold' }
    ]
  }
];

// Helper: Filter & Render Projects
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
          <p style="color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 12px;">No work samples found matching your criteria.</p>
          <button class="btn btn-secondary btn-sm" onclick="window.resetProjectFilters()">Clear Filters</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(p => {
      const isSample = p.isSampleWork;
      const statusBadge = isSample 
        ? `<span class="badge badge-demo">Portfolio Demonstration Sample</span>` 
        : (p.status === 'live' ? '<span class="badge badge-live">Live Website</span>' : '<span class="badge badge-proto">Technical Prototype</span>');

      const techTags = p.technologies.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('');
      const moreTech = p.technologies.length > 4 ? `<span class="tech-tag" style="color: var(--accent-gold);">+${p.technologies.length - 4} more</span>` : '';

      const deliverablesHtml = p.deliverables ? `
        <ul class="deliverables-checklist">
          ${p.deliverables.slice(0, 3).map(d => `
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${d}</span>
            </li>
          `).join('')}
        </ul>
      ` : '';

      const kpiHtml = p.metrics ? `
        <div class="sample-kpi-bar">
          ${p.metrics.slice(0, 3).map(m => `
            <div class="sample-kpi-pill">
              <div class="sample-kpi-val">${m.value}</div>
              <div class="sample-kpi-lbl">${m.label}</div>
            </div>
          `).join('')}
        </div>
      ` : '';

      return `
        <article class="card project-card ${isSample ? 'card-gold-accent' : ''}" data-id="${p.id}" style="${isSample ? 'border-top: 2px solid var(--accent-gold);' : ''}">
          <!-- Visual Preview Header -->
          <div class="card-preview-header">
            <div class="card-preview-badge-row">
              <span style="font-size: 0.725rem; color: var(--accent-gold-light); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
                ${p.categoryLabel}
              </span>
              ${statusBadge}
            </div>
            ${p.previewMockup || `
              <div class="card-preview-mockup" style="display: flex; align-items: center; justify-content: center; height: 50px; color: var(--text-muted);">
                <span>Visual Architecture Preview & Specifications</span>
              </div>
            `}
          </div>

          <h3 class="card-title" style="margin-bottom: 8px; font-size: 1.2rem; color: var(--text-primary); line-height: 1.35;">${p.title}</h3>
          <p class="card-desc" style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 12px;">${p.shortDesc}</p>

          ${kpiHtml}
          ${deliverablesHtml}

          <div class="project-tech-tags" style="margin-top: auto; padding-top: 10px;">
            ${techTags} ${moreTech}
          </div>

          <div class="card-footer" style="padding-top: 14px; border-top: 1px solid var(--border-subtle); display: flex; flex-wrap: wrap; gap: 10px; justify-content: space-between; align-items: center;">
            <button class="btn btn-gold btn-sm" onclick="window.openSampleWorkModal('${p.id}')">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              View Sample Work
            </button>
            <a href="https://wa.me/254713811622?text=Hello%20Daniel,%20I'm%20interested%20in%20your%20${encodeURIComponent(p.categoryLabel)}%20demonstration%20work%20sample." target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 6px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  // Hook filter buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
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

// Interactive Modal Viewer for Sample Work & Architecture
window.openSampleWorkModal = function(id) {
  const project = window.DANSCOM_PROJECTS.find(p => p.id === id);
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const modalBox = modal ? modal.querySelector('.modal-box') : null;
  const modalBody = document.getElementById('projectModalBody');
  if (!modal || !modalBody) return;

  // Make modal wider for rich tables
  if (modalBox) {
    modalBox.classList.add('modal-box-wide');
  }

  const isSample = project.isSampleWork;

  // Render Table or Simulator for Tab 1
  let tab1Content = '';
  if (project.sampleDataTable) {
    const { headers, rows } = project.sampleDataTable;
    tab1Content = `
      <div class="table-toolbar">
        <div>
          <span style="font-size: 0.825rem; color: var(--text-muted); font-weight: 600;">
            Showing ${rows.length} Verified Demonstration Records (Sanitized Benchmark Data)
          </span>
        </div>
        <div style="display: flex; gap: 8px;">
          <input type="text" class="table-search-input" id="modalTableSearch" placeholder="Filter this sample table..." oninput="window.filterModalTable(this.value)">
          <button class="btn btn-secondary btn-sm" onclick="window.copyModalSampleData('${project.id}')" id="copySampleBtn" style="gap: 6px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy Sample Data
          </button>
        </div>
      </div>

      <div class="sample-table-responsive">
        <table class="sample-table" id="modalDataTable">
          <thead>
            <tr>
              ${headers.map(h => `<th>${h}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${rows.map(r => `
              <tr>
                ${r.map(cell => `<td>${cell}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <p style="font-size: 0.775rem; color: var(--text-muted); margin-top: 10px; text-align: right;">
        🔒 All mock entities, phone numbers, and emails follow international compliance formats.
      </p>
    `;
  } else if (project.isSimulator) {
    tab1Content = `
      <div class="workflow-nodes-grid">
        <div class="workflow-node-card active-step" id="node1">
          <div class="workflow-node-num">Step 01 • Ingestion</div>
          <div class="workflow-node-title">Webhook Intake</div>
          <div class="workflow-node-desc">Captures form, email, or chat payloads. Validates origin headers & normalizes schema.</div>
        </div>
        <div class="workflow-node-card" id="node2">
          <div class="workflow-node-num">Step 02 • AI Parser</div>
          <div class="workflow-node-title">Structured Entity Extraction</div>
          <div class="workflow-node-desc">LLM prompt enforces deterministic JSON output with priority scoring & requirements breakdown.</div>
        </div>
        <div class="workflow-node-card" id="node3">
          <div class="workflow-node-num">Step 03 • Oversight</div>
          <div class="workflow-node-title">Human-in-the-Loop Gate</div>
          <div class="workflow-node-desc">Dispatches Slack interactive card with auto-drafted response ready for 1-click operator approval.</div>
        </div>
        <div class="workflow-node-card" id="node4">
          <div class="workflow-node-num">Step 04 • Dispatch</div>
          <div class="workflow-node-title">Multi-System Sync</div>
          <div class="workflow-node-desc">Updates HubSpot CRM stage, logs to Google Sheets, creates Notion dossier, and sends email.</div>
        </div>
      </div>

      <div class="sim-panel">
        <div class="sim-header">
          <div>
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--accent-gold-light); margin: 0 0 4px;">Live Workflow Simulation</h4>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0;">Watch this sample automation execute from raw inquiry to structured CRM record.</p>
          </div>
          <button class="btn btn-gold btn-sm" onclick="window.runAutomationSimulation()" id="runSimBtn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Run Test Simulation
          </button>
        </div>
        <div class="sim-code-box" id="simOutputBox">
// Click "Run Test Simulation" above to execute this automated pipeline in real time.
// Simulated Scenario: Multi-State Medical Provider Verification Request.
        </div>
      </div>
    `;
  } else {
    tab1Content = `
      <div style="background: var(--bg-surface); padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <h4 style="color: var(--accent-gold-light); margin-bottom: 10px;">Technical Prototype Specifications</h4>
        <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.95rem; margin-bottom: 16px;">
          ${project.longDesc}
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
          <div><strong>Purpose:</strong> ${project.objective || project.purpose}</div>
          <div><strong>Key Challenge:</strong> ${project.challenges || 'Real-time synchronization'}</div>
          <div><strong>Next Stage:</strong> ${project.nextSteps || 'Production deployment'}</div>
        </div>
      </div>
    `;
  }

  // Tab 2: Scope & Methodology
  const methodologyList = project.methodology ? project.methodology.map((m, idx) => `
    <li style="display: flex; gap: 12px; margin-bottom: 12px; align-items: flex-start;">
      <span style="display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: rgba(212, 175, 55, 0.15); border: 1px solid var(--border-gold); color: var(--accent-gold); font-size: 0.8rem; font-weight: 700; flex-shrink: 0;">0${idx + 1}</span>
      <span style="font-size: 0.925rem; color: var(--text-primary); line-height: 1.6;">${m}</span>
    </li>
  `).join('') : '<p style="color: var(--text-secondary);">Direct agile execution with sprint milestones.</p>';

  // Tab 3: Tools & Tech
  const toolsHtml = project.technologies.map(t => `
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); padding: 14px 18px; border-radius: var(--radius-md); display: flex; align-items: center; gap: 12px;">
      <div style="width: 10px; height: 10px; border-radius: 50%; background: var(--accent-gold);"></div>
      <div>
        <div style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem;">${t}</div>
        <div style="font-size: 0.775rem; color: var(--text-muted);">Verified in production workflow</div>
      </div>
    </div>
  `).join('');

  // Tab 4: Deliverables
  const deliverablesHtml = project.deliverables ? project.deliverables.map(d => `
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); padding: 16px 20px; border-radius: var(--radius-md); margin-bottom: 10px; display: flex; align-items: flex-start; gap: 14px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="2.5" style="flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <div>
        <div style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem; margin-bottom: 4px;">${d}</div>
        <div style="font-size: 0.825rem; color: var(--text-secondary);">Provided in standardized, client-ready formats (CSV, Sheets, Notion, PDF, or Zapier JSON).</div>
      </div>
    </div>
  `).join('') : '<p style="color: var(--text-secondary);">Documented repository deliverables.</p>';

  modalBody.innerHTML = `
    <!-- Top Meta -->
    <div style="margin-bottom: 20px;">
      <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 8px;">
        <span class="badge ${project.badgeClass || 'badge-demo'}">
          ${project.statusLabel}
        </span>
        <span style="font-size: 0.8rem; color: var(--accent-gold); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
          ${project.categoryLabel}
        </span>
      </div>
      <h2 style="font-size: 1.6rem; font-weight: 800; color: var(--text-primary); margin-bottom: 8px; line-height: 1.3;">
        ${project.title}
      </h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 16px;">
        ${project.longDesc}
      </p>

      <!-- Reassuring Confidentiality Banner -->
      <div class="confidentiality-banner">
        <svg class="confidentiality-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <div>
          <div class="confidentiality-title">
            Portfolio Demonstration Sample • Client Confidentiality Protected
          </div>
          <p class="confidentiality-desc">
            To strictly adhere to non-disclosure agreements (NDAs), this sample utilizes realistic, high-fidelity mock data engineered by Daniel Musembi to demonstrate actual data hygiene, verification criteria, and deliverable quality.
          </p>
        </div>
      </div>

      <!-- KPI Pills -->
      ${project.metrics ? `
        <div class="sample-kpi-bar" style="margin-bottom: 24px;">
          ${project.metrics.map(m => `
            <div class="sample-kpi-pill">
              <div class="sample-kpi-val">${m.value}</div>
              <div class="sample-kpi-lbl">${m.label}</div>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>

    <!-- Navigation Tabs -->
    <div class="sample-tabs-nav">
      <button class="sample-tab-btn active" onclick="window.switchSampleTab('tab-preview', this)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
        1. Live Sample Data & Visual Preview
      </button>
      <button class="sample-tab-btn" onclick="window.switchSampleTab('tab-methodology', this)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        2. Scope & Methodology
      </button>
      <button class="sample-tab-btn" onclick="window.switchSampleTab('tab-tools', this)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        3. Tools & Technologies
      </button>
      <button class="sample-tab-btn" onclick="window.switchSampleTab('tab-deliverables', this)">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
        4. Deliverables Pack
      </button>
    </div>

    <!-- Tab Panels -->
    <div id="tab-preview" class="sample-tab-panel active">
      ${tab1Content}
    </div>

    <div id="tab-methodology" class="sample-tab-panel">
      <div style="background: var(--bg-surface); padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 20px;">
        <h4 style="font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--accent-gold); margin-bottom: 6px;">Executive Objective</h4>
        <p style="font-size: 0.95rem; color: var(--text-primary); line-height: 1.6; margin-bottom: 18px;">${project.objective || 'Provide reliable, transparent operational execution.'}</p>
        
        <h4 style="font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--accent-gold); margin-bottom: 12px;">Step-by-Step Methodology</h4>
        <ul style="list-style: none; padding: 0; margin: 0;">
          ${methodologyList}
        </ul>
      </div>
    </div>

    <div id="tab-tools" class="sample-tab-panel">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px;">
        ${toolsHtml}
      </div>
    </div>

    <div id="tab-deliverables" class="sample-tab-panel">
      <div>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 16px;">
          When engaging Daniel Musembi for ${project.categoryLabel}, clients receive these concrete, sanitized, and fully-documented assets:
        </p>
        ${deliverablesHtml}
      </div>
    </div>

    <!-- Modal Footer Actions -->
    <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid var(--border-subtle); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px;">
      <div style="font-size: 0.85rem; color: var(--text-muted);">
        Ready to implement this for your business?
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        <a href="https://wa.me/254713811622?text=Hello%20Daniel,%20I%20reviewed%20your%20${encodeURIComponent(project.title)}%20sample%20and%20would%20like%20to%20discuss%20a%20similar%20project." target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Discuss on WhatsApp
        </a>
        <a href="./contact.html?service=${project.category}" class="btn btn-gold btn-sm">
          Inquire About This Capability
        </a>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Backwards compatibility alias
window.openProjectModal = window.openSampleWorkModal;

// Tab switcher in modal
window.switchSampleTab = function(panelId, btn) {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  modal.querySelectorAll('.sample-tab-btn').forEach(b => b.classList.remove('active'));
  modal.querySelectorAll('.sample-tab-panel').forEach(p => p.classList.remove('active'));

  btn.classList.add('active');
  const panel = document.getElementById(panelId);
  if (panel) panel.classList.add('active');
};

// Filter rows in modal sample table
window.filterModalTable = function(query) {
  const table = document.getElementById('modalDataTable');
  if (!table) return;
  const q = query.toLowerCase().trim();
  const rows = table.querySelectorAll('tbody tr');
  rows.forEach(r => {
    const text = r.innerText.toLowerCase();
    r.style.display = text.includes(q) ? '' : 'none';
  });
};

// Copy sample data to clipboard
window.copyModalSampleData = function(projectId) {
  const project = window.DANSCOM_PROJECTS.find(p => p.id === projectId);
  if (!project || !project.sampleDataTable) return;

  const { headers, rows } = project.sampleDataTable;
  // Convert to clean CSV
  const cleanHeader = headers.map(h => `"${h.replace(/<[^>]*>/g, '')}"`).join(',');
  const cleanRows = rows.map(r => r.map(c => `"${c.replace(/<[^>]*>/g, '').replace(/\n/g, ' ')}"`).join(',')).join('\n');
  const csv = cleanHeader + '\n' + cleanRows;

  navigator.clipboard.writeText(csv).then(() => {
    const btn = document.getElementById('copySampleBtn');
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = `<span style="color: #34d399; font-weight: 700;">✓ Copied CSV!</span>`;
      setTimeout(() => {
        btn.innerHTML = orig;
      }, 2500);
    }
  }).catch(() => {
    alert('Copied sample data to clipboard.');
  });
};

// Interactive Simulator for AI & Automation
window.runAutomationSimulation = function() {
  const btn = document.getElementById('runSimBtn');
  const outputBox = document.getElementById('simOutputBox');
  if (!outputBox) return;

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `Simulating...`;
  }

  const nodes = ['node1', 'node2', 'node3', 'node4'];
  nodes.forEach(n => {
    const el = document.getElementById(n);
    if (el) el.classList.remove('active-step');
  });

  outputBox.innerHTML = `[SIMULATOR INITIALIZED] Generating incoming customer webhook payload...\n`;

  setTimeout(() => {
    const el1 = document.getElementById('node1');
    if (el1) el1.classList.add('active-step');
    outputBox.innerHTML += `✓ STEP 1: Webhook received from Contact Form [POST /api/inquiry] (Status: 200 OK)\n`;
    outputBox.innerHTML += `  Payload: {\n    "name": "Dr. Marcus Sterling",\n    "company": "Vanguard Medical Group",\n    "service": "Provider Credential Verification",\n    "volume": "15 clinicians",\n    "urgency": "High"\n  }\n\n`;
  }, 400);

  setTimeout(() => {
    const el2 = document.getElementById('node2');
    if (el2) el2.classList.add('active-step');
    outputBox.innerHTML += `✓ STEP 2: Gemini AI Entity Extraction executed in 620ms (Schema: Strict JSON)\n`;
    outputBox.innerHTML += `  Parsed: {\n    "client_tier": "Enterprise Tier 1",\n    "lead_score": 96,\n    "estimated_value": "$6,500/mo retainer",\n    "required_turnaround": "48 hours"\n  }\n\n`;
  }, 1000);

  setTimeout(() => {
    const el3 = document.getElementById('node3');
    if (el3) el3.classList.add('active-step');
    outputBox.innerHTML += `✓ STEP 3: Slack Operator Gate Triggered (#lead-approvals)\n`;
    outputBox.innerHTML += `  Pre-drafted Email Response Ready for Operator Review:\n  "Hello Dr. Sterling, thank you for reaching out regarding credentialing for Vanguard's 15 clinicians. Daniel Musembi has prepared your intake audit pack..."\n  [Status: APPROVED by Human Operator]\n\n`;
  }, 1800);

  setTimeout(() => {
    const el4 = document.getElementById('node4');
    if (el4) el4.classList.add('active-step');
    outputBox.innerHTML += `✓ STEP 4: Multi-System Dispatch Completed Successfully:\n`;
    outputBox.innerHTML += `  • HubSpot CRM Deal Record Created ($6,500/mo - Stage: Qualified)\n`;
    outputBox.innerHTML += `  • Google Sheets Lead Tracker Appended (Row #149)\n`;
    outputBox.innerHTML += `  • Confirmation Email Dispatched via SendGrid API\n`;
    outputBox.innerHTML += `\n[RESULT] Total Execution Time: 42 seconds (Traditional manual time: 24 minutes).`;

    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `✓ Re-run Simulation`;
    }
  }, 2600);
};

window.closeProjectModal = function() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};
