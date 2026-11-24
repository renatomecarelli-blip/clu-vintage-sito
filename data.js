// ============================================================
//  CATALOGO CLU VINTAGE
//  Per togliere un pezzo venduto: cancella il suo blocco { ... },
//  oppure scrivi  venduto: true  per mostrarlo come "venduto".
//  Per aggiungerne uno: metti la foto in img/ e copia un blocco.
// ============================================================

const INSTAGRAM = "clu_vintage";
const WHATSAPP = ""; // numero con prefisso, es. "393331234567". Vuoto = niente WhatsApp.

const CATS = {
  pellicce: { nome: "Pellicce", testo: "Visoni, gilet e mantelle scelti uno per uno: da provare davanti allo specchio." },
  borse: { nome: "Borse firmate", testo: "Gucci, Fendi, Burberry, Prada, Borbonese: le firme che hanno fatto la storia della borsa." },
  pelliccia: { nome: "Borse in pelliccia", testo: "Borse e pochette in pelliccia, una diversa dall'altra, con manici in bambù e catene dorate." },
  carhartt: { nome: "Gilet Carhartt", testo: "Canvas imbottito, collo a costine, cuciture a contrasto. Dodici colori, dodici caratteri." },
  accessori: { nome: "Accessori", testo: "Piccoli oggetti con una storia, perfetti anche da regalare." },
};

