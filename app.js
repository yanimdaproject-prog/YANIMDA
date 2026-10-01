const screen = document.getElementById("screen");
const toastEl = document.getElementById("toast");

const jobs = [
  {
    id:"elis-prod",
    title:"Productiemedewerker",
    company:"Elis",
    city:"Hoogeveen",
    type:"Fulltime",
    tag:"Productie",
    link:"https://werkenbijelis.nl/vacatures/productiemedewerker-7",
    sourceLabel:"Officiële werkgeverspagina",
    descByLearningLanguage:{
      nl:"Ben jij graag in beweging en houd je van afwisselend werk? Als productiemedewerker bij Elis werk je samen met collega’s in een moderne wasserij. Je verwerkt bedrijfskleding en rouleert tussen verschillende werkzaamheden.",
      en:"Do you like being active and varied work? As a production employee at Elis, you work with colleagues in a modern laundry. You process workwear and rotate between different tasks."
    },
    requirementsByLearningLanguage:{
      nl:["Je werkt graag actief en nauwkeurig","Je werkt samen met collega’s","Je bent bereid om verschillende werkzaamheden te leren"],
      en:["You like active and accurate work","You work well with colleagues","You are willing to learn different tasks"]
    }
  },
  {
    id:"foox-mag",
    title:"Logistiek / Magazijnmedewerker",
    company:"FOOX Hoogeveen",
    city:"Hoogeveen",
    type:"Parttime",
    tag:"Logistiek",
    link:"https://www.werkenbijfoox.nl/vacaturebeschrijving/logistiek-magazijnmedewerker-18-32-uur-hoogeveen",
    sourceLabel:"Officiële werkgeverspagina",
    descByLearningLanguage:{
      nl:"FOOX Hoogeveen zoekt een logistiek/magazijnmedewerker voor een afwisselende functie. Het gaat in eerste instantie om een tijdelijke arbeidsovereenkomst met uitzicht op een vast dienstverband.",
      en:"FOOX Hoogeveen is looking for a logistics/warehouse employee for a varied role. The position starts with a temporary employment contract, with the possibility of a permanent contract."
    },
    requirementsByLearningLanguage:{
      nl:["Je werkt graag in een logistieke omgeving","Je bent flexibel en gemotiveerd","Je wilt jezelf verder ontwikkelen"],
      en:["You like working in a logistics environment","You are flexible and motivated","You want to continue developing yourself"]
    }
  },
  {
    id:"lkq-mag",
    title:"Magazijnmedewerker",
    company:"LKQ Benelux France",
    city:"Hoogeveen",
    type:"Fulltime",
    tag:"Magazijn",
    link:"https://careers.lkqeurope.com/job/Hoogeveen-Magazijnmedewerker-7905-SB/1349669555/",
    sourceLabel:"Officiële werkgeverspagina",
    descByLearningLanguage:{
      nl:"Als magazijnmedewerker bij LKQ in Hoogeveen help je mee aan een goed georganiseerd magazijn en tijdige levering aan klanten. Je werkt samen met collega’s en zorgt dat orders en materialen goed worden verwerkt.",
      en:"As a warehouse employee at LKQ in Hoogeveen, you help keep the warehouse organised and ensure timely deliveries to customers. You work with colleagues and make sure orders and materials are processed correctly."
    },
    requirementsByLearningLanguage:{
      nl:["Je werkt graag samen","Je kunt goed aanpakken in een druk magazijn","Je werkt nauwkeurig en klantgericht"],
      en:["You enjoy working with a team","You can work efficiently in a busy warehouse","You work accurately and are customer-focused"]
    }
  }
];

