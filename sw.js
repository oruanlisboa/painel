/* Painel de Vida — service worker.
   Guarda o painel para ele abrir sem internet. Os dados nunca passam por aqui:
   ficam no armazenamento do navegador e no backup em arquivo. */
const CACHE = 'painel-v14';
const ARQUIVOS = [
  './',
  './painel-ruan_3.html',
  './manifest.webmanifest',
  './icone-180.png',
  './icone-192.png',
  './icone-512.png',
];

self.addEventListener('install', ev => {
  ev.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(ARQUIVOS.map(a => c.add(a))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', ev => {
  ev.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Rede primeiro, cache como rede de segurança: assim uma versão nova do painel
   aparece assim que houver conexão, e o painel continua abrindo sem ela. */
self.addEventListener('fetch', ev => {
  const req = ev.request;
  if (req.method !== 'GET' || !req.url.startsWith(self.location.origin)) return;
  ev.respondWith(
    fetch(req)
      .then(res => {
        const copia = res.clone();
        caches.open(CACHE).then(c => c.put(req, copia)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then(r => r || caches.match('./painel-ruan_3.html')))
  );
});
