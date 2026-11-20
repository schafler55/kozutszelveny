# ÚtSzelvény – régi cím

Az **ÚtSzelvény** új helye: **https://github.com/schafler55/utszelveny**
Webalkalmazás: **https://schafler55.github.io/utszelveny/**

Ez a tároló csak a régi webcímet (`schafler55.github.io/kozutszelveny/`) irányítja át az újra:

- `index.html` – a régi címről az újra visz (a cím többi része megmarad)
- `404.html` – minden más régi cím (pl. `/kozutszelveny/teszt/…`) ugyanígy
- `sw.js` – a régi címen telepített webalkalmazás service workerét lecseréli: törli a régi gyorsítótárat, és megnyitja az új címet

Kódot itt ne fejlessz; minden a `schafler55/utszelveny` tárolóban van.