const languagePacks = {
  nl: {
    name: "Hollandaca", flag: "🇳🇱", speech: "nl-NL", level: "A1",
    description: "Hollanda'da gerçekten duyacağın ve kullanacağın günlük Hollandaca.",
    lessons: [
      {id:"nl-hello", level:"A1", title:"Tanışma & selamlaşma", subtitle:"Hoi, hallo, hoe gaat het?", words:[
        ["Hoi!","hoy",{tr:"Selam! / Merhaba!",en:"Hi! / Hello!",ar:"مرحبا! / أهلاً!"}],
        ["Hallo!","ha-lo",{tr:"Merhaba!",en:"Hello!",ar:"مرحباً!"}],
        ["Hoe gaat het?","hu gaat ət",{tr:"Nasılsın? / Nasıl gidiyor?",en:"How are you? / How's it going?",ar:"كيف حالك؟ / كيف الأمور؟"}],
        ["Goed, dank je.","hut, dank yuh",{tr:"İyi, teşekkürler.",en:"Good, thank you.",ar:"بخير، شكراً لك."}]
      ]},
      {id:"nl-market", level:"A1", title:"Markette konuşma", subtitle:"Wat kost dit? · Dit is alles.", words:[
        ["Wat kost dit?","vat kost dit",{tr:"Bu ne kadar?",en:"How much is this?",ar:"كم سعر هذا؟"}],
        ["Ik wil deze.","ik vil de-zeh",{tr:"Bunu istiyorum.",en:"I want this one.",ar:"أريد هذا."}],
        ["Dat is alles.","dat is al-les",{tr:"Hepsi bu.",en:"That's all.",ar:"هذا كل شيء."}],
        ["Kan ik pinnen?","kan ik pin-nen",{tr:"Kartla ödeyebilir miyim?",en:"Can I pay by card?",ar:"هل يمكنني الدفع بالبطاقة؟"}]
      ]},
      {id:"nl-work", level:"A1", title:"İş yerinde Hollandaca", subtitle:"Werk, pauze, klaar, wachten.", words:[
        ["Ik ben klaar.","ik ben klaar",{tr:"Hazırım / Bitirdim.",en:"I'm ready / I'm finished.",ar:"أنا جاهز / انتهيت."}],
        ["Wanneer is de pauze?","va-neer is duh pau-zuh",{tr:"Mola ne zaman?",en:"When is the break?",ar:"متى الاستراحة؟"}],
        ["Even wachten.","ay-ven vahk-ten",{tr:"Biraz bekle.",en:"Wait a moment.",ar:"انتظر قليلاً."}],
        ["Komt goed.","komt hut",{tr:"Tamam / Hallolur.",en:"It'll be fine / No problem.",ar:"تمام / لا مشكلة."}]
      ]}
    ]
  },
  en: {
    name: "İngilizce", flag: "🇬🇧", speech: "en-GB", level: "A1",
    description: "Günlük hayatta gerçekten kullanacağın pratik İngilizce.",
    lessons: [
      {id:"en-hello", level:"A1", title:"Tanışma & selamlaşma", subtitle:"Hello, hi, how are you?", words:[
        ["Hello!","helo",{tr:"Merhaba!",en:"Hello!",ar:"مرحباً!"}],
        ["Hi!","hay",{tr:"Selam!",en:"Hi!",ar:"أهلاً!"}],
        ["How are you?","hau ar yu",{tr:"Nasılsın?",en:"How are you?",ar:"كيف حالك؟"}],
        ["I'm good, thank you.","aym gud, thank yu",{tr:"İyiyim, teşekkür ederim.",en:"I'm good, thank you.",ar:"أنا بخير، شكراً لك."}]
      ]},
      {id:"en-daily", level:"A1", title:"Günlük konuşmalar", subtitle:"Please, thank you, excuse me.", words:[
        ["Please.","pliiz",{tr:"Lütfen.",en:"Please.",ar:"من فضلك."}],
        ["Thank you.","tenk yu",{tr:"Teşekkür ederim.",en:"Thank you.",ar:"شكراً لك."}],
        ["Excuse me.","ikskyuuz mi",{tr:"Affedersiniz / Pardon.",en:"Excuse me.",ar:"عفواً / المعذرة."}],
        ["I don't understand.","ay dont anderstend",{tr:"Anlamıyorum.",en:"I don't understand.",ar:"أنا لا أفهم."}]
      ]},
      {id:"en-work", level:"A1", title:"İş yerinde İngilizce", subtitle:"Work, break, ready, help.", words:[
        ["I'm ready.","aym redi",{tr:"Hazırım.",en:"I'm ready.",ar:"أنا جاهز."}],
        ["When is the break?","ven iz dı breyk",{tr:"Mola ne zaman?",en:"When is the break?",ar:"متى الاستراحة؟"}],
        ["Can you help me?","ken yu help mi",{tr:"Bana yardım eder misin?",en:"Can you help me?",ar:"هل يمكنك مساعدتي؟"}],
        ["No problem.","nou problem",{tr:"Sorun değil.",en:"No problem.",ar:"لا مشكلة."}]
      ]}
    ]
  }
};

