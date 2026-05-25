const coaches = [
  {
    name: "Kristen Dombrowski",
    business: "Kristen Dombrowski, LLC",
    email: "hello@kristenearp.com",
    website: "https://www.kristenearp.com",
    icf: "PCC",
    whyYou: "With 20 years of transition and adaptation as a military spouse, Kristen supports leaders to transform, change and adjust in their leadership roles for greater effectiveness and impact.",
    services: ["Leadership Development (Training & Coaching)", "Team Development (Training & Group Coaching)", "Assessment – Self-Awareness & Plan for Action"],
    specialties: "Relationship Building (Leaders & Team); Mindset Shifts (Coaching); Self-Awareness (Assessment, Coaching & Training)",
    certs: "Co-Active Training Institute (CPCC), Executive & Leadership Coaching (Quantum Endeavors), Master's in Organizational Psychology, MBTI, EQ, RQ & Enneagram Certified, Crucial Conversations, Positive Intelligence",
    methods: {"Inpowered® Corporate Coach":true,"Inpowered® Leadership Coach":true,"Inpowered® Onboarding Coach":true,"Inpowered® Team Coach":true,"Quantum 360®":true,"QE Certified Executive Coach":true,"QE Certified Leadership Coach":true},
    location: "Colorado Springs, CO, USA"
  },
  {
    name: "Lisa Henderson",
    business: "Empowering People Leaders",
    email: "lisa@empoweringpeopleleaders.com",
    website: "https://www.empoweringpeopleleaders.com",
    icf: "ACC",
    whyYou: "With 25 years as an HR Executive and change agent leading companies through transformations, Lisa partners with people leaders and organizations to increase effectiveness and engagement that drives results.",
    services: ["1:1 Leadership/Team Coaching & Development", "Fractional CHRO", "Culture Transformation"],
    specialties: "Leadership Development; People and Business Strategy; Team alignment",
    certs: "Certified Professional Coach (CPC), iPEC; Leadership Coach Certification (Quantum Endeavors); Executive Coach Certificate (Quantum Endeavors); Energy Leadership Index Master Practitioner (ELI-MP); SPHR-CA (HRCI)",
    methods: {"Inpowered® Corporate Coach":true,"Inpowered® Leadership Coach":true,"Inpowered® Onboarding Coach":false,"Inpowered® Team Coach":true,"Quantum 360®":true,"QE Certified Executive Coach":true,"QE Certified Leadership Coach":false},
    location: "Los Angeles, CA, USA"
  },
  {
    name: "Lisa Lanier",
    business: "Lanier Leadership Group",
    email: "Lisa@lanierleadershipcoaching.com",
    website: "https://lanierleadershipgroup.com",
    icf: "PCC",
    whyYou: "A C-suite leader with 30+ years of experience with global Fortune 500 clients, Lisa partners with organizations in the transformation of their teams, leaders and cultures to enable their talent to thrive and deliver the extraordinary.",
    services: ["1:1 Executive & Leadership Coaching (6-12 months)", "Team Leadership Development Programs", "Transformation Coaching & Consulting"],
    specialties: "Coaching and Leadership Development; Transformation and Change; Elevating Leadership; Team Effectiveness and Impact; Strategy and Vision",
    certs: "CPCC (Co-Active Training Institute), ICF Professional Certified Coach (PCC), Certified Executive Coach (QE Corporate Coach Academy), Team Coach (Global Team Coaching Institute), DISC, Leadership Circle Profile (LCP), PROSCI, CCMP",
    methods: {"Inpowered® Corporate Coach":true,"Inpowered® Leadership Coach":false,"Inpowered® Onboarding Coach":false,"Inpowered® Team Coach":false,"Quantum 360®":false,"QE Certified Executive Coach":true,"QE Certified Leadership Coach":false},
    location: "Atlanta, GA, USA"
  },
  {
    name: "Liz Donovan",
    business: "Squiggle Strategy",
    email: "Liz@SquiggleStrategy.com",
    website: "https://www.squigglestrategy.com",
    icf: "ACC",
    whyYou: "With 17 years combined experience developing strategy and high-performing teams to meet the big goals of large-scale organizations, Liz supports organizations to empower leaders to elevate their performance, engage great talent, and achieve impactful results.",
    services: ["1:1 Coaching", "Leadership Training", "Customer Research Strategy Labs"],
    specialties: "Elevating leader performance through authentic leadership style; hiring and leveraging diverse talent; communication and listening skills; career strategy; customer research",
    certs: "Certified Professional Co-Active Coach (CPCC), Quantum Endeavors Executive Coach Certification, Positive Intelligence training for coaches",
    methods: {"Inpowered® Corporate Coach":true,"Inpowered® Leadership Coach":false,"Inpowered® Onboarding Coach":false,"Inpowered® Team Coach":false,"Quantum 360®":false,"QE Certified Executive Coach":true,"QE Certified Leadership Coach":false},
    location: "Boston, MA, USA"
  },
  {
    name: "Nicole Berg",
    business: "Nicole Berg Executive Coaching",
    email: "nicole@nicolejberg.com",
    website: "https://nicolejberg.com",
    icf: "PCC",
    icfNote: "PCC (MCC application under review)",
    whyYou: "With a proven record of innovation as an international, multi-award winning founder of a social enterprise and large-scale initiatives, Nicole partners with organisations to spot and capitalise on their people opportunities for breakthrough impact and results.",
    services: ["Executive Coaching", "Positive Intelligence Group & Team Coaching", "Closed-Loop Interview-Based 360 Assessment & Development Planning"],
    specialties: "Confidence (especially when high-performing clients don't show it as a pain point); Navigating uncertainty; Effective time and energy management; Candid communication; Creating a team from a group",
    certs: "Professional Certified Coach (PCC), Certified Professional Co-Active Coach (CPCC), Certified Executive Coach, Advanced Accreditation in Team Coaching, Organisation & Relationship Systems at Work",
    methods: {"Inpowered® Corporate Coach":true,"Inpowered® Leadership Coach":false,"Inpowered® Onboarding Coach":false,"Inpowered® Team Coach":false,"Quantum 360®":true,"QE Certified Executive Coach":true,"QE Certified Leadership Coach":false},
    location: "London, UK"
  },
  {
    name: "Sowmya Kannan",
    business: "Developing Purposeful Leaders / Pellucid Communications LLC",
    email: "sowmya@pellucidcommunications.com",
    website: "https://www.developingpurposefulleaders.com",
    icf: "ACC",
    whyYou: "With two decades of success driving innovation and leading teams through disruptive technology cycles, Sowmya supports organizations to empower executives and leaders to incubate, launch, and drive growth of new offerings from idea to scaled execution worldwide.",
    services: ["1:1 Executive Coaching", "Team Coaching with 1:1 Coaching Integrated", "Workshops on Ideation, Product & Go-to-Market Strategy"],
    specialties: "Senior leaders onboarding effectively; Adapting to changing business priorities; Driving complex cross-functional initiatives; Helping teams build trust and deliver strong performance",
    certs: "Certified Professional Co-Active Coach (CPCC), ICF Associate Certified Coach (ACC)",
    methods: {"Inpowered® Corporate Coach":true,"Inpowered® Leadership Coach":false,"Inpowered® Onboarding Coach":false,"Inpowered® Team Coach":false,"Quantum 360®":false,"QE Certified Executive Coach":true,"QE Certified Leadership Coach":false},
    location: "San Jose, CA, USA"
  },
  {
    name: "Sue Mann",
    business: "Sansu Rising Coaching",
    email: "sue.mann@sansurising.com",
    website: "https://www.sansurising.com",
    icf: "PCC",
    whyYou: "Sue specializes in coaching \"abrasive leaders\" — technically brilliant but interpersonally destructive leaders who are too valuable to lose, but too costly to keep. These leaders can be coached and can change with the right intervention.",
    services: ["1:1 Coaching (3- & 6-month engagements)", "Joint Sessions for Conflict Resolution", "Group Programs & Workshops"],
    specialties: "Coaching Abrasive Leaders; Coaching for Respect (conflict due to disrespectful conduct)",
    certs: "MBA (Cornell University), Professional Certified Coach (ICF), Board Certified Coach – Executive/Corporate/Business (CCE), Certified Positive Intelligence Coach, Community Model Resiliency Teacher (Trauma Resource Institute), Member: IAWBH, National Workplace Bullying Coalition, Boss Whispering Institute",
    methods: {"Inpowered® Corporate Coach":false,"Inpowered® Leadership Coach":false,"Inpowered® Onboarding Coach":false,"Inpowered® Team Coach":false,"Quantum 360®":false,"QE Certified Executive Coach":true,"QE Certified Leadership Coach":false},
    location: "Portland, OR, USA"
  }
];

