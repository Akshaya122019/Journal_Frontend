// ============================================================
//  DATA – 80 sample items
// ============================================================
const DATA = [
  { id:1,  slug:"JGEGI",                                    title:"Geotechnical Engineering and Ground Innovation",                          type:"journal",   subject:"Materials Science",                   access:"", year:2023, issn:"" },
  { id:2,  slug:"advanced-drug-delivery-reviews",           title:"Environmental Engineering, Sustainability, and Policy Studies",           type:"journal",   subject:"Pharmacology",                        access:"open",         year:2024, issn:"0169-409X" },
  { id:3,  slug:"algebra-and-its-applications",             title:"Algebra and Its Applications",             type:"textbook",  subject:"Mathematics",                         access:"subscription", year:2021, issn:"" },
  { id:4,  slug:"annual-review-of-astronomy",               title:"Annual Review of Astronomy",               type:"journal",   subject:"Physics",                             access:"subscription", year:2023, issn:"0066-4146" },
  { id:5,  slug:"applied-mathematics-and-computation",      title:"Applied Mathematics and Computation",      type:"journal",   subject:"Mathematics",                         access:"open",         year:2024, issn:"0096-3003" },
  { id:6,  slug:"artificial-intelligence",                  title:"Artificial Intelligence",                  type:"journal",   subject:"Computer Science",                    access:"subscription", year:2023, issn:"0004-3702" },
  { id:7,  slug:"atlas-of-human-anatomy",                   title:"Atlas of Human Anatomy",                   type:"reference", subject:"Medicine",                            access:"subscription", year:2022, issn:"" },
  { id:8,  slug:"atmospheric-environment",                  title:"Atmospheric Environment",                  type:"journal",   subject:"Environmental Science",               access:"open",         year:2024, issn:"1352-2310" },
  { id:9,  slug:"behavioural-brain-research",               title:"Behavioural Brain Research",               type:"journal",   subject:"Neuroscience",                        access:"subscription", year:2023, issn:"0166-4328" },
  { id:10, slug:"biochemistry-a-short-course",              title:"Biochemistry: A Short Course",             type:"textbook",  subject:"Biochemistry",                        access:"subscription", year:2022, issn:"" },
  { id:11, slug:"biochimica-et-biophysica-acta",            title:"Biochimica et Biophysica Acta",            type:"journal",   subject:"Biochemistry",                        access:"open",         year:2024, issn:"0006-3002" },
  { id:12, slug:"bioresource-technology",                   title:"Bioresource Technology",                   type:"journal",   subject:"Energy",                              access:"subscription", year:2023, issn:"0960-8524" },
  { id:13, slug:"brain-and-cognition",                      title:"Brain and Cognition",                      type:"journal",   subject:"Neuroscience",                        access:"open",         year:2024, issn:"0278-2626" },
  { id:14, slug:"business-ethics-reference",                title:"Business Ethics Reference",                type:"reference", subject:"Business Management",                 access:"subscription", year:2021, issn:"" },
  { id:15, slug:"cambridge-handbook-of-psychology",         title:"Cambridge Handbook of Psychology",         type:"reference", subject:"Psychology",                          access:"subscription", year:2022, issn:"" },
  { id:16, slug:"cell-host-and-microbe",                    title:"Cell Host & Microbe",                      type:"journal",   subject:"Immunology",                          access:"open",         year:2024, issn:"1931-3128" },
  { id:17, slug:"chemical-engineering-journal",             title:"Chemical Engineering Journal",             type:"journal",   subject:"Chemical Engineering",                access:"subscription", year:2023, issn:"1385-8947" },
  { id:18, slug:"coastal-engineering",                      title:"Coastal Engineering",                      type:"journal",   subject:"Engineering",                         access:"open",         year:2024, issn:"0378-3839" },
  { id:19, slug:"cognitive-psychology",                     title:"Cognitive Psychology",                     type:"journal",   subject:"Psychology",                          access:"subscription", year:2023, issn:"0010-0285" },
  { id:20, slug:"computational-fluid-dynamics",             title:"Computational Fluid Dynamics",             type:"textbook",  subject:"Engineering",                         access:"subscription", year:2020, issn:"" },
  { id:21, slug:"computer-networks-tanenbaum",              title:"Computer Networks (Tanenbaum)",            type:"textbook",  subject:"Computer Science",                    access:"subscription", year:2021, issn:"" },
  { id:22, slug:"data-structures-and-algorithms",           title:"Data Structures and Algorithms",           type:"textbook",  subject:"Computer Science",                    access:"open",         year:2022, issn:"" },
  { id:23, slug:"decision-support-systems",                 title:"Decision Support Systems",                 type:"journal",   subject:"Decision Sciences",                   access:"subscription", year:2023, issn:"0167-9236" },
  { id:24, slug:"deep-learning-goodfellow",                 title:"Deep Learning (Goodfellow)",               type:"book",      subject:"Computer Science",                    access:"open",         year:2020, issn:"" },
  { id:25, slug:"developmental-biology",                    title:"Developmental Biology",                    type:"journal",   subject:"Agricultural and Biological Sciences", access:"subscription", year:2024, issn:"0012-1606" },
  { id:26, slug:"digital-signal-processing",               title:"Digital Signal Processing",                type:"journal",   subject:"Engineering",                         access:"open",         year:2023, issn:"1051-2004" },
  { id:27, slug:"earth-and-planetary-science-letters",      title:"Earth and Planetary Science Letters",      type:"journal",   subject:"Earth and Planetary Sciences",        access:"open",         year:2024, issn:"0012-821X" },
  { id:28, slug:"ecological-economics",                     title:"Ecological Economics",                     type:"journal",   subject:"Environmental Science",               access:"subscription", year:2023, issn:"0921-8009" },
  { id:29, slug:"economics-of-education-review",            title:"Economics of Education Review",            type:"journal",   subject:"Economics",                           access:"subscription", year:2023, issn:"0272-7757" },
  { id:30, slug:"electrochimica-acta",                      title:"Electrochimica Acta",                      type:"journal",   subject:"Chemistry",                           access:"open",         year:2024, issn:"0013-4686" },
  { id:31, slug:"energy-policy",                            title:"Energy Policy",                            type:"journal",   subject:"Energy",                              access:"subscription", year:2023, issn:"0301-4215" },
  { id:32, slug:"environmental-science-and-technology",     title:"Environmental Science & Technology",       type:"journal",   subject:"Environmental Science",               access:"open",         year:2024, issn:"0013-936X" },
  { id:33, slug:"finance-and-stochastic",                   title:"Finance and Stochastic",                   type:"journal",   subject:"Economics",                           access:"subscription", year:2022, issn:"0949-2984" },
  { id:34, slug:"food-chemistry",                           title:"Food Chemistry",                           type:"journal",   subject:"Agricultural and Biological Sciences", access:"open",         year:2024, issn:"0308-8146" },
  { id:35, slug:"foundations-of-machine-learning",          title:"Foundations of Machine Learning",          type:"textbook",  subject:"Computer Science",                    access:"subscription", year:2021, issn:"" },
  { id:36, slug:"free-radical-biology-and-medicine",        title:"Free Radical Biology and Medicine",        type:"journal",   subject:"Biochemistry",                        access:"subscription", year:2023, issn:"0891-5849" },
  { id:37, slug:"frontiers-in-neuroscience",                title:"Frontiers in Neuroscience",                type:"journal",   subject:"Neuroscience",                        access:"open",         year:2024, issn:"1662-453X" },
  { id:38, slug:"geomorphology",                            title:"Geomorphology",                            type:"journal",   subject:"Earth and Planetary Sciences",        access:"subscription", year:2023, issn:"0169-555X" },
  { id:39, slug:"global-environmental-change",              title:"Global Environmental Change",              type:"journal",   subject:"Environmental Science",               access:"open",         year:2024, issn:"0959-3780" },
  { id:40, slug:"gut-microbiome-handbook",                  title:"Gut Microbiome Handbook",                  type:"reference", subject:"Medicine",                            access:"subscription", year:2022, issn:"" },
  { id:41, slug:"handbook-of-econometrics",                 title:"Handbook of Econometrics",                 type:"reference", subject:"Economics",                           access:"subscription", year:2020, issn:"" },
  { id:42, slug:"hazardous-materials-journal",              title:"Hazardous Materials Journal",              type:"journal",   subject:"Chemical Engineering",                access:"subscription", year:2023, issn:"0304-3894" },
  { id:43, slug:"human-brain-mapping",                      title:"Human Brain Mapping",                      type:"journal",   subject:"Neuroscience",                        access:"open",         year:2024, issn:"1065-9471" },
  { id:44, slug:"hydrometallurgy",                          title:"Hydrometallurgy",                          type:"journal",   subject:"Materials Science",                   access:"subscription", year:2023, issn:"0304-386X" },
  { id:45, slug:"ieee-transactions-on-information-theory",  title:"IEEE Transactions on Information Theory",  type:"journal",   subject:"Computer Science",                    access:"subscription", year:2024, issn:"0018-9448" },
  { id:46, slug:"immunology-letters",                       title:"Immunology Letters",                       type:"journal",   subject:"Immunology",                          access:"subscription", year:2023, issn:"0165-2478" },
  { id:47, slug:"inorganic-chemistry-essentials",           title:"Inorganic Chemistry Essentials",           type:"textbook",  subject:"Chemistry",                           access:"subscription", year:2021, issn:"" },
  { id:48, slug:"international-journal-of-heat-and-mass-transfer", title:"International Journal of Heat and Mass Transfer", type:"journal", subject:"Engineering", access:"open", year:2024, issn:"0017-9310" },
  { id:49, slug:"journal-of-alloys-and-compounds",          title:"Journal of Alloys and Compounds",          type:"journal",   subject:"Materials Science",                   access:"open",         year:2024, issn:"0925-8388" },
  { id:50, slug:"journal-of-applied-psychology",            title:"Journal of Applied Psychology",            type:"journal",   subject:"Psychology",                          access:"subscription", year:2023, issn:"0021-9010" },
  { id:51, slug:"journal-of-biological-chemistry",          title:"Journal of Biological Chemistry",          type:"journal",   subject:"Biochemistry",                        access:"open",         year:2024, issn:"0021-9258" },
  { id:52, slug:"journal-of-cleaner-production",            title:"Journal of Cleaner Production",            type:"journal",   subject:"Environmental Science",               access:"open",         year:2024, issn:"0959-6526" },
  { id:53, slug:"kidney-international",                     title:"Kidney International",                     type:"journal",   subject:"Medicine",                            access:"subscription", year:2023, issn:"0085-2538" },
  { id:54, slug:"knowledge-based-systems",                  title:"Knowledge-Based Systems",                  type:"journal",   subject:"Computer Science",                    access:"subscription", year:2023, issn:"0950-7051" },
  { id:55, slug:"lancet-oncology",                          title:"Lancet Oncology",                          type:"journal",   subject:"Medicine",                            access:"open",         year:2024, issn:"1470-2045" },
  { id:56, slug:"linear-algebra-done-right",                title:"Linear Algebra Done Right",                type:"textbook",  subject:"Mathematics",                         access:"subscription", year:2021, issn:"" },
  { id:57, slug:"machine-learning-an-applied-mathematics",  title:"Machine Learning: An Applied Mathematics", type:"textbook",  subject:"Mathematics",                         access:"open",         year:2022, issn:"" },
  { id:58, slug:"marine-biology",                           title:"Marine Biology",                           type:"journal",   subject:"Agricultural and Biological Sciences", access:"open",         year:2024, issn:"0025-3162" },
  { id:59, slug:"mathematical-methods-for-physics",         title:"Mathematical Methods for Physics",         type:"textbook",  subject:"Physics",                             access:"subscription", year:2021, issn:"" },
  { id:60, slug:"mechanics-of-materials",                   title:"Mechanics of Materials",                   type:"journal",   subject:"Engineering",                         access:"subscription", year:2023, issn:"0167-6636" },
  { id:61, slug:"medical-reference-compendium",             title:"Medical Reference Compendium",             type:"reference", subject:"Medicine",                            access:"subscription", year:2022, issn:"" },
  { id:62, slug:"nature",                                   title:"Nature",                                   type:"journal",   subject:"Agricultural and Biological Sciences", access:"subscription", year:2024, issn:"0028-0836" },
  { id:63, slug:"neural-networks",                          title:"Neural Networks",                          type:"journal",   subject:"Computer Science",                    access:"open",         year:2024, issn:"0893-6080" },
  { id:64, slug:"neuroimage",                               title:"Neuroimage",                               type:"journal",   subject:"Neuroscience",                        access:"subscription", year:2023, issn:"1053-8119" },
  { id:65, slug:"numerical-methods-for-engineers",          title:"Numerical Methods for Engineers",          type:"textbook",  subject:"Engineering",                         access:"subscription", year:2020, issn:"" },
  { id:66, slug:"nursing-outlook",                          title:"Nursing Outlook",                          type:"journal",   subject:"Nursing",                             access:"open",         year:2024, issn:"0029-6554" },
  { id:67, slug:"nutrition-research",                       title:"Nutrition Research",                       type:"journal",   subject:"Medicine",                            access:"subscription", year:2023, issn:"0271-5317" },
  { id:68, slug:"optics-express",                           title:"Optics Express",                           type:"journal",   subject:"Physics",                             access:"open",         year:2024, issn:"1094-4087" },
  { id:69, slug:"organic-chemistry-clayden",                title:"Organic Chemistry (Clayden)",              type:"textbook",  subject:"Chemistry",                           access:"subscription", year:2021, issn:"" },
  { id:70, slug:"oxford-handbook-of-clinical-medicine",     title:"Oxford Handbook of Clinical Medicine",     type:"reference", subject:"Medicine",                            access:"subscription", year:2023, issn:"" },
  { id:71, slug:"pattern-recognition",                      title:"Pattern Recognition",                      type:"journal",   subject:"Computer Science",                    access:"subscription", year:2023, issn:"0031-3203" },
  { id:72, slug:"physical-review-letters",                  title:"Physical Review Letters",                  type:"journal",   subject:"Physics",                             access:"open",         year:2024, issn:"0031-9007" },
  { id:73, slug:"physics-of-fluids",                        title:"Physics of Fluids",                        type:"journal",   subject:"Physics",                             access:"subscription", year:2023, issn:"1070-6631" },
  { id:74, slug:"plant-science",                            title:"Plant Science",                            type:"journal",   subject:"Agricultural and Biological Sciences", access:"open",         year:2024, issn:"0168-9452" },
  { id:75, slug:"quantum-computing-a-primer",               title:"Quantum Computing: A Primer",              type:"book",      subject:"Physics",                             access:"open",         year:2023, issn:"" },
  { id:76, slug:"renewable-energy",                         title:"Renewable Energy",                         type:"journal",   subject:"Energy",                              access:"open",         year:2024, issn:"0960-1481" },
  { id:77, slug:"research-policy",                          title:"Research Policy",                          type:"journal",   subject:"Social Sciences",                     access:"subscription", year:2023, issn:"0048-7333" },
  { id:78, slug:"science-of-the-total-environment",         title:"Science of the Total Environment",         type:"journal",   subject:"Environmental Science",               access:"open",         year:2024, issn:"0048-9697" },
  { id:79, slug:"social-science-and-medicine",              title:"Social Science & Medicine",                type:"journal",   subject:"Social Sciences",                     access:"subscription", year:2023, issn:"0277-9536" },
  { id:80, slug:"soil-biology-and-biochemistry",            title:"Soil Biology and Biochemistry",            type:"journal",   subject:"Agricultural and Biological Sciences", access:"open",         year:2024, issn:"0038-0717" },
  { id:81, slug:"statistical-learning-with-sparsity",       title:"Statistical Learning with Sparsity",       type:"book",      subject:"Mathematics",                         access:"open",         year:2021, issn:"" },
  { id:82, slug:"structural-engineering-reference",         title:"Structural Engineering Reference",         type:"reference", subject:"Engineering",                         access:"subscription", year:2022, issn:"" },
  { id:83, slug:"tetrahedron",                              title:"Tetrahedron",                              type:"journal",   subject:"Chemistry",                           access:"subscription", year:2023, issn:"0040-4020" },
  { id:84, slug:"the-lancet",                               title:"The Lancet",                               type:"journal",   subject:"Medicine",                            access:"open",         year:2024, issn:"0140-6736" },
  { id:85, slug:"toxicology-and-applied-pharmacology",      title:"Toxicology and Applied Pharmacology",      type:"journal",   subject:"Pharmacology",                        access:"subscription", year:2023, issn:"0041-008X" },
  { id:86, slug:"ultrasound-in-medicine-and-biology",       title:"Ultrasound in Medicine and Biology",       type:"journal",   subject:"Medicine",                            access:"subscription", year:2023, issn:"0301-5629" },
  { id:87, slug:"urban-studies",                            title:"Urban Studies",                            type:"journal",   subject:"Social Sciences",                     access:"subscription", year:2023, issn:"0042-0980" },
  { id:88, slug:"vaccine",                                  title:"Vaccine",                                  type:"journal",   subject:"Immunology",                          access:"open",         year:2024, issn:"0264-410X" },
  { id:89, slug:"veterinary-microbiology",                  title:"Veterinary Microbiology",                  type:"journal",   subject:"Veterinary",                          access:"subscription", year:2023, issn:"0378-1135" },
  { id:90, slug:"vlsi-design-reference",                    title:"VLSI Design Reference",                    type:"reference", subject:"Engineering",                         access:"subscription", year:2022, issn:"" },
  { id:91, slug:"water-research",                           title:"Water Research",                           type:"journal",   subject:"Environmental Science",               access:"open",         year:2024, issn:"0043-1354" },
  { id:92, slug:"world-development",                        title:"World Development",                        type:"journal",   subject:"Social Sciences",                     access:"subscription", year:2023, issn:"0305-750X" },
  { id:93, slug:"x-ray-crystallography-textbook",           title:"X-Ray Crystallography Textbook",           type:"textbook",  subject:"Chemistry",                           access:"subscription", year:2021, issn:"" },
  { id:94, slug:"year-book-of-psychiatry",                  title:"Year Book of Psychiatry",                  type:"reference", subject:"Medicine",                            access:"subscription", year:2022, issn:"" },
  { id:95, slug:"zebrafish-genetics-handbook",              title:"Zebrafish Genetics Handbook",              type:"reference", subject:"Biochemistry",                        access:"subscription", year:2023, issn:"" },
  { id:96, slug:"zoological-journal-of-the-linnean-society",title:"Zoological Journal of the Linnean Society",type:"journal",   subject:"Agricultural and Biological Sciences", access:"open",         year:2024, issn:"0024-4082" },
];