const explanationLanguages = {
  tr: {name:"Türkçe", flag:"🇹🇷"},
  en: {name:"English", flag:"🇬🇧"},
  ar: {name:"العربية", flag:"🇸🇦"}
};

function getExplanationLanguage(){
  try{return localStorage.getItem("yanimda_explanation_language") || "tr"}catch(e){return "tr"}
}
function setExplanationLanguage(lang){
  if(!explanationLanguages[lang]) return;
  try{localStorage.setItem("yanimda_explanation_language",lang)}catch(e){}
}
function getLearningLanguage(){
  try{return localStorage.getItem("yanimda_learning_language") || "nl"}catch(e){return "nl"}
}
function setLearningLanguage(lang){
  try{localStorage.setItem("yanimda_learning_language",lang)}catch(e){}
}
function getPack(){return languagePacks[getLearningLanguage()] || languagePacks.nl}
function getMeaning(word, sourceLang, targetLang){
  const meanings=word[2] || {};
  if(meanings[sourceLang]) return meanings[sourceLang];
  if(sourceLang===targetLang) return "Bu cümle zaten seçtiğin dilde.";
  return meanings.tr || meanings.en || meanings.ar || "";
}
function getLessonById(id){
  for(const [code,pack] of Object.entries(languagePacks)){
    const found=pack.lessons.find(l=>l.id===id);
    if(found) return {lesson:found, packCode:code, pack};
  }
  return {lesson:languagePacks.nl.lessons[0], packCode:"nl", pack:languagePacks.nl};
}


const translations = {
  "merhaba":"Hallo!",
  "selam":"Hoi!",
  "nasılsın":"Hoe gaat het?",
  "nasılsın?":"Hoe gaat het?",
  "iyiyim":"Het gaat goed.",
  "teşekkürler":"Dank je!",
  "bu ne kadar":"Wat kost dit?",
  "bu ne kadar?":"Wat kost dit?",
  "hepsi bu":"Dat is alles.",
  "iyi günler":"Fijne dag!",
  "günaydın":"Goedemorgen!",
  "iyi akşamlar":"Goedenavond!",
  "yardım eder misin":"Kun je me helpen?",
  "yardım eder misin?":"Kun je me helpen?",
  "iş arıyorum":"Ik zoek werk.",
  "hollandaca bilmiyorum":"Ik spreek geen Nederlands."
};

let currentPage = "home";

function go(page){ toggleMenu(false); show(page); }
function layout(html){ return `<div class="content">${html}</div>`; }

