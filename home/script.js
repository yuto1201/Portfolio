/* ── ダークモード ── */
const html = document.documentElement;
document.getElementById('themeToggle').addEventListener('click',()=>{
  html.setAttribute('data-theme', html.getAttribute('data-theme')==='dark' ? 'light' : 'dark');
});

/* ── ナビスクロール ── */
window.addEventListener('scroll',()=>{
  document.getElementById('nav').classList.toggle('scrolled', scrollY > 50);
});

/* ── ページルーター ── */
const pages = ['home','about','skills','apps','contact'];
function showPage(id){
  pages.forEach(p => {
    const el = document.getElementById('page-' + p);
    const navEl = document.getElementById('nav-' + p);
    if(el) el.className = p === id ? 'page active' : 'page';
    if(navEl) navEl.className = p === id ? 'active' : '';
  });
  window.scrollTo({top:0, behavior:'instant'});
  setTimeout(runReveal, 60);
  setTimeout(runBars, 120);
  if(id === 'home'){
    setTimeout(runCounters, 220);
    ci = 0; ri = 0; del = false;
    setTimeout(type, 900);
  }
}

/* ── ヒーロー名 文字分割 ── */
const heroName = document.getElementById('heroName');
[...'Yuto'].forEach(c => {
  const s = document.createElement('span');
  s.className = 'char'; s.textContent = c;
  heroName.appendChild(s);
});
const dotEl = document.createElement('span');
dotEl.className = 'dot'; dotEl.textContent = '.';
heroName.appendChild(dotEl);

/* ── タイピングアニメーション ── */
const roles = ['iOS Developer','Systems Engineer','App Creator','Code & Coffee lover'];
let ri = 0, ci = 0, del = false;
const typEl = document.getElementById('typingText');
function type(){
  const page = document.getElementById('page-home');
  if(!page || !page.classList.contains('active')) return;
  const cur = roles[ri];
  if(!del){
    typEl.textContent = cur.slice(0, ci + 1); ci++;
    if(ci === cur.length){ del = true; setTimeout(type, 1600); return; }
  } else {
    typEl.textContent = cur.slice(0, ci - 1); ci--;
    if(ci === 0){ del = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(type, del ? 55 : 95);
}
setTimeout(type, 1400);

/* ── スクロールリビール ── */
function runReveal(){
  const els = document.querySelectorAll('.page.active .rv, .page.active .rv-l, .page.active .rv-r, .page.active .rv-pop');
  els.forEach(el => el.classList.remove('on'));
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if(e.isIntersecting){
        const d = parseFloat(e.target.style.transitionDelay || 0) * 1000;
        setTimeout(() => e.target.classList.add('on'), d || i * 65);
        obs.unobserve(e.target);
      }
    });
  }, {threshold: 0.06});
  els.forEach(el => obs.observe(el));
}
runReveal();

/* ── スキルバー ── */
function runBars(){
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        setTimeout(() => { e.target.style.width = e.target.dataset.width + '%'; }, 260);
        obs.unobserve(e.target);
      }
    });
  }, {threshold: 0.3});
  document.querySelectorAll('.page.active .skill-bar, .page.active .lp-fill').forEach(b => {
    b.style.width = '0'; obs.observe(b);
  });
}
runBars();

/* ── カウントアップ ── */
function runCounters(){
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        const end = parseInt(e.target.dataset.target); let cur = 0;
        const id = setInterval(() => {
          cur = Math.min(cur + end / 48, end);
          e.target.textContent = Math.round(cur) + (end === 100 ? '+' : '');
          if(cur >= end) clearInterval(id);
        }, 22);
        obs.unobserve(e.target);
      }
    });
  }, {threshold: 0.5});
  document.querySelectorAll('.stat-num').forEach(el => { el.textContent = '0'; obs.observe(el); });
}
runCounters();

/* ── アプリカード 3Dチルト ── */
document.querySelectorAll('.app-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const cx = (e.clientX - r.left) / r.width - 0.5;
    const cy = (e.clientY - r.top)  / r.height - 0.5;
    card.style.transform = `translateY(-12px) scale(1.015) perspective(900px) rotateX(${cy * -6}deg) rotateY(${cx * 6}deg)`;
    card.style.transition = 'transform .07s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform .45s cubic-bezier(.34,1.56,.64,1)';
  });
});

/* ── スキルアイコンバウンス ── */
const bStyle = document.createElement('style');
bStyle.textContent = `@keyframes iconBounce{0%{transform:scale(1)}35%{transform:scale(1.35) rotate(-10deg)}65%{transform:scale(.88) rotate(3deg)}100%{transform:scale(1)}}`;
document.head.appendChild(bStyle);
document.addEventListener('mouseenter', e => {
  const card = e.target.closest('.skill-card,.skill-card-lg,.hobby-card,.tool-chip');
  if(!card) return;
  const ic = card.querySelector('.skill-icon,.skill-icon-box,.hobby-icon,.tool-icon');
  if(!ic) return;
  ic.style.animation = 'none';
  requestAnimationFrame(() => { ic.style.animation = 'iconBounce .45s cubic-bezier(.34,1.56,.64,1)'; });
}, true);

/* ── FAQ ── */
function toggleFaq(el){
  const item = el.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if(!isOpen) item.classList.add('open');
}

/* ── URL ハッシュで初期ページ切替 ── */
(function(){
  const h = location.hash.replace('#','');
  if(h && pages.includes(h)) showPage(h);
})();

/* ── スクショ検証用: ?shot=home|about|... / ?shot=all ── */
(function(){
  const m = location.search.match(/shot=([a-z]+)/);
  if(!m) return;
  const which = m[1];
  document.documentElement.setAttribute('data-theme','light');
  const s = document.createElement('style');
  const reveal = '.rv,.rv-l,.rv-r,.rv-pop,.hero-btns,.hero-stats,.hero-desc,.hero-typing-wrap,.page-title{opacity:1!important;transform:none!important;animation:none!important}*{animation-delay:0s!important}';
  if(which === 'all'){
    s.textContent = '#hero{min-height:auto!important;padding:90px 20px 60px}.page{display:block!important;opacity:1!important}'+reveal;
  } else {
    s.textContent = '#hero{min-height:auto!important;padding:90px 20px 60px}.page{display:none!important}#page-'+which+'{display:block!important;opacity:1!important}'+reveal;
  }
  document.head.appendChild(s);
})();

/* ── コンタクト送信 ── */
function handleContactSend(){
  const fc = document.getElementById('formContent');
  const sm = document.getElementById('successMsg');
  if(fc) fc.style.display = 'none';
  if(sm) sm.classList.add('show');
}
