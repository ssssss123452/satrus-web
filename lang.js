// SATRUS 5 SAYFALIK OTOMATİK TR / EN DİL MOTORU (lang.js)

const phraseTranslations = {
    // Üst Menü & Ortak Butonlar
    "HOME": "ANA SAYFA",
    "SERVICES & SOFTWARE": "HİZMETLER & YAZILIM",
    "EV CHARGING": "EV ŞARJ SİSTEMLERİ",
    "ALL EV": "TÜM EV",
    "CABLES": "KABLOLAR",
    "COMPONENTS": "BİLEŞENLER",
    "ALL HARDWARE": "TÜM DONANIMLAR",
    "SOLAR & PV": "GÜNEŞ & PV",
    "WIND & THERMAL": "RÜZGAR & TERMAL",
    "BESS STORAGE": "BESS DEPOLAMA",
    "ABOUT": "HAKKIMIZDA",
    "PRODUCTS": "ÜRÜNLER",
    "SUCCESS STORIES": "BAŞARI HİKAYELERİ",
    "CONTACT US": "BİZE ULAŞIN",
    "GET A PROPOSAL": "TEKLİF ALIN",
    "REQUEST A PROPOSAL": "TEKLİF İSTEYİN",
    "EXPLORE PRODUCTS": "ÜRÜNLERİ KEŞFET",
    "EXPLORE": "İNCELE",
    "INQUIRE": "BİLGİ AL",
    "READ SUCCESS STORIES": "BAŞARI HİKAYELERİNİ OKU",
    "START THE CONVERSATION": "İLETİŞİME GEÇİN",
    "DISCUSS A FACTORY PROJECT": "FABRİKA PROJESİ GÖRÜŞÜN",
    "SEND REQUEST": "TALEBİ GÖNDER",
    "WHATSAPP US": "WHATSAPP HATTIMIZ",
    "DETAILS ON REQUEST": "DETAYLAR TALEP ÜZERİNE",

    // HOME (index.html)
    "SATRUS — ENERGY TECHNOLOGIES / TÜRKİYE": "SATRUS — ENERJİ TEKNOLOJİLERİ / TÜRKİYE",
    "SATRUS / ENERGY TECHNOLOGIES / TÜRKİYE": "SATRUS / ENERJİ TEKNOLOJİLERİ / TÜRKİYE",
    "Renewable hardware. Custom software. Turnkey engineering. Built by ex-aerospace engineers. Proven in the field.": "Yenilenebilir donanım. Özel yazılım. Anahtar teslim mühendislik. Eski havacılık mühendisleri tarafından geliştirildi. Sahada kanıtlandı.",
    "4.5x faster": "4.5x daha hızlı",
    "Faster deployment & smart grid synchronization across global charging stations.": "Küresel şarj istasyonlarında daha hızlı kurulum ve akıllı şebeke senkronizasyonu.",
    "99.8% Uptime": "%99.8 Kesintisiz",
    "Connected telemetry & real-time load balancing reached within 20ms.": "Bağlı telemetri ve gerçek zamanlı yük dengeleme 20ms içinde sağlanır.",
    "IN EXPORTS": "İHRACAT HACMİ",
    "COUNTRIES SERVED": "HİZMET VERİLEN ÜLKE",
    "CONTINENTS": "KITA",
    "YEARS COMBINED EXPERIENCE": "YILLIK TOPLAM DENEYİM",
    "WHAT WE DO": "NE YAPIYORUZ",
    "Hardware, software and engineering — delivered separately or as one turnkey package.": "Donanım, yazılım ve mühendislik — ayrı ayrı veya tek bir anahtar teslim paket olarak sunulur.",
    "Solar, wind, geothermal, BESS and EV charging hardware. Export-ready. Field-proven.": "Güneş, rüzgar, jeotermal, BESS ve EV şarj donanımları. İhracata hazır. Sahada kanıtlanmış.",
    "Monitoring, charger network management and AI energy optimization. Built in-house. Built for your grid.": "İzleme, şarj ağı yönetimi ve yapay zeka enerji optimizasyonu. Kendi bünyemizde, şebekeniz için üretildi.",
    "Feasibility, EPC support, turnkey factory setup and technology transfer. From drawing board to production line.": "Fizibilite, EPC desteği, anahtar teslim fabrika kurulumu ve teknoloji transferi. Çizim masasından üretim hattına.",
    "GLOBAL REACH": "KÜRESEL ERİŞİM",
    "One hub in Türkiye. Deployments across Europe, Central Asia, the Middle East and Africa. Hover the markers.": "Türkiye'de tek merkez. Avrupa, Orta Asya, Orta Doğu ve Afrika genelinde kurulumlar. Noktaların üzerine gelin.",
    "HOW WE WORK": "NASIL ÇALIŞIYORUZ",
    "ZERO MARKETING BLUFF": "SIFIR PAZARLAMA BLÖFÜ",
    "If we can't build it, we don't pitch it. Every claim on this site maps to a delivered project. Numbers talk. Adjectives walk.": "Yapamayacağımız işi sunmayız. Bu sitedeki her iddia teslim edilmiş bir projeye dayanır. Rakamlar konuşur.",
    "BATTLE-TESTED EXECUTION": "SAHADA TEST EDİLMİŞ UYGULAMA",
    "Our systems run in conflict zones, remote regions and harsh climates. Equipment that survives there works anywhere.": "Sistemlerimiz çatışma bölgelerinde, uzak coğrafyalarda ve zorlu iklimlerde çalışır. Orada dayanan ekipman her yerde çalışır.",
    "UNCOMPROMISING SPEED": "TAVİZSİZ HIZ",
    "Yıldırım means lightning. Proposals in days, not months. Delivery schedules we actually hit.": "Yıldırım hızında. Aylar değil, günler içinde tekliflendirme. Gerçekten uyduğumuz teslimat takvimleri.",
    "CASE IN POINT": "ÖRNEK VAKA",
    "We built the entire factory from scratch. Turnkey technology and engineering transfer — machines, process know-how, training, commissioning. From empty ground to a working production line.": "Tüm fabrikayı sıfırdan kurduk. Anahtar teslim teknoloji ve mühendislik transferi — makineler, süreç bilgisi, eğitim, devreye alma. Boş araziden çalışan üretim hattına.",
    "TRUSTED BY PARTNERS ACROSS 5 CONTINENTS": "5 KITADA İŞ ORTAKLARIMIZIN GÜVENİYLE",
    "FAQ": "SSS",
    "WHERE DO YOU DELIVER?": "NERELERE TESLİMAT YAPIYORSUNUZ?",
    "From our central engineering hub in Türkiye, we deliver and commission systems across Europe, Central Asia, the Middle East, Africa, and the Americas.": "Türkiye'deki merkez mühendislik üssümüzden Avrupa, Orta Asya, Orta Doğu, Afrika ve Amerika kıtalarına sistem teslimatı ve kurulumu yapıyoruz.",
    "DO YOU ONLY SELL HARDWARE?": "SADECE DONANIM MI SATIYORSUNUZ?",
    "No. We deliver complete ecosystems: renewable and EV hardware, custom OCPP/grid software, and full EPC engineering consulting — separately or turnkey.": "Hayır. Yenilenebilir enerji ve EV donanımı, özel OCPP/şebeke yazılımları ve tam kapsamlı EPC mühendislik danışmanlığını ayrı ayrı veya anahtar teslim sunuyoruz.",
    "CAN YOU REALLY BUILD A FACTORY FROM ZERO?": "GERÇEKTEN SIFIRDAN FABRİKA KURABİLİYOR MUSUNUZ?",
    "Yes. We have already done it. We supply machinery, assembly lines, testing bays, firmware transfer, and engineer training from empty land to active production.": "Evet, halihazırda kurduk. Boş araziden aktif üretime kadar makine parkuru, montaj hatları, test üniteleri, yazılım transferi ve mühendis eğitimlerini sağlıyoruz.",
    "DO YOU WORK IN HIGH-RISK REGIONS?": "YÜKSEK RİSKLİ BÖLGELERDE ÇALIŞIYOR MUSUNUZ?",
    "Yes. Our hardware and off-grid energy storage systems are specifically engineered for harsh climates, unstable grids, and remote territories.": "Evet. Donanımlarımız ve şebekeden bağımsız depolama sistemlerimiz zorlu iklimler, dengesiz şebekeler ve uzak bölgeler için özel olarak tasarlanmıştır.",
    "HOW FAST DO YOU RESPOND?": "NE KADAR HIZLI DÖNÜŞ YAPIYORSUNUZ?",
    "Initial engineering scoping within 48 hours. Full technical and commercial proposals delivered in days, not months.": "48 saat içinde ilk mühendislik değerlendirmesi. Tam kapsamlı teknik ve ticari teklifler aylar değil, günler içinde sunulur.",
    "Tell us the problem. We'll bring the engineering.": "Bize sorunu anlatın. Mühendisliği biz getirelim.",

    // ABOUT (about.html)
    "ABOUT SATRUS": "SATRUS HAKKINDA",
    "From aerospace precision to high-voltage infrastructure — we build energy systems that survive the real world.": "Havacılık hassasiyetinden yüksek gerilim altyapısına — gerçek dünya koşullarına dayanan enerji sistemleri inşa ediyoruz.",
    "WHO WE ARE": "BİZ KİMİZ",
    "SATRUS is a Turkish energy technology company. We design, build and deliver renewable energy hardware, custom software and turnkey engineering projects. Founded by people who built aircraft systems and ran energy companies.": "SATRUS bir Türk enerji teknolojileri şirketidir. Yenilenebilir enerji donanımları, özel yazılımlar ve anahtar teslim mühendislik projeleri tasarlar, üretir ve teslim ederiz. Uçak sistemleri geliştiren ve enerji şirketleri yöneten uzmanlar tarafından kurulmuştur.",
    "FIELD-TESTED RELIABILITY": "SAHADA KANITLANMIŞ GÜVENİLİRLİK",
    "Our equipment operates where failure is not an option — high-risk regions, extreme climates, unstable grids. If it works there, it works everywhere.": "Ekipmanlarımız hatanın seçenek olmadığı yüksek riskli bölgelerde, aşırı iklimlerde ve dengesiz şebekelerde çalışır. Orada çalışıyorsa, her yerde çalışır.",
    "OUR CORE PROMISE": "TEMEL SÖZÜMÜZ",
    "Engineered for the best. Delivered at speed. No marketing fluff, no inflated timelines. We sign what we can ship.": "En iyisi için tasarlandı. Hızla teslim edildi. Pazarlama abartısı yok, şişirilmiş takvimler yok. Teslim edebileceğimiz işin altına imza atarız.",
    "BRAND STORY": "MARKA HİKAYESİ",
    "THE SATRUS STAR": "SATRUS YILDIZI",
    "An Ottoman symbol of precision and ambition. Eight points. Zero compromise. It is the standard we engineer to.": "Hassasiyet ve tutkunun Osmanlı sembolü. Sekiz köşe. Sıfır taviz. Mühendislik standardımız budur.",
    "THE SATRUS RED": "SATRUS KIRMIZISI",
    "Deep maroon, forged darker. Passion, power and resilience — the color of work that survives the field.": "Daha koyu dövülmüş derin bordo. Tutku, güç ve dayanıklılık — sahada hayatta kalan işin rengi.",
    "THE YILDIRIM": "YILDIRIM",
    "The lightning bolt. Speed is not a feature here. It is the operating system.": "Yıldırım oku. Hız burada bir özellik değil; işletim sisteminin kendisidir.",
    "MILESTONES": "DÖNÜM NOKTALARI",
    "Placeholder dates — replace with the real timeline.": "Örnek tarihler — gerçek zaman çizelgesiyle değiştirilebilir.",
    "SATRUS founded in Türkiye by ex-aerospace engineers and energy executives.": "SATRUS, eski havacılık mühendisleri ve enerji yöneticileri tarafından Türkiye'de kuruldu.",
    "First export contracts signed across the EU.": "Avrupa Birliği genelinde ilk ihracat sözleşmeleri imzalandı.",
    "Software division launched — monitoring and AI energy systems.": "Yazılım departmanı kuruldu — izleme ve yapay zeka enerji sistemleri başlatıldı.",
    "Africa's first EV charger factory delivered, turnkey.": "Afrika'nın ilk EV şarj cihazı fabrikası anahtar teslim olarak kuruldu.",
    "Defense and government energy deployments executed.": "Savunma ve kamu enerji altyapı kurulumları gerçekleştirildi.",
    "Delivery network reaches 90+ countries on 5 continents.": "Teslimat ağı 5 kıtada 90'dan fazla ülkeye ulaştı.",
    "THE TEAM": "EKİBİMİZ",
    "PRESIDENT & FOUNDER": "BAŞKAN & KURUCU",
    "GENERAL MANAGER": "GENEL MÜDÜR",
    "HEAD OF DIGITAL MARKETING": "DİJİTAL PAZARLAMA DİREKTÖRÜ",
    "HEAD OF ENGINEERING": "MÜHENDİSLİK DİREKTÖRÜ",
    "HEAD OF EXPORTS": "İHRACAT DİREKTÖRÜ",
    "SOFTWARE DEVELOPER": "YAZILIM GELİŞTİRİCİ",
    "FINANCIAL DIRECTOR": "FİNANS DİREKTÖRÜ",

    // PRODUCTS (products.html)
    "PRODUCTS & SOLUTIONS": "ÜRÜNLER & ÇÖZÜMLER",
    "Every product below ships with SATRUS engineering support. Specs are placeholders — full datasheets on request.": "Aşağıdaki her ürün SATRUS mühendislik desteğiyle gönderilir. Teknik detaylar ve veri föyleri talep üzerine sunulur.",
    "ALL": "TÜMÜ",
    "ENERGY HARDWARE": "ENERJİ DONANIMI",
    "EV & CHARGING": "EV & ŞARJ",
    "SOFTWARE & AI": "YAZILIM & YZ",
    "SERVICES": "HİZMETLER",
    "SOLAR THERMAL HEATING": "GÜNEŞ TERMAL ISITMA",
    "High-efficiency collectors for residential and industrial hot water.": "Konut ve endüstriyel sıcak su için yüksek verimli kollektörler.",
    "PV ELECTRIC SOLUTIONS": "PV ELEKTRİK ÇÖZÜMLERİ",
    "Modules, inverters and complete PV systems, rooftop to utility scale.": "Çatı tipinden şebeke ölçeğine kadar modüller, inverterler ve komple PV sistemleri.",
    "HEAT PUMPS": "ISI POMPALARI",
    "Air and ground-source systems for efficient heating and cooling.": "Verimli ısıtma ve soğutma için hava ve toprak kaynaklı sistemler.",
    "WIND TURBINES": "RÜZGAR TÜRBİNLERİ",
    "Small and mid-scale turbines for distributed generation.": "Dağıtık üretim için küçük ve orta ölçekli rüzgar türbinleri.",
    "GEOTHERMAL ENERGY SYSTEMS": "JEOTERMAL ENERJİ SİSTEMLERİ",
    "Direct-use and power generation systems, engineered end-to-end.": "Uçtan uca tasarlanmış doğrudan kullanım ve güç üretim sistemleri.",
    "Battery energy storage. Grid-scale or behind-the-meter.": "Batarya enerji depolama. Şebeke ölçekli veya sayaç arkası.",
    "OEM MANUFACTURING": "OEM ÜRETİM",
    "Your design, our lines. White-label energy hardware at export quality.": "Sizin tasarımınız, bizim hatlarımız. İhracat kalitesinde özel markalı enerji donanımı.",
    "HIGH-PERFORMANCE EV CHARGERS": "YÜKSEK PERFORMANSLI EV ŞARJ CİHAZLARI",
    "AC and DC fast charging hardware, network-ready.": "Ağa hazır AC ve DC hızlı şarj donanımları.",
    "EV CHARGER NETWORK MANAGEMENT SOFTWARE": "EV ŞARJ AĞI YÖNETİM YAZILIMI",
    "Operate, monitor and monetize charger networks from one dashboard.": "Şarj ağlarını tek bir panelden yönetin, izleyin ve gelir elde edin.",
    "SMART SOLAR MONITORING": "AKILLI GÜNEŞ İZLEME",
    "Real-time production telemetry, alerts and reporting.": "Gerçek zamanlı üretim telemetrisi, uyarılar ve raporlama.",
    "AI ENERGY MANAGEMENT": "YAPAY ZEKA ENERJİ YÖNETİMİ",
    "Forecasting and optimization that cuts energy cost per kWh.": "kWh başına enerji maliyetini düşüren tahminleme ve optimizasyon.",
    "TURNKEY FACTORY SETUP": "ANAHTAR TESLİM FABRİKA KURULUMU",
    "We deliver complete manufacturing capability — not advice, not slides. Proven with Africa's first EV charger factory.": "Tavsiye veya sunum değil, eksiksiz üretim kabiliyeti teslim ediyoruz. Afrika'nın ilk EV şarj fabrikasıyla kanıtlandı.",
    "MARKET & SITE FEASIBILITY": "PAZAR & SAHA FİZİBİLİTESİ",
    "MACHINERY & PRODUCTION LINE DESIGN": "MAKİNE & ÜRETİM HATTI TASARIMI",
    "PROCESS KNOW-HOW TRANSFER": "SÜREÇ VE KNOW-HOW TRANSFERİ",
    "STAFF TRAINING": "PERSONEL EĞİTİMİ",
    "COMMISSIONING & RAMP-UP": "DEVREYE ALMA & ÜRETİM ARTIRIMI",
    "ENGINEERING & CONSULTING": "MÜHENDİSLİK & DANIŞMANLIK",
    "Feasibility, system design, EPC support and commissioning — delivered where others don't go.": "Fizibilite, sistem tasarımı, EPC desteği ve devreye alma — başkalarının gitmediği yerlere teslim edilir.",
    "LIVE DEMO": "CANLI DEMO",
    "A taste of our energy software: solar production, EV charger load and AI-predicted consumption. Simulated data — the real system runs on your assets.": "Enerji yazılımımızdan bir kesit: güneş üretimi, EV şarj yükü ve YZ tahmini tüketim. Simüle edilmiş verilerdir.",
    "SIMULATED 24H DATA": "SİMÜLE 24 SAATLİK VERİ",

    // SUCCESS STORIES (stories.html)
    "Placeholder case studies — swap in full project details whenever you're ready. Every story here maps to real delivered work.": "Örnek vaka analizleri — buradaki her hikaye sahada teslim edilmiş gerçek projelere dayanmaktadır.",
    "CONFLICT & REMOTE ZONES": "ÇATIŞMA & UZAK BÖLGELER",
    "HIGH-RISK ENVIRONMENT DEPLOYMENTS": "YÜKSEK RİSKLİ BÖLGE KURULUMLARI",
    "Energy systems delivered where logistics, security and climate all say no. Full case file on request.": "Lojistiğin, güvenliğin ve iklimin imkansız dediği yerlerde teslim edilen enerji sistemleri.",
    "PUBLIC SECTOR": "KAMU SEKTÖRÜ",
    "GOVERNMENT TENDERS": "DEVLET İHALELERİ",
    "Public-sector energy infrastructure, won on spec and delivered on schedule.": "Şartnameye uygun kazanılan ve zamanında teslim edilen kamu enerji altyapıları.",
    "LARGE-SCALE HOUSING": "TOPLU KONUT PROJELERİ",
    "RESIDENTIAL INSTALLATIONS": "KONUT KURULUMLARI",
    "Solar thermal and PV systems for large-scale housing developments.": "Büyük ölçekli konut projeleri için güneş termal ve PV sistemleri.",
    "CRITICAL INFRASTRUCTURE": "KRİTİK ALTYAPI",
    "DEFENSE FACILITY ENERGY SYSTEMS": "SAVUNMA TESİSİ ENERJİ SİSTEMLERİ",
    "Autonomous power for critical facilities. Details restricted by design.": "Kritik tesisler için otonom güç sistemleri. Detaylar güvenlik gereği kısıtlıdır.",
    "TURNKEY MANUFACTURING": "ANAHTAR TESLİM ÜRETİM",
    "AFRICA'S FIRST EV CHARGER FACTORY": "AFRİKA'NIN İLK EV ŞARJ FABRİKASI",
    "Full turnkey technology and engineering transfer. From empty ground to a running production line.": "Tam kapsamlı anahtar teslim teknoloji ve mühendislik transferi. Boş araziden çalışan üretim hattına.",

    // CONTACT (contact.html)
    "CONTACT": "İLETİŞİM",
    "We answer fast. No weeks of waiting.": "Hızlı yanıt veriyoruz. Haftalarca beklemek yok.",
    "DIRECT LINES": "DOĞRUDAN HATLAR",
    "NAVIGATE": "MENÜ",
    "Home": "Ana Sayfa",
    "About": "Hakkımızda",
    "Products": "Ürünler",
    "Success Stories": "Başarı Hikayeleri",
    "Contact": "İletişim",
    "ENGINEERED IN TÜRKİYE": "TÜRKİYE'DE TASARLANDI",
    "© 2025 SATRUS Energy Technologies. All rights reserved.": "© 2025 SATRUS Enerji Teknolojileri. Tüm hakları saklıdır.",
    "© 2026 SATRUS Energy Technologies. All rights reserved.": "© 2026 SATRUS Enerji Teknolojileri. Tüm hakları saklıdır."
};

