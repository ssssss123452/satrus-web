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

// 2. HERO BÖLÜMÜNDEKİ 3D NOKTALI DÖNEN DÜNYA (ÇAKIŞMASIZ & CANLI ADMİN SENKRONİZASYONLU)
const globeContainer = document.getElementById('globe-container');

const defaultStations = [
    { id: 1, name: 'ANKARA HQ', lat: 39.9334, lng: 32.8597, type: 'emoji', icon: '⚡', info: 'Central R&D & Grid Hub — Active', isHQ: true },
    { id: 2, name: 'ISTANBUL', lat: 41.0082, lng: 28.9784, type: 'emoji', icon: '🔋', info: '4.5x faster charging telemetry', isHQ: false },
    { id: 3, name: 'BERLIN', lat: 52.5200, lng: 13.4050, type: 'emoji', icon: '🛡️', info: 'EU Distribution Node — 99.9% Load', isHQ: false },
    { id: 4, name: 'LONDON', lat: 51.5074, lng: -0.1278, type: 'emoji', icon: '👤', info: 'UK Smart Grid Partner Network', isHQ: false },
    { id: 5, name: 'DUBAI', lat: 25.2048, lng: 55.2708, type: 'emoji', icon: '⚡', info: 'MENA High-Temp Battery Testing', isHQ: false },
    { id: 6, name: 'SOUTH AFRICA', lat: -26.2041, lng: 28.0473, type: 'image', icon: 'media/satrus.png', info: 'Turnkey EV Charger Factory Line', isHQ: false }
];

function getActiveStations() {
    try {
        const saved = localStorage.getItem('satrus_globe_stations');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
    } catch (e) {}
    return [...defaultStations];
}

function buildAutoArcs(stationList) {
    if (!stationList || stationList.length < 2) return [];
    const hq = stationList.find(s => s.isHQ) || stationList[0];
    return stationList
        .filter(s => s.id !== hq.id)
        .map(target => ({
            startLat: Number(hq.lat),
            startLng: Number(hq.lng),
            endLat: Number(target.lat),
            endLng: Number(target.lng)
        }));
}

let world;

function refreshMainGlobe(stationList) {
    if (!world) return;
    const freshList = stationList.map(item => ({ ...item }));
    world.ringsData(freshList);
    world.labelsData(freshList);
    world.htmlElementsData(freshList);
    world.arcsData(buildAutoArcs(freshList));
}

if (globeContainer) {
    const initialStations = getActiveStations();

    world = Globe()(globeContainer)
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
        .arcColor(() => ['#ff1e32', '#ff6a00'])
        .arcDashLength(0.45)
        .arcDashGap(0.3)
        .arcDashInitialGap(() => Math.random())
        .arcDashAnimateTime(2000)
        .arcStroke(0.75)
        .ringColor(() => '#ff3b1a')
        .ringMaxRadius(4.5)
        .ringPropagationSpeed(2)
        .ringRepeatPeriod(900)
        .labelLat(d => Number(d.lat))
        .labelLng(d => Number(d.lng))
        .labelText(d => d.name)
        .labelSize(1.1)
        .labelDotRadius(0.4)
        .labelColor(() => '#ffffff')
        .labelResolution(2)
        .htmlLat(d => Number(d.lat))
        .htmlLng(d => Number(d.lng))
        .htmlAltitude(0.04)
        .htmlElement(d => {
            const el = document.createElement('div');
            el.className = 'globe-pin';
            if (d.type === 'image' && d.icon) {
                el.innerHTML = `<img src="${d.icon}" alt="${d.name}" style="width:20px;height:20px;object-fit:contain;border-radius:50%;display:block;" onerror="this.outerHTML='⚡'">`;
            } else {
                el.innerHTML = d.icon || '⚡';
            }
            el.addEventListener('mouseenter', () => {
                const titleEl = document.querySelector('#hud-1 .hud-title');
                const textEl = document.querySelector('#hud-1 .hud-text');
                if (titleEl) titleEl.textContent = d.name;
                if (textEl) textEl.textContent = d.info;
            });
            return el;
        });

    // new THREE.Color() hatasını önleyen güvenli renk ayarı
    const globeMat = world.globeMaterial();
    if (globeMat && globeMat.color) globeMat.color.set('#070304');
    if (globeMat && globeMat.emissive) globeMat.emissive.set('#1a0303');
    if (globeMat) globeMat.emissiveIntensity = 0.4;

    fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
        .then(res => res.json())
        .then(countries => {
            world.hexPolygonsData(countries.features);
        });

    world.pointOfView({ lat: 34, lng: 30, altitude: 2.15 });
    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 0.9;
    world.controls().enableZoom = false;

    refreshMainGlobe(initialStations);
}