const P = [
  // ---------------- PELLICCE ----------------
  { id: "mantella-visone-cappuccio", c: "pellicce", b: "Visone", n: "Mantella con cappuccio", img: ["visone-cappuccio"],
    nota: "il grande classico",
    d: "Visone color miele lavorato a strisce verticali, che danno movimento alla pelliccia a ogni passo. Il cappuccio ampio incornicia il viso, le maniche a mantella la rendono facile da portare sopra un maglione o un abito da sera.",
    det: ["Visone color miele", "Cappuccio ampio", "Maniche a mantella", "Lavorazione a strisce verticali"] },
  { id: "giacca-visone-scuro", c: "pellicce", b: "Visone", n: "Giacca scura", img: ["visone-scuro"],
    nota: "elegante e calda",
    d: "Giacca in visone scuro dalla linea svasata, con collo alto da alzare nelle giornate più fredde. Una pelliccia senza tempo, che sta bene sia con i jeans che con un cappotto lungo sotto.",
    det: ["Visone scuro", "Linea svasata", "Collo alto"] },
  { id: "gilet-procione-lacci", c: "pellicce", b: "Procione", n: "Gilet con lacci", img: ["gilet-procione-lacci"],
    nota: "da mettere sul maglione",
    d: "Gilet a pelo lungo dai riflessi caldi, chiuso sul davanti da lacci in pelle. Il capo perfetto per dare carattere a un look semplice, sopra una camicia o un dolcevita.",
    det: ["Pelo lungo", "Chiusura con lacci in pelle", "Senza maniche"] },
  { id: "gilet-visone-zip", c: "pellicce", b: "Visone", n: "Gilet con zip", img: ["gilet-visone-zip"],
    nota: "sportivo",
    d: "Gilet in visone con chiusura a zip e fondo in maglia a costine: l'anima sportiva della pelliccia. Leggero, caldo e comodo da portare tutti i giorni.",
    det: ["Visone", "Zip frontale", "Fondo a costine"] },
  { id: "gilet-procione", c: "pellicce", b: "Procione", n: "Gilet a pelo lungo", img: ["gilet-procione"],
    nota: "riflessi caldi",
    d: "Gilet in procione dal pelo lungo e voluminoso, con sfumature dal miele al grigio. Sopra un maglione a collo alto è subito inverno.",
    det: ["Procione", "Pelo lungo", "Senza maniche"] },

  // ---------------- BORSE FIRMATE ----------------
  { id: "gucci-pelle-cuoio-web", c: "borse", b: "Gucci", n: "Borsa in pelle cuoio", img: ["gucci-cuoio-web"],
    nota: "il nastro Web",
    d: "Pelle color cuoio attraversata dal nastro Web verde-rosso-verde, il segno inconfondibile di Gucci. Tracolla regolabile e forma squadrata, capiente quanto basta per tutti i giorni.",
    det: ["Pelle color cuoio", "Nastro Web verde-rosso-verde", "Tracolla"] },
  { id: "burberry-plaid-visone", c: "borse", b: "Burberry", n: "Plaid e visone", img: ["burberry-visone"],
    nota: "pezzo unico",
    d: "Un pezzo davvero unico: plaid in lana con frange, fascia in visone e manici in bambù. Il caldo della lana e della pelliccia in una borsa che non passa inosservata.",
    det: ["Plaid in lana con frange", "Fascia in visone", "Manici in bambù"] },
  { id: "fendi-zucchino", c: "borse", b: "Fendi", n: "Zucchino", img: ["fendi-zucchino"],
    nota: "il monogramma FF",
    d: "Borsa in tela Zucchino con il monogramma FF, uno dei disegni più riconoscibili di Fendi. Forma compatta e morbida, da portare a mano o sotto il braccio.",
    det: ["Tela Zucchino", "Monogramma FF", "Formato compatto"] },
  { id: "prada-jacquard", c: "borse", b: "Prada", n: "Jacquard", img: ["prada-jacquard"],
    nota: "la grande",
    d: "Borsa in tela jacquard con logo, cinghie e finiture in cuoio a contrasto. Grande e robusta, con manici e tracolla: per il lavoro, il weekend o il viaggio.",
    det: ["Tela jacquard con logo", "Cinghie e finiture in cuoio", "Manici e tracolla"] },
  { id: "gucci-hobo-tela", c: "borse", b: "Gucci", n: "Hobo in tela beige", img: ["gucci-hobo"],
    nota: "morbida",
    d: "Hobo in tela beige con il nastro Web e manico lungo in pelle. Morbida, si porta in spalla e segue il corpo.",
    det: ["Tela beige", "Nastro Web", "Manico in pelle"] },
  { id: "gucci-pochette-camoscio", c: "borse", b: "Gucci", n: "Pochette in camoscio", img: ["gucci-camoscio"],
    nota: "blu-rosso-blu",
    d: "Pochette in camoscio verde scuro con nastro blu-rosso-blu. Piatta ed elegante, da tenere in mano o dentro una borsa più grande.",
    det: ["Camoscio", "Nastro blu-rosso-blu", "Formato pochette"] },
  { id: "gucci-trousse-gg", c: "borse", b: "Gucci", n: "Trousse GG", img: ["gucci-trousse"],
    nota: "da regalare",
    d: "Trousse in tela GG con logo in metallo dorato. Perfetta per il beauty o come pochette da sera.",
    det: ["Tela GG", "Logo in metallo dorato", "Zip"] },
  { id: "gucci-nera-web", c: "borse", b: "Gucci", n: "Nera con nastro Web", img: ["gucci-nera-web"],
    nota: "il dettaglio",
    d: "Pelle nera con nastro Web verde-rosso-verde e fibbia in metallo. Nella foto il dettaglio del nastro: le altre foto te le mandiamo in DM.",
    det: ["Pelle nera", "Nastro Web", "Fibbia in metallo"] },
  { id: "burberry-messenger", c: "borse", b: "Burberry", n: "Messenger", img: ["burberry-messenger"],
    nota: "il check",
    d: "Messenger nel classico check Burberry, con patta, fibbie e finiture in pelle marrone. Si porta a tracolla, comoda e senza tempo.",
    det: ["Tela check Burberry", "Patta con fibbie in pelle", "Tracolla"] },
  { id: "borbonese-op", c: "borse", b: "Borbonese", n: "Tessuto OP", img: ["borbonese"],
    nota: "occhio di pernice",
    d: "Borsa nel tessuto OP, l'occhio di pernice di Borbonese, con manici tondi in pelle. Un'icona italiana che non passa mai di moda.",
    det: ["Tessuto OP", "Manici tondi in pelle"] },

  // ---------------- BORSE IN PELLICCIA ----------------
  { id: "secchiello-visone", c: "pelliccia", b: "Visone", n: "Borsa a secchiello", img: ["secchiello-visone"],
    nota: "morbidissima", d: "Secchiello in visone scuro, morbido e capiente, con manico corto da portare al polso.", det: ["Visone scuro", "Forma a secchiello"] },
  { id: "pochette-visone-catena", c: "pelliccia", b: "Visone", n: "Pochette con catena", img: ["pochette-visone"],
    nota: "giorno e sera", d: "Pochette in visone chiaro con catena: a mano di giorno, a tracolla di sera.", det: ["Visone", "Catena"] },
  { id: "borsa-pelliccia-1", c: "pelliccia", b: "N° 1", n: "Riccioli e bambù", img: ["pelliccia-borsa-1"],
    nota: "la più ricca", d: "Pelliccia lavorata a riccioli, con manico in bambù e catena dorata.", det: ["Pelliccia a riccioli", "Manico in bambù", "Catena dorata"] },
  { id: "borsa-pelliccia-2", c: "pelliccia", b: "N° 2", n: "Color miele", img: ["pelliccia-borsa-2"],
    nota: "calda", d: "Pelliccia color miele con manico in bambù.", det: ["Pelliccia color miele", "Manico in bambù"] },
  { id: "borsa-pelliccia-3", c: "pelliccia", b: "N° 3", n: "Pochette con pompon", img: ["pelliccia-borsa-3"],
    nota: "giocosa", d: "Pochette in pelliccia con pompon e catena dorata.", det: ["Pompon", "Catena dorata"] },
  { id: "borsa-pelliccia-4", c: "pelliccia", b: "N° 4", n: "Nera con bambù", img: ["pelliccia-borsa-4"],
    nota: "da sera", d: "Pelliccia nera con manico in bambù e bordo in pelle.", det: ["Pelliccia nera", "Manico in bambù", "Bordo in pelle"] },
  { id: "borsa-pelliccia-5", c: "pelliccia", b: "N° 5", n: "Chiara con linguetta", img: ["pelliccia-borsa-5"],
    nota: "luminosa", d: "Pelliccia chiara con linguetta in pelle e catena dorata.", det: ["Pelliccia chiara", "Linguetta in pelle", "Catena dorata"] },
  { id: "borsa-pelliccia-6", c: "pelliccia", b: "N° 6", n: "Marrone con risvolto", img: ["pelliccia-borsa-6"],
    nota: "doppia catena", d: "Pelliccia marrone con risvolto e doppia catena dorata.", det: ["Pelliccia marrone", "Risvolto", "Doppia catena dorata"] },
  { id: "borsa-pelliccia-7", c: "pelliccia", b: "N° 7", n: "Nera, catena nera", img: ["pelliccia-borsa-7"],
    nota: "tutta nera", d: "Pelliccia nera con bordo in pelle e catena nera.", det: ["Pelliccia nera", "Bordo in pelle", "Catena nera"] },
  { id: "borsa-pelliccia-8", c: "pelliccia", b: "N° 8", n: "Marrone con bottone", img: ["pelliccia-borsa-8"],
    nota: "compatta", d: "Pelliccia marrone, bordo in pelle, bottone e catena dorata.", det: ["Pelliccia marrone", "Bottone", "Catena dorata"] },
  { id: "borsa-pelliccia-9", c: "pelliccia", b: "N° 9", n: "Nera a pelo raso", img: ["pelliccia-borsa-9"],
    nota: "a spalla", d: "Pelliccia nera a pelo raso con tracolla in pelle.", det: ["Pelo raso", "Tracolla in pelle"] },

  // ---------------- GILET CARHARTT ----------------
  { id: "carhartt-01-cuoio", c: "carhartt", b: "Carhartt N° 01", n: "Cuoio", img: ["carhartt-cuoio"], nota: "il classico", col: "#b06a2c" },
  { id: "carhartt-02-testa-di-moro", c: "carhartt", b: "Carhartt N° 02", n: "Testa di moro", img: ["carhartt-testa-di-moro"], nota: "il più scuro", col: "#3e2a24" },
  { id: "carhartt-03-verde-salvia", c: "carhartt", b: "Carhartt N° 03", n: "Verde salvia", img: ["carhartt-verde-salvia-2", "carhartt-verde-salvia"], nota: "sbiadito al punto giusto", col: "#8fa39a" },
  { id: "carhartt-04-grigio-azzurro", c: "carhartt", b: "Carhartt N° 04", n: "Grigio azzurro", img: ["carhartt-grigio-azzurro-2", "carhartt-grigio-azzurro"], nota: "effetto vissuto", col: "#9eaabd" },
  { id: "carhartt-05-arancio", c: "carhartt", b: "Carhartt N° 05", n: "Arancio", img: ["carhartt-arancio"], nota: "si fa notare", col: "#d0532f" },
  { id: "carhartt-06-verde-bosco", c: "carhartt", b: "Carhartt N° 06", n: "Verde bosco", img: ["carhartt-verde-bosco"], nota: "verde bottiglia", col: "#2f5e3f" },
  { id: "carhartt-07-mimetico", c: "carhartt", b: "Carhartt N° 07", n: "Mimetico", img: ["carhartt-mimetico"], nota: "chiaro e sbiadito", col: "#b4ad92" },
  { id: "carhartt-08-blu-notte", c: "carhartt", b: "Carhartt N° 08", n: "Blu notte", img: ["carhartt-blu-notte"], nota: "blu profondo", col: "#2c3566" },
  { id: "carhartt-09-sabbia", c: "carhartt", b: "Carhartt N° 09", n: "Sabbia", img: ["carhartt-sabbia"], nota: "tono caldo", col: "#c7a27a" },
  { id: "carhartt-10-blu-cobalto", c: "carhartt", b: "Carhartt N° 10", n: "Blu cobalto", img: ["carhartt-blu-cobalto"], nota: "blu acceso", col: "#2a5bb5" },
  { id: "carhartt-11-grigio", c: "carhartt", b: "Carhartt N° 11", n: "Grigio", img: ["carhartt-grigio"], nota: "grigio caldo", col: "#8a8584" },
  { id: "carhartt-12-militare", c: "carhartt", b: "Carhartt N° 12", n: "Militare", img: ["carhartt-militare"], nota: "verde militare", col: "#8c9b6e" },

  // ---------------- ACCESSORI ----------------
  { id: "cartier-accendino", c: "accessori", b: "Cartier", n: "Accendino con astuccio", img: ["cartier-accendino", "cartier-astuccio"],
    nota: "un regalo con storia",
    d: "Accendino Cartier nel suo astuccio rosso con le finiture dorate. Un oggetto da collezione e un'idea regalo che si ricorda.",
    det: ["Cartier", "Con astuccio originale"] },
];

// Testo comune per i gilet Carhartt
P.filter(p => p.c === "carhartt").forEach(p => {
  p.d = p.d || `Gilet Carhartt color ${p.n.toLowerCase()} in canvas imbottito, con collo a costine, tasche a toppa e cuciture a contrasto. Ogni gilet ha la sua tinta e i segni del tempo che lo rendono unico: ${p.nota}.`;
  p.det = p.det || ["Canvas imbottito", "Collo a costine", "Zip frontale", "Taglia in DM"];
});
