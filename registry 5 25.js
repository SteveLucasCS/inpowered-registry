const coaches = require('./coaches.js').default;

let F = { icf:'all', method:'all', region:'all' };

const initials = n => n.split(' ').slice(0,2).map(x=>x[0]).join('');
const icfCls = i => !i?'icf-none':i.includes('MCC')?'icf-mcc':i.includes('PCC')?'icf-pcc':i.includes('ACC')?'icf-acc':'icf-none';

function renderIndex(list) {
  let el = document.getElementById('coachIndex');
  if (!el) {
    const gc = document.querySelector('.grid-container');
    const div = document.createElement('div');
    div.id = 'coachIndex';
    div.style.cssText = 'background:#fff;border:0.5px solid #C8C5BB;border-radius:3px;margin-bottom:22px;overflow:hidden;';
    gc.insertBefore(div, gc.firstChild);
    el = div;
  }
  if (!list.length) { el.style.display='none'; return; }
  el.style.display='';
  el.innerHTML = `
    <div style="padding:12px 20px;background:#1B3A6B;border-bottom:2px solid #C9A84C;display:flex;align-items:center;gap:10px;">
      <span style="font-family:'Cormorant Garamond',serif;font-size:16px;font-weight:500;color:#fff;letter-spacing:0.02em;">Registry Index</span>
      <span style="font-size:11px;color:rgba(255,255,255,0.6);font-weight:300;">${list.length} coaches — click any name to view full profile</span>
    </div>
    <table style="width:100%;border-collapse:collapse;">
      <thead>
        <tr style="background:#F5F4F0;border-bottom:0.5px solid #C8C5BB;">
          <th style="padding:8px 20px;text-align:left;font-size:10px;font-weight:500;letter-spacing:0.15em;text-transform:uppercase;color:#4A4A48;">Name</th>
          <th style="padding:8px 20px;text-align:left;font-size:10px;font-weight:500;letter-spacing:0.15em;text-transform:uppercase;color:#4A4A48;">Location</th>
          <th style="padding:8px 20px;text-align:left;font-size:10px;font-weight:500;letter-spacing:0.15em;text-transform:uppercase;color:#4A4A48;">ICF Credential</th>
        </tr>
      </thead>
      <tbody>
        ${list.map((c, i) => `
          <tr style="border-bottom:0.5px solid #C8C5BB;cursor:pointer;transition:background 0.15s;" 
              onmouseover="this.style.background='#EEF2F9'" onmouseout="this.style.background='${i%2===0?'#fff':'#FAFAF8'}'">
            <td style="padding:10px 20px;background:${i%2===0?'#fff':'#FAFAF8'};">
              <span style="font-family:'Cormorant Garamond',serif;font-size:15px;font-weight:500;color:#1B3A6B;">${c.name}</span>
            </td>
            <td style="padding:10px 20px;font-size:12px;color:#4A4A48;font-weight:300;background:${i%2===0?'#fff':'#FAFAF8'};">&#128205; ${c.location||'—'}</td>
            <td style="padding:10px 20px;background:${i%2===0?'#fff':'#FAFAF8'};">
              <span class="icf-badge ${icfCls(c.icf)}" style="cursor:default;pointer-events:none;"><span class="icf-dot"></span>${c.icfNote||c.icf||'—'}</span>
            </td>
          </tr>`).join('')}
      </tbody>
    </table>`;
}

