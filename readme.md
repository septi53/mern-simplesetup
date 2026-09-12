Di project ini ada 2 mode:
1) Development
• backend + webpack dev middleware jalan bersama
• frontend dikompilasi otomatis saat request
Jalankan:

npm run development

Ini akan menjalankan nodemon, lalu server Express akan mulai dengan webpack dev bundling. 
2) Production
• build dulu
• lalu jalankan server hasil build
Jalankan:

npm run build
npm start

Catatan:
• npm start akan menjalankan:
cross-env NODE_ENV=production node ./dist/server.generated.js
• buka browser ke:http://localhost:3000

Jika MongoDB belum aktif:
• pastikan MongoDB running di lokal
• default URL: mongodb://localhost:27017/mernSimpleSetup