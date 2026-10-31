// SATRUS ANA SAYFA DİNAMİK MOTORU (home-dynamic.js)

const DEFAULT_HOME_DATA = {
    stats: [
        { number: 90, suffix: '+', label: 'Countries Served' },
        { number: 45, suffix: '+', label: 'Years of Experience' },
        { number: 500, suffix: '+', label: 'MW in total projects' }
    ],
    logos: [
        { name: 'SOLIMPEKS', img: '' },
        { name: 'KAWJN', img: '' },
        { name: 'MERCEDES-EQ', img: '' },
        { name: 'SHELL RECHARGE', img: '' },
        { name: 'OIPSUM GRID', img: '' }
    ],
    whyTitle: 'But, why would you\nwant to work with us?',
    whySub: 'From Google ads, to Meta ads, to TikTok ads, and even content creation, we\'ve got you covered on everything front.',
    whyItems: [
        {
            title: 'Funnel Audit',
            desc: "We'll start by analyzing your sales funnel and seeing what's holding you back.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.7"><circle cx="10" cy="8" r="4"/><path d="M4 20c0-3.3 2.7-6 6-6"/><circle cx="17" cy="17" r="3"/><path d="M19.5 19.5L22 22"/></svg>`
        },
        {
            title: 'Campaign Setup',
            desc: 'Then, with your business goals in mind, we will set up the advertising campaigns.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.7"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18"/><circle cx="12" cy="14" r="3"/></svg>`
        },
        {
            title: 'Maximize Profit',
            desc: "We'll then work towards driving the cost per action down to maximize profit.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.7"><path d="M12 3l3 4H9l3-4z"/><path d="M6 14c0-3.3 2.7-7 6-7s6 3.7 6 7a6 6 0 01-12 0z"/><path d="M12 11v6M10 13h4"/></svg>`
        }
    ],
    testimonials: [
        {
            brand: 'SAVANNAH',
            quote: '"Conversion absolutely blew the previous agency we were working with out of the water."',
            author: 'Naomi Campbell',
            role: 'CEO of Wednesday',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            thumb: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
        },
        {
            brand: 'Amsterdam',
            quote: '"These guy don\'t mess around. we saw results from month one. If you want to grow your business, look no further."',
            author: 'Tony Gomez',
            role: 'Founder of Thursday',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            thumb: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
        },
        {
            brand: 'Aura',
            quote: '"From where we were before Conversion to where we are now; it\'s absolutely apart."',
            author: 'Charlotte Johansen',
            role: 'Founder of Tuesday',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            thumb: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
        }
    ],
    whatWeDoGroups: [
        {
            groupTitle: 'Manufacturing & Setup',
            groupSub: 'We build what we engineer, in our own facilities, for your brand or your factory.',
            items: [
                { icon: '🏭', title: 'OEM Hardware Manufacturing', desc: 'From single parts to full charging systems, we manufacture EV hardware in-house, for your brand.' },
                { icon: '📐', title: 'Custom Engineering and R&D', desc: 'We design, prototype, and develop custom hardware and energy systems to your exact specifications.' },
                { icon: '⚙️', title: 'Factory Setup and Training', desc: 'We set up your EV charger plant, transfer the technology, and train your workforce to run it well.' }
            ]
        },
        {
            groupTitle: 'Energy Infrastructure',
            groupSub: 'Complete energy systems, deployed end to end and ready to carry real-world loads.',
            items: [
                { icon: '🔋', title: 'Commercial Battery Storage', desc: 'Large-scale BESS for utilities, microgrids, and commercial peak shaving, integrated or standalone.' },
                { icon: '⚡', title: 'Turnkey EV Charger Rollout', desc: 'End-to-end EV charging networks, from public hubs to off-grid stations, with regulatory approvals.' },
                { icon: '☀️', title: 'Commercial Solar Solutions', desc: 'Rooftop and ground-mounted solar, engineered for maximum generation and reliable grid performance.' }
            ]
        },
        {
            groupTitle: 'Software & Consulting',
            groupSub: 'Software that runs your energy assets, and audits that keep your hardware honest.',
            items: [
                { icon: '💻', title: 'Custom Energy & EV Software Solutions', desc: 'Proprietary management platforms (CSMS) and custom software development—from solar AI to predictive maintenance.' },
                { icon: '🛡️', title: 'Engineering Audits & Consulting', desc: 'Independent technical validation, third-party quality audits for third-party hardware, and compliance.' }
            ]
        }
    ],
    productsShowcase: [
        { slot: 'prod_card_1', title: 'Avanos (AC) Chargers', desc: 'AC chargers from 3.3 kW socket units to dual-display commercial stations, engineered for daily reliability.', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=700&q=80' },
        { slot: 'prod_card_2', title: 'Milas (DC) Chargers', desc: 'DC chargers from compact cabinets to megawatt systems, engineered in Türkiye for extreme climates.', img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=700&q=80' },
        { slot: 'prod_card_3', title: 'Dispenser Systems', desc: 'DC dispensers for branded hubs, agriculture, heavy machinery, and MCS trucks.', img: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=700&q=80' },
        { slot: 'prod_card_4', title: 'Off-Grid Chargers', desc: 'Solar + BESS integrated autonomous charging stations for remote highways and defense sites.', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=700&q=80' },
        { slot: 'prod_card_5', title: 'Mobile EV Chargers', desc: 'We turn vans, trucks, and pickups into rescue chargers, built-in or roll-out.', img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=700&q=80' },
        { slot: 'prod_card_6', title: 'Charging Cables', desc: 'Liquid-cooled and standard TPU high-current charging cables, connectors and holsters.', img: 'https://images.unsplash.com/photo-1617886322168-72b886573c35?auto=format&fit=crop&w=700&q=80' }
    ],
    processTabs: [
        {
            tabName: 'EV Charging Rollout',
            steps: [
                { title: 'Consultation', desc: 'We listen, understand your goals, and assess your project needs.' },
                { title: 'Planning & Estimate', desc: 'We create a detailed plan and transparent estimate with no surprises.' },
                { title: 'Build & Manage', desc: 'Our team builds with care while we manage every detail and keep you updated.' },
                { title: 'Final Walkthrough', desc: 'We review every detail together to ensure your complete satisfaction.' }
            ]
        },
        {
            tabName: 'Turnkey Factory Setup',
            steps: [
                { title: 'Feasibility & Line Design', desc: 'Complete plant layout, BOM structuring, and capacity planning.' },
                { title: 'Machinery & Tooling', desc: 'Assembly lines, testing rigs, and calibration equipment installation.' },
                { title: 'Know-How Transfer & Training', desc: 'Full engineer and operator training on your factory floor.' },
                { title: 'Commissioning & First Batch', desc: 'Certification and live production ramp-up together with our team.' },
                { title: 'Long-Term Supply Support', desc: 'Continuous component supply and firmware updates.' }
            ]
        },
        {
            tabName: 'Solar & BESS Grid',
            steps: [
                { title: 'Grid Load Simulation', desc: 'Analyzing peak shaving and storage sizing for your facility.' },
                { title: 'Containerized BESS Production', desc: 'Custom LFP battery racks and EMS software integration.' },
                { title: 'Field Energization', desc: 'On-site high-voltage commissioning and utility synchronization.' }
            ]
        },
        {
            tabName: 'Custom OCPP Software',
            steps: [
                { title: 'Architecture & Protocol Spec', desc: 'OCPP 1.6J / 2.0.1 backend and payment gateway design.' },
                { title: 'White-Label Web & Mobile App', desc: 'Custom branded operator dashboard and driver apps.' },
                { title: '24/7 Telemetry & Load Balancing', desc: 'Automated smart grid balancing and live station monitoring.' }
            ]
        }
    ],
    faqTabs: [
        {
            tabName: 'General & Hardware',
            items: [
                { q: 'How can SATRUS energy systems help my business?', a: 'Our hardware and AI energy management platforms reduce grid dependency, cut peak demand charges, and provide turnkey EV charging revenue.' },
                { q: 'Is the CSMS / OCPP system difficult to integrate?', a: 'No! Our solutions are designed for seamless integration with your existing ERP, payment gateways, and any OCPP-compliant charger.' },
                { q: 'What industries can benefit from SATRUS?', a: 'CPOs, fleet operators, industrial zones, defense facilities, hotels, and governments building national charging corridors.' },
                { q: 'Do I need technical knowledge to run a factory setup?', a: 'Not at all. We transfer 100% of the know-how, SOP documentation, test stations, and train your local engineers from scratch.' },
                { q: 'What kind of support do you offer?', a: '24/7 remote telemetry diagnostics, OTA firmware updates, and on-site field engineering support across 90+ countries.' }
            ]
        },
        {
            tabName: 'Factory & OEM',
            items: [
                { q: 'How long does a turnkey EV charger factory setup take?', a: 'Depending on capacity, we take an empty industrial building to a working production line in 90 to 150 days.' },
                { q: 'Can you white-label AC and DC chargers for our brand?', a: 'Yes, we customize enclosures, UI screens, and firmware under your brand identity.' }
            ]
        },
        {
            tabName: 'BESS & Off-Grid',
            items: [
                { q: 'Do your systems work in extreme temperatures and conflict zones?', a: 'Yes. Our hardware is field-proven in harsh desert heat, unstable grids, and remote off-grid sites.' }
            ]
        }
    ]
};

let homeData = JSON.parse(JSON.stringify(DEFAULT_HOME_DATA));
let currentProcessTabIdx = 0;
let currentFaqTabIdx = 0;
let currentTestiSlide = 0;

// 1. TEK TUŞLU EN / TR DİL DEĞİŞTİRİCİ (BÜYÜK HARF TR/EN UYUMLU)
window.toggleSingleLanguage = function() {
    const current = (localStorage.getItem('satrus_lang') || 'EN').toUpperCase();
    const next = current === 'EN' ? 'TR' : 'EN';
    localStorage.setItem('satrus_lang', next);
    if (typeof setLanguage === 'function') {
        setLanguage(next);
    }
    updateSingleLangButtonText();
};

function updateSingleLangButtonText() {
    const btn = document.getElementById('singleLangToggleBtn');
    if (!btn) return;
    const current = (localStorage.getItem('satrus_lang') || 'EN').toUpperCase();
    btn.textContent = current;
}

// 2. GITHUB / SITE-MEDIA / HOME-CONTENT VERİLERİNİ ÇEKME
async function loadDynamicHomeContent() {
    updateSingleLangButtonText();
    try {
        const cached = localStorage.getItem('satrus_home_content_cache');
        if (cached) {
            homeData = { ...DEFAULT_HOME_DATA, ...JSON.parse(cached) };
            renderAllHomeSections();
        }
    } catch (e) {}

    try {
        const res = await fetch(`home-content.json?nocache=${Date.now()}`, { cache: 'no-store' });
        if (res.ok) {
            const remoteData = await res.json();
            if (remoteData && Object.keys(remoteData).length > 0) {
                homeData = { ...DEFAULT_HOME_DATA, ...remoteData };
                localStorage.setItem('satrus_home_content_cache', JSON.stringify(homeData));
            }
        }
    } catch (e) {}

    renderAllHomeSections();
    if (typeof applySiteMediaToDOM === 'function') applySiteMediaToDOM();
}

function renderAllHomeSections() {
    renderMarqueeAndStats();
    renderWhySection();
    renderTestimonialsCarousel();
    renderWhatWeDo();
    renderProductsShowcase();
    renderProcessSection();
    renderFaqSection();

    // Dinamik bölümler yüklendikten sonra seçili dili (TR/EN) uygula
    const activeLang = (localStorage.getItem('satrus_lang') || 'EN').toUpperCase();
    if (typeof setLanguage === 'function') {
        setLanguage(activeLang);
    }
}

// 3. KAYAR LOGOLAR VE ANİMASYONLU SAYAÇLAR (90+, 45+, 500+)
function renderMarqueeAndStats() {
    const logos = (homeData.logos && homeData.logos.length > 0) ? homeData.logos : DEFAULT_HOME_DATA.logos;
    // Sonsuz kayma için logoları 4 kez çoğalt
    const repeated = [...logos, ...logos, ...logos, ...logos];
    const html = repeated.map(l => {
        if (l.img && l.img.trim() !== '') {
            return `<div class="v2-logo-item"><img src="${l.img}" alt="${l.name || 'Partner'}"></div>`;
        }
        return `<div class="v2-logo-item"><span class="v2-logo-text-badge">${l.name}</span></div>`;
    }).join('');

    const topTrack = document.getElementById('marqueeTrackTop');
    const botTrack = document.getElementById('marqueeTrackBottom');
    if (topTrack) topTrack.innerHTML = html;
    if (botTrack) botTrack.innerHTML = html;

    const statsGrid = document.getElementById('v2StatsGrid');
    if (statsGrid) {
        statsGrid.innerHTML = (homeData.stats || DEFAULT_HOME_DATA.stats).map((st, idx) => `
            <div class="v2-stat-box">
                <div class="v2-stat-number" data-target="${st.number}" data-suffix="${st.suffix || '+'}" id="statNum_${idx}">0${st.suffix || '+'}</div>
                <div class="v2-stat-label">${st.label}</div>
            </div>
        `).join('');
        animateStatsCounters();
    }
}

function animateStatsCounters() {
    document.querySelectorAll('.v2-stat-number').forEach(el => {
        const target = parseInt(el.getAttribute('data-target') || '0', 10);
        const suffix = el.getAttribute('data-suffix') || '+';
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 45));
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = current + suffix;
        }, 28);
    });
}

// 4. WHY WORK WITH US (3'LÜ İKON VE TEXT)
function renderWhySection() {
    const hEl = document.getElementById('whyHeading');
    const sEl = document.getElementById('whySub');
    if (hEl && homeData.whyTitle) hEl.innerHTML = homeData.whyTitle.replace(/\n/g, '<br>');
    if (sEl && homeData.whySub) sEl.textContent = homeData.whySub;

    const grid = document.getElementById('v2WhyGrid');
    if (!grid) return;
    grid.innerHTML = (homeData.whyItems || []).map(item => {
        const isImg = item.icon && (item.icon.startsWith('data:image') || item.icon.startsWith('http') || item.icon.startsWith('media/'));
        const iconHtml = isImg ? `<img src="${item.icon}" alt="${item.title}">` : (item.icon || '⚡');
        return `
            <div class="v2-why-card">
                <div class="v2-why-icon">${iconHtml}</div>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        `;
    }).join('');
}

// 5. YOUTUBE / VİDEO YORUMLAR KARUSELİ
function extractYouTubeId(url) {
    if (!url) return null;
    const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return m ? m[1] : null;
}

function renderTestimonialsCarousel() {
    const track = document.getElementById('v2TestimonialsTrack');
    if (!track) return;
    const list = homeData.testimonials || [];

    track.innerHTML = list.map((item, idx) => {
        const ytId = extractYouTubeId(item.videoUrl);
        const thumbUrl = item.thumb || (ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : '');
        return `
            <div class="v2-testi-card">
                <div>
                    <div class="v2-video-box" id="videoBox_${idx}">
                        <img src="${thumbUrl}" alt="${item.brand}">
                        <div class="v2-yt-play-overlay" onclick="playTestimonialVideo(${idx})">
                            <div class="v2-yt-play-btn">▶</div>
                        </div>
                    </div>
                    <div class="v2-testi-brand">${item.brand}</div>
                    <p class="v2-testi-quote">${item.quote}</p>
                </div>
                <div class="v2-testi-author">
                    ${item.author}
                    <span>${item.role || ''}</span>
                </div>
            </div>
        `;
    }).join('');
}

window.playTestimonialVideo = function(idx) {
    const item = (homeData.testimonials || [])[idx];
    if (!item) return;
    const box = document.getElementById(`videoBox_${idx}`);
    const ytId = extractYouTubeId(item.videoUrl);
    if (ytId) {
        box.innerHTML = `<iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    } else if (item.videoUrl) {
        box.innerHTML = `<video src="${item.videoUrl}" controls autoplay></video>`;
    }
};

window.slideTestimonials = function(dir) {
    const list = homeData.testimonials || [];
    const maxSlide = Math.max(0, list.length - 3);
    currentTestiSlide = Math.min(maxSlide, Math.max(0, currentTestiSlide + dir));
    const track = document.getElementById('v2TestimonialsTrack');
    if (track) {
        const cardWidth = track.children[0]?.offsetWidth || 350;
        track.style.transform = `translateX(-${currentTestiSlide * (cardWidth + 24)}px)`;
    }
};

// 6. WHAT WE DO?
function renderWhatWeDo() {
    const container = document.getElementById('v2WhatWeDoContainer');
    if (!container) return;
    container.innerHTML = (homeData.whatWeDoGroups || []).map(grp => `
        <div class="v2-wwd-group">
            <h3>${grp.groupTitle}</h3>
            <p>${grp.groupSub}</p>
            <div class="v2-wwd-cards">
                ${(grp.items || []).map(it => `
                    <div class="v2-wwd-card">
                        <div class="v2-wwd-icon">${it.icon || '⚡'}</div>
                        <h4>${it.title}</h4>
                        <p>${it.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// 7. HOVER ÜRÜN KARTLARI (GÖRSEL 3)
function renderProductsShowcase() {
    const grid = document.getElementById('v2ProductsGrid');
    if (!grid) return;
    grid.innerHTML = (homeData.productsShowcase || []).map((prod, idx) => {
        const slotKey = prod.slot || `prod_card_${idx + 1}`;
        const customMedia = (typeof globalSiteMediaCache !== 'undefined' && globalSiteMediaCache[slotKey])
            ? globalSiteMediaCache[slotKey]
            : prod.img;
        return `
            <div class="v2-prod-card" onclick="this.classList.toggle('active-touch')">
                <img data-slot="${slotKey}" src="${customMedia}" alt="${prod.title}">
                <div class="v2-prod-card-title">${prod.title}</div>
                <div class="v2-prod-hover-panel">
                    <p>${prod.desc}</p>
                </div>
                <div class="v2-prod-arrow-btn">↗</div>
            </div>
        `;
    }).join('');
}

// 8. YUVARLAK SEKMELİ & "..." BUTONLU OUR PROCESS (GÖRSEL 6)
function renderProcessSection() {
    const tabs = homeData.processTabs || [];
    if (tabs.length === 0) return;
    if (currentProcessTabIdx >= tabs.length) currentProcessTabIdx = 0;

    const bar = document.getElementById('v2ProcessTabBar');
    const stepsBox = document.getElementById('v2ProcessStepsContainer');
    if (!bar || !stepsBox) return;

    const visibleTabs = tabs.slice(0, 5);
    const overflowTabs = tabs.slice(5);

    let barHtml = visibleTabs.map((t, i) => `
        <button type="button" class="v2-pill-tab ${i === currentProcessTabIdx ? 'active' : ''}" onclick="selectProcessTab(${i})">${t.tabName}</button>
    `).join('');

    if (overflowTabs.length > 0) {
        barHtml += `
            <button type="button" class="v2-more-dots-btn" onclick="document.getElementById('procMoreMenu').classList.toggle('open')">...</button>
            <div class="v2-more-dropdown" id="procMoreMenu">
                ${overflowTabs.map((t, j) => {
                    const realIdx = j + 5;
                    return `<button type="button" class="v2-pill-tab ${realIdx === currentProcessTabIdx ? 'active' : ''}" onclick="selectProcessTab(${realIdx})">${t.tabName}</button>`;
                }).join('')}
            </div>
        `;
    }
    bar.innerHTML = barHtml;

    const activeSteps = tabs[currentProcessTabIdx]?.steps || [];
    stepsBox.innerHTML = activeSteps.map((st, idx) => {
        const numStr = String(idx + 1).padStart(2, '0');
        return `
            <div class="v2-process-step">
                <div class="v2-step-num-col">
                    <div class="v2-step-num">${numStr}</div>
                    <div class="v2-step-line"></div>
                </div>
                <div class="v2-step-body">
                    <h4>${st.title}</h4>
                    <p>${st.desc}</p>
                </div>
            </div>
        `;
    }).join('');
}

window.selectProcessTab = function(idx) {
    currentProcessTabIdx = idx;
    renderProcessSection();
};

// 9. SEKTÖR SEKMELİ VE AKORDİYONLU FAQ (GÖRSEL 2)
function renderFaqSection() {
    const tabs = homeData.faqTabs || [];
    if (tabs.length === 0) return;
    if (currentFaqTabIdx >= tabs.length) currentFaqTabIdx = 0;

    const bar = document.getElementById('v2FaqTabBar');
    const listEl = document.getElementById('v2FaqAccordionList');
    if (!bar || !listEl) return;

    const visibleTabs = tabs.slice(0, 5);
    const overflowTabs = tabs.slice(5);

    let barHtml = visibleTabs.map((t, i) => `
        <button type="button" class="v2-pill-tab ${i === currentFaqTabIdx ? 'active' : ''}" onclick="selectFaqTab(${i})">${t.tabName}</button>
    `).join('');

    if (overflowTabs.length > 0) {
        barHtml += `
            <button type="button" class="v2-more-dots-btn" onclick="document.getElementById('faqMoreMenu').classList.toggle('open')">...</button>
            <div class="v2-more-dropdown" id="faqMoreMenu">
                ${overflowTabs.map((t, j) => {
                    const realIdx = j + 5;
                    return `<button type="button" class="v2-pill-tab ${realIdx === currentFaqTabIdx ? 'active' : ''}" onclick="selectFaqTab(${realIdx})">${t.tabName}</button>`;
                }).join('')}
            </div>
        `;
    }
    bar.innerHTML = barHtml;

    const items = tabs[currentFaqTabIdx]?.items || [];
    listEl.innerHTML = items.map((item, idx) => `
        <div class="v2-faq-item ${idx === 0 ? 'open' : ''}">
            <button type="button" class="v2-faq-question" onclick="this.parentElement.classList.toggle('open')">
                <span>${item.q}</span>
                <span>⌄</span>
            </button>
            <div class="v2-faq-answer">${item.a}</div>
        </div>
    `).join('');
}

window.selectFaqTab = function(idx) {
    currentFaqTabIdx = idx;
    renderFaqSection();
};

document.addEventListener('DOMContentLoaded', () => {
    loadDynamicHomeContent();

    setTimeout(() => {
        if (typeof world !== 'undefined' && world) {
            world
                .width(760)
                .height(760)
                .pointOfView({ lat: 34, lng: 30, altitude: 1.62 });
        }
    }, 250);

    // KIRMIZI NİŞANGAH TIKLAMA ŞOK DALGASI (RIPPLE) VE HOVER EFEKTİ
    const ring = document.getElementById('cursor-ring');
    window.addEventListener('mousedown', (e) => {
        if (ring) ring.classList.add('cursor-clicking');

        const ripple = document.createElement('div');
        ripple.className = 'cursor-click-ripple';
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 550);
    });

    window.addEventListener('mouseup', () => {
        if (ring) ring.classList.remove('cursor-clicking');
    });

    document.addEventListener('mouseover', (e) => {
        if (!ring) return;
        if (e.target.closest('a, button, input, select, textarea, .v2-prod-card, .globe-pin-wrap')) {
            ring.classList.add('cursor-hovering');
        } else {
            ring.classList.remove('cursor-hovering');
        }
    });
});