// Admin panelinden gelen değişiklikleri F5 atmadan anında yakala
const globeChannel = new BroadcastChannel('satrus_globe_live_channel');
globeChannel.onmessage = (event) => {
    if (event.data && Array.isArray(event.data)) {
        localStorage.setItem('satrus_globe_stations', JSON.stringify(event.data));
        refreshMainGlobe(event.data);
    }
};

window.addEventListener('storage', (e) => {
    if (e.key === 'satrus_globe_stations') {
        refreshMainGlobe(getActiveStations());
    }
});

window.addEventListener('focus', () => {
    refreshMainGlobe(getActiveStations());
});

// 3. GERÇEK GEOJSON NOKTALI (DOT-MATRIX) HARİTA & HD TÜRKİYE GEÇİŞ SİSTEMİ
const mapLeftStatus = document.getElementById('map-left-status');
const mapRightTooltip = document.getElementById('map-tooltip');
const mapResetBtn = document.getElementById('mapResetBtn');
const dotCanvas = document.getElementById('dottedWorldCanvas');
const dotStage = document.getElementById('dotMapStage');
const dotPinsLayer = document.getElementById('dotPinsLayer');

if (dotCanvas && dotStage && dotPinsLayer) {
    const ctx = dotCanvas.getContext('2d');
    const W = dotCanvas.width;
    const H = dotCanvas.height;
    let worldGeoFeatures = [];

    // Türkiye'nin Gerçek Yüksek Çözünürlüklü Sınır Koordinatları (Anadolu + Trakya)
    const turkeyHDPolygons = [
        // Anadolu Ana Kara
        [[26.0,39.8],[26.2,39.0],[26.6,38.4],[27.2,37.6],[27.4,37.0],[28.2,36.6],[29.2,36.2],[30.4,36.3],[30.5,36.8],[31.8,36.5],[32.8,36.0],[34.2,36.4],[35.6,36.7],[36.1,36.2],[36.6,36.6],[38.0,36.8],[40.2,37.0],[42.4,37.1],[44.6,37.3],[44.8,39.7],[43.5,40.9],[41.6,41.5],[39.8,41.0],[38.0,41.0],[36.2,41.3],[35.1,42.0],[33.2,42.0],[31.5,41.3],[29.2,41.1],[29.0,40.4],[27.8,40.4],[26.7,40.4]],
        // Trakya
        [[26.0,40.6],[26.3,41.7],[28.0,41.9],[29.0,41.2],[28.8,41.0],[27.0,40.6]]
    ];

    // Aktif Harita Kadrajı (Dünya veya Ülke Görünümüne Göre Değişir)
    let activeBounds = { minLng: -170, maxLng: 180, minLat: -58, maxLat: 78 };

    function latLngToXY(lat, lng) {
        const padX = 55;
        const padY = 45;
        const usableW = W - padX * 2;
        const usableH = H - padY * 2 - 20;
        const x = padX + ((lng - activeBounds.minLng) / (activeBounds.maxLng - activeBounds.minLng)) * usableW;
        const y = padY + ((activeBounds.maxLat - lat) / (activeBounds.maxLat - activeBounds.minLat)) * usableH;
        return { x, y };
    }

    function pointInRing(lng, lat, ring) {
        let inside = false;
        for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
            const xi = ring[i][0], yi = ring[i][1];
            const xj = ring[j][0], yj = ring[j][1];
            const intersect = ((yi > lat) !== (yj > lat)) && (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }
        return inside;
    }

    function isInsideFeature(lng, lat, feature) {
        const geom = feature.geometry;
        if (!geom) return false;
        if (geom.type === 'Polygon') {
            return pointInRing(lng, lat, geom.coordinates[0]);
        } else if (geom.type === 'MultiPolygon') {
            for (let p = 0; p < geom.coordinates.length; p++) {
                if (pointInRing(lng, lat, geom.coordinates[p][0])) return true;
            }
        }
        return false;
    }

    // Haritayı Nokta Nokta (Dot-Matrix) Net Olarak Çizdirme
    function drawCrispDotMap(mode, countryISO = null) {
        ctx.clearRect(0, 0, W, H);
        const step = mode === 'world' ? 6.5 : 8.5;
        const dotRadius = mode === 'world' ? 1.55 : 2.2;

        const padX = 55;
        const padY = 45;
        const usableW = W - padX * 2;
        const usableH = H - padY * 2 - 20;

        for (let py = padY; py <= padY + usableH; py += step) {
            for (let px = padX; px <= padX + usableW; px += step) {
                const lng = activeBounds.minLng + ((px - padX) / usableW) * (activeBounds.maxLng - activeBounds.minLng);
                const lat = activeBounds.maxLat - ((py - padY) / usableH) * (activeBounds.maxLat - activeBounds.minLat);

                let onLand = false;

                if (mode === 'turkey') {
                    // Türkiye HD Görünümü: Çevredeki ülkeler silik, Türkiye parlak net noktalı
                    for (let t = 0; t < turkeyHDPolygons.length; t++) {
                        if (pointInRing(lng, lat, turkeyHDPolygons[t])) {
                            onLand = true;
                            break;
                        }
                    }
                    if (onLand) {
                        ctx.fillStyle = 'rgba(255, 255, 255, 0.38)';
                        ctx.beginPath();
                        ctx.arc(px, py, dotRadius, 0, Math.PI * 2);
                        ctx.fill();
                    }
                } else if (mode === 'country' && countryISO) {
                    const targetFeat = worldGeoFeatures.find(f => f.properties.ISO_A2 === countryISO || f.properties.NAME === countryISO);
                    if (targetFeat && isInsideFeature(lng, lat, targetFeat)) {
                        ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
                        ctx.beginPath();
                        ctx.arc(px, py, dotRadius, 0, Math.PI * 2);
                        ctx.fill();
                    }
                } else {
                    // Dünya Görünümü (1. Görseldeki Gibi Birebir Gerçek Kıtalar)
                    for (let f = 0; f < worldGeoFeatures.length; f++) {
                        if (worldGeoFeatures[f].properties.ISO_A2 === 'AQ') continue; // Antarktika hariç
                        if (isInsideFeature(lng, lat, worldGeoFeatures[f])) {
                            onLand = true;
                            break;
                        }
                    }
                    if (onLand) {
                        ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
                        ctx.beginPath();
                        ctx.arc(px, py, dotRadius, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }
        }
    }

    // 1. DÜNYA / DİSTRİBÜTÖR NOKTALARI
    const distributorPoints = [
        { id: 'TR', iso: 'TR', name: 'TÜRKİYE', lat: 39.2, lng: 35.0, isHQ: true, leftType: 'DISTRIBUTOR & GLOBAL HQ · TÜRKİYE', rightDetail: 'TÜRKİYE — MERKEZ ÜS (DETAY İÇİN TIKLAYIN)' },
        { id: 'NL', iso: 'NL', name: 'HOLLANDA', lat: 52.3, lng: 5.3, isHQ: false, bounds: { minLng: 2.5, maxLng: 8.0, minLat: 50.5, maxLat: 53.8 }, leftType: 'DISTRIBUTOR · KUZEY AVRUPA', rightDetail: 'NETHERLANDS — EV CHARGING & SOLAR HUB' },
        { id: 'BE', iso: 'BE', name: 'BELÇİKA', lat: 50.6, lng: 4.4, isHQ: false, bounds: { minLng: 2.2, maxLng: 6.6, minLat: 49.3, maxLat: 51.6 }, leftType: 'DISTRIBUTOR · AVRUPA BÖLGE', rightDetail: 'BELGIUM — COMMERCIAL GRID SYSTEMS' },
        { id: 'DE', iso: 'DE', name: 'ALMANYA', lat: 51.2, lng: 10.4, isHQ: false, bounds: { minLng: 5.0, maxLng: 16.0, minLat: 47.0, maxLat: 55.2 }, leftType: 'DISTRIBUTOR · AVRUPA BÖLGE', rightDetail: 'GERMANY — YETKİLİ DİSTRİBÜTÖR' },
        { id: 'FR', iso: 'FR', name: 'FRANSA', lat: 46.6, lng: 2.5, isHQ: false, bounds: { minLng: -5.5, maxLng: 9.0, minLat: 42.0, maxLat: 51.2 }, leftType: 'DISTRIBUTOR · BATI AVRUPA', rightDetail: 'FRANCE — YETKİLİ DİSTRİBÜTÖR' },
        { id: 'SY', iso: 'SY', name: 'SURİYE', lat: 35.0, lng: 38.5, isHQ: false, bounds: { minLng: 35.0, maxLng: 42.8, minLat: 32.0, maxLat: 37.5 }, leftType: 'SAHA OPERASYONU · ORTA DOĞU', rightDetail: 'SYRIA — OFF-GRID & HIGH-RISK DEPLOYMENT' },
        { id: 'UZ', iso: 'UZ', name: 'ÖZBEKİSTAN', lat: 41.3, lng: 64.5, isHQ: false, bounds: { minLng: 55.5, maxLng: 73.5, minLat: 37.0, maxLat: 45.8 }, leftType: 'DISTRIBUTOR · ORTA ASYA', rightDetail: 'UZBEKISTAN — UTILITY SOLAR & EPC' },
        { id: 'AF', iso: 'AF', name: 'AFGANİSTAN', lat: 33.9, lng: 66.0, isHQ: false, bounds: { minLng: 60.0, maxLng: 75.0, minLat: 29.0, maxLat: 38.8 }, leftType: 'SAHA OPERASYONU · GÜNEY & ORTA ASYA', rightDetail: 'AFGHANISTAN — AUTONOMOUS POWER SYSTEMS' },
        { id: 'KZ', iso: 'KZ', name: 'ORTA ASYA', lat: 47.5, lng: 72.0, isHQ: false, bounds: { minLng: 46.0, maxLng: 87.0, minLat: 40.0, maxLat: 55.5 }, leftType: 'DISTRIBUTOR · ORTA ASYA AĞI', rightDetail: 'CENTRAL ASIA — BESS & HIGH-POWER GRID' },
        { id: 'ZA', iso: 'ZA', name: 'GÜNEY AFRİKA', lat: -29.0, lng: 24.5, isHQ: false, bounds: { minLng: 16.0, maxLng: 33.5, minLat: -35.0, maxLat: -22.0 }, leftType: 'FABRİKA KURULUMU · AFRİKA', rightDetail: 'SOUTH AFRICA — TURNKEY EV CHARGER FACTORY' }
    ];

    // 2. TÜRKİYE İÇİ NOKTALAR (Ofis, Fabrika, Depo ve Teknik Servisler — Birbirine Çarpmayan Net Konumlar)
    const turkeySubPoints = [
        // OFİSLER
        { lat: 41.15, lng: 28.65, leftType: 'OFİS · GENEL MERKEZ & GLOBAL SATIŞ OFİSİ', rightDetail: 'İSTANBUL — GLOBAL SATIŞ VE YÖNETİM OFİSİ' },
        { lat: 39.95, lng: 32.85, leftType: 'OFİS · AR-GE VE MÜHENDİSLİK OFİSİ', rightDetail: 'ANKARA — SAVUNMA & YAZILIM AR-GE OFİSİ' },
        { lat: 38.45, lng: 27.15, leftType: 'OFİS · BÖLGE SATIŞ OFİSİ', rightDetail: 'İZMİR — EGE BÖLGE SATIŞ OFİSİ' },
        // FABRİKALAR
        { lat: 40.78, lng: 30.40, leftType: 'FABRİKA · EV ŞARJ ALETİ FABRİKASI', rightDetail: 'KOCAELİ (GEBZE) · 45.000 m² · SATRUS EV CHARGER FACTORY' },
        { lat: 40.15, lng: 29.05, leftType: 'FABRİKA · BATARYA & BESS ÜRETİM FABRİKASI', rightDetail: 'BURSA · 32.000 m² · SATRUS BESS GIGA TESİSİ' },
        // DEPOLAR (Sadece İl Bilgisi)
        { lat: 36.85, lng: 34.60, leftType: 'DEPO · LOJİSTİK MERKEZ DEPO', rightDetail: 'MERSİN' },
        { lat: 37.85, lng: 32.50, leftType: 'DEPO · İÇ ANADOLU DAĞITIM DEPOSU', rightDetail: 'KONYA' },
        // TEKNİK SERVİSLER
        { lat: 36.95, lng: 30.70, leftType: 'TEKNİK SERVİS ŞUBESİ', rightDetail: 'ANTALYA / KEPEZ — AKDENİZ BÖLGE KONUMU' },
        { lat: 37.15, lng: 37.40, leftType: 'TEKNİK SERVİS ŞUBESİ', rightDetail: 'GAZİANTEP / ŞEHİTKAMİL — GÜNEYDOĞU KONUMU' },
        { lat: 41.25, lng: 36.35, leftType: 'TEKNİK SERVİS ŞUBESİ', rightDetail: 'SAMSUN / İLKADIM — KARADENİZ KONUMU' },
        { lat: 39.90, lng: 41.25, leftType: 'TEKNİK SERVİS ŞUBESİ', rightDetail: 'ERZURUM / YAKUTİYE — DOĞU ANADOLU KONUMU' }
    ];

    // Pürüzsüz Harita Geçiş Animasyonu (Bulanıklaşma Olmadan Yeni Harita Açılır)
    function transitionMap(callback) {
        dotStage.style.opacity = '0';
        dotStage.style.transform = 'scale(0.96)';
        setTimeout(() => {
            callback();
            dotStage.style.opacity = '1';
            dotStage.style.transform = 'scale(1)';
        }, 220);
    }

    // 1. Dünya Görünümü (Distributors)
    function renderWorldView() {
        transitionMap(() => {
            dotPinsLayer.innerHTML = '';
            mapResetBtn.style.display = 'none';
            activeBounds = { minLng: -170, maxLng: 180, minLat: -58, maxLat: 78 };
            drawCrispDotMap('world');

            mapLeftStatus.innerHTML = 'LIVE DELIVERY NETWORK · SEÇİLİ SEKME: <span class="hq-inline-dot"></span> DISTRIBUTORS';
            mapRightTooltip.textContent = 'TÜRKİYE HQ — ACTIVE HUB (DETAY İÇİN TIKLAYIN)';

            distributorPoints.forEach(item => {
                const pos = latLngToXY(item.lat, item.lng);
                const pin = document.createElement('div');
                pin.className = `dot-pin ${item.isHQ ? 'hq-pin' : ''}`;
                pin.style.left = `${pos.x}px`;
                pin.style.top = `${pos.y}px`;
                pin.innerHTML = `<div class="dot-pin-pulse"></div><div class="dot-pin-core"></div>`;

                pin.addEventListener('mouseenter', () => {
                    mapLeftStatus.innerHTML = `${item.leftType} <span class="hq-inline-dot"></span>`;
                    mapRightTooltip.textContent = item.rightDetail;
                });

                pin.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (item.id === 'TR') {
                        renderTurkeyDetailView();
                    } else {
                        renderEmptyCountryView(item);
                    }
                });

                dotPinsLayer.appendChild(pin);
            });
        });
    }

    // 2. Türkiye İçi HD Harita Görünümü (Tıklanınca Cam Gibi Net Türkiye Haritası Açılır)
    function renderTurkeyDetailView() {
        transitionMap(() => {
            dotPinsLayer.innerHTML = '';
            mapResetBtn.style.display = 'inline-block';
            activeBounds = { minLng: 25.4, maxLng: 45.4, minLat: 35.4, maxLat: 42.6 };
            drawCrispDotMap('turkey');

            mapLeftStatus.innerHTML = 'TÜRKİYE İÇİ AĞ · OFİS / FABRİKA / DEPO / TEKNİK SERVİS <span class="hq-inline-dot"></span>';
            mapRightTooltip.textContent = 'TÜRKİYE NOKTALARININ ÜZERİNE GELİN';

            turkeySubPoints.forEach(loc => {
                const pos = latLngToXY(loc.lat, loc.lng);
                const pin = document.createElement('div');
                pin.className = 'dot-pin';
                pin.style.left = `${pos.x}px`;
                pin.style.top = `${pos.y}px`;
                pin.innerHTML = `<div class="dot-pin-pulse"></div><div class="dot-pin-core"></div>`;

                pin.addEventListener('mouseenter', () => {
                    mapLeftStatus.innerHTML = `${loc.leftType} <span class="hq-inline-dot"></span>`;
                    mapRightTooltip.textContent = loc.rightDetail;
                });

                dotPinsLayer.appendChild(pin);
            });
        });
    }

    // 3. Diğer Ülkelere (Fransa, Almanya vb.) Tıklanınca Net Ülke Haritası Açılır Ama İçi Boş Kalır
    function renderEmptyCountryView(countryItem) {
        transitionMap(() => {
            dotPinsLayer.innerHTML = '';
            mapResetBtn.style.display = 'inline-block';
            activeBounds = countryItem.bounds || { minLng: countryItem.lng - 8, maxLng: countryItem.lng + 8, minLat: countryItem.lat - 5, maxLat: countryItem.lat + 5 };
            drawCrispDotMap('country', countryItem.iso);

            mapLeftStatus.innerHTML = `${countryItem.name} BÖLGE GÖRÜNÜMÜ <span class="hq-inline-dot"></span>`;
            mapRightTooltip.textContent = `${countryItem.name} — İÇ NOKTA KAYDI BULUNMUYOR`;
        });
    }

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

    // Gerçek Dünya Sınır Verisini Çekip Noktalı Haritayı Başlat
    fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
        .then(res => res.json())
        .then(data => {
            worldGeoFeatures = data.features;
            renderWorldView();
        });
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