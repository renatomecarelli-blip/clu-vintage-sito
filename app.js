// Clu Vintage: logica della home e della pagina prodotto.
// Il catalogo è in data.js.

const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const url = p => `prodotto.html?p=${encodeURIComponent(p.id)}`;
const label = p => `${p.b} ${p.n}`;
const askHref = p => WHATSAPP
  ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Ciao! Mi interessa: " + label(p))}`
  : `https://ig.me/m/${INSTAGRAM}`;

function card(p, i = 0) {
  const a = document.createElement("a");
  a.className = "card reveal" + (p.venduto ? " sold" : "");
  a.href = url(p);
  a.style.setProperty("--i", i % 8);
  a.innerHTML = `<div class="ph"><img src="img/${p.img[0]}.jpg" alt="${esc(label(p))}" loading="lazy" style="view-transition-name:none">
      ${p.img[1] ? `<img class="alt" src="img/${p.img[1]}.jpg" alt="" loading="lazy">` : ""}
      ${p.venduto ? `<span class="badge">Venduto</span>` : ""}</div>
    <div class="tx"><p class="br">${p.col ? `<i class="dot" style="--c:${p.col}"></i>` : ""}${esc(p.b)}</p>
      <p class="nm">${esc(p.n)}</p>${p.nota ? `<p class="nt">${esc(p.nota)}</p>` : ""}</div>`;
  a.addEventListener("click", () => { const im = a.querySelector("img"); im.style.viewTransitionName = "hero-img"; });
  return a;
}

/* ---------------- reveal allo scorrimento ---------------- */
const io = "IntersectionObserver" in window ? new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }) : null;
function watch(root = document) {
  root.querySelectorAll(".reveal:not(.in)").forEach(el => io ? io.observe(el) : el.classList.add("in"));
}

/* ---------------- header che si compatta ---------------- */
const topBar = $(".top");
addEventListener("scroll", () => topBar && topBar.classList.toggle("small", scrollY > 40), { passive: true });

/* ---------------- WhatsApp ---------------- */
if (WHATSAPP) document.querySelectorAll("[data-wa]").forEach(a => { a.href = `https://wa.me/${WHATSAPP}`; a.hidden = false; });

/* ================= HOME ================= */
if ($("#grid")) {
  const grid = $("#grid"), filters = $(".filters"), sub = $("#catsub");
  const subDefault = sub.textContent;
  let current = new URLSearchParams(location.search).get("cat") || "tutti";
  if (!CATS[current]) current = "tutti";

  function tab(key, name, n) {
    const b = document.createElement("button");
    b.type = "button"; b.setAttribute("role", "tab");
    b.innerHTML = `${name}<small>${n}</small>`;
    b.setAttribute("aria-selected", key === current);
    b.onclick = () => go(key);
    return b;
  }
  function render() {
    filters.replaceChildren(tab("tutti", "Tutti", P.length),
      ...Object.entries(CATS).map(([k, c]) => tab(k, c.nome, P.filter(p => p.c === k).length)));
    const list = P.filter(p => current === "tutti" || p.c === current);
    grid.replaceChildren(...list.map(card));
    sub.textContent = current === "tutti" ? subDefault : CATS[current].testo;
    watch(grid);
  }
  function go(key, scroll) {
    current = key;
    const u = new URL(location); key === "tutti" ? u.searchParams.delete("cat") : u.searchParams.set("cat", key);
    history.replaceState(null, "", u);
    document.startViewTransition ? document.startViewTransition(render) : render();
    if (scroll) $("#catalogo").scrollIntoView({ behavior: "smooth" });
  }
  render();

  // tessere delle collezioni
  const covers = { pellicce: "visone-cappuccio", borse: "gucci-cuoio-web", pelliccia: "pelliccia-borsa-6", carhartt: "carhartt-arancio", accessori: "cartier-accendino" };
  $("#colls").replaceChildren(...Object.entries(CATS).map(([k, c], i) => {
    const a = document.createElement("a");
    a.href = `?cat=${k}#catalogo`; a.className = "coll reveal"; a.style.setProperty("--i", i);
    a.innerHTML = `<img src="img/${covers[k]}.jpg" alt="" loading="lazy"><div><h3>${c.nome}</h3><p>${P.filter(p => p.c === k).length} pezzi</p></div>`;
    a.onclick = e => { e.preventDefault(); go(k, true); };
    return a;
  }));

  // colori Carhartt
  $("#swatches").replaceChildren(...P.filter(p => p.c === "carhartt").map(p => {
    const a = document.createElement("a"); a.href = url(p); a.style.setProperty("--c", p.col); a.textContent = p.n; return a;
  }));

  // conteggio pezzi
  const n = $("[data-count='40']"); if (n) { n.dataset.count = P.length; n.textContent = P.length; }
  watch();
}

