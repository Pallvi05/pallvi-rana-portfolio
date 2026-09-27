/* Main Application Logic for Pallvi Rana's Portfolio */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderPhoneSimulator();
  renderAppShelf();
  renderProjects();
  renderSkills();
  renderExperience();
  initISTClock();
  initCopyActions();
  initFooterYear();
});

/* Theme Switcher */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('pr_portfolio_theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('pr_portfolio_theme', newTheme);
  });
}

/* Hero Phone Simulator Renderer */
function renderPhoneSimulator() {
  const phoneScreen = document.getElementById('phoneScreen');
  const phoneTabs = document.getElementById('phoneTabs');
  if (!phoneScreen || !phoneTabs) return;

  const featuredApps = PORTFOLIO_DATA.projects;

  // Render Tabs with real app icon images
  phoneTabs.innerHTML = featuredApps.map((app, index) => `
    <button class="phone-tab-btn ${index === 0 ? 'active' : ''}" data-index="${index}">
      <img src="${app.iconImg}" alt="${app.title}" class="tab-img-icon" onerror="this.src='https://via.placeholder.com/20'">
      <span>${app.title.split(' ')[0]}</span>
    </button>
  `).join('');

  // Render Screen Content
  updatePhoneScreen(0);

  // Tab click listeners
  const tabBtns = phoneTabs.querySelectorAll('.phone-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updatePhoneScreen(idx);
    });
  });
}

function updatePhoneScreen(index) {
  const phoneScreen = document.getElementById('phoneScreen');
  const app = PORTFOLIO_DATA.projects[index];
  if (!app || !phoneScreen) return;

  phoneScreen.innerHTML = `
    <div class="screen-app-card" style="border-left: 4px solid ${app.color};">
      <div class="screen-app-header">
        <img src="${app.iconImg}" alt="${app.title}" class="real-app-icon" onerror="this.src='https://via.placeholder.com/44'">
        <div class="screen-app-title">
          <h4>${app.title}</h4>
          <span>${app.category}</span>
        </div>
      </div>

      <p class="screen-app-desc">${app.description}</p>

      <div class="screen-app-features">
        <strong style="font-size: 11px; color: #a5b4fc;">Key Highlights:</strong>
        ${app.features.map(f => `<div class="screen-feature-item"><span>⚡</span> ${f}</div>`).join('')}
      </div>

      <div style="display: flex; gap: 4px; flex-wrap: wrap; margin-top: 6px;">
        ${app.tech.map(t => `<span class="tech-tag" style="font-size: 9.5px; padding: 2px 6px;">${t}</span>`).join('')}
      </div>
    </div>
  `;
}

/* App Shelf Renderer */
function renderAppShelf() {
  const shelfContainer = document.getElementById('appShelf');
  if (!shelfContainer) return;

  shelfContainer.innerHTML = PORTFOLIO_DATA.projects.map(app => `
    <a href="${app.playStore || app.appStore || '#work'}" target="_blank" rel="noopener" class="shelf-item" title="${app.title} - ${app.category}">
      <img src="${app.iconImg}" alt="${app.title}" class="shelf-img-icon" onerror="this.src='https://via.placeholder.com/34'">
      <span class="shelf-name">${app.title}</span>
    </a>
  `).join('');
}

/* Projects Grid Renderer */
function renderProjects() {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.projects.map(app => `
    <div class="project-card">
      <div>
        <div class="project-top">
          <img src="${app.iconImg}" alt="${app.title}" class="project-real-icon" onerror="this.src='https://via.placeholder.com/56'">
          <span class="project-category">${app.category}</span>
        </div>

        <h3 class="project-title" style="margin-top: 14px;">${app.title}</h3>
        <p class="project-desc">${app.description}</p>

        <ul class="project-features">
          ${app.features.map(feat => `<li>${feat}</li>`).join('')}
        </ul>
      </div>

      <div>
        <div class="project-tags">
          ${app.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="project-links">
          ${app.playStore ? `
            <a href="${app.playStore}" target="_blank" rel="noopener" class="badge-link">
              <span>🤖 Google Play</span> ↗
            </a>
          ` : ''}
          ${app.appStore ? `
            <a href="${app.appStore}" target="_blank" rel="noopener" class="badge-link" style="background: rgba(236, 72, 153, 0.15); color: var(--accent-pink);">
              <span>🍎 App Store</span> ↗
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

/* Tech Stack Renderer */
function renderSkills() {
  const container = document.getElementById('skillsGrid');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.skills.map(cat => `
    <div class="stack-category-card">
      <h3><span>${cat.icon}</span> ${cat.title}</h3>
      <ul class="stack-list">
        ${cat.items.map(item => `
          <li class="stack-item">
            <strong>${item.name}</strong>
            <span class="desc">${item.desc}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

/* Experience Timeline Renderer */
function renderExperience() {
  const container = document.getElementById('experienceTimeline');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
    <li class="timeline-item ${exp.isCurrent ? 'active' : ''}">
      <div class="timeline-marker"></div>
      <div class="timeline-date">
        ${exp.period}
        ${exp.isCurrent ? '<span class="current">Current Role</span>' : ''}
      </div>
      <div class="timeline-content">
        <h3 class="timeline-title">${exp.role}</h3>
        <div class="timeline-company">@ ${exp.company}</div>
        <ul class="timeline-bullets">
          ${exp.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
        </ul>
      </div>
    </li>
  `).join('');
}

/* Live IST Clock */
function initISTClock() {
  const clockEl = document.getElementById('istClock');
  if (!clockEl) return;

  function updateClock() {
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const formatter = new Intl.DateTimeFormat('en-IN', options);
    clockEl.innerHTML = `📍 India (IST): <strong>${formatter.format(new Date())}</strong>`;
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* Copy Email Action */
function initCopyActions() {
  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('pr22.brl@gmail.com').then(() => {
        copyBtn.textContent = 'Copied! ✓';
        setTimeout(() => {
          copyBtn.textContent = 'Copy Email';
        }, 2000);
      });
    });
  }
}

/* Footer Year */
function initFooterYear() {
  const yrEl = document.getElementById('currentYear');
  if (yrEl) {
    yrEl.textContent = new Date().getFullYear();
  }
}