function show(page){
  currentPage = page;
  document.querySelectorAll(".bottom-nav button").forEach(b=>b.classList.toggle("active", b.dataset.s===page));
  let x = "";

  if(page==="home"){
    x = `
      <section class="hero">
        <div class="eyebrow">YANIMDA · Hollanda</div>
        <h1>Merhaba 👋</h1>
        <p class="sub">Yeni bir ülkede günlük hayatını daha kolay hale getirecek araçlar burada.</p>
        <button class="primary" onclick="show('jobs')">İş bulmaya başla →</button>
      </section>
      <div class="section-head"><h2>Hızlı erişim</h2><button onclick="show('profile')">Tümünü gör</button></div>
      <div class="quick-grid">
        <button class="quick-card" onclick="show('jobs')"><span class="icon">💼</span><strong>İş Bul</strong><small>İlanları keşfet ve filtrele</small></button>
        <button class="quick-card" onclick="show('learn')"><span class="icon">📖</span><strong>Dil Öğren</strong><small>Gerçek hayattan adım adım</small></button>
        <button class="quick-card" onclick="show('translate')"><span class="icon">🌐</span><strong>Çeviri</strong><small>Türkçe ↔ Nederlands</small></button>
        <button class="quick-card" onclick="show('nearby')"><span class="icon">📍</span><strong>Yakınımda</strong><small>Günlük ihtiyaçlarını bul</small></button>
      </div>
      <div class="section-head"><h2>Bugün yanında</h2></div>
      <button class="feature" onclick="showLesson('hello')"><div class="feature-row"><div class="feature-icon">🇳🇱</div><div><strong>Bugünün Hollandacası</strong><small>“Hoe gaat het?” · Nasılsın?</small></div><span>›</span></div></button>
      <div class="trust"><h2>YANIMDA</h2><p>Yeni bir ülkede yalnız değilsin. Dil, iş ve günlük yaşam için ihtiyacın olan araçları tek yerde bul.</p></div>
    `;
  }

  if(page==="jobs"){
    x = `
      <button class="back" onclick="show('home')">← Ana sayfa</button>
      <h1 class="page-title">İş Bul</h1>
      <p class="sub">Güncel ilanları incelerken başvuru için doğrudan resmi işveren sayfasına gidebilirsin. İlan açıklaması, seçtiğin öğrenme dilinde gösterilir.</p>
      <div class="search"><span>⌕</span><input id="jobSearch" placeholder="Pozisyon, sektör veya şehir ara..." oninput="filterJobs(this.value)"></div>
      <div class="filter-row">
        <button class="filter active" data-filter="all" onclick="setJobFilter('all',this)">Tümü</button>
        <button class="filter" data-filter="Fulltime" onclick="setJobFilter('Fulltime',this)">Fulltime</button>
        <button class="filter" data-filter="Parttime" onclick="setJobFilter('Parttime',this)">Parttime</button>
        <button class="filter" data-filter="Hoogeveen" onclick="setJobFilter('Hoogeveen',this)">Hoogeveen</button>
        <button class="filter" data-filter="Zwolle" onclick="setJobFilter('Zwolle',this)">Zwolle</button>
      </div>
      <div id="joblist">${jobs.map(jobCard).join("")}</div>
    `;
  }

  if(page==="job-detail") return renderJobDetail(window.selectedJobId);

  if(page==="learn"){
    const pack=getPack();
    x = `
      <button class="back" onclick="show('home')">← Ana sayfa</button>
      <h1 class="page-title">Dil Öğren ${pack.flag}</h1>
      <p class="sub">Dilini seç, sonra öğrenmek istediğin dili seç. YANIMDA anlamı ve okunuşu buna göre gösterir.</p>
      <div class="language-setup">
        <div class="choice-block">
          <div class="choice-title">1. Cümlelerin anlamını hangi dilde görmek istersin?</div>
          <div class="language-switch explanation-switch" role="tablist" aria-label="Açıklama dilini seç">
            ${Object.entries(explanationLanguages).map(([code,v])=>`<button class="language-tab ${getExplanationLanguage()===code?"active":""}" onclick="changeExplanationLanguage('${code}')">${v.flag} ${v.name}</button>`).join("")}
          </div>
        </div>
        <div class="choice-block">
          <div class="choice-title">2. Hangi dili öğrenmek istiyorsun?</div>
          <div class="language-switch target-switch" role="tablist" aria-label="Öğrenilecek dili seç">
            ${Object.entries(languagePacks).map(([code,v])=>`<button class="language-tab ${getLearningLanguage()===code?"active":""}" onclick="changeLearningLanguage('${code}')">${v.flag} ${v.name}</button>`).join("")}
            <button class="language-tab coming" disabled>🇩🇪 Deutsch · Yakında</button>
            <button class="language-tab coming" disabled>🇫🇷 Français · Yakında</button>
          </div>
        </div>
        <div class="learning-example"><strong>Örnek:</strong> 🇬🇧 English → 🇳🇱 Nederlands &nbsp;•&nbsp; <span>anlam İngilizce, okunuş Hollandaca</span></div>
      </div>
      <div class="learn-card"><span class="level">${pack.level} · Başlangıç</span><h2>Günlük Konuşmalar</h2><p class="sub">Tanışma, günlük hayat ve iş ortamında kullanabileceğin cümleler.</p><div class="progress"><span></span></div><div class="lesson-row"><span>Başlangıç ilerlemesi</span><strong id="learnPercent">0%</strong></div></div>
      ${pack.lessons.map((l,i)=>`<button class="lesson" onclick="showLesson('${l.id}')"><div class="num">0${i+1}</div><div><strong>${l.title}</strong><small>${l.subtitle}</small></div><span>›</span></button>`).join("")}
      <div class="section-head"><h2>Seviye yolu</h2></div>
      <div class="profile-card">
        ${["A0 · Temel","A1 · Başlangıç","A2 · Günlük hayat","B1 · Orta","B2 · İleri","C1 · İleri düzey"].map((v,i)=>`<div class="profile-row"><div><strong>${v}</strong><small>${i<2?"Başlangıç içeriği hazır": "Yakında"}</small></div><span>${i<2?"✓":"›"}</span></div>`).join("")}
      </div>
      <div class="voice-note">Her cümlenin altında kolay okunuş bulunur. 🔊 Dinle düğmesi seçtiğin dilin cihazdaki sesini kullanır.</div>
    `;
  }

  if(page==="lesson") return renderLesson(window.selectedLessonId);

  if(page==="translate"){
    x = `
      <button class="back" onclick="show('home')">← Ana sayfa</button>
      <h1 class="page-title">Çeviri</h1>
      <p class="sub">Günlük konuşmalarda kullanabileceğin hızlı çeviri. Bu sürüm çevrimdışı örnek cümlelerle çalışır.</p>
      <div class="translator">
        <div class="lang-row"><button class="lang active">🇹🇷 Türkçe</button><button class="lang">🇳🇱 Nederlands</button></div>
        <textarea id="translateInput" class="textarea" placeholder="Örn. “İş arıyorum.”"></textarea>
        <div class="translate-actions"><button class="ghost" onclick="clearTranslate()">Temizle</button><button class="primary" onclick="demoTranslate()">Çevir →</button></div>
      </div>
      <div id="translateResult"></div>
      <div class="section-head"><h2>Hazır cümleler</h2></div>
      <div class="practice-card detail-card">
        ${Object.keys(translations).slice(0,6).map(k=>`<button class="feature" style="margin-bottom:10px" onclick="usePhrase('${escapeAttr(k)}')"><div class="feature-row"><div><strong>${k}</strong><small>${translations[k]}</small></div><span>›</span></div></button>`).join("")}
      </div>
    `;
  }

  if(page==="nearby"){
    x = `
      <button class="back" onclick="show('home')">← Ana sayfa</button>
      <h1 class="page-title">Yakınımda 📍</h1>
      <p class="sub">Bir kategori seç. YANIMDA konum izni verirsen bulunduğun yere göre arama başlatabilir.</p>
      <div class="near-grid">
        ${[
          ["🛒","Market","supermarket"],["💊","Eczane","pharmacy"],["🏛️","Belediye","gemeentehuis"],
          ["🚆","Ulaşım","train station"],["🏥","Doktor","huisarts"],["📚","Kütüphane","library"],
          ["🏦","Banka","bank"],["📮","Postane","post office"]
        ].map(v=>`<button class="near-card" onclick="openNearby('${escapeAttr(v[1])}','${escapeAttr(v[2])}')"><span class="near-icon">${v[0]}</span><strong>${v[1]}</strong><small>Yakındaki yerleri ara</small></button>`).join("")}
      </div>
    `;
  }

  if(page==="profile"){
    x = `
      <button class="back" onclick="show('home')">← Ana sayfa</button>
      <h1 class="page-title">Profil & Ayarlar</h1>
      <p class="sub">İlk sürümde gereksiz kişisel belge istemiyoruz.</p>
      <div class="profile-card">
        <div class="profile-row"><div><strong>Dil</strong><small>Türkçe</small></div><span>›</span></div>
        <div class="profile-row"><div><strong>Bildirimler</strong><small>Önemli güncellemeler</small></div><div class="switch"></div></div>
        <div class="profile-row"><div><strong>Gizlilik</strong><small>Kimlik, diploma veya sertifika yüklemek zorunlu değil.</small></div><span>›</span></div>
      </div>
      <div class="feature" style="margin-top:14px"><div class="feature-row"><div class="feature-icon">🛡️</div><div><strong>Güvenli başlangıç</strong><small>YANIMDA ilk aşamada kullanıcıdan gereksiz hassas belge istemez.</small></div></div></div>
    `;
  }

  screen.innerHTML = layout(x);
  if(page==="learn"){
    const pack=getPack();
    const total=pack.lessons.reduce((n,l)=>n+l.words.length,0);
    const learnedCount=getLearned().filter(k=>k.startsWith(getLearningLanguage()+":")).length;
    const pct=total ? Math.min(100,Math.round((learnedCount/total)*100)) : 0;
    const p=document.querySelector(".progress span");
    const label=document.getElementById("learnPercent");
    if(p)p.style.width=pct+"%";
    if(label)label.textContent=pct+"%";
  }
  screen.focus({preventScroll:true});
  window.scrollTo({top:0,behavior:"auto"});
}

