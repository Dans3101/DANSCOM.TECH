/**
 * DANSCOM GitHub Pages ZIP Packager
 * Enables Daniel Musembi and visitors to download the complete ready-to-deploy static website
 * with a single click, containing index.html, all 18 pages, assets, icons, manifest, and .nojekyll.
 */

window.downloadGitHubPagesZip = async function() {
  const btn = document.getElementById('downloadZipBtn');
  const originalText = btn ? btn.innerHTML : '';
  if (btn) {
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10"></path></svg>
      Packaging Website Files...
    `;
    btn.disabled = true;
  }

  try {
    // Dynamically load JSZip if not already present
    if (!window.JSZip) {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
        script.onload = resolve;
        script.onerror = () => reject(new Error('Failed to load JSZip generator'));
        document.head.appendChild(script);
      });
    }

    const zip = new window.JSZip();

    // List of all static files to pack
    const filesToFetch = [
      'index.html',
      'about.html',
      'services.html',
      'virtual-assistant.html',
      'ai-automation.html',
      'development.html',
      'trading-technology.html',
      'writing-research.html',
      'projects.html',
      'blog.html',
      'article-virtual-assistance.html',
      'article-ai-workflows.html',
      'article-static-sites.html',
      'article-research.html',
      'contact.html',
      'privacy.html',
      'terms.html',
      '404.html',
      'offline.html',
      'manifest.webmanifest',
      'service-worker.js',
      'robots.txt',
      'sitemap.xml',
      '.nojekyll',
      'README.md',
      'assets/css/main.css',
      'assets/js/config.js',
      'assets/js/main.js',
      'assets/js/projects.js',
      'assets/js/blog.js',
      'assets/js/contact.js',
      'assets/js/zip-export.js',
      'assets/icons/icon-192.svg',
      'assets/icons/icon-512.svg',
      'assets/icons/favicon.svg',
      'assets/images/profile-placeholder.svg'
    ];

    let count = 0;
    for (const filePath of filesToFetch) {
      try {
        const res = await fetch('./' + filePath);
        if (res.ok) {
          const blob = await res.blob();
          zip.file(filePath, blob);
          count++;
        }
      } catch (e) {
        console.warn('Could not bundle file:', filePath, e);
      }
    }

    const content = await zip.generateAsync({ type: 'blob' });
    const downloadUrl = URL.createObjectURL(content);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'danscom-github-pages-ready.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(downloadUrl);

    if (window.showToast) {
      window.showToast(`Success! Downloaded complete GitHub Pages package (${count} files).`);
    }
  } catch (err) {
    console.error('ZIP generation error:', err);
    alert('Notice: You can also copy all files directly from the repository tree for GitHub Pages.');
  } finally {
    if (btn) {
      btn.innerHTML = originalText;
      btn.disabled = false;
    }
  }
};