// Kırmızı Konturlu (Outline) Büyük Başlıklar İçin HTML Korumalı Çeviriler
const htmlBlockTranslations = [
    {
        en: 'ENGINEERED FOR<br> THE BEST.<br> <span class="text-outline-red">DELIVERED AT SPEED.</span>',
        tr: 'EN İYİSİ İÇİN<br> TASARLANDI.<br> <span class="text-outline-red">HIZLA TESLİM EDİLDİ.</span>'
    },
    {
        en: 'THREE DISCIPLINES. <span class="text-outline-red">ONE STANDARD.</span>',
        tr: 'ÜÇ DİSİPLİN. <span class="text-outline-red">TEK STANDART.</span>'
    },
    {
        en: 'WHERE WE <span class="text-outline-red">DELIVER.</span>',
        tr: 'NERELERE <span class="text-outline-red">TESLİM EDİYORUZ.</span>'
    },
    {
        en: 'NO FLUFF. <span class="text-outline-red">JUST EXECUTION.</span>',
        tr: 'LAF DEĞİL. <span class="text-outline-red">SADECE İCRAAT.</span>'
    },
    {
        en: 'AFRICA\'S FIRST EV CHARGER<br> <span class="text-outline-red">MANUFACTURER.</span>',
        tr: 'AFRİKA\'NIN İLK EV ŞARJ<br> <span class="text-outline-red">ÜRETİCİSİ.</span>'
    },
    {
        en: 'STRAIGHT <span class="text-outline-red">ANSWERS.</span>',
        tr: 'NET <span class="text-outline-red">CEVAPLAR.</span>'
    },
    {
        en: 'READY WHEN <span class="text-outline-red">YOU ARE.</span>',
        tr: 'SİZ HAZIR OLDUĞUNUZDA <span class="text-outline-red">BİZ HAZIRIZ.</span>'
    },
    {
        en: 'BUILT BY ENGINEERS.<br> <span class="text-outline-red">PROVEN IN THE FIELD.</span>',
        tr: 'MÜHENDİSLER TARAFINDAN KURULDU.<br> <span class="text-outline-red">SAHADA KANITLANDI.</span>'
    },
    {
        en: 'THREE SYMBOLS. <span class="text-outline-red">ONE CODE.</span>',
        tr: 'ÜÇ SEMBOL. <span class="text-outline-red">TEK KOD.</span>'
    },
    {
        en: 'THE RECORD <span class="text-outline-red">SO FAR.</span>',
        tr: 'ŞİMDİYE KADARKİ <span class="text-outline-red">KAYITLARIMIZ.</span>'
    },
    {
        en: 'THE PEOPLE <span class="text-outline-red">BEHIND THE WORK.</span>',
        tr: 'İŞİN ARKASINDAKİ <span class="text-outline-red">İNSANLAR.</span>'
    },
    {
        en: 'PROOF, <span class="text-outline-red">NOT PROMISES.</span>',
        tr: 'VAAT DEĞİL, <span class="text-outline-red">KANIT.</span>'
    },
    {
        en: 'YOUR PROJECT <span class="text-outline-red">COULD BE NEXT.</span>',
        tr: 'SIRADAKİ PROJE <span class="text-outline-red">SİZİNKİ OLABİLİR.</span>'
    },
    {
        en: 'BUILT TO RUN. <span class="text-outline-red">READY TO SHIP.</span>',
        tr: 'ÇALIŞMAK İÇİN ÜRETİLDİ. <span class="text-outline-red">SEVKİYATA HAZIR.</span>'
    },
    {
        en: 'FROM EMPTY GROUND <span class="text-outline-red">TO<br>PRODUCTION LINE.</span>',
        tr: 'BOŞ ARAZİDEN <span class="text-outline-red">ÜRETİM<br>HATTINA.</span>'
    },
    {
        en: 'EXECUTED IN THE FIELD. <span class="text-outline-red">NOT IN SLIDEWARE.</span>',
        tr: 'SUNUMLARDA DEĞİL. <span class="text-outline-red">SAHADA UYGULANDI.</span>'
    },
    {
        en: 'AI ENERGY <span class="text-outline-red">INTELLIGENCE.</span>',
        tr: 'YAPAY ZEKA ENERJİ <span class="text-outline-red">ZEKASI.</span>'
    },
    {
        en: 'TALK <span class="text-outline-red">TO US.</span>',
        tr: 'BİZİMLE <span class="text-outline-red">KONUŞUN.</span>'
    },
    {
        en: 'TURNKEY EXECUTION. <span class="text-outline-red">CUSTOM INTELLIGENCE.</span>',
        tr: 'ANAHTAR TESLİM UYGULAMA. <span class="text-outline-red">ÖZEL MÜHENDİSLİK ZEKASI.</span>'
    },
    {
        en: 'WE ANSWER FAST.<br> <span class="text-outline-red">IN HOURS, NOT WEEKS.</span>',
        tr: 'HIZLI YANIT VERİRİZ.<br> <span class="text-outline-red">HAFTALAR DEĞİL, SAATLER İÇİNDE.</span>'
    }
];

