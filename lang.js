// SATRUS 5 SAYFALIK EKSİKSİZ OTOMATİK TR / EN DİL MOTORU (lang.js)

const phraseTranslations = {
    // 1. ÜST MENÜ & ORTAK BUTONLAR
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
    "SERVICES": "HİZMETLER",
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

    // 2. HOME (index.html)
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
    "Hover a marker. Every point is a project delivered.": "Bir noktanın üzerine gelin. Her nokta teslim edilmiş bir projeyi temsil eder.",
    "DISTRIBUTORS": "DİSTRİBÜTÖRLER",
    "OPERATIONS & SERVICE NETWORK": "OPERASYON & SERVİS AĞI",
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

    // 3. YENİ ABOUT SAYFASI (about.html) — TÜM DETAYLAR DAHİL
    "— ABOUT US": "— HAKKIMIZDA",
    "— ABOUT SATRUS": "— SATRUS HAKKINDA",
    "SATRUS exists because energy projects deserve engineering, not marketing. We design the system, build the hardware, write the software and stay on site until it runs.": "SATRUS, enerji projelerinin pazarlamayı değil gerçek mühendisliği hak ettiği için var. Sistemi tasarlıyor, donanımı üretiyor, yazılımı geliştiriyor ve sistem devreye girene kadar sahada kalıyoruz.",
    "FOUNDED BY": "KURUCULAR",
    "EX-AEROSPACE & ENERGY EXECUTIVES": "ESKİ HAVACILIK MÜHENDİSLERİ & ENERJİ YÖNETİCİLERİ",
    "COMBINED EXPERIENCE": "TOPLAM DENEYİM",
    "30+ YEARS": "30+ YIL",
    "DELIVERED IN": "TESLİMAT AĞI",
    "90+ COUNTRIES": "90+ ÜLKE",
    "PHOTOGRAPHY PLACEHOLDER — REPLACE WITH YOUR OWN ON-SITE IMAGERY (media/about-hero.jpg)": "FOTOĞRAF ALANI — KENDİ SAHA GÖRSELİNİZLE DEĞİŞTİRİN (media/about-hero.jpg)",
    "PHOTOGRAPHY PLACEHOLDER — REPLACE WITH YOUR OWN ON-SITE IMAGERY": "FOTOĞRAF ALANI — KENDİ SAHA GÖRSELİNİZLE DEĞİŞTİRİN",
    "WHO WE ARE": "BİZ KİMİZ",
    "SATRUS is a renewable energy hardware, software and engineering company founded by ex-aerospace engineers and energy executives with 30+ years of combined experience. We design, manufacture, install and commission — and we keep the same engineers on your project from the first drawing to handover.": "SATRUS; 30 yılı aşkın ortak deneyime sahip eski havacılık mühendisleri ve enerji yöneticileri tarafından kurulmuş bir yenilenebilir enerji donanım, yazılım ve mühendislik şirketidir. Tasarlıyor, üretiyor, kuruyor ve devreye alıyoruz — ilk çizimden teslimata kadar aynı mühendisleri projenizde tutuyoruz.",
    "FIELD-TESTED RELIABILITY": "SAHADA KANITLANMIŞ GÜVENİLİRLİK",
    "Our equipment runs in Afghanistan, Syria and Central Asia, in heat, dust and unstable grids. Systems specified for those conditions do not fail in comfortable ones. Reliability is an engineering input, not a marketing line.": "Ekipmanlarımız Afganistan, Suriye ve Orta Asya’da; yüksek sıcaklıkta, tozda ve dengesiz şebekelerde çalışır. Bu zorlu koşullar için üretilen sistemler konforlu sahalarda asla yarı yolda bırakmaz. Güvenilirlik bir pazarlama sloganı değil, mühendislik girdisidir.",
    "OUR CORE PROMISE": "TEMEL SÖZÜMÜZ",
    "We say what we will do, then we do exactly that — and we answer the phone while we do it. Proposals in days, commitments we hold, documentation you can build on. No weeks of waiting.": "Ne yapacağımızı söylüyor ve tam olarak onu yapıyoruz — bunu yaparken de telefonlarınıza her zaman yanıt veriyoruz. Haftalarca beklemek yok; günler içinde net teklifler, tutulan sözler ve sağlam teknik dokümantasyon.",
    "— THE BRAND": "— MARKA KİMLİĞİ",
    "Everything we build carries the star, the red and the bolt. Here is what they mean.": "Ürettiğimiz her sistem yıldızı, kırmızıyı ve yıldırımı taşır. İşte anlamları:",
    "THE SATRUS STAR": "SATRUS YILDIZI",
    "PRECISION AND AMBITION": "HASSASİYET VE HIRS",
    "An Ottoman-inspired eight-point geometry. Two squares and one centre: structure from every angle. Every system we design is aimed at a single point — the result the project actually needs.": "Osmanlı geometrisinden ilham alan sekiz köşeli yapı. İki kare ve tek bir merkez: her açıdan kusursuz denge. Tasarladığımız her sistem tek bir noktaya odaklanır — projenin gerçekten ihtiyaç duyduğu sonuca.",
    "THE SATRUS RED": "SATRUS KIRMIZISI",
    "PASSION, POWER, RESILIENCE": "TUTKU, GÜÇ, DAYANIKLILIK",
    "Deep maroon is where we come from — heavy, serious, engineered. The bright red is where we are going: energy that moves. It marks every active state, every commitment, every result.": "Koyu bordo geldiğimiz yeri temsil eder — ağırbaşlı, ciddi ve mühendislik odaklı. Parlak kırmızı ise gittiğimiz yerdir: hareket eden enerji. Her aktif durumu, her taahhüdü ve her sonucu işaretler.",
    "BRAND BASE": "MARKA TABANI",
    "CORE ACCENT": "ANA VURGU",
    "GLOW RED": "PARLAK KIRMIZI",
    "THE YILDIRIM": "YILDIRIM",
    "SPEED AS A DISCIPLINE": "BİR DİSİPLİN OLARAK HIZ",
    "The lightning bolt is not decoration. Diagonal, direct, no detours — it is how we plan projects, cut lead times and answer the phone. Delivered at speed is a delivery commitment, not a slogan.": "Yıldırım sembolü bir süs değildir. Çapraz, doğrudan ve dolambaçsız — projeleri planlama, teslim sürelerini kısaltma ve çalışma biçimimizdir. Hızla teslimat bir slogan değil, teslimat taahhüdümüzdür.",
    "— MILESTONES": "— DÖNÜM NOKTALARI",
    "Replace each entry with the real date and detail — the structure is ready.": "Her bir adımı gerçek tarih ve detaylarla güncelleyin — altyapı hazır.",
    "[Year]": "[Yıl]",
    "[COMPANY FOUNDED]": "[ŞİRKET KURULUŞU]",
    "[One or two lines on how SATRUS started — replace with the real detail.]": "[SATRUS'un nasıl başladığına dair bir veya iki satır — gerçek detaylarla değiştirin.]",
    "[FIRST EXPORT PROJECT]": "[İLK İHRACAT PROJESİ]",
    "[Where it was delivered and what it proved. Replace with the real detail.]": "[Nereye teslim edildiği ve neyi kanıtladığı. Gerçek detaylarla değiştirin.]",
    "[AFRICA'S FIRST EV CHARGER FACTORY]": "[AFRİKA'NIN İLK EV ŞARJ FABRİKASI]",
    "Turnkey factory built from scratch, including full technology and engineering transfer.": "Tam teknoloji ve mühendislik transferi dahil olmak üzere sıfırdan kurulan anahtar teslim fabrika.",
    "[SOFTWARE & AI DIVISION]": "[YAZILIM VE YAPAY ZEKA BİRİMİ]",
    "[What it launched — network management, monitoring, AI energy management.]": "[Neleri başlattığı — ağ yönetimi, uzaktan izleme, yapay zeka enerji yönetimi.]",
    "— THE TEAM": "— EKİBİMİZ",
    "Ex-aerospace engineering, 30+ years of energy execution. Hover a card for what each person owns.": "Eski havacılık mühendisliği, 30+ yıllık enerji saha tecrübesi. Kimin hangi alanı yönettiğini görmek için kartların üzerine gelin.",
    "PHOTO PLACEHOLDER": "FOTOĞRAF ALANI",
    "FOCUS": "ODAK ALANI",
    "Strategy, exports and turnkey engineering partnerships.": "Strateji, ihracat ve anahtar teslim mühendislik ortaklıkları.",
    "Operations, supply chain execution and multi-country project delivery.": "Operasyonlar, tedarik zinciri yönetimi ve çok ülkeli proje teslimatı.",
    "Global brand positioning, digital growth and international lead generation.": "Küresel marka konumlandırma, dijital büyüme ve uluslararası müşteri kazanımı.",
    "System design, commissioning and technical documentation.": "Sistem tasarımı, devreye alma ve teknik dokümantasyon.",
    "International logistics, customs and tender delivery.": "Uluslararası lojistik, gümrük ve ihale teslimat süreçleri.",
    "Charger network software and telemetry pipelines.": "Şarj ağı yazılımları ve uzaktan telemetri veri hatları.",
    "AI forecasting models and monitoring dashboards.": "Yapay zeka tahminleme modelleri ve izleme panelleri.",
    "Project finance, export credit structuring and commercial compliance.": "Proje finansmanı, ihracat kredi yapılandırması ve ticari uyum.",
    "PRESIDENT & FOUNDER": "BAŞKAN & KURUCU",
    "GENERAL MANAGER": "GENEL MÜDÜR",
    "HEAD OF DIGITAL MARKETING": "DİJİTAL PAZARLAMA DİREKTÖRÜ",
    "HEAD OF ENGINEERING": "MÜHENDİSLİK DİREKTÖRÜ",
    "HEAD OF EXPORTS": "İHRACAT DİREKTÖRÜ",
    "SOFTWARE DEVELOPER": "YAZILIM GELİŞTİRİCİ",
    "FINANCIAL DIRECTOR": "FİNANS DİREKTÖRÜ",
    "PHOTOGRAPHY COMING SOON — REPLACE EACH PLACEHOLDER WITH A TEAM PORTRAIT (media/team-1.jpg ... team-8.jpg)": "FOTOĞRAFLAR YAKINDA — HER ALANI EKİP PORTRELERİYLE DEĞİŞTİRİN (media/team-1.jpg ... team-8.jpg)",
    "PHOTOGRAPHY COMING SOON — REPLACE EACH PLACEHOLDER WITH A TEAM PORTRAIT": "FOTOĞRAFLAR YAKINDA — HER ALANI EKİP PORTRELERİYLE DEĞİŞTİRİN",
    "WORK WITH US": "BİZİMLE ÇALIŞIN",
    "BRING US THE HARD PROJECT.": "ZOR PROJEYİ BİZE GETİRİN.",
    "High-risk sites, tight deadlines, unusual specifications. That is the work we are built for.": "Yüksek riskli sahalar, sıkı teslim tarihleri, sıra dışı teknik şartnameler. Biz tam olarak bu işler için varız.",
    "WE ANSWER FAST. NO WEEKS OF WAITING.": "HIZLI YANIT VERİYORUZ. HAFTALARCA BEKLEMEK YOK.",

    // 4. PRODUCTS & SERVICES (products.html & services.html)
    "PRODUCTS & SOLUTIONS": "ÜRÜNLER & ÇÖZÜMLER",
    "Every product below ships with SATRUS engineering support. Specs are placeholders — full datasheets on request.": "Aşağıdaki her ürün SATRUS mühendislik desteğiyle gönderilir. Teknik detaylar ve veri föyleri talep üzerine sunulur.",
    "ALL": "TÜMÜ",
    "ENERGY HARDWARE": "ENERJİ DONANIMI",
    "EV & CHARGING": "EV & ŞARJ",
    "SOFTWARE & AI": "YAZILIM & YZ",
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

    // 5. YENİ SUCCESS STORIES SAYFASI (stories.html) — TÜRKİYE & AFRİKA SEKMELERİ DAHİL
    "— SUCCESS STORIES": "— BAŞARI HİKAYELERİ",
    "From high-risk conflict zones to turnkey EV charger factories. Select a region and city below to inspect field deployments.": "Yüksek riskli bölgelerden anahtar teslim EV şarj fabrikalarına. Saha kurulumlarını incelemek için aşağıdan bir bölge ve şehir seçin.",
    "ALL GLOBAL DEPLOYMENTS": "TÜM KÜRESEL KURULUMLAR",
    "ALL TÜRKİYE": "TÜM TÜRKİYE",
    "ALL AFRICA": "TÜM AFRİKA",
    "AFRICA": "AFRİKA",
    "SOUTH AFRICA": "GÜNEY AFRİKA",
    "Energy systems delivered where logistics, grid load and climate demand maximum resilience. Full case file on request.": "Lojistiğin, şebeke yükünün ve iklimin maksimum dayanıklılık gerektirdiği sahalarda teslim edilen enerji sistemleri. Tam vaka dosyası talep üzerine sunulur.",
    "Public-sector energy infrastructure and smart grid synchronization, won on spec and delivered on schedule.": "Şartnameye uygun kazanılan ve zamanında teslim edilen kamu enerji altyapıları ve akıllı şebeke senkronizasyonu.",
    "Solar thermal, PV and EV charging systems for large-scale residential and commercial developments.": "Büyük ölçekli konut ve ticari projeler için güneş termal, PV ve EV şarj sistemleri.",
    "Autonomous BESS storage and hybrid backup power for critical industrial facilities.": "Kritik endüstriyel tesisler için otonom BESS depolama ve hibrit yedek güç sistemleri.",
    "Full turnkey technology and engineering transfer. From empty ground to a running production line.": "Tam kapsamlı anahtar teslim teknoloji ve mühendislik transferi. Boş araziden çalışan üretim hattına.",
    "HIGH-RISK ENVIRONMENT DEPLOYMENTS": "YÜKSEK RİSKLİ BÖLGE KURULUMLARI",
    "GOVERNMENT TENDERS": "DEVLET İHALELERİ",
    "RESIDENTIAL INSTALLATIONS": "KONUT KURULUMLARI",
    "DEFENSE FACILITY ENERGY SYSTEMS": "SAVUNMA TESİSİ ENERJİ SİSTEMLERİ",
    "AFRICA'S FIRST EV CHARGER FACTORY": "AFRİKA'NIN İLK EV ŞARJ FABRİKASI",
    "TÜRKİYE NATIONAL GRID & BESS HUB": "TÜRKİYE ULUSAL ŞEBEKE & BESS MERKEZİ",
    "PUBLIC SECTOR FAST-CHARGING CORRIDOR": "KAMU SEKTÖRÜ HIZLI ŞARJ KORİDORU",
    "SMART HOUSING SOLAR INTEGRATIONS": "AKILLI KONUT GÜNEŞ ENTEGRASYONLARI",
    "AEROSPACE & DEFENSE POWER SYSTEMS": "HAVACILIK & SAVUNMA GÜÇ SİSTEMLERİ",
    "GEBZE & ANATOLIA TURNKEY PRODUCTION": "GEBZE & ANADOLU ANAHTAR TESLİM ÜRETİM",
    "BURSA ORGANIZED INDUSTRIAL ZONE SOLAR": "BURSA ORGANİZE SANAYİ BÖLGESİ GES",
    "BURSA MUNICIPAL EV BUS CHARGING FLEET": "BURSA BELEDİYE ELEKTRİKLİ OTOBÜS ŞARJ FİLOSU",
    "NILÜFER RESIDENTIAL PV NETWORK": "NİLÜFER KONUT PV ŞEBEKE AĞI",
    "BURSA AUTOMOTIVE BESS MICROGRID": "BURSA OTOMOTİV BESS MİKRO ŞEBEKESİ",
    "BURSA GIGA BATTERY ASSEMBLY LINE": "BURSA GİGA BATARYA MONTAJ HATTI",
    "İZMİR AEGEAN WIND & SOLAR HYBRID PARK": "İZMİR EGE RÜZGAR & GÜNEŞ HİBRİT PARKI",
    "ALIAĞA PORT HIGH-POWER GRID TENDER": "ALİAĞA LİMANI YÜKSEK GERİLİM ŞEBEKE İHALESİ",
    "ÇEŞME & URLA ECO-RESIDENCE SOLAR": "ÇEŞME & URLA EKO-KONUT GÜNEŞ SİSTEMLERİ",
    "İZMİR CRITICAL TELEMETRY SUBSTATION": "İZMİR KRİTİK TELEMETRİ TRAFO MERKEZİ",
    "AEGEAN EV CHARGER LOGISTICS HUB": "EGE EV ŞARJ LOJİSTİK MERKEZİ",
    "ANTALYA HIGH-TEMP SOLAR PLANT": "ANTALYA YÜKSEK SICAKLIK GÜNEŞ SANTRALİ",
    "MEDITERRANEAN TOURISM EV CORRIDOR": "AKDENİZ TURİZM EV ŞARJ KORİDORU",
    "ANTALYA SMART VILLA & RESORT PV": "ANTALYA AKILLI VİLLA & TESİS PV KURULUMU",
    "KEPEZ AUTONOMOUS GRID STORAGE": "KEPEZ OTONOM ŞEBEKE DEPOLAMA TESİSİ",
    "ANTALYA TECHNICAL SERVICE & TEST BAY": "ANTALYA TEKNİK SERVİS & TEST MERKEZİ",
    "ANKARA CENTRAL R&D & SOLAR ARRAY": "ANKARA MERKEZ AR-GE & GÜNEŞ SAHASI",
    "MINISTRY & PUBLIC INFRASTRUCTURE TENDERS": "BAKANLIK & KAMU ALTYAPI İHALELERİ",
    "ANKARA MEGA HOUSING ENERGY BLOCKS": "ANKARA MEGA KONUT ENERJİ BLOKLARI",
    "DEFENSE INDUSTRY UNINTERRUPTIBLE BESS": "SAVUNMA SANAYİ KESİNTİSİZ BESS SİSTEMİ",
    "ANKARA FIRMWARE & ENGINEERING LAB": "ANKARA YAZILIM & MÜHENDİSLİK LABORATUVARI",
    "OFF-GRID DESERT & REMOTE DEPLOYMENTS": "ŞEBEKEDEN BAĞIMSIZ ÇÖL & UZAK SAHA KURULUMLARI",
    "AFRICAN NATIONAL UTILITY TENDERS": "AFRİKA ULUSAL ENERJİ ŞEBEKE İHALELERİ",
    "REGIONAL SOLAR HOUSING MICROGRIDS": "BÖLGESEL GÜNEŞ KONUT MİKRO ŞEBEKELERİ",
    "MINING & CRITICAL TELECOM POWER": "MADENCİLİK & KRİTİK TELEKOM GÜÇ SİSTEMLERİ",
    "JOHANNESBURG LOAD-SHEDDING BESS SHIELD": "JOHANNESBURG KESİNTİ ÖNLEYİCİ BESS KALKANI",
    "SOUTH AFRICA NATIONAL EV GRID TENDER": "GÜNEY AFRİKA ULUSAL EV ŞEBEKE İHALESİ",
    "CAPE TOWN RESIDENTIAL SOLAR CLUSTERS": "CAPE TOWN KONUT GÜNEŞ ENERJİ KÜMELERİ",
    "INDUSTRIAL MINING AUTONOMOUS POWER": "ENDÜSTRİYEL MADEN OTONOM GÜÇ SİSTEMİ",
    "SOUTH AFRICA TURNKEY EV CHARGER FACTORY": "GÜNEY AFRİKA ANAHTAR TESLİM EV ŞARJ FABRİKASI",
    "CAIRO & SINAI DESERT SOLAR FIELDS": "KAHİRE & SİNA ÇÖLÜ GÜNEŞ SAHALARI",
    "NEW ADMINISTRATIVE CAPITAL GRID TENDER": "YENİ İDARİ BAŞKENT ŞEBEKE İHALESİ",
    "NILE DELTA HOUSING PV INSTALLATIONS": "NİL DELTASI KONUT PV KURULUMLARI",
    "SUEZ CORRIDOR CRITICAL POWER BACKUP": "SÜVEYŞ KORİDORU KRİTİK GÜÇ YEDEKLEMESİ",
    "EGYPT REGIONAL ASSEMBLY & SERVICE HUB": "MISIR BÖLGESEL MONTAJ & SERVİS MERKEZİ",
    "CASABLANCA RENEWABLE SOLAR & WIND": "KAZABLANKA YENİLENEBİLİR GÜNEŞ & RÜZGAR",
    "MOROCCO GREEN MOBILITY PUBLIC TENDER": "FAS YEŞİL MOBİLİTE KAMU İHALESİ",
    "MARRAKECH RESIDENTIAL SOLAR ROOFS": "MARAKEŞ KONUT GÜNEŞ ÇATI SİSTEMLERİ",
    "TANGIER PORT INDUSTRIAL MICROGRID": "TANCA LİMANI ENDÜSTRİYEL MİKRO ŞEBEKESİ",
    "NORTH AFRICA EV CHARGER DISTRIBUTION": "KUZEY AFRİKA EV ŞARJ DAĞITIM ÜSSÜ",

    // 6. CONTACT & FOOTER
    "CONTACT": "İLETİŞİM",
    "We answer fast. No weeks of waiting.": "Hızlı yanıt veriyoruz. Haftalarca beklemek yok.",
    "DIRECT LINES": "DOĞRUDAN HATLAR",
    "NAVIGATE": "MENÜ",
    "Home": "Ana Sayfa",
    "About": "Hakkımızda",
    "Products": "Ürünler",
    "Services": "Hizmetler",
    "Success Stories": "Başarı Hikayeleri",
    "Contact": "İletişim",
    "ENGINEERED IN TÜRKİYE": "TÜRKİYE'DE TASARLANDI",
    "© 2025 SATRUS Energy Technologies. All rights reserved.": "© 2025 SATRUS Enerji Teknolojileri. Tüm hakları saklıdır.",
    "© 2026 SATRUS Energy Technologies. All rights reserved.": "© 2026 SATRUS Enerji Teknolojileri. Tüm hakları saklıdır."
};

