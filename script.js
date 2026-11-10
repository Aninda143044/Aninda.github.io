/**
 * Aninda Bhattacharjee - Personal Portfolio Interactive Logic
 * Handles tab routing, theme switching, project filters, BibTeX expansion,
 * lightbox modals, and contact form handling.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initProjectFilters();
  initBibTeX();
  initLightbox();
  initContactForm();
});

/* ==========================================================================
   Theme Management (Light / Dark Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Default to dark theme unless light is explicitly set
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'dark');
  document.documentElement.setAttribute('data-theme', initialTheme);
  updateThemeIcon(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;
  
  if (theme === 'light') {
    // Show Moon icon (switch to dark)
    themeToggleBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
    themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
  } else {
    // Show Sun icon (switch to light)
    themeToggleBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
    themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
  }
}

/* ==========================================================================
   Navigation & Tab Switching (URL Hash Support)
   ========================================================================== */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link[data-tab]');
  const tabContents = document.querySelectorAll('.tab-content');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  function switchTab(tabId, updateHash = true) {
    // Remove active class from all tabs & links
    tabContents.forEach(tab => tab.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove('active'));

    // Activate target tab
    const targetTab = document.getElementById(tabId);
    const targetLink = document.querySelector(`.nav-link[data-tab="${tabId}"]`);

    if (targetTab) {
      targetTab.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (targetLink) {
      targetLink.classList.add('active');
    }

    // Update URL hash
    if (updateHash) {
      window.location.hash = tabId;
    }

    // Close mobile menu if open
    if (navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
    }
  }

  // Handle click on nav items
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = link.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // Handle direct hash navigation in URL
  function handleHash() {
    const hash = window.location.hash.replace('#', '');
    const validTabs = ['home', 'education', 'research', 'experience', 'certifications', 'skills', 'contact'];
    if (hash && validTabs.includes(hash)) {
      switchTab(hash, false);
    } else {
      switchTab('home', false);
    }
  }

  window.addEventListener('hashchange', handleHash);
  handleHash();

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Any internal links with data-tab (e.g. hero CTA buttons)
  document.querySelectorAll('[data-switch-tab]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-switch-tab');
      switchTab(target);
    });
  });
}

/* ==========================================================================
   Project Category Filter
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   BibTeX Collapsible & Clipboard Copy
   ========================================================================== */
function initBibTeX() {
  const bibtexBtns = document.querySelectorAll('[data-bibtex-target]');
  bibtexBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-bibtex-target');
      const box = document.getElementById(targetId);
      if (box) {
        box.classList.toggle('show');
      }
    });
  });

  const copyBtns = document.querySelectorAll('.bibtex-copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.parentElement.querySelector('code').innerText;
      navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.innerText;
        btn.innerText = 'Copied!';
        setTimeout(() => {
          btn.innerText = originalText;
        }, 2000);
      });
    });
  });
}

/* ==========================================================================
   Snapshots Lightbox Modal
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('modalImg');
  const modalCaption = document.getElementById('modalCaption');
  const modalClose = document.getElementById('modalClose');
  const snapshotItems = document.querySelectorAll('.snapshot-item');

  if (!modal) return;

  snapshotItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('.snapshot-img');
      const caption = item.querySelector('.snapshot-caption');

      if (img && modalImg) {
        modalImg.src = img.src;
        modalImg.alt = img.alt || 'Snapshot preview';
      }
      if (caption && modalCaption) {
        modalCaption.innerText = caption.innerText;
      }
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   Contact Form Handling
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const message = document.getElementById('senderMessage').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // Generate mailto link fallback & display confirmation
      status.className = 'form-status success';
      status.innerHTML = `✓ Thank you, ${name}! Preparing email client to send to <strong>bhattacharjee.aninda15@gmail.com</strong>...`;
      
      const mailtoUri = `mailto:bhattacharjee.aninda15@gmail.com?subject=${encodeURIComponent('Inquiry from Portfolio - ' + name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
      
      setTimeout(() => {
        window.location.href = mailtoUri;
      }, 800);

      form.reset();
    });
  }
}
