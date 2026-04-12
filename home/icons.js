/* ── Icon Set ──────────────────────────────────────────
   Soft line icons tuned to this site's neumorphism style.
   viewBox 24, stroke=currentColor, round caps, stroke 1.8
   Usage: <span class="ic" data-icon="apple"></span>
   initIcons() will inject the SVG on DOMContentLoaded and
   after page transitions (called from script.js).
────────────────────────────────────────────────────── */
const ICONS = {
  apple: '<path fill="currentColor" fill-opacity=".22" stroke="none" d="M16.8 8.3c.8.4 1.5 1 2 1.9.9 1.4.8 3.4-.3 6-1.1 2.6-2.5 4.6-4 4.6-.6 0-1.2-.2-1.7-.4-.4-.1-.8-.2-1.2-.2s-.8.1-1.2.2c-.5.2-1.1.4-1.7.4-1.5 0-3-2-4-4.6-1.1-2.6-1.2-4.6-.3-6 .5-.9 1.2-1.5 2-1.9.9-.4 1.9-.5 2.8-.3.6.2 1.1.4 1.5.4s.9-.2 1.5-.4c.9-.2 1.9-.1 2.6.3z"/><path d="M16.8 8.3c.8.4 1.5 1 2 1.9.9 1.4.8 3.4-.3 6-1.1 2.6-2.5 4.6-4 4.6-.6 0-1.2-.2-1.7-.4-.4-.1-.8-.2-1.2-.2s-.8.1-1.2.2c-.5.2-1.1.4-1.7.4-1.5 0-3-2-4-4.6-1.1-2.6-1.2-4.6-.3-6 .5-.9 1.2-1.5 2-1.9.9-.4 1.9-.5 2.8-.3.6.2 1.1.4 1.5.4s.9-.2 1.5-.4c.9-.2 1.9-.1 2.6.3z"/><path fill="currentColor" fill-opacity=".35" stroke="none" d="M13.3 7.8c.2-1.1.8-2 1.6-2.6.9-.7 1.9-1 3-1 0 1.2-.5 2.2-1.3 3-.8.8-1.8 1.2-2.9 1.2-.2-.2-.4-.4-.4-.6z"/><path d="M13.3 7.8c.2-1.1.8-2 1.6-2.6.9-.7 1.9-1 3-1 0 1.2-.5 2.2-1.3 3-.8.8-1.8 1.2-2.9 1.2"/><path d="M12 8v-1.3"/>',

  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M16.9 16.9l1.4 1.4M5.6 18.4l1.4-1.4M16.9 7.1l1.4-1.4"/>',

  moon: '<path d="M20.5 14.5A8 8 0 1 1 9.5 3.5a7 7 0 0 0 11 11z"/>',

  star: '<path d="M12 3l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.4l6-.9L12 3z"/>',

  sparkle: '<path d="M12 3l1.7 5.3 5.3 1.7-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z"/><path d="M19 16v3M17.5 17.5h3M5 4v3M3.5 5.5h3"/>',

  wave: '<path d="M9 21c-2-1-4-4-4-8v-3a1.5 1.5 0 0 1 3 0v4"/><path d="M8 14V6a1.5 1.5 0 0 1 3 0v6"/><path d="M11 12V5a1.5 1.5 0 0 1 3 0v7"/><path d="M14 12V7a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-5 7"/><path d="M18 4l1.5-1.5M20 7l2-1"/>',

  rocket: '<path fill="currentColor" fill-opacity=".2" stroke="none" d="M12 2c3 2.5 4 6 4 9v6H8v-6c0-3 1-6.5 4-9z"/><path d="M12 2c3 2.5 4 6 4 9v6H8v-6c0-3 1-6.5 4-9z"/><path fill="currentColor" fill-opacity=".22" stroke="none" d="M8 13l-4 3.5V20l4-2z"/><path d="M8 13l-4 3.5V20l4-2"/><path fill="currentColor" fill-opacity=".22" stroke="none" d="M16 13l4 3.5V20l-4-2z"/><path d="M16 13l4 3.5V20l-4-2"/><circle cx="12" cy="10" r="1.6" fill="currentColor" fill-opacity=".35"/><circle cx="12" cy="10" r="1.6"/><path d="M10 18v3M12 18v4M14 18v3"/>',

  phone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',

  wrench: '<path d="M14 7a4 4 0 0 0-5.8 4.5L3 17l3 3 5.5-5.2A4 4 0 0 0 16 9l-2 2-2-2z"/>',

  laptop: '<rect x="4" y="5" width="16" height="11" rx="2"/><path d="M2 19h20M9 19l.5-2M15 19l-.5-2"/>',

  coffee: '<path fill="currentColor" fill-opacity=".2" stroke="none" d="M3.5 9h14v5.5a5.5 5.5 0 0 1-5.5 5.5H9a5.5 5.5 0 0 1-5.5-5.5V9z"/><path d="M3.5 9h14v5.5a5.5 5.5 0 0 1-5.5 5.5H9a5.5 5.5 0 0 1-5.5-5.5V9z"/><path d="M17.5 11.5H19a2.5 2.5 0 0 1 0 5h-1.5"/><path d="M7 2.5c-1 1.2-1 2.3 0 3.5M10.5 2.5c-1 1.2-1 2.3 0 3.5M14 2.5c-1 1.2-1 2.3 0 3.5"/>',

  github: '<path d="M9 19c-4 1.5-4-2-6-2M15 22v-3.9a3.4 3.4 0 0 0-.9-2.4c3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.4s-1.2-.3-3.6 1.3a12.3 12.3 0 0 0-6 0C6.6 1.7 5.4 2 5.4 2a4.6 4.6 0 0 0-.1 3.4A5 5 0 0 0 4 8.9c0 5 3 6.2 6 6.5a3.4 3.4 0 0 0-.9 2.4V22"/>',

  cloud: '<path d="M17 18a5 5 0 0 0-1-9.9A7 7 0 0 0 3 10a4 4 0 0 0 3 7h11z"/>',

  gamepad: '<path fill="currentColor" fill-opacity=".2" stroke="none" d="M17 20a3 3 0 0 0 2.9-3.8l-2-7A3 3 0 0 0 15 7H9a3 3 0 0 0-2.9 2.2l-2 7A3 3 0 0 0 7 20c1.7 0 2.6-1 3.5-2h3c.9 1 1.8 2 3.5 2z"/><path d="M17 20a3 3 0 0 0 2.9-3.8l-2-7A3 3 0 0 0 15 7H9a3 3 0 0 0-2.9 2.2l-2 7A3 3 0 0 0 7 20c1.7 0 2.6-1 3.5-2h3c.9 1 1.8 2 3.5 2z"/><path d="M7 12h3M8.5 10.5v3"/><circle cx="15.5" cy="11.5" r="1.1" fill="currentColor"/><circle cx="17" cy="13.5" r="1.1" fill="currentColor"/>',

  gear: '<path fill="currentColor" fill-opacity=".2" stroke="none" d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/><circle cx="12" cy="12" r="3.2" fill="currentColor" fill-opacity=".3"/><circle cx="12" cy="12" r="3.2"/>',

  python: '<path d="M12 3h-3a2 2 0 0 0-2 2v3h8V7"/><path d="M7 8a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h3"/><path d="M12 21h3a2 2 0 0 0 2-2v-3H9v1"/><path d="M17 16a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4h-3"/><circle cx="9.5" cy="5.5" r=".7" fill="currentColor"/><circle cx="14.5" cy="18.5" r=".7" fill="currentColor"/>',

  chart: '<path d="M3 3v18h18"/><path d="M7 16v-3M12 16V9M17 16V6"/>',

  devPerson: '<circle cx="12" cy="8" r="4.2" fill="currentColor" fill-opacity=".2"/><circle cx="12" cy="8" r="4.2"/><circle cx="10.4" cy="7.6" r=".45" fill="currentColor" stroke="none"/><circle cx="13.6" cy="7.6" r=".45" fill="currentColor" stroke="none"/><path d="M10.4 9.6c.5.6 2.6.6 3.2 0"/><path fill="currentColor" fill-opacity=".18" stroke="none" d="M3.5 21.5c0-4.4 3.8-7.5 8.5-7.5s8.5 3.1 8.5 7.5z"/><path d="M3.5 21.5c0-4.4 3.8-7.5 8.5-7.5s8.5 3.1 8.5 7.5"/>',

  pin: '<path d="M12 21s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',

  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>',

  shrine: '<path fill="currentColor" fill-opacity=".2" stroke="none" d="M2.5 5c3-1 6-1.5 9.5-1.5S18.5 4 21.5 5v2.3h-19V5z"/><path d="M2.5 5c3-1 6-1.5 9.5-1.5S18.5 4 21.5 5"/><path d="M2.5 7.3h19"/><path d="M4.5 9.5h15"/><path d="M7 7.3V21M17 7.3V21"/><path d="M7 13.5h10"/><path fill="currentColor" fill-opacity=".15" stroke="none" d="M7 9.5h10v4H7z"/>',

  book: '<path d="M4 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4z"/><path d="M20 4h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6z"/>',

  briefcase: '<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 14h18"/>',

  flower: '<g fill="currentColor" fill-opacity=".28" stroke="none"><circle cx="12" cy="6" r="3.4"/><circle cx="17.3" cy="9.8" r="3.4"/><circle cx="15.3" cy="16.3" r="3.4"/><circle cx="8.7" cy="16.3" r="3.4"/><circle cx="6.7" cy="9.8" r="3.4"/></g><g fill="none"><circle cx="12" cy="6" r="3.4"/><circle cx="17.3" cy="9.8" r="3.4"/><circle cx="15.3" cy="16.3" r="3.4"/><circle cx="8.7" cy="16.3" r="3.4"/><circle cx="6.7" cy="9.8" r="3.4"/></g><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/>',

  robot: '<rect x="4" y="7" width="16" height="12" rx="2.5"/><path d="M12 3v4"/><circle cx="12" cy="3" r=".7" fill="currentColor"/><circle cx="9" cy="13" r="1.2" fill="currentColor"/><circle cx="15" cy="13" r="1.2" fill="currentColor"/><path d="M9.5 16.5h5M2 13v2M22 13v2"/>',

  palette: '<path d="M12 22a10 10 0 1 1 10-10c0 2.2-2 3.5-4 3.5h-1.5a2 2 0 0 0-2 2v.5c0 1.8-1 4-2.5 4z"/><circle cx="7" cy="12" r="1" fill="currentColor"/><circle cx="9" cy="7.5" r="1" fill="currentColor"/><circle cx="13.5" cy="6" r="1" fill="currentColor"/><circle cx="17.5" cy="9" r="1" fill="currentColor"/>',

  sprout: '<path d="M12 21v-9"/><path d="M12 12a5 5 0 0 0 5-5V5h-2a5 5 0 0 0-5 5v2z"/><path d="M12 14a4 4 0 0 1-4-4V9h2a4 4 0 0 1 4 4v1z"/>',

  pencil: '<path d="M14 4l6 6-11 11H3v-6z"/><path d="M13 5l6 6"/>',

  desktop: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M9 20h6M12 16v4"/>',

  cube: '<path d="M12 3l9 5v8l-9 5-9-5V8z"/><path d="M3 8l9 5 9-5M12 13v8"/>',

  coin: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10"/><path d="M15 9.5c-.5-1-1.7-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 2 3 2 3 .8 3 2-1.3 2-3 2c-1.3 0-2.5-.5-3-1.5"/>',

  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/>',

  bolt: '<path fill="currentColor" fill-opacity=".28" stroke="none" d="M13 2L4 14h7l-1 8 9-12h-7z"/><path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',

  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',

  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7"/>',

  chat: '<path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12z"/>',

  clipboard: '<rect x="5" y="4" width="14" height="18" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/>',

  handshake: '<circle cx="7" cy="8" r="3"/><circle cx="17" cy="8" r="3"/><path d="M2 21c0-3 2-5 5-5s5 2 5 5M12 21c0-3 2-5 5-5s5 2 5 5"/>',

  question: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3.5"/><circle cx="12" cy="16.5" r=".6" fill="currentColor"/>',

  party: '<path d="M5 20l5-13 7 8z"/><path d="M6.5 16l4-1M9 10.5l3-1"/><path d="M14 3l2 2M18.5 3l-1 2M21 7.5l-2 1M20 13l-1.5-.5M17 2l-.5 2"/>',

  paperPlane: '<path d="M21 3L3 11l7 3 3 7z"/><path d="M21 3l-8 11"/>',

  leaf: '<path d="M21 3c0 9-6 15-15 15a4 4 0 0 1-4-4c9 0 15-6 15-15 2.5 0 4 1.5 4 4z"/><path d="M3 21c3-5 7-9 12-12"/>',

  check: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',

  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',

  heart: '<path fill="currentColor" fill-opacity=".3" stroke="none" d="M12 21s-9-6-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-9 12-9 12z"/><path d="M12 21s-9-6-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-9 12-9 12z"/>',

  run: '<circle cx="15" cy="5" r="2"/><path d="M7 21l3-6 3 2-2 4"/><path d="M13 15l2-4 3 2h2M10 9l-2 1-1 3"/>',

  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',

  hand: '<path d="M7 21c-2-2-3-5-3-8v-3a1.5 1.5 0 0 1 3 0v4"/><path d="M7 14V5a1.5 1.5 0 0 1 3 0v7"/><path d="M10 12V3a1.5 1.5 0 0 1 3 0v9"/><path d="M13 12V6a1.5 1.5 0 0 1 3 0v8c0 5-3 7-6 7"/>',

  smile: '<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><circle cx="9" cy="10" r=".7" fill="currentColor"/><circle cx="15" cy="10" r=".7" fill="currentColor"/>'
};

function svgWrap(inner){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + inner + '</svg>';
}

function initIcons(root){
  const scope = root || document;
  scope.querySelectorAll('[data-icon]').forEach(el => {
    const key = el.dataset.icon;
    if(!key || el.dataset.iconReady === '1') return;
    const def = ICONS[key];
    if(!def){ return; }
    el.innerHTML = svgWrap(def);
    el.dataset.iconReady = '1';
  });
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => initIcons());
} else {
  initIcons();
}