// Kırmızı/Şeffaf Konturlu (Outline) Büyük Başlıklar İçin HTML Korumalı Çeviriler
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
    // YENİ ABOUT BAŞLIKLARI
    {
        en: 'ENGINEERS FIRST, <span class="text-outline-red">SELLERS SECOND</span>',
        tr: 'ÖNCE MÜHENDİSLİK, <span class="text-outline-red">SONRA SATIŞ</span>'
    },
    {
        en: 'BUILT BY ENGINEERS.<br> <span class="text-outline-red">PROVEN IN THE FIELD.</span>',
        tr: 'MÜHENDİSLER TARAFINDAN KURULDU.<br> <span class="text-outline-red">SAHADA KANITLANDI.</span>'
    },
    {
        en: '<span class="text-outline-red">THREE SYMBOLS.</span> ONE SYSTEM',
        tr: '<span class="text-outline-red">ÜÇ SEMBOL.</span> TEK SİSTEM'
    },
    {
        en: 'THE ROAD <span class="text-outline-red">SO FAR</span>',
        tr: 'ŞİMDİYE KADARKİ <span class="text-outline-red">YOLCULUĞUMUZ</span>'
    },
    {
        en: 'ENGINEERS AND <span class="text-outline-red">OPERATORS</span>',
        tr: 'MÜHENDİSLER VE <span class="text-outline-red">OPERATÖRLER</span>'
    },
    // YENİ SUCCESS STORIES & DİĞER SAYFA BAŞLIKLARI
    {
        en: 'PROVEN WHERE IT <span class="text-outline-red">MATTERS.</span>',
        tr: 'ÖNEMLİ OLAN YERDE <span class="text-outline-red">KANITLANDI.</span>'
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

    // 2. Büyük Konturlu Başlıkları Çevir
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

    // 4. Success Stories Kart Üstü Rozetlerini (Badge) Dinamik Çevir
    document.querySelectorAll('.story-badge').forEach(badge => {
        let txt = badge.textContent.trim();
        const badgeMap = [
            ['HIGH-POWER SOLAR', 'YÜKSEK GÜÇLÜ GES'],
            ['PUBLIC SECTOR', 'KAMU SEKTÖRÜ'],
            ['LARGE-SCALE HOUSING', 'TOPLU KONUT PROJELERİ'],
            ['CRITICAL INFRASTRUCTURE', 'KRİTİK ALTYAPI'],
            ['TURNKEY MANUFACTURING', 'ANAHTAR TESLİM ÜRETİM'],
            ['GLOBAL', 'KÜRESEL'],
            ['AFRICA', 'AFRİKA'],
            ['SOUTH AFRICA', 'GÜNEY AFRİKA']
        ];
        badgeMap.forEach(([enPart, trPart]) => {
            if (lang === 'TR' && txt.includes(enPart)) txt = txt.replace(enPart, trPart);
            if (lang === 'EN' && txt.includes(trPart)) txt = txt.replace(trPart, enPart);
        });
        badge.textContent = txt;
    });

    // 5. Form Placeholder'larını Çevir
    const pDict = lang === 'TR' ? placeholderTranslations : reversePlaceholders;
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(inp => {
        const ph = inp.getAttribute('placeholder');
        if (pDict[ph]) inp.setAttribute('placeholder', pDict[ph]);
    });
}

