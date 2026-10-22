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

// 3. GERÇEK 2D SÜRÜKLENEBİLİR HARİTA (DISTRIBUTORS & TÜRKİYE İÇİ DETAY SİSTEMİ)
const mapLeftStatus = document.getElementById('map-left-status');
const mapRightTooltip = document.getElementById('map-tooltip');
const mapResetBtn = document.getElementById('mapResetBtn');

if (document.getElementById('realDeliveryMap')) {
    const deliveryMap = L.map('realDeliveryMap', {
        center: [43.0, 22.0], // Avrupa ve Türkiye'yi ortalayan başlangıç açısı
        zoom: 4,
        zoomControl: false
    });

    // Sağ alt köşeye + / - zoom tuşları
    L.control.zoom({ position: 'bottomright' }).addTo(deliveryMap);

    // Koyu Tema Harita Katmanı
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 18
    }).addTo(deliveryMap);

    const markersLayer = L.layerGroup().addTo(deliveryMap);

    // 1. ÜLKE NOKTALARI (DISTRIBUTORS SEKMESİ - Fransa, Almanya, Türkiye)
    const distributorCountries = [
        {
            id: 'TR',
            name: 'TÜRKİYE',
            lat: 39.2,
            lng: 35.2,
            zoom: 6,
            isHQ: true,
            leftType: 'DISTRIBUTOR & GLOBAL HQ · TÜRKİYE',
            rightDetail: 'TÜRKİYE — MERKEZ ÜS (DETAY İÇİN TIKLAYIN)'
        },
        {
            id: 'DE',
            name: 'ALMANYA',
            lat: 51.1657,
            lng: 10.4515,
            zoom: 6,
            isHQ: false,
            leftType: 'DISTRIBUTOR · AVRUPA BÖLGE',
            rightDetail: 'ALMANYA — YETKİLİ DİSTRİBÜTÖR'
        },
        {
            id: 'FR',
            name: 'FRANSA',
            lat: 46.6034,
            lng: 2.2137,
            zoom: 6,
            isHQ: false,
            leftType: 'DISTRIBUTOR · BATI AVRUPA',
            rightDetail: 'FRANSA — YETKİLİ DİSTRİBÜTÖR'
        }
    ];

    // 2. TÜRKİYE İÇİ NOKTALAR (Sadece Türkiye'ye Tıklanınca Çıkan Ofis, Fabrika, Depo ve Teknik Servisler)
    const turkeyLocations = [
        // OFİSLER (Sol üstte Ofis Türü, Sağ üstte Şehir ve Türü yazar)
        {
            lat: 41.0082,
            lng: 28.9784,
            leftType: 'OFİS · GENEL MERKEZ & GLOBAL SATIŞ OFİSİ',
            rightDetail: 'İSTANBUL — GLOBAL SATIŞ VE YÖNETİM OFİSİ'
        },
        {
            lat: 39.9334,
            lng: 32.8597,
            leftType: 'OFİS · AR-GE VE MÜHENDİSLİK OFİSİ',
            rightDetail: 'ANKARA — SAVUNMA & YAZILIM AR-GE OFİSİ'
        },
        {
            lat: 38.4237,
            lng: 27.1428,
            leftType: 'OFİS · BÖLGE SATIŞ OFİSİ',
            rightDetail: 'İZMİR — EGE BÖLGE SATIŞ OFİSİ'
        },

        // FABRİKALAR (Sol üstte Fabrika ve Türü, Sağ üstte Konum + m² Hacim + Fabrika İsmi yazar)
        {
            lat: 40.7654,
            lng: 29.9408,
            leftType: 'FABRİKA · EV ŞARJ ALETİ FABRİKASI',
            rightDetail: 'KOCAELİ (GEBZE) · 45.000 m² · SATRUS EV CHARGER FACTORY'
        },
        {
            lat: 40.1885,
            lng: 29.0610,
            leftType: 'FABRİKA · BATARYA & BESS ÜRETİM FABRİKASI',
            rightDetail: 'BURSA · 32.000 m² · SATRUS BESS GIGA TESİSİ'
        },

        // DEPOLAR (Sol üstte Depo olduğu, Sağ üstte SADECE İL BİLGİSİ yazar)
        {
            lat: 36.8000,
            lng: 34.6333,
            leftType: 'DEPO · LOJİSTİK MERKEZ DEPO',
            rightDetail: 'MERSİN'
        },
        {
            lat: 37.8714,
            lng: 32.4846,
            leftType: 'DEPO · İÇ ANADOLU DAĞITIM DEPOSU',
            rightDetail: 'KONYA'
        },

        // TEKNİK SERVİSLER (Sol üstte Teknik Servis Şubesi olduğu, Sağ üstte KONUMU yazar)
        {
            lat: 36.8969,
            lng: 30.7133,
            leftType: 'TEKNİK SERVİS ŞUBESİ',
            rightDetail: 'ANTALYA / KEPEZ — AKDENİZ BÖLGE KONUMU'
        },
        {
            lat: 37.0662,
            lng: 37.3833,
            leftType: 'TEKNİK SERVİS ŞUBESİ',
            rightDetail: 'GAZİANTEP / ŞEHİTKAMİL — GÜNEYDOĞU KONUMU'
        },
        {
            lat: 41.2867,
            lng: 36.3300,
            leftType: 'TEKNİK SERVİS ŞUBESİ',
            rightDetail: 'SAMSUN / İLKADIM — KARADENİZ KONUMU'
        }
    ];

    function createPinIcon(isHQ = false) {
        return L.divIcon({
            className: 'satrus-custom-pin',
            html: `<div class="satrus-marker-wrap">
                      <div class="satrus-pin-pulse"></div>
                      <div class="satrus-pin-core ${isHQ ? 'hq-country' : ''}"></div>
                   </div>`,
            iconSize: [28, 28],
            iconAnchor: [14, 14]
        });
    }

    // Dünya / Distribütör Ülkeleri Gösterme Fonksiyonu
    function showDistributorCountries() {
        markersLayer.clearLayers();
        mapResetBtn.style.display = 'none';
        deliveryMap.flyTo([43.0, 22.0], 4, { duration: 1.2 });

        mapLeftStatus.innerHTML = 'LIVE DELIVERY NETWORK · SEÇİLİ SEKME: <span class="hq-inline-dot"></span> DISTRIBUTORS';
        mapRightTooltip.textContent = 'ÜLKE SEÇİN (TÜRKİYE, ALMANYA, FRANSA)';

        distributorCountries.forEach(country => {
            const marker = L.marker([country.lat, country.lng], { icon: createPinIcon(country.isHQ) }).addTo(markersLayer);

            // Mouse ile üzerine gelince
            marker.on('mouseover', () => {
                mapLeftStatus.innerHTML = `${country.leftType} <span class="hq-inline-dot"></span>`;
                mapRightTooltip.textContent = country.rightDetail;
            });

            // Ülkeye tıklanınca içine yaklaş
            marker.on('click', () => {
                if (country.id === 'TR') {
                    showTurkeyDetails();
                } else {
                    // Fransa veya Almanya'ya tıklanırsa içine yaklaşır ama içi boş kalır
                    markersLayer.clearLayers();
                    mapResetBtn.style.display = 'inline-block';
                    deliveryMap.flyTo([country.lat, country.lng], country.zoom, { duration: 1.2 });
                    mapLeftStatus.innerHTML = `${country.name} BÖLGE GÖRÜNÜMÜ <span class="hq-inline-dot"></span>`;
                    mapRightTooltip.textContent = `${country.name} — İÇ NOKTA KAYDI BULUNMUYOR`;
                }
            });
        });
    }

    // Türkiye'ye Tıklanınca İçindeki Ofis, Fabrika, Depo ve Teknik Servisleri Gösterme Fonksiyonu
    function showTurkeyDetails() {
        markersLayer.clearLayers();
        mapResetBtn.style.display = 'inline-block';
        deliveryMap.flyTo([39.0, 35.0], 6, { duration: 1.2 });

        mapLeftStatus.innerHTML = 'TÜRKİYE İÇİ AĞ · OFİS / FABRİKA / DEPO / TEKNİK SERVİS <span class="hq-inline-dot"></span>';
        mapRightTooltip.textContent = 'NOKTALARIN ÜZERİNE GELİN';

        turkeyLocations.forEach(loc => {
            const marker = L.marker([loc.lat, loc.lng], { icon: createPinIcon(false) }).addTo(markersLayer);

            marker.on('mouseover', () => {
                // Sol üstte (2. resimde işaretlediğin yerde) Türü yazar
                mapLeftStatus.innerHTML = `${loc.leftType} <span class="hq-inline-dot"></span>`;
                // Sağ üstte (1. resimde işaretlediğin yerde) İl / m² / İsim detayı yazar
                mapRightTooltip.textContent = loc.rightDetail;
            });
        });
    }

    // Sekme Değiştirme (1. Sekme: DISTRIBUTORS, 2. Sekme: OPERATIONS & SERVICE NETWORK)
    document.querySelectorAll('.delivery-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.delivery-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            if (tab.getAttribute('data-tab') === 'distributors') {
                showDistributorCountries();
            } else {
                showTurkeyDetails();
            }
        });
    });

    // "← DÜNYA GÖRÜNÜMÜNE DÖN" Butonu
    mapResetBtn.addEventListener('click', () => {
        document.querySelectorAll('.delivery-tab').forEach((t, i) => t.classList.toggle('active', i === 0));
        showDistributorCountries();
    });

    // İlk Açılışta Distributors Görünümünü Başlat
    showDistributorCountries();
}

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