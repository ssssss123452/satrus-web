// 1. VİDEODAKİ KIRMIZI NİŞANGAH MOUSE İMLECİ
const cursorRing = document.getElementById('cursor-ring');

window.addEventListener('mousemove', (e) => {
    cursorRing.style.left = `${e.clientX}px`;
    cursorRing.style.top = `${e.clientY}px`;
});

document.querySelectorAll('a, button, .map-node, .service-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorRing.style.width = '44px';
        cursorRing.style.height = '44px';
        cursorRing.style.borderColor = '#ff1e32';
    });
    el.addEventListener('mouseleave', () => {
        cursorRing.style.width = '28px';
        cursorRing.style.height = '28px';
        cursorRing.style.borderColor = 'rgba(220, 20, 40, 0.75)';
    });
});

// 2. HERO BÖLÜMÜNDEKİ 3D NOKTALI DÖNEN DÜNYA
const globeContainer = document.getElementById('globe-container');

const stations = [
    { name: 'ANKARA HQ', lat: 39.9334, lng: 32.8597, icon: '⚡', info: 'Central R&D & Grid Hub — Active' },
    { name: 'ISTANBUL', lat: 41.0082, lng: 28.9784, icon: '🔋', info: '4.5x faster charging telemetry' },
    { name: 'BERLIN', lat: 52.5200, lng: 13.4050, icon: '🛡️', info: 'EU Distribution Node — 99.9% Load' },
    { name: 'LONDON', lat: 51.5074, lng: -0.1278, icon: '👤', info: 'UK Smart Grid Partner Network' },
    { name: 'DUBAI', lat: 25.2048, lng: 55.2708, icon: '⚡', info: 'MENA High-Temp Battery Testing' }
];

const arcsData = [
    { startLat: 39.9334, startLng: 32.8597, endLat: 41.0082, endLng: 28.9784 },
    { startLat: 39.9334, startLng: 32.8597, endLat: 52.5200, endLng: 13.4050 },
    { startLat: 39.9334, startLng: 32.8597, endLat: 51.5074, endLng: -0.1278 },
    { startLat: 39.9334, startLng: 32.8597, endLat: 25.2048, endLng: 55.2708 }
];

const world = Globe()(globeContainer)
    .width(650)
    .height(650)
    .backgroundColor('rgba(0,0,0,0)')
    .showGlobe(true)
    .showAtmosphere(true)
    .atmosphereColor('#dc1428')
    .atmosphereAltitude(0.2)
    .hexPolygonsData([])
    .hexPolygonResolution(3)
    .hexPolygonMargin(0.62)
    .hexPolygonColor(() => '#e62e19')
    .arcsData(arcsData)
    .arcColor(() => ['#ff1e32', '#ff6a00'])
    .arcDashLength(0.45)
    .arcDashGap(0.3)
    .arcDashInitialGap(() => Math.random())
    .arcDashAnimateTime(2000)
    .arcStroke(0.75)
    .ringsData(stations)
    .ringColor(() => '#ff3b1a')
    .ringMaxRadius(4.5)
    .ringPropagationSpeed(2)
    .ringRepeatPeriod(900)
    .labelsData(stations)
    .labelLat(d => d.lat)
    .labelLng(d => d.lng)
    .labelText(d => d.name)
    .labelSize(1.1)
    .labelDotRadius(0.4)
    .labelColor(() => '#ffffff')
    .labelResolution(2)
    .htmlElementsData(stations)
    .htmlLat(d => d.lat)
    .htmlLng(d => d.lng)
    .htmlAltitude(0.04)
    .htmlElement(d => {
        const el = document.createElement('div');
        el.className = 'globe-pin';
        el.innerHTML = d.icon;
        el.addEventListener('mouseenter', () => {
            document.querySelector('#hud-1 .hud-title').textContent = d.name;
            document.querySelector('#hud-1 .hud-text').textContent = d.info;
        });
        return el;
    });

const globeMaterial = world.globeMaterial();
globeMaterial.color = new THREE.Color('#070304');
globeMaterial.emissive = new THREE.Color('#1a0303');
globeMaterial.emissiveIntensity = 0.4;

fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
    .then(res => res.json())
    .then(countries => {
        world.hexPolygonsData(countries.features);
    });

world.pointOfView({ lat: 34, lng: 30, altitude: 2.15 });
world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.9;
world.controls().enableZoom = false;

// 3. WHERE WE DELIVER HARİTA NOKTALARI ÜZERİNE GELİNCE BİLGİ GÖSTERME
const mapTooltip = document.getElementById('map-tooltip');
document.querySelectorAll('.map-node').forEach(node => {
    node.addEventListener('mouseenter', () => {
        const regionName = node.getAttribute('data-region');
        mapTooltip.textContent = regionName;
    });
});

// 4. FAQ (SIKÇA SORULAN SORULAR) AKORDİYON AÇILIP KAPANMA MANTIĞI
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.classList.toggle('open');
    });
});

// 5. İSTATİSTİK RAKAMLARININ ANİMASYONLU YÜKSELMESİ ($20M+, 90+, 5, 30+)
const counters = document.querySelectorAll('.counter');
let statsAnimated = false;

function animateCounters() {
    if (statsAnimated) return;
    statsAnimated = true;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 1800; // 1.8 saniyede tamamlanır
        const startTime = performance.now();

        function updateCount(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Yumuşak yavaşlayan (easeOutQuart) animasyon eğrisi
            const easeOut = 1 - Math.pow(1 - progress, 4);
            counter.textContent = Math.floor(easeOut * target);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target;
            }
        }
        requestAnimationFrame(updateCount);
    });
}

const statsSection = document.getElementById('statsSection');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateCounters();
        }
    }, { threshold: 0.2 });
    observer.observe(statsSection);
}