// ============================================================
//  STATE
// ============================================================
const state = {
  query:       '',
  types:       [],       // e.g. ['journal','book']
  subject:     '',
  access:      [],
  year:        '',
  alpha:       '',       // '' = all
  sort:        'alpha-asc',
  page:        1,
  perPage:     20,
};

const typeIconMap = {
  journal:   { icon: 'bi-journal-text',    cls: 'icon-journal',   tag: 'tag-journal',   label: 'Journal' },
  book:      { icon: 'bi-book',            cls: 'icon-book',      tag: 'tag-book',      label: 'Book' },
  textbook:  { icon: 'bi-book-half',       cls: 'icon-textbook',  tag: 'tag-textbook',  label: 'Textbook' },
  reference: { icon: 'bi-bookmarks-fill',  cls: 'icon-reference', tag: 'tag-reference', label: 'Reference Book' },
};

// ============================================================
//  CORE FILTER HELPER  – apply every filter except the ones listed in `skip`
// ============================================================
function filterData(skip) {
  skip = skip || [];
  let results = DATA.slice();

  if (!skip.includes('query') && state.query) {
    const q = state.query.toLowerCase();
    results = results.filter(d =>
      d.title.toLowerCase().includes(q) ||
      d.subject.toLowerCase().includes(q) ||
      (d.issn && d.issn.includes(q))
    );
  }

  if (!skip.includes('scope')) {
    const scope = $('#searchScope').val();
    if (scope && scope !== 'all') {
      results = results.filter(d => d.type === scope);
    }
  }

  if (!skip.includes('type') && state.types.length) {
    results = results.filter(d => state.types.includes(d.type));
  }

  if (!skip.includes('subject') && state.subject) {
    results = results.filter(d => d.subject === state.subject);
  }

  if (!skip.includes('access') && state.access.length) {
    results = results.filter(d => state.access.includes(d.access));
  }

  if (!skip.includes('year') && state.year) {
    if (state.year === 'before2018') {
      results = results.filter(d => d.year < 2018);
    } else {
      results = results.filter(d => d.year === parseInt(state.year));
    }
  }

  if (!skip.includes('alpha') && state.alpha) {
    results = results.filter(d => d.title.toUpperCase().startsWith(state.alpha));
  }

  return results;
}