function jobCard(j){
  return `<article class="job">
    <div class="job-top"><div class="company-logo">Y</div><div><h3>${j.title}</h3><div class="company">${j.company}</div></div></div>
    <div class="meta"><span class="pill">📍 ${j.city}</span><span class="pill">⏱ ${j.type}</span><span class="pill">${j.tag}</span></div>
    <button class="apply" onclick="openJob('${j.id}')">İlanı incele →</button>
  </article>`;
}

let activeJobFilter = "all";
function filterJobs(q){
  const v=(q||"").toLowerCase().trim();
  renderJobs(jobs.filter(j => {
    const matchesText = `${j.title} ${j.company} ${j.city} ${j.type} ${j.tag}`.toLowerCase().includes(v);
    const matchesFilter = activeJobFilter==="all" || j.type===activeJobFilter || j.city===activeJobFilter;
    return matchesText && matchesFilter;
  }));
}
function setJobFilter(filter,btn){
  activeJobFilter=filter;
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  filterJobs(document.getElementById("jobSearch")?.value||"");
}
function renderJobs(list){
  const el=document.getElementById("joblist");
  if(el) el.innerHTML=list.map(jobCard).join("") || `<div class="empty">Bu filtreyle şimdilik sonuç bulunamadı.</div>`;
}
function openJob(id){window.selectedJobId=id;show("job-detail")}
function renderJobDetail(id){
  const j=jobs.find(x=>x.id===id)||jobs[0];
  const learningLang=getLearningLanguage();
  const desc=j.descByLearningLanguage?.[learningLang] || j.descByLearningLanguage?.nl || "";
  const requirements=j.requirementsByLearningLanguage?.[learningLang] || j.requirementsByLearningLanguage?.nl || [];
  const pack=languagePacks[learningLang] || languagePacks.nl;
  screen.innerHTML=layout(`
    <button class="back" onclick="show('jobs')">← İlanlara dön</button>
    <h1 class="page-title">${escapeHtml(j.title)}</h1>
    <p class="sub">${escapeHtml(j.company)} · ${escapeHtml(j.city)} · ${escapeHtml(j.type)}</p>
    <div class="detail-card">
      <div class="eyebrow">${escapeHtml(j.sourceLabel || "Resmî işveren ilanı")}</div>
      <h2>${escapeHtml(j.title)}</h2>
      <div class="job-learning-label">📚 ${pack.flag} ${pack.name} · İlan açıklaması</div>
      <p class="job-description">${escapeHtml(desc)}</p>
      <div class="meta"><span class="pill">📍 ${escapeHtml(j.city)}</span><span class="pill">⏱ ${escapeHtml(j.type)}</span><span class="pill">${escapeHtml(j.tag)}</span></div>
      <h3>Aranan özellikler</h3>
      <ul class="meaning">${requirements.map(r=>`<li>${escapeHtml(r)}</li>`).join("")}</ul>
      <div class="example job-apply-box">
        <strong>Başvuru</strong>
        <span class="meaning">Başvuru YANIMDA içinde yapılmaz. Butona bastığında doğrudan işverenin resmi ilan sayfasına gidersin.</span>
      </div>
      <a class="primary apply-link" href="${escapeAttr(j.link)}" target="_blank" rel="noopener noreferrer">Resmî başvuruya git →</a>
      <small class="job-source-note">İlan ve başvuru bağlantısı resmi işveren sayfasına aittir. İlan içeriği zamanla değişebilir.</small>
    </div>
  `);
  window.scrollTo({top:0,behavior:"auto"});
}

