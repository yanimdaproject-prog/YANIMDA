const screen = document.getElementById("screen");
const toastEl = document.getElementById("toast");

const jobs = [
  {id:"prod", title:"Productiemedewerker", company:"Productiebedrijf", city:"Hoogeveen", type:"Fulltime", tag:"Productie", desc:"Voorbeeldvacature voor de eerste YANIMDA-versie. Later vervangen door officiële werkgeversvacatures.", requirements:["Geen officiële certificering in deze demo","Bereid om te leren","Nederlands: basis is handig"], link:""},
  {id:"mag", title:"Magazijnmedewerker", company:"Logistiek bedrijf", city:"Zwolle", type:"Fulltime", tag:"Logistiek", desc:"Voorbeeldvacature voor magazijn en logistiek.", requirements:["Fysiek werk","Bereid om te leren","Nederlands: basis is handig"], link:""},
  {id:"log", title:"Logistiek medewerker", company:"Distributiecentrum", city:"Meppel", type:"Parttime", tag:"Logistiek", desc:"Voorbeeldvacature voor distributiewerk.", requirements:["Flexibele inzet","Teamwerk"], link:""},
  {id:"clean", title:"Schoonmaakmedewerker", company:"Schoonmaakbedrijf", city:"Hoogeveen", type:"Parttime", tag:"Schoonmaak", desc:"Voorbeeldvacature voor schoonmaakwerk.", requirements:["Nauwkeurig werken","Zelfstandig kunnen werken"], link:""}
];