// ============================================================
//  FILTER & SORT  (full pipeline used for rendering)
// ============================================================
function applyFilters() {
  let results = filterData();   // apply ALL filters

  // Sort
  results.sort((a, b) => {
    if (state.sort === 'alpha-asc')  return a.title.localeCompare(b.title);
    if (state.sort === 'alpha-desc') return b.title.localeCompare(a.title);
    if (state.sort === 'type')       return a.type.localeCompare(b.type) || a.title.localeCompare(b.title);
    return a.title.localeCompare(b.title);
  });

  return results;
}

// ============================================================
//  COUNT FACETS
//  Each facet counts items matching all OTHER active filters
//  (so counts stay meaningful as you combine filters)
// ============================================================
function updateFacetCounts() {
  // Type counts: skip the type filter so all types are always counted
  const baseForType = filterData(['type']);
  $('#countJournal').text(baseForType.filter(d => d.type === 'journal').length);
  $('#countBook').text(baseForType.filter(d => d.type === 'book').length);
  $('#countTextbook').text(baseForType.filter(d => d.type === 'textbook').length);
  $('#countReference').text(baseForType.filter(d => d.type === 'reference').length);

  // Access counts: skip the access filter
  const baseForAccess = filterData(['access']);
  $('#countOA').text(baseForAccess.filter(d => d.access === 'open').length);
  $('#countSub').text(baseForAccess.filter(d => d.access === 'subscription').length);
}