function changeExplanationLanguage(lang){
  if(!explanationLanguages[lang]) return;
  setExplanationLanguage(lang);
  show("learn");
}
function changeLearningLanguage(lang){
  if(!languagePacks[lang]) return;
  if(lang===getExplanationLanguage()){
    toast("Anlam dili ile öğrenme dili aynı olamaz. Diğer dili seçebilirsin.");
    return;
  }
  setLearningLanguage(lang);
  show("learn");
}
function showLesson(id){window.selectedLessonId=id;show("lesson")}
function getLearned(){
  try{
    const items=JSON.parse(localStorage.getItem("yanimda_learned")||"[]");
    return Array.isArray(items) ? items : [];
  }catch(e){return []}
}
function setLearned(items){try{localStorage.setItem("yanimda_learned",JSON.stringify(items))}catch(e){}}
function renderLesson(id){
  const found=getLessonById(id);
  const l=found.lesson, pack=found.pack;
  const sourceLang=getExplanationLanguage();
  const source=explanationLanguages[sourceLang];
  const learned=getLearned();
  screen.innerHTML=layout(`
    <button class="back" onclick="show('learn')">← ${pack.name} derslerine dön</button>
    <span class="level">${l.level} · ${pack.name}</span>
    <h1 class="page-title" style="margin-top:15px">${l.title}</h1>
    <p class="sub">${l.subtitle}</p>
    <div class="learning-context"><span>${source.flag} ${source.name}</span><b>→</b><span>${pack.flag} ${pack.name}</span></div>
    <div class="detail-card">
      <div class="listen-banner">
        <div><strong>🔊 ${pack.name} dinle</strong><small>Ses ve okunuş öğrenilen dile aittir. Anlam ${source.name} olarak gösterilir.</small></div>
        <button class="primary" onclick="speak('${escapeAttr(l.words[0][0])}','${pack.speech}')">Dinle</button>
      </div>
      ${l.words.map((w,i)=>{
        const key=`${packCodeFromPack(pack)}:${w[0]}`;
        const done=learned.includes(key) || (packCodeFromPack(pack)==="nl" && learned.includes(w[0]));
        const meaning=getMeaning(w,sourceLang,packCodeFromPack(pack));
        return `<div class="example ${done?"learned":""}">
          <strong>${escapeHtml(w[0])}</strong>
          <div class="phonetic"><span>Okunuş:</span> ${escapeHtml(w[1])}</div>
          <div class="meaning-label">${source.flag} ${source.name}</div>
          <div class="meaning">${escapeHtml(meaning)}</div>
          <div class="lesson-actions">
            <button class="ghost" onclick="speak('${escapeAttr(w[0])}','${pack.speech}')">🔊 Dinle</button>
            <button class="ghost" onclick="markLearned('${escapeAttr(w[0])}')">${done?"✓ Öğrenildi":"✓ Öğrendim"}</button>
          </div>
        </div>`;
      }).join("")}
    </div>
    <div class="voice-note">Ses, telefonunun yerleşik ${pack.name} (${pack.speech}) konuşma motorunu kullanır. Kullanılabilir sesler cihaza ve tarayıcıya göre değişebilir.</div>
  `);
  window.scrollTo({top:0,behavior:"auto"});
}
function packCodeFromPack(pack){
  return Object.entries(languagePacks).find(([,p])=>p===pack)?.[0] || getLearningLanguage();
}

