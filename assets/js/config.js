/**
 * DANSCOM - Central Site Configuration
 * Owner: Daniel Musembi
 * Contact: musembidaniel615@gmail.com
 *
 * This file centralizes brand identity, contact information, social links,
 * and project settings. Edit values here to update across all pages automatically.
 */

window.DANSCOM_CONFIG = {
  brand: {
    name: 'DANSCOM',
    tagline: 'Digital Support. Intelligent Automation. Practical Technology.',
    owner: 'Daniel Musembi',
    role: 'Virtual Assistant | AI Automation | Web Developer | Tech Researcher',
    location: 'Nairobi, Kenya (Available Globally: US, UK, EU, AU Timezones)',
    timezone: 'UTC+3 (East Africa Time)',
    education: 'Bachelor of Arts in Criminology and Penology, Maasai Mara University (2019–2023)',
    bioShort: 'Providing high-precision virtual assistance, intelligent business workflow automation, responsive web development, and algorithmic trading technology research.',
  },
  contact: {
    email: 'musembidaniel615@gmail.com',
    phonePlaceholder: '+254 7XX XXX XXX', // Replace with verified number when ready
    whatsappPlaceholder: 'https://wa.me/254700000000', // Update with actual number if desired
    availableFor: 'Long-term Virtual Assistance, AI Automation, Web Projects, Technical Research',
    workingHours: 'Monday – Friday, 8:00 AM – 6:00 PM EAT (Flexible for International Timezones)',
    responseTime: 'Within 12–24 business hours',
  },
  socials: {
    github: 'https://github.com/DanielMusembi', // Replace with verified handle if different
    linkedin: 'https://www.linkedin.com/in/daniel-musembi', // Replace with verified profile
    twitter: 'https://x.com', // Replace with verified handle
    telegram: 'https://t.me/danielmusembi', // Replace with verified handle
  },
  paths: {
    // Relative base path: leave as './' for portability across domain root and GitHub Pages subpaths
    base: './',
    // Repository link for the website source code
    repoUrl: 'https://github.com/DanielMusembi/danscom-portfolio',
  },
  pwa: {
    cacheVersion: 'danscom-v1.0.0',
    name: 'DANSCOM',
    shortName: 'DANSCOM',
  }
};
