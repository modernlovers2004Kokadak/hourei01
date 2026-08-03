const CACHE_PREFIX='riyoshi-glossary-';
const CACHE=CACHE_PREFIX+'v3.0.191-20260803';
const ASSETS=['./','./index.html','./infection-classification-guide.html','./infectionDiseaseData.js?v=3.0.190','./taisaku-youten.html','./dictionaryPage.js?v=3.0.190','./style.css?v=3.0.191','./manifest.webmanifest','./glossaryData.js?v=3.0.190','./glossaryQuizData.js?v=3.0.190','./cultureManagementData.js?v=3.0.190','./comprehensiveSupplementData.js?v=3.0.190','./glossaryApp.js?v=3.0.191','./apple-touch-icon.png','./icon-192.png','./icon-512.png','./favicon-32.png'];
self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    await Promise.all(ASSETS.map(async path=>{
      const url=new URL(path,self.registration.scope).href;
      const response=await fetch(new Request(url,{cache:'reload'}));
      if(!response.ok)throw new Error(`Failed to cache ${path}`);
      await cache.put(url,response);
    }));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(new Request(event.request,{cache:'no-store'})).then(response=>{
      if(response&&response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}
      return response;
    }).catch(()=>caches.match(event.request).then(cached=>cached||caches.match(new URL('./index.html',self.registration.scope).href))));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>{
    if(cached)return cached;
    return fetch(event.request).then(response=>{
      if(response&&response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}
      return response;
    }).catch(()=>event.request.mode==='navigate'?caches.match('./index.html'):undefined);
  }));
});