// ============================================================
//  RENDER
// ============================================================
function renderResults() {
  const results = applyFilters();
  state.page = 1;
  updateFacetCounts();
  updateActiveFilterChips();
  renderList(results);
  // Pass results WITHOUT the alpha filter so all valid letters remain clickable
  // even when a specific letter is currently selected
  updateAlphaCounts(filterData(['alpha']));
}

function renderList(results) {
  const $list = $('#itemsList');
  const $none = $('#noResults');
  const $btn  = $('#loadMoreBtn');

  $list.empty();

  if (!results.length) {
    $none.removeClass('d-none');
    $btn.addClass('d-none');
    $('#showCount').text(0);
    $('#totalCount').text(0);
    return;
  }
  $none.addClass('d-none');

  const toShow = results.slice(0, state.page * state.perPage);
  $('#showCount').text(toShow.length);
  $('#totalCount').text(results.length);

  // Group by first letter
  const groups = {};
  toShow.forEach(item => {
    const letter = item.title[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(item);
  });

  Object.keys(groups).sort().forEach(letter => {
    const $group = $('<div class="alpha-group mb-3"></div>');
    $group.append(`<div class="alpha-group-head">${letter} <span class="group-count">${groups[letter].length} result${groups[letter].length!==1?'s':''}</span></div>`);
    const $items = $('<div class="items-list"></div>');
    groups[letter].forEach(item => {
      $items.append(buildCard(item));
    });
    $group.append($items);
    $list.append($group);
  });

  if (toShow.length < results.length) {
    $btn.removeClass('d-none');
    $btn.off('click').on('click', function() {
      state.page++;
      const more = results.slice(0, state.page * state.perPage);
      $('#showCount').text(more.length);
      const lastToShow = results.slice((state.page-1)*state.perPage, state.page*state.perPage);
      // Append new items
      lastToShow.forEach(item => {
        const letter = item.title[0].toUpperCase();
        const $existingGroup = $list.find(`.alpha-group-head:contains("${letter}")`).closest('.alpha-group');
        if ($existingGroup.length) {
          $existingGroup.find('.items-list').append(buildCard(item));
          $existingGroup.find('.group-count').text(
            parseInt($existingGroup.find('.group-count').text()) + 1 + ' result' + (parseInt($existingGroup.find('.group-count').text()) + 1 !== 1 ? 's' : '')
          );
        } else {
          const $group = $('<div class="alpha-group mb-3"></div>');
          $group.append(`<div class="alpha-group-head">${letter} <span class="group-count">1 result</span></div>`);
          const $items = $('<div class="items-list"></div>');
          $items.append(buildCard(item));
          $group.append($items);
          $list.append($group);
        }
      });
      if (more.length >= results.length) $btn.addClass('d-none');
    });
  } else {
    $btn.addClass('d-none');
  }
}

function buildCard(item) {
  const ti = typeIconMap[item.type];
  const accessBadge = item.access === 'open'
    ? '<span class="open-access">🔓 Open Access</span>'
    : '';
  return `
    <a class="item-card" href="detail/${item.slug}.html">
      <div class="card-icon ${ti.cls}">
        <i class="bi ${ti.icon}"></i>
      </div>
      <div class="card-body">
        <div class="card-title">${item.title}</div>
        <div class="card-meta">
          <span class="type-tag ${ti.tag}">${ti.label}</span>
          ${item.issn ? `<span class="meta-sep"></span><span>ISSN: ${item.issn}</span>` : ''}
          <span class="meta-sep"></span>
          <span>${item.subject}</span>
          <span class="meta-sep"></span>
          <span>${item.year}</span>
        </div>
      </div>
      <div class="card-right">
        ${accessBadge}
        <i class="bi bi-chevron-right card-arrow"></i>
      </div>
    </a>
  `;
}

// ============================================================
//  ALPHABET PANEL
// ============================================================
function buildAlphaPanel() {
  const $container = $('#alphaBtns');
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(letter => {
    const btn = $(`<button class="alpha-btn" data-letter="${letter}">${letter}</button>`);
    $container.append(btn);
  });
}

function updateAlphaCounts(currentResults) {
  const available = new Set(currentResults.map(d => d.title[0].toUpperCase()));
  $('#alphaBtns .alpha-btn').each(function() {
    const l = $(this).data('letter');
    if (available.has(l)) {
      $(this).removeClass('disabled');
    } else {
      $(this).addClass('disabled');
    }
  });
}

// ============================================================
//  ACTIVE FILTER CHIPS
// ============================================================
function updateActiveFilterChips() {
  const chips = [];

  if (state.query) chips.push({ label: `"${state.query}"`, key: 'query' });
  state.types.forEach(t => chips.push({ label: typeIconMap[t].label, key: 'type', val: t }));
  if (state.subject) chips.push({ label: state.subject, key: 'subject' });
  state.access.forEach(a => chips.push({ label: a === 'open' ? 'Open Access' : 'Subscription', key: 'access', val: a }));
  if (state.year) chips.push({ label: state.year === 'before2018' ? 'Before 2018' : state.year, key: 'year' });
  if (state.alpha) chips.push({ label: `Letter: ${state.alpha}`, key: 'alpha' });

  const $wrap = $('#activeFiltersWrap');
  const $chips = $('#activeFilterChips');
  $chips.empty();

  if (!chips.length) {
    $wrap.addClass('d-none');
    return;
  }
  $wrap.removeClass('d-none');

  chips.forEach(c => {
    const $chip = $(`
      <span class="filter-chip">
        ${c.label}
        <span class="remove-chip" data-key="${c.key}" data-val="${c.val || ''}">&times;</span>
      </span>
    `);
    $chips.append($chip);
  });
}

function removeChip(key, val) {
  if (key === 'query')   { state.query = ''; $('#mainSearch').val(''); }
  if (key === 'type')    { state.types = state.types.filter(t => t !== val); $(`.type-filter[value="${val}"]`).prop('checked', false); }
  if (key === 'subject') { state.subject = ''; $('#subjectFilter').val(''); }
  if (key === 'access')  { state.access = state.access.filter(a => a !== val); $(`.access-filter[value="${val}"]`).prop('checked', false); }
  if (key === 'year')    { state.year = ''; $('#yearFilter').val(''); }
  if (key === 'alpha')   { state.alpha = ''; $('#alphaBtns .alpha-btn').removeClass('active'); $('#alphaAll').addClass('active'); }
  renderResults();
}

function clearAll() {
  state.query = ''; state.types = []; state.subject = '';
  state.access = []; state.year = ''; state.alpha = '';
  $('#mainSearch').val('');
  $('.type-filter, .access-filter').prop('checked', false);
  $('#subjectFilter, #yearFilter').val('');
  $('#alphaBtns .alpha-btn').removeClass('active');
  $('#alphaAll').addClass('active');
  renderResults();
}

// ============================================================
//  COLLAPSIBLE FILTER SECTIONS
// ============================================================
function initCollapsible() {
  $('.filter-section-title').on('click', function() {
    const targetId = $(this).data('target');
    const $target = $('#' + targetId);
    $target.slideToggle(180);
    $(this).toggleClass('collapsed');
  });
}

// ============================================================
//  JQUERY EVENT BINDING
// ============================================================
$(function() {

  // Show skeleton then render
  setTimeout(() => {
    $('#skeletonLoader').hide();
    buildAlphaPanel();
    renderResults();
  }, 600);

  // Search input (live)
  let debounceTimer;
  $('#mainSearch').on('input', function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      state.query = $(this).val().trim();
      state.alpha = '';
      $('#alphaBtns .alpha-btn').removeClass('active');
      $('#alphaAll').addClass('active');
      renderResults();
    }, 280);
  });

  // Search button
  $('#searchBtn').on('click', function() {
    state.query = $('#mainSearch').val().trim();
    state.alpha = '';
    $('#alphaBtns .alpha-btn').removeClass('active');
    $('#alphaAll').addClass('active');
    renderResults();
  });

  // Enter key
  $('#mainSearch').on('keydown', function(e) {
    if (e.key === 'Enter') $('#searchBtn').trigger('click');
  });

  // Quick links
  $('.quick-link').on('click', function() {
    const q = $(this).text();
    $('#mainSearch').val(q);
    state.query = q;
    renderResults();
  });

  // Scope change
  $('#searchScope').on('change', function() { renderResults(); });

  // Type checkboxes
  $(document).on('change', '.type-filter', function() {
    const val = $(this).val();
    if ($(this).is(':checked')) {
      if (!state.types.includes(val)) state.types.push(val);
    } else {
      state.types = state.types.filter(t => t !== val);
    }
    renderResults();
  });

  // Subject dropdown
  $('#subjectFilter').on('change', function() {
    state.subject = $(this).val();
    renderResults();
  });

  // Access checkboxes
  $(document).on('change', '.access-filter', function() {
    const val = $(this).val();
    if ($(this).is(':checked')) {
      if (!state.access.includes(val)) state.access.push(val);
    } else {
      state.access = state.access.filter(a => a !== val);
    }
    renderResults();
  });

  // Year
  $('#yearFilter').on('change', function() {
    state.year = $(this).val();
    renderResults();
  });

  // Sort
  $('#sortSelect').on('change', function() {
    state.sort = $(this).val();
    renderResults();
  });

  // Alphabet buttons — check .disabled inside handler, NOT in the selector
  // Using :not(.disabled) in the selector caused letters to stay unclickable
  // after updateAlphaCounts marked them disabled on a previous render pass
  $(document).on('click', '.alpha-btn', function() {
    if ($(this).hasClass('disabled')) return;   // safely ignore truly disabled letters
    const letter = $(this).data('letter');
    if (state.alpha === letter) {
      // clicking the active letter again → deselect (show all)
      state.alpha = '';
      $(this).removeClass('active');
      $('#alphaAll').addClass('active');
    } else {
      state.alpha = letter;
      $('#alphaBtns .alpha-btn').removeClass('active');
      $('#alphaAll').removeClass('active');
      $(this).addClass('active');
    }
    renderResults();
  });

  // Alpha "All"
  $('#alphaAll').on('click', function() {
    state.alpha = '';
    $(this).addClass('active');
    $('#alphaBtns .alpha-btn').removeClass('active');
    renderResults();
  });

  // Clear all
  $('#clearAllFilters, #clearAllFiltersBtn').on('click', clearAll);

  // Remove chip
  $(document).on('click', '.remove-chip', function() {
    removeChip($(this).data('key'), $(this).data('val'));
  });

  // View toggle
  $('#listViewBtn').on('click', function() {
    $(this).addClass('active');
    $('#gridViewBtn').removeClass('active');
    $('#itemsArea').removeClass('grid-view');
  });
  $('#gridViewBtn').on('click', function() {
    $(this).addClass('active');
    $('#listViewBtn').removeClass('active');
    $('#itemsArea').addClass('grid-view');
  });

  // Mobile sidebar
  $('#mobileFilterBtn').on('click', function() {
    $('#sidebar').addClass('open');
    $('#sidebarBackdrop').addClass('show');
    $('body').css('overflow', 'hidden');
  });
  $('#closeSidebar, #sidebarBackdrop').on('click', function() {
    $('#sidebar').removeClass('open');
    $('#sidebarBackdrop').removeClass('show');
    $('body').css('overflow', '');
  });

  // Collapsible filter sections
  initCollapsible();
});