let F = { icf:'all', method:'all', region:'all' };

const initials = n => n.split(' ').slice(0,2).map(x=>x[0]).join('');
const icfCls = i => !i?'icf-none':i.includes('MCC')?'icf-mcc':i.includes('PCC')?'icf-pcc':i.includes('ACC')?'icf-acc':'icf-none';

function renderCards(list) {
  document.getElementById('visibleCount').textContent = list.length;
  document.getElementById('totalCountCtrl').textContent = coaches.length;
  const empty = document.getElementById('emptyState');
  const grid = document.getElementById('coachGrid');
  if (!list.length) { grid.innerHTML=''; empty.style.display='block'; return; }
  empty.style.display='none';
  grid.innerHTML = list.map(c => {
    const icf = c.icfNote || c.icf || '-';
    const idx = coaches.indexOf(c);
    const active = Object.entries(c.methods).filter(([,v])=>v).map(([k])=>k);
    const pills = active.length ? active.map(m=>`<span class="tag method-tag">${m}</span>`).join('') : `<span style="font-size:11px;color:#9A9895;font-style:italic;font-weight:300">None on file</span>`;
    return `<div class="card">
      <div class="card-top">
        <div class="avatar">${initials(c.name)}</div>
        <div class="card-identity">
          <div class="card-name">${c.name}</div>
          <div class="card-business">${c.business}</div>
          ${c.location ? `<div class="card-location">&#128205; ${c.location}</div>` : ''}
          <span class="icf-badge ${icfCls(c.icf)}"><span class="icf-dot"></span>${icf}</span>
        </div>
      </div>
      <div class="card-body">
        <div class="whyyou">${c.whyYou}</div>
        <div class="section-label">QE / InPowered&#174; Licenses</div>
        <div class="tags">${pills}</div>
      </div>
      <div class="card-footer">
        <div class="contact-links">
          <a class="contact-link" href="mailto:${c.email}" onclick="event.stopPropagation()">Email</a>
          ${c.website ? `<a class="contact-link" href="${c.website}" target="_blank" onclick="event.stopPropagation()">Website</a>` : ''}
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
  document.getElementById('mBadge').innerHTML = `<span class="icf-badge ${icfCls(c.icf)}" style="display:inline-flex"><span class="icf-dot"></span>${c.icfNote||c.icf||'-'}</span>`;
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
    `<a class="mbtn mbtn-primary" href="mailto:${c.email}">Email ${c.name.split(' ')[0]}</a>` +
    (c.website ? `<a class="mbtn mbtn-ghost" href="${c.website}" target="_blank">Visit Website &#8594;</a>` : '');
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
