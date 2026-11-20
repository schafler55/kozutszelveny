// The app moved to /utszelveny/. An installed web app at the old address still has the old service worker,
// which serves the app from its cache. When the browser checks for an update it gets this file instead:
// it removes itself and the old caches, then opens the new address in every window of the old app.
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",(e)=>{e.waitUntil((async()=>{
  for(const k of await caches.keys())await caches.delete(k);
  await self.registration.unregister();
  for(const c of await self.clients.matchAll({type:"window"}))c.navigate(c.url.replace("/kozutszelveny/","/utszelveny/"));
})())});