const placeholderTranslations = {
    "Your name": "Adınız Soyadınız",
    "you@company.com": "isim@sirketiniz.com",
    "Company name": "Şirket adı",
    "Country": "Ülke",
    "Tell us what you need built.": "Neye ihtiyacınız olduğunu bize anlatın."
};

// Ters Sözlük (TR -> EN Dönüşü İçin)
const reversePhrases = {};
Object.entries(phraseTranslations).forEach(([en, tr]) => { reversePhrases[tr] = en; });

const reversePlaceholders = {};
Object.entries(placeholderTranslations).forEach(([en, tr]) => { reversePlaceholders[tr] = en; });

function normalizeHtml(str) {
    return str.replace(/\s+/g, ' ').trim();
}

function setLanguage(lang) {
    localStorage.setItem('satrus_lang', lang);

    // 1. Üst Bardaki EN · TR Aktifliğini Güncelle
    document.querySelectorAll('.lang-switch span').forEach(sp => {
        const txt = sp.textContent.trim();
        if (txt === 'EN' || txt === 'TR') {
            sp.classList.toggle('active', txt === lang);
        }
    });

    // 2. Büyük Kırmızı Konturlu Başlıkları Çevir
    document.querySelectorAll('.hero-title, .section-title, .fast-title').forEach(el => {
        const currentNorm = normalizeHtml(el.innerHTML);
        htmlBlockTranslations.forEach(item => {
            if (lang === 'TR' && currentNorm === normalizeHtml(item.en)) {
                el.innerHTML = item.tr;
            } else if (lang === 'EN' && currentNorm === normalizeHtml(item.tr)) {
                el.innerHTML = item.en;
            }
        });
    });

    // 3. Tüm Metin Düğümlerini (Text Nodes) Çevir
    const dict = lang === 'TR' ? phraseTranslations : reversePhrases;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = walker.nextNode())) {
        const raw = node.nodeValue;
        const trimmed = raw.trim();
        if (trimmed && dict[trimmed]) {
            node.nodeValue = raw.replace(trimmed, dict[trimmed]);
        }
    }

    // 4. Form Placeholder'larını Çevir
    const pDict = lang === 'TR' ? placeholderTranslations : reversePlaceholders;
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(inp => {
        const ph = inp.getAttribute('placeholder');
        if (pDict[ph]) inp.setAttribute('placeholder', pDict[ph]);
    });
}

// Sayfa Yüklendiğinde EN / TR Tıklama Olaylarını Bağla
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-switch').forEach(sw => {
        sw.style.cursor = 'pointer';
        sw.addEventListener('click', (e) => {
            const clickedText = e.target.textContent.trim();
            if (clickedText === 'EN' || clickedText === 'TR') {
                setLanguage(clickedText);
            } else {
                const current = localStorage.getItem('satrus_lang') || 'EN';
                setLanguage(current === 'EN' ? 'TR' : 'EN');
            }
        });
    });

    const savedLang = localStorage.getItem('satrus_lang') || 'EN';
    if (savedLang === 'TR') {
        setLanguage('TR');
    }
});