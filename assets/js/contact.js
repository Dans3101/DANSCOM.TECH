/**
 * DANSCOM Contact Form & Inquiry Handler
 * Owner: Daniel Musembi
 * Contact Target: musembidaniel615@gmail.com
 *
 * Implements client-side form validation, service selector prefilling,
 * transparent explanation of static hosting email preparation,
 * and a direct mailto fallback that pre-populates email subject and body.
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const serviceSelect = document.getElementById('serviceInterest');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const feedbackBox = document.getElementById('formFeedback');

  // URL Query Param prefill (e.g. contact.html?service=virtual-assistant)
  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get('service');
  if (serviceParam && serviceSelect) {
    const matchingOption = Array.from(serviceSelect.options).find(opt => 
      opt.value.toLowerCase().includes(serviceParam.toLowerCase()) || 
      opt.text.toLowerCase().includes(serviceParam.toLowerCase())
    );
    if (matchingOption) {
      serviceSelect.value = matchingOption.value;
    }
  }

  // Copy email button
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = window.DANSCOM_CONFIG?.contact?.email || 'musembidaniel615@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        if (window.showToast) {
          window.showToast('Copied ' + email + ' to clipboard!');
        }
        copyEmailBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Email Copied!
        `;
        setTimeout(() => {
          copyEmailBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy Email Address
          `;
        }, 3000);
      });
    });
  }

  // WhatsApp Submission Handler
  const whatsappSubmitBtn = document.getElementById('whatsappSubmitBtn');
  if (whatsappSubmitBtn) {
    whatsappSubmitBtn.addEventListener('click', () => {
      const name = document.getElementById('fullName')?.value.trim();
      const service = document.getElementById('serviceInterest')?.value || 'General Inquiry';
      const budget = document.getElementById('budgetRange')?.value || '';
      const message = document.getElementById('inquiryMessage')?.value.trim();

      let text = `Hello Daniel,`;
      if (name) {
        text += ` my name is ${name}.`;
      }
      text += ` I am contacting you via DANSCOM regarding ${service}.`;
      if (budget && budget !== 'Open for Discussion') {
        text += ` Estimated scope: ${budget}.`;
      }
      if (message) {
        text += `\n\nDetails: ${message}`;
      } else {
        text += `\n\nI would like to discuss working together.`;
      }

      const waNumber = '254713811622';
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

      showFeedback(
        `Opening WhatsApp chat directly with Daniel Musembi (+254 713 811 622)...`,
        'success',
        waUrl
      );

      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 500);
    });
  }

  // Form Submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('fullName')?.value.trim();
      const email = document.getElementById('emailAddress')?.value.trim();
      const service = document.getElementById('serviceInterest')?.value;
      const budget = document.getElementById('budgetRange')?.value;
      const message = document.getElementById('inquiryMessage')?.value.trim();

      // Basic client validation
      if (!name || !email || !message) {
        showFeedback('Please fill in your name, email, and message, or click "Send Message via WhatsApp" for instant contact.', 'error');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFeedback('Please provide a valid email address.', 'error');
        return;
      }

      const ownerEmail = window.DANSCOM_CONFIG?.contact?.email || 'musembidaniel615@gmail.com';
      const subject = encodeURIComponent(`[DANSCOM Inquiry] ${service || 'General'} - From ${name}`);
      const body = encodeURIComponent(
        `Hello Daniel,\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Service Area: ${service || 'Unspecified'}\n` +
        `Estimated Budget / Setup: ${budget || 'To be discussed'}\n\n` +
        `Project / Inquiry Details:\n${message}\n\n` +
        `--\nSent from DANSCOM Portfolio`
      );

      const mailtoUrl = `mailto:${ownerEmail}?subject=${subject}&body=${body}`;

      showFeedback(
        `Your message is ready. Opening your email app addressed to <strong>${ownerEmail}</strong>. If your email app does not open automatically, please click below.`,
        'success',
        mailtoUrl
      );

      // Attempt window location trigger
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 600);
    });
  }

  function showFeedback(text, type, directLink) {
    if (!feedbackBox) return;
    feedbackBox.style.display = 'block';
    const isSuccess = type === 'success';
    feedbackBox.style.background = isSuccess ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)';
    feedbackBox.style.borderColor = isSuccess ? 'rgba(16, 185, 129, 0.35)' : 'rgba(239, 68, 68, 0.35)';
    feedbackBox.style.color = isSuccess ? '#10b981' : '#ef4444';
    
    feedbackBox.innerHTML = `
      <div style="display: flex; gap: 12px; align-items: flex-start;">
        <svg style="flex-shrink: 0; margin-top: 2px;" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          ${isSuccess 
            ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>' 
            : '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'
          }
        </svg>
        <div style="font-size: 0.9rem; line-height: 1.6;">
          <p>${text}</p>
          ${directLink ? `
            <div style="margin-top: 12px; display: flex; gap: 10px; flex-wrap: wrap;">
              <a href="${directLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Proceed to Message</a>
            </div>
          ` : ''}
        </div>
      </div>
    `;
    feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});
