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

// 3. NOKTALI (DOT-MATRIX) DÜNYA HARİTASI & TÜRKİYE İÇİ DETAY SİSTEMİ
const mapLeftStatus = document.getElementById('map-left-status');
const mapRightTooltip = document.getElementById('map-tooltip');
const mapResetBtn = document.getElementById('mapResetBtn');
const dotCanvas = document.getElementById('dottedWorldCanvas');
const dotStage = document.getElementById('dotMapStage');
const dotViewport = document.getElementById('dotMapViewport');
const dotPinsLayer = document.getElementById('dotPinsLayer');

if (dotCanvas && dotStage && dotPinsLayer) {
    const ctx = dotCanvas.getContext('2d');
    const W = dotCanvas.width;
    const H = dotCanvas.height;

    // Enlem ve Boylamı Harita Koordinatına Çevirme
    function latLngToXY(lat, lng) {
        const x = ((lng + 180) / 360) * W;
        const y = ((90 - lat) / 170) * H + 15;
        return { x, y };
    }

    // Dünya Kıtalarının Poligon Koordinatları (Görseldeki Gibi Noktalı Çizim İçin)
    const continents = [
        // Kuzey Amerika
        [[-168,70],[-140,70],[-120,60],[-95,65],[-75,60],[-55,50],[-65,45],[-75,35],[-82,25],[-80,10],[-85,8],[-105,20],[-120,32],[-125,48],[-140,60],[-165,62]],
        // Güney Amerika
        [[-80,10],[-62,11],[-50,2],[-35,-6],[-38,-18],[-48,-28],[-58,-38],[-68,-54],[-75,-48],[-72,-30],[-70,-18],[-81,-5]],
        // Grönland
        [[-55,60],[-42,60],[-20,70],[-18,82],[-50,82],[-60,75]],
        // Avrupa
        [[-10,36],[5,36],[15,38],[28,41],[30,46],[42,48],[60,60],[50,70],[28,71],[10,62],[5,52],[-5,48],[-10,44]],
        // İngiltere
        [[-8,50],[2,51],[0,58],[-6,58]],
        // Anadolu (Türkiye) ve Orta Doğu Bağlantısı
        [[26,36],[45,36],[48,42],[26,42]],
        // Afrika
        [[-17,15],[-6,36],[11,37],[33,31],[43,12],[51,12],[41,-2],[40,-15],[33,-28],[20,-35],[16,-28],[12,-15],[9,4],[-8,5]],
        // Asya
        [[30,46],[45,36],[35,32],[35,20],[45,12],[58,22],[68,24],[77,8],[88,22],[100,14],[104,2],[110,12],[122,24],[122,38],[132,42],[142,52],[170,62],[180,68],[140,74],[100,76],[60,70],[42,48]],
        // Japonya & Endonezya & Avustralya
        [[130,31],[141,41],[145,44],[136,35]],
        [[96,5],[106,-6],[120,-8],[118,4]],
        [[135,-2],[150,-8],[140,-10]],
        [[114,-22],[122,-16],[136,-12],[145,-15],[153,-26],[148,-38],[138,-35],[128,-32],[115,-34]],
        [[166,-46],[178,-38],[174,-44]]
    ];

    function pointInPolygon(x, y, poly) {
        let inside = false;
        for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
            const xi = poly[i][0], yi = poly[i][1];
            const xj = poly[j][0], yj = poly[j][1];
            const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }
        return inside;
    }

    function drawDottedMap() {
        ctx.clearRect(0, 0, W, H);
        const step = 6.2; // Nokta aralığı (Arkadaşının görselindeki sıklık)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.24)';

        for (let py = 16; py < H - 35; py += step) {
            for (let px = 16; px < W - 16; px += step) {
                const lng = (px / W) * 360 - 180;
                const lat = 90 - ((py - 15) / H) * 170;

                let isLand = false;
                for (let c = 0; c < continents.length; c++) {
                    if (pointInPolygon(lng, lat, continents[c])) {
                        isLand = true;
                        break;
                    }
                }

                if (isLand) {
                    ctx.beginPath();
                    ctx.arc(px, py, 1.45, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }
    }
    drawDottedMap();

    // 1. DÜNYA / DİSTRİBÜTÖR NOKTALARI (Görseldeki noktalar + Fransa, Almanya, Türkiye)
    const distributorPoints = [
        {
            id: 'TR',
            name: 'TÜRKİYE',
            lat: 39.2,
            lng: 34.5,
            isHQ: true,
            leftType: 'DISTRIBUTOR & GLOBAL HQ · TÜRKİYE',
            rightDetail: 'TÜRKİYE — MERKEZ ÜS (TÜRKİYE İÇİ AĞ İÇİN TIKLAYIN)'
        },
        {
            id: 'DE',
            name: 'ALMANYA',
            lat: 51.2,
            lng: 10.4,
            isHQ: false,
            leftType: 'DISTRIBUTOR · AVRUPA BÖLGE',
            rightDetail: 'GERMANY — YETKİLİ DİSTRİBÜTÖR'
        },
        {
            id: 'FR',
            name: 'FRANSA',
            lat: 46.6,
            lng: 2.5,
            isHQ: false,
            leftType: 'DISTRIBUTOR · BATI AVRUPA',
            rightDetail: 'FRANCE — YETKİLİ DİSTRİBÜTÖR'
        },
        {
            id: 'NL',
            name: 'HOLLANDA',
            lat: 52.3,
            lng: 5.3,
            isHQ: false,
            leftType: 'DISTRIBUTOR · KUZEY AVRUPA',
            rightDetail: 'NETHERLANDS — EV CHARGING & SOLAR HUB'
        },
        {
            id: 'BE',
            name: 'BELÇİKA',
            lat: 50.8,
            lng: 4.4,
            isHQ: false,
            leftType: 'DISTRIBUTOR · AVRUPA BÖLGE',
            rightDetail: 'BELGIUM — COMMERCIAL GRID SYSTEMS'
        },
        {
            id: 'SY',
            name: 'SURİYE',
            lat: 35.0,
            lng: 38.5,
            isHQ: false,
            leftType: 'SAHA OPERASYONU · ORTA DOĞU',
            rightDetail: 'SYRIA — OFF-GRID & HIGH-RISK DEPLOYMENT'
        },
        {
            id: 'UZ',
            name: 'ÖZBEKİSTAN',
            lat: 41.3,
            lng: 64.5,
            isHQ: false,
            leftType: 'DISTRIBUTOR · ORTA ASYA',
            rightDetail: 'UZBEKISTAN — UTILITY SOLAR & EPC'
        },
        {
            id: 'AF',
            name: 'AFGANİSTAN',
            lat: 33.9,
            lng: 66.0,
            isHQ: false,
            leftType: 'SAHA OPERASYONU · GÜNEY & ORTA ASYA',
            rightDetail: 'AFGHANISTAN — AUTONOMOUS POWER SYSTEMS'
        },
        {
            id: 'KZ',
            name: 'ORTA ASYA',
            lat: 46.5,
            lng: 75.0,
            isHQ: false,
            leftType: 'DISTRIBUTOR · ORTA ASYA AĞI',
            rightDetail: 'CENTRAL ASIA — BESS & HIGH-POWER GRID'
        },
        {
            id: 'ZA',
            name: 'GÜNEY AFRİKA',
            lat: -29.0,
            lng: 24.5,
            isHQ: false,
            leftType: 'FABRİKA KURULUMU · AFRİKA',
            rightDetail: 'SOUTH AFRICA — TURNKEY EV CHARGER FACTORY'
        }
    ];

    // 2. TÜRKİYE İÇİ NOKTALAR (Sadece Türkiye'ye Tıklanınca Çıkan Ofis, Fabrika, Depo ve Teknik Servisler)
    const turkeySubPoints = [
        // OFİSLER (Sol üstte Ofis Türü, Sağ üstte Şehir ve Türü yazar)
        {
            lat: 41.1,
            lng: 28.8,
            leftType: 'OFİS · GENEL MERKEZ & GLOBAL SATIŞ OFİSİ',
            rightDetail: 'İSTANBUL — GLOBAL SATIŞ VE YÖNETİM OFİSİ'
        },
        {
            lat: 39.9,
            lng: 32.8,
            leftType: 'OFİS · AR-GE VE MÜHENDİSLİK OFİSİ',
            rightDetail: 'ANKARA — SAVUNMA & YAZILIM AR-GE OFİSİ'
        },
        {
            lat: 38.4,
            lng: 27.1,
            leftType: 'OFİS · BÖLGE SATIŞ OFİSİ',
            rightDetail: 'İZMİR — EGE BÖLGE SATIŞ OFİSİ'
        },
        // FABRİKALAR (Sol üstte Fabrika ve Türü, Sağ üstte Konum + m² Hacim + Fabrika İsmi yazar)
        {
            lat: 40.75,
            lng: 30.1,
            leftType: 'FABRİKA · EV ŞARJ ALETİ FABRİKASI',
            rightDetail: 'KOCAELİ (GEBZE) · 45.000 m² · SATRUS EV CHARGER FACTORY'
        },
        {
            lat: 40.15,
            lng: 29.1,
            leftType: 'FABRİKA · BATARYA & BESS ÜRETİM FABRİKASI',
            rightDetail: 'BURSA · 32.000 m² · SATRUS BESS GIGA TESİSİ'
        },
        // DEPOLAR (Sol üstte Depo olduğu, Sağ üstte SADECE İL BİLGİSİ yazar)
        {
            lat: 36.8,
            lng: 34.6,
            leftType: 'DEPO · LOJİSTİK MERKEZ DEPO',
            rightDetail: 'MERSİN'
        },
        {
            lat: 37.9,
            lng: 32.5,
            leftType: 'DEPO · İÇ ANADOLU DAĞITIM DEPOSU',
            rightDetail: 'KONYA'
        },
        // TEKNİK SERVİSLER (Sol üstte Teknik Servis Şubesi olduğu, Sağ üstte KONUMU yazar)
        {
            lat: 36.9,
            lng: 30.7,
            leftType: 'TEKNİK SERVİS ŞUBESİ',
            rightDetail: 'ANTALYA / KEPEZ — AKDENİZ BÖLGE KONUMU'
        },
        {
            lat: 37.1,
            lng: 37.4,
            leftType: 'TEKNİK SERVİS ŞUBESİ',
            rightDetail: 'GAZİANTEP / ŞEHİTKAMİL — GÜNEYDOĞU KONUMU'
        },
        {
            lat: 41.25,
            lng: 36.3,
            leftType: 'TEKNİK SERVİS ŞUBESİ',
            rightDetail: 'SAMSUN / İLKADIM — KARADENİZ KONUMU'
        }
    ];

    // Kamera / Zoom Durumu
    let scale = 1;
    let panX = 0;
    let panY = 0;

    function updateTransform() {
        dotStage.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
    }

    function zoomToLatLng(lat, lng, targetScale) {
        const pt = latLngToXY(lat, lng);
        scale = targetScale;
        panX = (W / 2 - pt.x) * scale;
        panY = (H / 2 - pt.y) * scale;
        updateTransform();
    }

    // 1. Dünya Görünümü (Distributors)
    function renderWorldView() {
        dotPinsLayer.innerHTML = '';
        mapResetBtn.style.display = 'none';
        scale = 1;
        panX = 0;
        panY = 0;
        updateTransform();

        mapLeftStatus.innerHTML = 'LIVE DELIVERY NETWORK · SEÇİLİ SEKME: <span class="hq-inline-dot"></span> DISTRIBUTORS';
        mapRightTooltip.textContent = 'TÜRKİYE HQ — ACTIVE HUB (DETAY İÇİN TIKLAYIN)';

        distributorPoints.forEach(item => {
            const pos = latLngToXY(item.lat, item.lng);
            const pin = document.createElement('div');
            pin.className = `dot-pin ${item.isHQ ? 'hq-pin' : ''}`;
            pin.style.left = `${pos.x}px`;
            pin.style.top = `${pos.y}px`;
            pin.innerHTML = `<div class="dot-pin-pulse"></div><div class="dot-pin-core"></div>`;

            // Üzerine gelince sol üst ve sağ üst kutuları güncelle
            pin.addEventListener('mouseenter', () => {
                mapLeftStatus.innerHTML = `${item.leftType} <span class="hq-inline-dot"></span>`;
                mapRightTooltip.textContent = item.rightDetail;
            });

            // Tıklanınca Türkiye ise iç detayları aç, diğer ülkelerse yaklaş ama içi boş kalsın
            pin.addEventListener('click', (e) => {
                e.stopPropagation();
                if (item.id === 'TR') {
                    renderTurkeyDetailView();
                } else {
                    dotPinsLayer.innerHTML = '';
                    mapResetBtn.style.display = 'inline-block';
                    zoomToLatLng(item.lat, item.lng, 3.6);
                    mapLeftStatus.innerHTML = `${item.name} BÖLGE GÖRÜNÜMÜ <span class="hq-inline-dot"></span>`;
                    mapRightTooltip.textContent = `${item.name} — İÇ NOKTA KAYDI BULUNMUYOR`;
                }
            });

            dotPinsLayer.appendChild(pin);
        });
    }

    // 2. Türkiye İçi Detay Görünümü (Ofis, Fabrika, Depo, Teknik Servis)
    function renderTurkeyDetailView() {
        dotPinsLayer.innerHTML = '';
        mapResetBtn.style.display = 'inline-block';
        zoomToLatLng(39.0, 34.5, 4.5);

        mapLeftStatus.innerHTML = 'TÜRKİYE İÇİ AĞ · OFİS / FABRİKA / DEPO / TEKNİK SERVİS <span class="hq-inline-dot"></span>';
        mapRightTooltip.textContent = 'TÜRKİYE NOKTALARININ ÜZERİNE GELİN';

        turkeySubPoints.forEach(loc => {
            const pos = latLngToXY(loc.lat, loc.lng);
            const pin = document.createElement('div');
            pin.className = 'dot-pin sub-pin';
            pin.style.left = `${pos.x}px`;
            pin.style.top = `${pos.y}px`;
            pin.innerHTML = `<div class="dot-pin-pulse"></div><div class="dot-pin-core"></div>`;

            pin.addEventListener('mouseenter', () => {
                mapLeftStatus.innerHTML = `${loc.leftType} <span class="hq-inline-dot"></span>`;
                mapRightTooltip.textContent = loc.rightDetail;
            });

            dotPinsLayer.appendChild(pin);
        });
    }

    // Mouse İle Sürükleme (Drag) Desteği
    let isDragging = false;
    let startX = 0, startY = 0;

    dotViewport.addEventListener('mousedown', (e) => {
        isDragging = true;
        dotStage.classList.add('dragging');
        startX = e.clientX - panX;
        startY = e.clientY - panY;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        panX = e.clientX - startX;
        panY = e.clientY - startY;
        updateTransform();
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
        dotStage.classList.remove('dragging');
    });

    // Sağ Alt + / - Zoom Butonları
    document.getElementById('dotZoomIn').addEventListener('click', () => {
        scale = Math.min(scale + 0.8, 6);
        updateTransform();
    });

    document.getElementById('dotZoomOut').addEventListener('click', () => {
        scale = Math.max(scale - 0.8, 1);
        if (scale === 1) { panX = 0; panY = 0; }
        updateTransform();
    });

    // Sekme Değiştirme (DISTRIBUTORS <-> OPERATIONS & SERVICE NETWORK)
    document.querySelectorAll('.delivery-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.delivery-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            if (tab.getAttribute('data-tab') === 'distributors') {
                renderWorldView();
            } else {
                renderTurkeyDetailView();
            }
        });
    });

    // "← DÜNYA GÖRÜNÜMÜNE DÖN" Butonu
    mapResetBtn.addEventListener('click', () => {
        document.querySelectorAll('.delivery-tab').forEach((t, i) => t.classList.toggle('active', i === 0));
        renderWorldView();
    });

    // Başlangıçta Dünya Görünümünü Aç
    renderWorldView();
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