function speak(text,lang){
  if(!("speechSynthesis" in window)){toast("Bu cihazda sesli okuma kullanılamıyor.");return}
  window.speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  u.lang=lang || getPack().speech;
  u.rate=.78;
  u.pitch=1;
  u.volume=1;
  const voices=window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
  const voice=voices.find(v=>v.lang===u.lang) || voices.find(v=>v.lang && v.lang.toLowerCase().startsWith(u.lang.split("-")[0].toLowerCase()));
  if(voice) u.voice=voice;
  window.speechSynthesis.speak(u);
}
function markLearned(word){
  const lang=getLearningLanguage();
  const key=`${lang}:${word}`;
  const items=getLearned();
  if(!items.includes(key)){
    items.push(key);
    setLearned(items);
  }
  toast(`“${word}” öğrenildi olarak işaretlendi.`);
  renderLesson(window.selectedLessonId);
}

function demoTranslate(){
  const input=document.getElementById("translateInput");
  const result=document.getElementById("translateResult");
  if(!input?.value.trim()){toast("Önce bir cümle yaz.");return}
  const raw=input.value.trim(), key=raw.toLowerCase().replace(/[.!]+$/,"");
  const answer=translations[key] || "Bu cümle için bu sürümde hazır çeviri bulunmuyor.";
  result.innerHTML=`<div class="result"><div class="mini">Nederlands</div><div class="answer">${answer}</div><div class="mini">${translations[key] ? "Günlük kullanım için örnek çeviri." : "Gerçek çeviri motoru sonraki teknik aşamada bağlanabilir."}</div></div>`;
}
function usePhrase(phrase){show("translate");setTimeout(()=>{const input=document.getElementById("translateInput");if(input){input.value=phrase;demoTranslate()}},0)}
function clearTranslate(){const input=document.getElementById("translateInput");if(input)input.value="";const result=document.getElementById("translateResult");if(result)result.innerHTML=""}

function openNearby(label,query){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(pos=>{
      const {latitude,longitude}=pos.coords;
      window.open(`https://www.google.com/maps/search/${encodeURIComponent(query)}/@${latitude},${longitude},13z`,"_blank");
    },()=>window.open(`https://www.google.com/maps/search/${encodeURIComponent(query)}`,"_blank"));
  }else{
    window.open(`https://www.google.com/maps/search/${encodeURIComponent(query)}`,"_blank");
  }
}

function toggleMenu(force){
  const drawer=document.getElementById("drawer"),shade=document.getElementById("shade"),btn=document.querySelector(".menu-btn");
  const open=force===undefined ? !drawer.classList.contains("open") : force;
  drawer.classList.toggle("open",open);shade.classList.toggle("open",open);
  drawer.setAttribute("aria-hidden",String(!open));btn.setAttribute("aria-expanded",String(open));
}
function escapeHtml(s){return String(s).replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]))}
function escapeAttr(s){return escapeHtml(s).replace(/`/g,"&#96;")}
function toast(msg){
  toastEl.textContent=msg;toastEl.classList.add("show");
  clearTimeout(window.__toast);window.__toast=setTimeout(()=>toastEl.classList.remove("show"),2600);
}
show("home");