function renderCards(list) {
  document.getElementById('visibleCount').textContent = list.length;
  document.getElementById('totalCountCtrl').textContent = coaches.length;
  const empty = document.getElementById('emptyState');
  const grid = document.getElementById('coachGrid');
  renderIndex(list);
  if (!list.length) { grid.innerHTML=''; empty.style.display='block'; return; }
  empty.style.display='none';
  grid.innerHTML = list.map(c => {
    const icf = c.icfNote || c.icf || '-';
    const idx = coaches.indexOf(c);
    const active = Object.entries(c.methods).filter(([,v])=>v).map(([k])=>k);
    const pills = active.length
      ? '<ul style="list-style:none;margin:0;padding:0;">' + active.map(m=>`<li style="font-size:11px;color:#4A4A48;font-weight:400;padding:2px 0;display:flex;align-items:center;gap:6px;"><span style="width:5px;height:5px;border-radius:50%;background:#C9A84C;display:inline-block;flex-shrink:0;"></span>${m}</li>`).join('') + '</ul>'
      : `<span style="font-size:11px;color:#9A9895;font-style:italic;font-weight:300">None on file</span>`;
    return `<div class="card">
      <div class="card-top">
        <div class="avatar">${initials(c.name)}</div>
        <div class="card-identity">
          <div class="card-name">${c.name}</div>
          <div class="card-business">${c.business}</div>
          ${c.location ? `<div class="card-location">&#128205; ${c.location}</div>` : ''}
          <span class="icf-badge ${icfCls(c.icf)}" style="cursor:default;pointer-events:none;"><span class="icf-dot"></span>${icf}</span>
        </div>
      </div>
      <div class="card-body">
        <div class="whyyou">${c.whyYou}</div>
        <div class="section-label">QE / InPowered&#174; Licenses</div>
        <div class="tags">${pills}</div>
      </div>
      <div class="card-footer" style="justify-content:space-between;align-items:center;">
        <span style="font-size:11px;color:#9A9895;font-style:italic;font-weight:300;">Click card for full profile</span>
        <div class="contact-links">
          <a class="contact-link" href="mailto:${c.email}" onclick="event.stopPropagation()" style="background:#1B3A6B;color:#fff;border-color:#1B3A6B;font-weight:600;">&#9993; Email</a>
          ${c.website ? `<a class="contact-link" href="${c.website}" target="_blank" onclick="event.stopPropagation()" style="background:#C9A84C;color:#122850;border-color:#C9A84C;font-weight:600;">&#8599; Website</a>` : ''}
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterCoaches() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  let list = coaches.filter(c => {
    const m = Object.entries(c.methods).filter(([,v])=>v).map(([k])=>k).join(' ');
    return [c.name, c.business, c.whyYou, c.specialties, c.certs, c.icf||'', c.services.join(' '), m, c.location||''].join(' ').toLowerCase().includes(q);
  });
  if (F.icf !== 'all')    list = list.filter(c => (c.icf||'').includes(F.icf));
  if (F.method !== 'all') list = list.filter(c => c.methods[F.method] === true);
  if (F.region !== 'all') list = list.filter(c => (c.location||'').toLowerCase().includes(F.region));
  renderCards(list);
}

function setFilter(type, val, btn) {
  F[type] = val;
  btn.closest('.filter-group').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterCoaches();
}

function openModal(idx) {
  const c = coaches[idx];
  document.getElementById('mAvatar').textContent = initials(c.name);
  document.getElementById('mName').textContent = c.name;
  document.getElementById('mBusiness').textContent = c.business;
  document.getElementById('mLoc').textContent = c.location ? '&#128205; ' + c.location : '';
  document.getElementById('mBadge').innerHTML = `<span class="icf-badge ${icfCls(c.icf)}" style="display:inline-flex;cursor:default;"><span class="icf-dot"></span>${c.icfNote||c.icf||'-'}</span>`;
  document.getElementById('mWhyYou').textContent = c.whyYou;
  const bioSec = document.getElementById('mBioSec');
  if (c.bio) { document.getElementById('mBio').textContent = c.bio; bioSec.style.display=''; } else { bioSec.style.display='none'; }
  document.getElementById('mServices').innerHTML = c.services.map(s => `<span class="modal-tag">${s}</span>`).join('');
  document.getElementById('mSpecialties').textContent = c.specialties;
  document.getElementById('mCerts').textContent = c.certs;
  document.getElementById('mMethods').innerHTML = Object.entries(c.methods).map(([n,v]) =>
    `<div class="license-row ${v?'licensed':'unlicensed'}"><span class="lcheck ${v?'yes':'no'}">${v?'&#10003;':'-'}</span><span class="lname">${n}</span></div>`
  ).join('');
  document.getElementById('mLinks').innerHTML =
    `<a class="mbtn mbtn-primary" href="mailto:${c.email}">&#9993; Email ${c.name.split(' ')[0]}</a>` +
    (c.website ? `<a class="mbtn mbtn-ghost" href="${c.website}" target="_blank">&#8599; Visit Website</a>` : '');
  document.getElementById('modalOverlay').classList.add('open');
}

function closeOverlay(e) {
  if (e.target === document.getElementById('modalOverlay')) document.getElementById('modalOverlay').classList.remove('open');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.getElementById('modalOverlay').classList.remove('open');
});

document.getElementById('totalCount').textContent = coaches.length;
document.getElementById('visibleCount').textContent = coaches.length;
document.getElementById('totalCountCtrl').textContent = coaches.length;
renderCards(coaches);