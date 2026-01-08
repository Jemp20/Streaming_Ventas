// Configura tu WhatsApp y mensaje
const WHATSAPP_NUMBER = "573044647130"; // formato internacional sin '+'
const DEFAULT_MESSAGE = encodeURIComponent("Hola, quiero activar un plan de streaming. ¿Me ayudas?");

// Catálogo de planes
const plans = [
  // 📺 Pantallas 1P Ultra HD 1 mes

{
  id: "spotify",
  service: "Spotify",
  screens: 1,
  cycle: "Mensual",
  price: 17000,
  quality: "Premium",
  note: "Cuenta personal",
  image: "assets/Spotify.jpg",
  features: ["Renovable avisando"]
},

{
  id: "youtube-music",
  service: "YouTube Music",
  screens: 1,
  cycle: "Mensual",
  price: 16000,
  quality: "Premium",
  note: "Cuenta personal",
  image: "assets/youtubemusic.png",
  features: ["Renovable avisando"]
},


{
  id: "netflix-full",
  service: "Netflix",
  screens: "5",
  cycle: "Mensual",
  price: 48000,
  quality: "Ultra HD",
  note: "Cuenta completa",
  image: "assets/Netflix.png",
  features: ["Todas las pantallas"]
},
{
  id: "max-full",
  service: "Max",
  screens: 3,
  cycle: "Mensual",
  price: 19000,
  quality: "HD",
  note: "3 simultáneos",
  image: "assets/HBO.png",
  features: ["Cuenta original"]
},
{
  id: "crunchy-full",
  service: "Crunchyroll",
  screens: "4",
  cycle: "Mensual",
  price: 19000,
  quality: "HD",
  note: "Cuenta completa",
  image: "assets/Crunchyroll.png",
  features: ["Anime ilimitado"]
},
{
  id: "paramount-full",
  service: "Paramount+",
  screens: "4",
  cycle: "Mensual",
  price: 19000,
  quality: "HD",
  note: "Cuenta completa",
  image: "assets/paramount-plus-logo.webp",
  features: ["Todas las pantallas"]
},
{
  id: "vix-full",
  service: "Vix",
  screens: "3",
  cycle: "Mensual",
  price: 15000,
  quality: "HD",
  note: "Cuenta completa",
  image: "assets/Vix.jpg",
  features: ["Todas las pantallas"]
},


{
  id: "netflix-int-1p",
  service: "Netflix Internacional",
  screens: 1,
  cycle: "Mensual",
  price: 16000,
  quality: "Ultra HD",
  note: "1 pantallas",
  image: "assets/Netflix.png",
  features: ["Cuenta internacional"]
},

{
  id: "disney-prem-1p",
  service: "Disney+ Premium",
  screens: 1,
  cycle: "Mensual",
  price: 14000,
  quality: "Ultra HD",
  note: "1 pantalla",
  image: "assets/Disney_Logo.png",
  features: ["Cuenta original", "Premium"]
},
{
  id: "max-platino-1p",
  service: "Max Platino",
  screens: 1,
  cycle: "Mensual",
  price: 11000,
  quality: "Ultra HD",
  note: "1 pantalla",
  image: "assets/HBO.png",
  features: ["Cuenta original", "Platino"]
},
{
  id: "crunchy-1p",
  service: "Crunchyroll",
  screens: 1,
  cycle: "Mensual",
  price: 11000,
  quality: "HD",
  note: "1 pantalla",
  image: "assets/Crunchyroll.png",
  features: ["Anime ilimitado", "Cuenta original"]
},
{
  id: "paramount-1p",
  service: "Paramount+",
  screens: 1,
  cycle: "Mensual",
  price: 11000,
  quality: "HD",
  note: "1 pantalla",
  image: "assets/paramount-plus-logo.webp",
  features: ["Cuenta original"]
},
{
  id: "vix-1p",
  service: "Vix",
  screens: 1,
  cycle: "Mensual",
  price: 8000,
  quality: "HD",
  note: "1 pantalla",
  image: "assets/Vix.jpg",
  features: ["Cuenta original"]
},
{
  id: "iptv-1p",
  service: "IPTV",
  screens: 1,
  cycle: "Mensual",
  price: 13000,
  quality: "HD",
  note: "1 pantalla",
  image: "assets/Iptv.png",
  features: ["Canales en vivo"]
},

{
  id: "canva-1p",
  service: "Canva",
  screens: 1,
  cycle: "Mensual",
  price: 14000,
  quality: "Premium",
  note: "Renovable",
  image: "assets/Canva.png",
  features: ["Diseño ilimitado"]
},

  
  {
    id: "netflix-1p",
    service: "Netflix",
    screens: 1,
    cycle: "Mensual",
    price: 15000,
    quality: "Ultra HD",
    note: "1 pantalla",
    image: "assets/Netflix.png",
    features: ["Cuenta original", "Soporte rápido"]
  },
  {
    id: "disney-std-1p",
    service: "Disney+ Estándar",
    screens: 1,
    cycle: "Mensual",
    price: 11000,
    quality: "HD",
    note: "1 pantalla",
    image: "assets/Disney_Logo.png",
    features: ["Cuenta original", "Renovable"]
  },

  {
    id: "prime-1p",
    service: "Amazon Prime Video",
    screens: 1,
    cycle: "Mensual",
    price: 10000,
    quality: "HD",
    note: "1 pantalla",
    image: "assets/Prime_Video.jpg",
    features: ["Cuenta original", "Soporte rápido"]
  },

{
    id: "Disney-Completa",
    service: "Disney+ Estandar-Completa",
    screens: 5,
    cycle: "Mensual",
    price: 20000,
    quality: "HD",
    note: "5 pantalla",
    image: "assets/Disney_Logo.png",
    features: ["Cuenta original", "Soporte rápido"]
  },

{
    id: "Disney-Completa",
    service: "Disney+ Premium-Completa",
    screens: 5,
    cycle: "Mensual",
    price: 31000,
    quality: "HD",
    note: "5 pantalla",
    image: "assets/Disney_Logo.png",
    features: ["Cuenta original", "Soporte rápido"]
  },

    {
    id: "prime-Completa",
    service: "Amazon Prime Video-Completa",
    screens: 5,
    cycle: "Mensual",
    price: 20000,
    quality: "HD",
    note: "1 pantalla",
    image: "assets/Prime_Video.jpg",
    features: ["Cuenta original", "Soporte rápido"]
  },

];
 