const lessons = [
  {id:"hello", level:"A1", title:"Tanışma & selamlaşma", subtitle:"Hoi, hallo, hoe gaat het?", words:[
    ["Hoi!","hoy","Selam! / Merhaba!"],
    ["Hallo!","ha-lo","Merhaba!"],
    ["Hoe gaat het?","hu gaat ut","Nasılsın? / Nasıl gidiyor?"],
    ["Goed, dank je.","hut, dank yuh","İyi, teşekkürler."]
  ]},
  {id:"market", level:"A1", title:"Markette konuşma", subtitle:"Wat kost dit? · Dit is alles.", words:[
    ["Wat kost dit?","vat kost dit","Bu ne kadar?"],
    ["Ik wil deze.","ik vil day-zuh","Bunu istiyorum."],
    ["Dat is alles.","dat is al-les","Hepsi bu."],
    ["Kan ik pinnen?","kan ik pin-nen","Kartla ödeyebilir miyim?"]
  ]},
  {id:"work", level:"A1", title:"İş yerinde Hollandaca", subtitle:"Werk, pauze, klaar, wachten.", words:[
    ["Ik ben klaar.","ik ben klaar","Hazırım / Bitirdim."],
    ["Wanneer is de pauze?","va-neer is duh pau-zuh","Mola ne zaman?"],
    ["Even wachten.","ay-ven vahk-ten","Biraz bekle."],
    ["Komt goed.","komt hut","Tamam / Hallolur."]
  ]}
];

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
        <button class="quick-card" onclick="show('learn')"><span class="icon">📖</span><strong>Hollandaca Öğren</strong><small>Gerçek hayattan adım adım</small></button>
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
      <p class="sub">Şimdilik demo ilanlarla test ediyoruz. Gerçek ilanlar geldiğinde yalnızca resmi başvuru bağlantılarını kullanacağız.</p>
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
    x = `
      <button class="back" onclick="show('home')">← Ana sayfa</button>
      <h1 class="page-title">Hollandaca Öğren 🇳🇱</h1>
      <p class="sub">Kitap dili değil; Hollanda'da gerçekten duyacağın ve kullanacağın Hollandaca.</p>
      <div class="learn-card"><span class="level">A1 · Başlangıç</span><h2>Günlük Konuşmalar</h2><p class="sub">Tanışma, market, ulaşım, iş ve günlük hayat.</p><div class="progress"><span></span></div><div class="lesson-row"><span>Başlangıç ilerlemesi</span><strong id="learnPercent">18%</strong></div></div>
      ${lessons.map((l,i)=>`<button class="lesson" onclick="showLesson('${l.id}')"><div class="num">0${i+1}</div><div><strong>${l.title}</strong><small>${l.subtitle}</small></div><span>›</span></button>`).join("")}
      <div class="section-head"><h2>Seviye yolu</h2></div>
      <div class="profile-card">
        ${["A0 · Temel","A1 · Başlangıç","A2 · Günlük hayat","B1 · Orta","B2 · İleri","C1 · İleri düzey"].map((v,i)=>`<div class="profile-row"><div><strong>${v}</strong><small>${i<2?"Başlangıç içeriği hazır": "Yakında"}</small></div><span>${i<2?"✓":"›"}</span></div>`).join("")}
      </div>
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
    const learnedCount=getLearned().length;
    const pct=Math.min(100,18 + Math.round(learnedCount/12*82));
    const p=document.querySelector(".progress span");
    const label=document.getElementById("learnPercent");
    if(p)p.style.width=pct+"%";
    if(label)label.textContent=pct+"%";
  }
  screen.focus({preventScroll:true});
  window.scrollTo({top:0,behavior:"smooth"});
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
  screen.innerHTML=layout(`
    <button class="back" onclick="show('jobs')">← İlanlara dön</button>
    <h1 class="page-title">${j.title}</h1>
    <p class="sub">${j.company} · ${j.city} · ${j.type}</p>
    <div class="detail-card">
      <div class="eyebrow">DEMO İLAN</div>
      <h2>${j.title}</h2>
      <p class="sub">${j.desc}</p>
      <div class="meta"><span class="pill">📍 ${j.city}</span><span class="pill">⏱ ${j.type}</span><span class="pill">${j.tag}</span></div>
      <h3>Aranan özellikler</h3>
      <ul class="meaning">${j.requirements.map(r=>`<li>${r}</li>`).join("")}</ul>
      <div class="example"><strong>Başvuru</strong><span class="meaning">Gerçek işveren bağlantısı eklendiğinde kullanıcı doğrudan resmi başvuru sayfasına yönlendirilecek.</span></div>
      <button class="primary" style="margin-top:16px" onclick="toast('Bu demo ilanda henüz resmi başvuru bağlantısı yok.')">Resmî başvuruya git →</button>
    </div>
  `);
  window.scrollTo({top:0,behavior:"smooth"});
}

function showLesson(id){window.selectedLessonId=id;show("lesson")}
function getLearned(){
  try{return JSON.parse(localStorage.getItem("yanimda_learned")||"[]")}catch(e){return []}
}
function setLearned(items){
  try{localStorage.setItem("yanimda_learned",JSON.stringify(items))}catch(e){}
}
function renderLesson(id){
  const l=lessons.find(x=>x.id===id)||lessons[0];
  const learned=getLearned();
  screen.innerHTML=layout(`
    <button class="back" onclick="show('learn')">← Derslere dön</button>
    <span class="level">${l.level} · Günlük Hollandaca</span>
    <h1 class="page-title" style="margin-top:15px">${l.title}</h1>
    <p class="sub">${l.subtitle}</p>
    <div class="detail-card">
      <div class="listen-banner">
        <div><strong>🔊 Hollandaca dinle</strong><small>Dokununca cümleyi doğal Hollandaca telaffuzla seslendirir.</small></div>
        <button class="primary" onclick="speak('${escapeAttr(l.words[0][0])}')">Dinle</button>
      </div>
      ${l.words.map((w,i)=>{
        const done=learned.includes(w[0]);
        return `<div class="example ${done?"learned":""}">
          <strong>${w[0]}</strong>
          <div class="phonetic">${w[1]}</div>
          <div class="meaning">${w[2]}</div>
          <div class="lesson-actions">
            <button class="ghost" onclick="speak('${escapeAttr(w[0])}')">🔊 Dinle</button>
            <button class="ghost" onclick="markLearned('${escapeAttr(w[0])}')">${done?"✓ Öğrenildi":"✓ Öğrendim"}</button>
          </div>
        </div>`;
      }).join("")}
    </div>
    <div class="voice-note">Ses, telefonunun yerleşik Hollandaca (nl-NL) konuşma motorunu kullanır. İnternet bağlantısı olmadan çalışması cihazdaki ses desteğine bağlıdır.</div>
  `);
  window.scrollTo({top:0,behavior:"smooth"});
}

function speak(text){
  if(!("speechSynthesis" in window)){toast("Bu cihazda sesli okuma kullanılamıyor.");return}
  window.speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  u.lang="nl-NL";
  u.rate=.78;
  u.pitch=1;
  u.volume=1;
  window.speechSynthesis.speak(u);
}
function markLearned(word){
  const items=getLearned();
  if(!items.includes(word)){items.push(word);setLearned(items)}
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