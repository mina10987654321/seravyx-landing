// Mobile menu
const toggle = document.querySelector('.nav__toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
links.addEventListener('click', (e) => {
  if (e.target.closest('a')) { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
});

// Waitlist form
// To save sign-ups, set data-endpoint on the form to a Formspree URL
// (https://formspree.io/f/xxxxxxx) or a Google Apps Script web app URL.
// Without an endpoint, the form opens an email to the team instead.
const form = document.getElementById('waitlist-form');
const status = form.querySelector('.form__status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.className = 'form__status';
  let firstBad = null;
  for (const el of form.querySelectorAll('[required]')) {
    const bad = el.type === 'checkbox' ? !el.checked : !el.value.trim();
    el.setAttribute('aria-invalid', String(bad));
    if (bad && !firstBad) firstBad = el;
  }
  if (firstBad) {
    status.textContent = 'Please fill in every field and tick the consent box.';
    status.classList.add('err');
    firstBad.focus();
    return;
  }

  const data = Object.fromEntries(new FormData(form));
  const endpoint = form.dataset.endpoint;

  if (!endpoint) {
    const body = `Name: ${data.name}\nContact: ${data.contact}\nI am a: ${data.role}\nConsent: yes`;
    window.location.href = `mailto:hello@seravyx.com?subject=${encodeURIComponent('Seravyx pilot waitlist')}&body=${encodeURIComponent(body)}`;
    status.textContent = 'Your email app should open with your details. Press send to join.';
    status.classList.add('ok');
    return;
  }

  try {
    const res = await fetch(endpoint, { method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(form) });
    if (!res.ok) throw new Error(res.status);
    form.reset();
    status.textContent = 'Thank you. You are on the waitlist, and we will contact you when the pilot opens.';
    status.classList.add('ok');
  } catch {
    status.textContent = 'Something went wrong. Please try again, or email hello@seravyx.com.';
    status.classList.add('err');
  }
});