const serviceSelect = document.getElementById("service-select");
const searchInput = document.getElementById("search-input");
const cycleSelect = document.getElementById("cycle-select");
const container = document.getElementById("plans-container");

// Extraer servicios únicos
const services = [...new Set(plans.map(p => p.service))];
services.forEach(service => {
  const option = document.createElement("option");
  option.value = service;
  option.textContent = service;
  serviceSelect.appendChild(option);
});

function renderFilteredPlans() {
  const selectedService = serviceSelect.value.toLowerCase();
  const selectedCycle = cycleSelect.value.toLowerCase();
  const searchText = searchInput.value.toLowerCase();

  const filtered = plans.filter(plan => {
    return (
      (selectedService === "" || plan.service.toLowerCase().includes(selectedService)) &&
      (selectedCycle === "" || plan.cycle.toLowerCase().includes(selectedCycle)) &&
      (
        searchText === "" ||
        plan.note.toLowerCase().includes(searchText) ||
        plan.quality.toLowerCase().includes(searchText)
      )
    );
  });

  container.innerHTML = "";
  if (filtered.length === 0) {
    container.innerHTML = `<p style="color:#b6becc;text-align:center;">No hay planes que coincidan con tu búsqueda.</p>`;
    return;
  }

  filtered.forEach(plan => container.appendChild(createCard(plan)));
}


// Utilidades
const currency = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });

function renderServiceFilter() {
  const select = document.getElementById('serviceFilter');
  const services = Array.from(new Set(plans.map(p => p.service)));
  select.innerHTML = `<option value="">Servicio</option>` + services.map(s => `<option value="${s}">${s}</option>`).join('');
}

function createCard(plan) {
  const el = document.createElement('article');
  el.className = 'card';
  el.innerHTML = `
    <div class="card-media">
      <img src="${plan.image}" alt="${plan.service}">
    </div>
    <div class="card-body">
      <div class="card-title">
        <h3>${plan.service} · ${plan.screens} pantallas</h3>
        <span class="price">${currency.format(plan.price)}</span>
      </div>
      <div class="meta">
        <span>${plan.cycle}</span>
        <span>Calidad: ${plan.quality}</span>
        <span class="badge">${plan.note}</span>
      </div>
      <div class="features">
        ${plan.features.map(f => `<span class="feature">${f}</span>`).join('')}
      </div>
      <div class="card-actions">
        <a class="btn btn-primary" href="https://wa.me/${573044647130}?text=${encodeURIComponent(`Hola, quiero el plan ${plan.service} - ${plan.screens} pantallas (${plan.cycle}) por ${currency.format(plan.price)}.`)}">Comprar por WhatsApp</a>
       <button class="btn btn-primary" data-id="${plan.id}">Detalles</button>
      </div>
    </div>
  `;
  el.querySelector('button[data-id]').addEventListener('click', () => {
    alert(`Detalles del plan:\n\nServicio: ${plan.service}\nPantallas: ${plan.screens}\nCiclo: ${plan.cycle}\nPrecio: ${currency.format(plan.price)}\nCalidad: ${plan.quality}\n\nNota: ${plan.note}`);
  });
  return el;
}

function renderPlans() {
  const grid = document.getElementById('plansGrid');
  const service = document.getElementById('serviceFilter').value;
  const cycle = document.getElementById('cycleFilter').value;
  const term = document.getElementById('searchInput').value.toLowerCase().trim();

  const filtered = plans.filter(p => {
    const matchService = service ? p.service === service : true;
    const matchCycle = cycle ? p.cycle === cycle : true;
    const searchable = `${p.service} ${p.screens} pantallas ${p.cycle} ${p.quality} ${p.note}`.toLowerCase();
    const matchTerm = term ? searchable.includes(term) : true;
    return matchService && matchCycle && matchTerm;
  });

  grid.innerHTML = '';
  if (filtered.length === 0) {
    grid.innerHTML = `<p style="color:#b6becc;text-align:center;">No hay planes que coincidan con tu búsqueda.</p>`;
    return;
  }
  filtered.forEach(p => grid.appendChild(createCard(p)));
}

function setupWhatsApp() {
  const btn = document.getElementById('whatsappBtn');
  btn.href = `https://wa.me/qr/WSI6NHXYBHZTN1${573044647130}`;
}

serviceSelect.addEventListener("change", renderFilteredPlans);
cycleSelect.addEventListener("change", renderFilteredPlans);
searchInput.addEventListener("input", renderFilteredPlans);

// Mostrar todos al inicio
renderFilteredPlans();
 