/* ================= PAGINA PRODOTTO ================= */
if ($("#product")) {
  const id = new URLSearchParams(location.search).get("p");
  const i = Math.max(0, P.findIndex(p => p.id === id));
  const p = P[i], cat = CATS[p.c];
  document.title = `${label(p)} · Clu Vintage`;
  $("meta[name=description]").content = p.d;

  $("#crumb-cat").textContent = cat.nome; $("#crumb-cat").href = `index.html?cat=${p.c}#catalogo`;
  $("#crumb-name").textContent = label(p);
  $("#p-cat").textContent = cat.nome;
  $("#p-brand").textContent = p.b;
  $("#p-name").textContent = p.n;
  $("#p-nota").textContent = p.nota || "";
  $("#p-desc").textContent = p.d;
  $("#p-det").replaceChildren(...(p.det || []).map(t => { const li = document.createElement("li"); li.textContent = t; return li; }));
  if (p.col) $("#p-brand").insertAdjacentHTML("afterbegin", `<i class="dot big" style="--c:${p.col}"></i>`);
  $("#p-sold").hidden = !p.venduto;

  const main = $("#p-img");
  main.src = `img/${p.img[0]}.jpg`; main.alt = label(p);
  main.style.viewTransitionName = "hero-img";
  if (p.img.length > 1) {
    $("#p-thumbs").replaceChildren(...p.img.map((f, k) => {
      const b = document.createElement("button"); b.type = "button"; b.className = k ? "" : "on";
      b.innerHTML = `<img src="img/${f}.jpg" alt="Foto ${k + 1}">`;
      b.onclick = () => {
        document.querySelectorAll("#p-thumbs button").forEach(x => x.classList.remove("on")); b.classList.add("on");
        main.classList.add("swap"); setTimeout(() => { main.src = `img/${f}.jpg`; main.classList.remove("swap"); }, 180);
      };
      return b;
    }));
  }
  // zoom al passaggio del mouse
  const box = $(".p-main");
  box.addEventListener("mousemove", e => {
    const r = box.getBoundingClientRect();
    main.style.transformOrigin = `${(e.clientX - r.left) / r.width * 100}% ${(e.clientY - r.top) / r.height * 100}%`;
    box.classList.add("zoom");
  });
  box.addEventListener("mouseleave", () => box.classList.remove("zoom"));

  $("#p-ask").href = askHref(p);
  if (WHATSAPP) $("#p-ask").textContent = "Chiedi info su WhatsApp";
  const copy = $("#p-copy");
  copy.onclick = async () => {
    try { await navigator.clipboard.writeText(`Ciao! Mi interessa: ${label(p)} (${location.href})`); copy.textContent = "Copiato: incollalo in DM"; }
    catch { copy.textContent = label(p); }
  };

  const prev = P[(i - 1 + P.length) % P.length], next = P[(i + 1) % P.length];
  $("#p-prev").href = url(prev); $("#p-prev").textContent = `← ${label(prev)}`;
  $("#p-next").href = url(next); $("#p-next").textContent = `${label(next)} →`;

  const rel = P.filter(x => x.c === p.c && x !== p);
  const start = Math.max(0, rel.findIndex(x => P.indexOf(x) > i));
  const pick = [...rel.slice(start), ...rel.slice(0, start)].slice(0, 4);
  $("#related").replaceChildren(...pick.map(card));
  watch();
}
