# Sito Clu Vintage

Online su https://cluvintage.netlify.app. Ogni modifica caricata su GitHub (renatomecarelli-blip/clu-vintage-sito, ramo main) va online da sola tramite Netlify.

## File
- `index.html` – home: collezioni, catalogo, gilet Carhartt, fiere, post Instagram, consigli, contatti
- `prodotto.html` – la pagina di ogni pezzo (prodotto.html?p=nome-del-pezzo)
- `data.js` – **il catalogo**. Per un pezzo venduto: cancella il suo blocco o scrivi `venduto: true`. Per un pezzo nuovo: foto in `img/` e copia un blocco.
- `data.js`, riga `WHATSAPP = ""` – mettendo il numero compaiono i pulsanti WhatsApp.
- `app.js` – filtri, animazioni, pagina prodotto
- `style.css` – colori, caratteri (Lora e Poppins in `fonts/`) e animazioni
