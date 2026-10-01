const screen=document.getElementById("screen");
const jobs=[
["Productiemedewerker","Hoogeveen","Fulltime"],
["Magazijnmedewerker","Zwolle","Fulltime"],
["Logistiek medewerker","Meppel","Parttime"],
["Schoonmaakmedewerker","Hoogeveen","Parttime"]
];
function layout(x){return `<div class="content">${x}</div>`}
function show(page){
document.querySelectorAll(".nav button").forEach(b=>b.classList.toggle("active",b.dataset.s===page));
let x="";
if(page==="home") x=`<div class="hero"><h1>Merhaba 👋</h1><p class="muted">Bugün sana nasıl yardımcı olabilirim?</p><button class="orange" onclick="show('jobs')">İş bulmaya başla →</button></div>
<h2 class="section">Hızlı erişim</h2><div class="grid">
<button class="card" onclick="show('jobs')"><span class="emoji">💼</span><b>İş Bul</b><small>Güncel fırsatlara bak</small></button>
<button class="card" onclick="show('learn')"><span class="emoji">📖</span><b>Hollandaca Öğren</b><small>Adım adım öğren</small></button>
<button class="card" onclick="show('translate')"><span class="emoji">🌐</span><b>Çeviri</b><small>Hızlı ve kolay</small></button>
<button class="card" onclick="show('nearby')"><span class="emoji">📍</span><b>Yakınımda</b><small>Önemli yerleri bul</small></button>
</div><h2 class="section">YANIMDA</h2><p class="muted">Yeni bir ülkede yalnız değilsin. YANIMDA, günlük hayatını daha kolay hale getirmek için yanında.</p>`;
if(page==="jobs") x=`<button class="back" onclick="show('home')">← Ana sayfa</button><h1>İş Bul</h1><p class="muted">Hollanda'daki fırsatları keşfet.</p><input class="input" placeholder="Pozisyon, sektör veya şehir ara..." oninput="filterJobs(this.value)"><div id="joblist">${jobs.map(jobCard).join("")}</div>`;
if(page==="learn") x=`<button class="back" onclick="show('home')">← Ana sayfa</button><h1>Hollandaca Öğren 🇳🇱</h1><p class="muted">Gerçek hayatta kullanacağın Hollandaca.</p><div class="card"><span class="pill">A1</span><h2>Günlük Konuşmalar</h2><p class="muted">Merhaba, tanışma, alışveriş ve günlük işler.</p><button class="orange" onclick="alert('İlk ders yakında burada açılacak.')">Derse başla →</button></div><div class="card"><span class="pill">İş Hollandacası</span><h2>İş yerinde kullanılan ifadeler</h2><p class="muted">Üretim, depo ve günlük iş konuşmaları.</p></div>`;
if(page==="translate") x=`<button class="back" onclick="show('home')">← Ana sayfa</button><h1>Çeviri</h1><div class="lang"><button class="active">🇹🇷 Türkçe</button><button>🇳🇱 Nederlands</button></div><textarea class="input" rows="6" placeholder="Metin gir..."></textarea><button class="orange" onclick="alert('Çeviri motorunu bir sonraki geliştirmede bağlayacağız.')">Çevir →</button>`;
if(page==="nearby") x=`<button class="back" onclick="show('home')">← Ana sayfa</button><h1>Yakınımda 📍</h1><p class="muted">Günlük hayat için önemli yerler.</p><div class="grid">${["🛒 Market","💊 Eczane","🏛️ Belediye","🚆 Ulaşım","🏥 Doktor","📚 Kütüphane"].map(v=>`<button class="card"><span class="emoji">${v.slice(0,2)}</span><b>${v.slice(3)}</b><small>Yakındaki yerleri göster</small></button>`).join("")}</div>`;
if(page==="profil") x=`<button class="back" onclick="show('home')">← Ana sayfa</button><h1>Profil</h1><div class="card"><b>Dil</b><p class="muted">Türkçe · العربية · Nederlands</p></div><div class="card"><b>Gizlilik</b><p class="muted">Gereksiz kişisel belge istemiyoruz.</p></div>`;
screen.innerHTML=layout(x);
}
function jobCard(j){return `<div class="job"><b>${j[0]}</b><div class="muted">📍 ${j[1]}</div><span class="pill">${j[2]}</span></div>`}
function filterJobs(q){const v=q.toLowerCase();document.getElementById("joblist").innerHTML=jobs.filter(j=>j.join(" ").toLowerCase().includes(v)).map(jobCard).join("")||'<div class="empty">Şimdilik sonuç bulunamadı.</div>'}
show("home");