// Sayfa Yüklendiğinde ve Dinamik Sekmeler Değiştiğinde Otomatik Çeviri Uygulama
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

    // Success Stories veya Products sayfasında sekmeye tıklandığında yeni gelen kartları da anında çevir
    const observer = new MutationObserver(() => {
        const current = localStorage.getItem('satrus_lang') || 'EN';
        if (current === 'TR') {
            setLanguage('TR');
        }
    });

    const dynamicTargets = [
        document.getElementById('storiesGridContainer'),
        document.getElementById('storiesFilterBar')
    ];
    dynamicTargets.forEach(target => {
        if (target) observer.observe(target, { childList: true });
    });
});

// ADMIN PANELİNDEN YÜKLENEN TÜM SİTE GÖRSELLERİNİ SIFIR GECİKME VE SIFIR CACHE İLE YERLEŞTİR
let globalSiteMediaCache = {};

// 1. Sayfa açılır açılmaz (0ms) son bilinen görselleri anında uygula ki eski resim asla görünmesin
try {
    const cachedMedia = localStorage.getItem('satrus_site_media_fastcache');
    if (cachedMedia) {
        globalSiteMediaCache = JSON.parse(cachedMedia);
    }
} catch (e) {}

async function syncSiteMediaFromAdmin() {
    try {
        const res = await fetch(`site-media.json?nocache=${Date.now()}`, {
            cache: 'no-store',
            headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
        });
        if (res.ok) {
            const freshData = await res.json();
            if (freshData && typeof freshData === 'object') {
                globalSiteMediaCache = freshData;
                localStorage.setItem('satrus_site_media_fastcache', JSON.stringify(freshData));
            }
        }
    } catch (e) {}
    applySiteMediaToDOM();
    document.documentElement.classList.add('media-ready');
}

