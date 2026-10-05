// JavaScript for Jeyco Enclonar Studio Website

document.addEventListener('DOMContentLoaded', () => {

  // 1. Dynamic Typing Role Effect
  const typedRole = document.getElementById('typed-role');
  const roles = [
    "Full-Stack Engineering",
    "Cloud Architecture",
    "High-Performance APIs",
    "Interactive Web Apps"
  ];
  let roleIndex = 0, charIndex = 0, isDeleting = false;

  function typeRole() {
    if (!typedRole) return;
    const current = roles[roleIndex];

    if (isDeleting) {
      typedRole.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedRole.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 35 : 80;

    if (!isDeleting && charIndex === current.length) {
      isDeleting = true;
      speed = 2200;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 400;
    }

    setTimeout(typeRole, speed);
  }
  typeRole();

  // 2. Copy vCard Action
  const copyVcardBtn = document.getElementById('copy-vcard-btn');
  const vcardBtnText = document.getElementById('vcard-btn-text');

  if (copyVcardBtn && vcardBtnText) {
    copyVcardBtn.addEventListener('click', () => {
      const vCardData = `BEGIN:VCARD\nVERSION:3.0\nFN:Jeyco Enclonar\nTITLE:Full-Stack Engineer\nEMAIL:jeyco.enclonar@gmail.com\nEND:VCARD`;
      navigator.clipboard.writeText(vCardData).then(() => {
        vcardBtnText.textContent = "vCard Copied!";
        copyVcardBtn.classList.replace('bg-amber-500', 'bg-emerald-500');
        copyVcardBtn.classList.add('text-white');

        setTimeout(() => {
          vcardBtnText.textContent = "Copy Contact vCard";
          copyVcardBtn.classList.replace('bg-emerald-500', 'bg-amber-500');
          copyVcardBtn.classList.remove('text-white');
        }, 2000);
      });
    });
  }

  // 3. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // 4. Light / Dark Theme Switches
  const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const themeIconDesktop = document.getElementById('theme-icon-desktop');

  function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    if (themeIconDesktop) {
      themeIconDesktop.className = `fas ${isLight ? 'fa-sun' : 'fa-moon'} text-xs`;
    }
  }

  if (themeToggleDesktop) themeToggleDesktop.addEventListener('click', toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

  // 5. Contact Form Handler
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formFeedback.className = "p-4 rounded-xl text-xs font-semibold text-center bg-amber-500/20 text-amber-300 border border-amber-500/30";
      formFeedback.textContent = "Thank you! Jeyco Enclonar has received your message.";
      formFeedback.classList.remove('hidden');
      contactForm.reset();

      setTimeout(() => {
        formFeedback.classList.add('hidden');
      }, 5000);
    });
  }

});
