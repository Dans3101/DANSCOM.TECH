/**
 * DANSCOM Blog and Article Data Engine
 * Owner: Daniel Musembi
 * Provides searchable, filterable articles, reading time, share links, and related articles.
 */

window.DANSCOM_ARTICLES = [
  {
    id: 'article-virtual-assistance',
    url: './article-virtual-assistance.html',
    title: 'The Modern Virtual Assistant: How Solopreneurs and Real Estate Operators Scale Without Burnout',
    category: 'virtual-assistant',
    categoryLabel: 'Virtual Assistance',
    date: 'October 15, 2026',
    readTime: '6 min read',
    excerpt: 'Delegating administrative friction is not an expense—it is a strategic leverage point. Discover systematic SOPs for email triage, calendar synchronization, and transaction tracking.',
    tags: ['Productivity', 'Real Estate', 'SOPs', 'Delegation', 'Executive Support'],
    author: 'Daniel Musembi',
    featured: true
  },
  {
    id: 'article-ai-workflows',
    url: './article-ai-workflows.html',
    title: 'Practical AI Automation: Integrating LLMs into Everyday Business Operations Without Technical Debt',
    category: 'automation',
    categoryLabel: 'AI & Automation',
    date: 'October 8, 2026',
    readTime: '8 min read',
    excerpt: 'Beyond chat interfaces: How to construct deterministic data pipelines, structured JSON prompt outputs, and human-in-the-loop review guardrails for real business ROI.',
    tags: ['AI Workflows', 'Automation', 'LLM Integration', 'Prompt Engineering', 'Operations'],
    author: 'Daniel Musembi',
    featured: true
  },
  {
    id: 'article-static-sites',
    url: './article-static-sites.html',
    title: 'Zero-Cost, High-Performance: Why Static Websites on GitHub Pages Outperform Bloated CMS Platforms',
    category: 'development',
    categoryLabel: 'Web Development',
    date: 'September 28, 2026',
    readTime: '7 min read',
    excerpt: 'Why pay monthly hosting and security plugins for a WordPress blog when a pure static HTML5/CSS3/PWA site on GitHub Pages delivers sub-second speeds and zero vulnerability surfaces?',
    tags: ['GitHub Pages', 'PWA', 'Static Web', 'Web Performance', 'Frontend'],
    author: 'Daniel Musembi',
    featured: true
  },
  {
    id: 'article-research',
    url: './article-research.html',
    title: 'The Art of High-Signal Online Research: An Investigative Playbook for Market & Lead Intelligence',
    category: 'research',
    categoryLabel: 'Writing & Research',
    date: 'September 14, 2026',
    readTime: '7 min read',
    excerpt: 'Applying formal criminology investigation techniques to corporate competitive analysis: sourcing primary documents, cross-verifying public claims, and synthesizing decision memos.',
    tags: ['OSINT', 'Market Research', 'Investigation', 'Information Synthesis', 'Lead Intel'],
    author: 'Daniel Musembi',
    featured: true
  }
];

// Initialize Blog listing UI
window.initBlogUI = function(containerId, isFeaturedOnly = false) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filterButtons = document.querySelectorAll('.blog-filter-btn');
  const searchInput = document.getElementById('blogSearch');

  let currentCategory = 'all';
  let currentSearch = '';

  function render() {
    let filtered = window.DANSCOM_ARTICLES.filter(article => {
      if (isFeaturedOnly && !article.featured) return false;
      const matchesCategory = currentCategory === 'all' || article.category === currentCategory;
      const matchesSearch = !currentSearch ||
        article.title.toLowerCase().includes(currentSearch) ||
        article.excerpt.toLowerCase().includes(currentSearch) ||
        article.tags.some(t => t.toLowerCase().includes(currentSearch));
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-card);">
          <p style="color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 12px;">No articles found matching your query.</p>
          <button class="btn btn-secondary btn-sm" onclick="window.resetBlogFilters()">Reset Search</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(a => {
      const tagHtml = a.tags.slice(0, 3).map(t => `<span class="tech-tag">${t}</span>`).join('');

      return `
        <article class="card" style="display: flex; flex-direction: column;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
            <span class="badge badge-dev">${a.categoryLabel}</span>
            <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">${a.readTime}</span>
          </div>
          <h3 class="card-title" style="margin-bottom: 10px; font-size: 1.2rem;">
            <a href="${a.url}" style="color: inherit; text-decoration: none;">${a.title}</a>
          </h3>
          <p class="card-desc" style="font-size: 0.9rem; line-height: 1.6;">${a.excerpt}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 18px;">
            ${tagHtml}
          </div>
          <div class="card-footer" style="padding-top: 14px;">
            <span style="font-size: 0.775rem; color: var(--text-muted);">${a.date}</span>
            <a href="${a.url}" class="card-link">Read Guide &rarr;</a>
          </div>
        </article>
      `;
    }).join('');
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category') || 'all';
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = (e.target.value || '').trim().toLowerCase();
      render();
    });
  }

  window.resetBlogFilters = function() {
    currentCategory = 'all';
    currentSearch = '';
    if (searchInput) searchInput.value = '';
    filterButtons.forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-category') === 'all');
    });
    render();
  };

  render();
};

// Share helper function
window.shareArticle = function(title, relativeUrl) {
  const fullUrl = window.location.href;
  if (navigator.share) {
    navigator.share({
      title: title,
      text: title + ' by Daniel Musembi (DANSCOM)',
      url: fullUrl
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(fullUrl).then(() => {
      if (window.showToast) {
        window.showToast('Article link copied to clipboard!');
      } else {
        alert('Article link copied to clipboard!');
      }
    });
  }
};