function applySiteMediaToDOM() {
    if (!globalSiteMediaCache) return;

    // A) Sabit data-slot Kimliği Olan Tüm Görseller (Blok yeri değişse bile asla bozulmaz!)
    document.querySelectorAll('[data-slot]').forEach(img => {
        const slot = img.getAttribute('data-slot');
        if (globalSiteMediaCache[slot]) {
            img.src = globalSiteMediaCache[slot];
            img.style.display = 'block';
            if (img.parentElement) img.parentElement.classList.add('has-custom-media');
        }
    });

    // B) Eski seçiciler için tam uyumluluk yedeği
    const fallbackSelectors = {
        'home_factory': '.case-img-wrapper img',
        'about_hero': '.about-banner-img',
        'about_top_star': '.top-star-png',
        'about_symbol_star': '.brand-row:nth-of-type(1) .custom-symbol-img',
        'about_symbol_bolt': '.bolt-canvas .custom-symbol-img'
    };
    Object.entries(fallbackSelectors).forEach(([key, sel]) => {
        if (globalSiteMediaCache[key]) {
            const img = document.querySelector(sel);
            if (img) {
                img.src = globalSiteMediaCache[key];
                img.style.display = 'block';
                if (img.parentElement) img.parentElement.classList.add('has-custom-media');
            }
        }
    });

    // C) About 8'li Ekip Kartları (team_1 ... team_8)
    document.querySelectorAll('.operator-card').forEach((card, idx) => {
        const key = `team_${idx + 1}`;
        if (globalSiteMediaCache[key]) {
            const img = card.querySelector('.operator-photo');
            if (img) {
                img.src = globalSiteMediaCache[key];
                img.style.display = 'block';
                card.classList.add('has-custom-media');
            }
        }
    });

    // D) Success Stories Sekmelerindeki 5'li Kartlar
    if (typeof activeSubKey !== 'undefined') {
        const prefixMap = {
            'ALL': 'story', 'TR_ALL': 'tr', 'BURSA': 'bursa', 'IZMIR': 'izmir',
            'ANTALYA': 'antalya', 'ANKARA': 'ankara', 'AF_ALL': 'africa',
            'SOUTH_AFRICA': 'sa', 'EGYPT': 'misir', 'MOROCCO': 'fas'
        };
        const pref = prefixMap[activeSubKey] || 'story';
        document.querySelectorAll('#storiesGridContainer .story-img').forEach((img, idx) => {
            const key = `stories_${pref}_${idx + 1}`;
            if (globalSiteMediaCache[key]) {
                img.src = globalSiteMediaCache[key];
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // İlk salisede hafızadakini bas, hemen peşinden GitHub'dan en günceli çek
    applySiteMediaToDOM();
    syncSiteMediaFromAdmin();

    const stGrid = document.getElementById('storiesGridContainer');
    if (stGrid) {
        new MutationObserver(() => applySiteMediaToDOM()).observe(stGrid, { childList: true });
    }
});