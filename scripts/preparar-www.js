// Copia TODOS los archivos de la app a www/ y comprueba que no falta ninguno.
// Uso: npm run apk   (después abre Android Studio con: npx cap open android)
const fs = require('fs'), path = require('path');
const raiz = path.join(__dirname, '..'), www = path.join(raiz, 'www');
const ARCHIVOS = ['index.html', 'acceso.js', 'sync-drive.js', 'ejercicios.json', 'pizarras.json',
  'manifest.json', 'service-worker.js', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png',
  'privacidad.html', 'guia.html'];
let errores = 0;
const falta = ARCHIVOS.filter(f => !fs.existsSync(path.join(raiz, f)));
if (falta.length) { console.error('✗ Faltan en la raíz (¿git pull?): ' + falta.join(', ')); process.exit(1); }
fs.mkdirSync(www, { recursive: true });
ARCHIVOS.forEach(f => fs.copyFileSync(path.join(raiz, f), path.join(www, f)));
// 1) comprobar que la copia es idéntica
ARCHIVOS.forEach(f => {
  if (!fs.readFileSync(path.join(raiz, f)).equals(fs.readFileSync(path.join(www, f)))) { console.error('✗ Distinto: ' + f); errores++; }
});
// 2) comprobar que todos los <script src> locales del index existen en www
const html = fs.readFileSync(path.join(www, 'index.html'), 'utf8');
[...html.matchAll(/<script[^>]+src="([^":]+)"/g)].forEach(m => {
  if (!fs.existsSync(path.join(www, m[1]))) { console.error('✗ index.html carga ' + m[1] + ' y no está en www'); errores++; }
});
if (errores) process.exit(1);
console.log('✓ www actualizado: ' + ARCHIVOS.length + ' archivos idénticos a la raíz, scripts del index presentes.');
