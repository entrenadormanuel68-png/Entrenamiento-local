# ⚽ Entrenamiento Total – Local

🌐 **Prueba la app en directo:** https://entrenadormanuel68-png.github.io/Entrenamiento-local/

📣 **Presentación y novedades:** https://entrenadormanuel68-png.github.io/Entrenamiento-local/promo.html · 🤝 **Colabora:** [proponer ejercicio](https://github.com/entrenadormanuel68-png/Entrenamiento-local/issues/new?template=ejercicio.md) · [compartir pizarra](https://github.com/entrenadormanuel68-png/Entrenamiento-local/issues/new?template=pizarra.md) · [sugerir mejora](https://github.com/entrenadormanuel68-png/Entrenamiento-local/issues/new?template=propuesta.md)

---

> Aplicación web de gestión de equipos de fútbol base. Funciona **100% offline** sin necesidad de servidor. Todo se guarda en el dispositivo. Con internet, descarga además las novedades de la **biblioteca** y de las **pizarras** del club. Empaquetable como app Android con Capacitor.

![Estado](https://img.shields.io/badge/estado-activo-brightgreen)
![Versión](https://img.shields.io/badge/versión-1.6-blue)
![Contribuciones](https://img.shields.io/badge/contribuciones-bienvenidas-orange)
![Sin dependencias](https://img.shields.io/badge/dependencias-ninguna-success)
![Licencia](https://img.shields.io/badge/licencia-MIT-purple)

---

## 📋 ¿Qué es esta app?

Entrenamiento Total es una herramienta completa para entrenadores de fútbol base (Fútbol 7, 8 y 11). Permite gestionar el club, los jugadores, el calendario de entrenamientos, los partidos, la asistencia, las sesiones y la pizarra táctica desde cualquier dispositivo, sin necesidad de conexión a internet.

Está construida en un único archivo HTML con JavaScript vanilla. Sin frameworks, sin base de datos externa, sin pagos. Solo abre el archivo y funciona.

---

## ✨ Funcionalidades actuales

| Sección | Descripción |
|---|---|
| 📊 Resumen | Dashboard con estadísticas, progreso por fase, top jugadores y goleadores |
| ⚽ Club | Datos del club, plantilla flexible de jugadores, sistemas de juego (F7/F8/F11), estructura semanal, festivos |
| 📅 Calendario | Planificación con fechas reales automáticas, adaptado a 2-5 días de entrenamiento semanales |
| 🏆 Partidos | Resultados, goles por jugador, alineación por cuartos, **convocatoria por WhatsApp con observaciones**, **hoja de partido** (imagen, PDF y WhatsApp) y **valoración** del partido |
| 📋 Sesiones | Plantillas de sesiones por fases (carga, descanso, pretemporada); cada ejercicio admite dibujo o pizarra |
| 📝 Mis Sesiones | Sesiones propias: eliges ejercicios de la biblioteca o de tus pizarras y los editas sin tocar el original |
| 📐 Sist. Fútbol 7 | **8 sistemas y 80 sesiones**, **editables**: puedes cambiar cualquiera (conserva el original), añadir las tuyas, dibujar o usar una pizarra; cada sistema trae su **ficha táctica y su colocación** |
| 📐 Sist. Fútbol 8 | **8 sistemas y 80 sesiones de 60 min** (1-3-3-1, 1-2-3-2, 1-3-2-2, 1-2-4-1, 1-4-3, 1-3-1-3, 1-2-2-3, 1-3-1-2-1), con ficha, colocación y todo editable |
| 📐 Sist. Fútbol 11 | **8 sistemas y 80 sesiones de 90 min** (1-4-3-3, 1-4-4-2, 1-4-2-3-1, 1-4-1-4-1, 1-4-3-1-2, 1-3-5-2, 1-3-4-3, 1-5-3-2), también **editables**, con ficha de cada sistema y su colocación |
| ✅ Asistencia | Control de presencia por jugador y sesión (solo jugadores activos) |
| 👥 Jugadores | Ficha de cada jugador con valoración, minutos y cuartos jugados |
| 📚 Biblioteca | **338 ejercicios del club** en 7 categorías (los juegos incluidos) (se actualiza sola al abrir la app con internet), con buscador y orden por número, más los ejercicios propios de cada entrenador |
| 🖊️ Pizarra | Pizarra táctica vectorial: dibujo, figuras, guardado y envío (ver abajo) |

**Acceso:** cada entrenador usa su **propia copia** de la app, así que entra directamente como **Manager** de sus datos (sin pantalla de roles ni contraseña por defecto). Si quiere, puede proteger la app con su propia contraseña (ver «Novedades v1.6»).

---

## 🆕 Novedades v1.6

### ☁️ Sincronización opcional con Google Drive
- Para ver **tus mismos datos en el móvil, la tablet y el ordenador**. Cada entrenador usa su propia cuenta de Google: los datos van a una carpeta oculta de **su** Drive (`drive.appdata`, no puede ver el resto de sus archivos).
- **El desarrollador no tiene servidor ni accede a los datos.** Es totalmente opcional: sin conectar Drive, la app sigue guardando solo en el dispositivo.
- Se activa en **Club → «Sincronizar con Google Drive»**. Si dos dispositivos tienen datos distintos, la app pregunta cuáles conservar y guarda una copia de seguridad antes de aplicar los de Drive.
- Guía para entrenadores: [guia.html](https://entrenadormanuel68-png.github.io/Entrenamiento-local/guia.html) · [Política de privacidad](https://entrenadormanuel68-png.github.io/Entrenamiento-local/privacidad.html)

### 🔒 Entrada directa y contraseña opcional
- La app abre directamente, sin pantalla de roles ni la antigua contraseña por defecto.
- En **Club → «Bloqueo con contraseña»** se puede crear una contraseña propia (mínimo 4 caracteres) que se pide al abrir y al volver tras más de un minuto en segundo plano, por si alguien coge el móvil.
- **Es por dispositivo** (no se sincroniza con Drive) y es una protección básica: no cifra los datos. Si se olvida, la pantalla de bloqueo permite borrar los datos del dispositivo y recuperarlos desde Drive o una copia de seguridad.

### 📱 APK con inicio de sesión de Google
- Dentro del APK, Google bloquea el login web, así que se usa el plugin nativo `@capawesome/capacitor-google-sign-in`. El permiso de Google dura una hora: si caduca, la app muestra «Pulsa Sincronizar ahora para reconectar».
- Nuevo comando `npm run apk`, que copia todos los archivos a `www`, comprueba que son idénticos a la raíz y sincroniza con Android.

---

## 🆕 Novedades v1.5

### 📐 Sistemas de Fútbol 8 (nueva pestaña)
- Nueva pestaña **Sist. Fútbol 8**, entre Fútbol 7 y Fútbol 11: **8 sistemas con 10 sesiones cada uno (80 sesiones de 60 minutos)**
- Sistemas y descripciones de la guía de Fútbol 8 del club: con balón, sin balón, ventajas, riesgos e «ideal para aprender», más su **colocación en pizarra**
- La guía señala que el 1-2-3-1-1 suma nueve jugadores y no es de Fútbol 8; se sustituye por el **1-3-1-2-1**, que sí suma ocho. La descripción de sus roles es una propuesta
- Las 80 sesiones son una **propuesta** redactada a partir de la guía; son editables igual que las de Fútbol 11 (copia propia, restaurar original, dibujo o pizarra, WhatsApp, PDF)
- Panel de metodología con principios comunes, ficha de evaluación y preguntas de cierre

### 📐 Fútbol 7 mejorado
- **Ficha táctica y colocación** en cada sistema, como en Fútbol 11
- **5 sistemas nuevos** de la guía de Fútbol 7: 1-3-1-2, 1-2-1-3, 1-3-3, 1-1-3-2 (variante situacional) y 1-4-2 (variante situacional), con 10 sesiones propuestas cada uno
- Las 30 sesiones anteriores no se tocan. Se retira el «1-3-3-1» de esta pestaña: suma ocho jugadores con el portero, es una estructura de Fútbol 8 y ya está en su pestaña
- Panel de metodología ampliado con la ficha de evaluación y las preguntas de cierre

### 🖊️ Más pizarras del club
- `pizarras.json` pasa a **87 pizarras** con el nombre `Pizarra-N (referencia)`, donde la referencia es el ejercicio que usa ese dibujo (por ejemplo `Pizarra-84 (tac-034)`) o el sistema (`F8 1-3-3-1`). La Pizarra-67 es ahora un rondo propio del club; el «1-3-3-1» de 8 jugadores que ocupaba ese número se retiró de Fútbol 7. Pizarra-71 a 78 son la colocación de los 8 sistemas de Fútbol 8 y Pizarra-79 a 83, la de los 5 sistemas nuevos de Fútbol 7
- Las sesiones de Fútbol 8 entran en la **copia de seguridad**

---

## 🆕 Novedades v1.4

### 📐 Sistemas de Fútbol 11
- Nueva pestaña **Sist. Fútbol 11**, después de Fútbol 7: **8 sistemas con 10 sesiones cada uno (80 sesiones de 90 minutos)**
- Cada sistema trae su ficha (estructura, fortalezas, riesgos, principios ofensivos y defensivos, consignas) y su **colocación en pizarra**
- Cada sesión incluye objetivo, organización, desarrollo, consignas y correcciones, progresión, indicador de éxito y el horario de 90 min en 6 bloques
- **Todo editable**: cambia cualquier sesión (se guarda tu copia y puedes **restaurar el original**), añade sesiones nuevas, **dibuja un esquema o usa una pizarra**, envíalas por **WhatsApp** o descárgalas en **PDF**
- Panel de **metodología** con las categorías (Infantiles, Cadetes, Juveniles), los principios comunes, una ficha de evaluación y preguntas de cierre
- Basado en un manual táctico de Fútbol 11 aportado por el club
- Las sesiones de Fútbol 7 y de Fútbol 11 se guardan en el dispositivo y entran en la **copia de seguridad**

### 🎮 Los juegos pasan a la Biblioteca
- La antigua pestaña **Juegos** desaparece del menú: ahora son ejercicios de la categoría **Juego dinámico** (con dibujo, edición, buscador y exportar/importar)
- Los juegos propios que tenías se **copian solos** a la Biblioteca la primera vez que la abres

### 📝 Convocatoria con observaciones
- Debajo de los no convocados hay un cuadro de **Observaciones** por partido
- Si tiene texto, sale en el mensaje de WhatsApp de la convocatoria; si está vacío, no sale nada

### 📱 PDF e imagen en tablets
- En la versión web para tablet, al generar el PDF o la imagen de la hoja de partido sale una pantalla **«Archivo listo»** con **Compartir, Descargar y Abrir**, para no depender del menú de compartir del sistema, que en algunas tablets se quedaba cargando
- En móviles y en la app Android no cambia nada

### 🖊️ Más pizarras del club
- `pizarras.json` ya tiene **70 pizarras**, incluidas la **colocación de los 8 sistemas de Fútbol 11** y de los **4 de Fútbol 7**

---

## 🆕 Novedades v1.3

### 🖊️ Pizarra táctica renovada
- **Cuatro formatos de campo:** campo completo, medio campo, área/portería y espacio libre
- **Herramientas:** lápiz, pases (flecha continua), carreras (flecha discontinua), **pases y carreras curvos**, jugadores numerados por color, conos, balones, porterías, chinos, escaleras, vallas, palos, **aros** y texto
- **Zonas de trabajo:** rectangular, **cuadrada** y **circular**
- **Mover**, **deshacer** y **borrar** figura a figura
- **Nombre editable** de cada pizarra, que se mantiene al exportar y al importar
- **Guardar** pizarras en el dispositivo; las miniaturas de la lista tienen todas el mismo tamaño
- **Compartir:** enviar como imagen por WhatsApp, descargar en **PDF**, **SVG** o **JSON**
- **Importar** pizarras desde archivos JSON y **exportar todas** de una vez. Al importar solo se añaden las **nuevas**: las que ya tienes (mismo nombre o mismo dibujo) se omiten y la app avisa de cuántas eran nuevas y cuántas ya existían
- Los trazos a lápiz se **simplifican al guardar** (sin perder aspecto), así los archivos pesan menos

### 🎨 Usar una pizarra en un ejercicio
- Al crear o editar un ejercicio, el botón **«🎨 Usar una pizarra»** abre un selector con miniaturas de tus pizarras guardadas y buscador por nombre
- Disponible en **Mis Sesiones**, en las **sesiones**, en el esquema de **Fútbol 7** y en la **Biblioteca**
- El dibujo **se copia** al ejercicio: después puedes editarlo sin cambiar la pizarra original
- En la Biblioteca, al editar un ejercicio con imagen aparece **«🗑 Quitar imagen»**

### 📚 Biblioteca: orden y búsqueda
- **Selector de orden:** por categoría y número (por defecto), solo por número, o por orden de añadido; la app recuerda tu elección
- **Buscador** por nombre, código (por ejemplo `tec-037`), descripción, material o regla de provocación; no distingue mayúsculas ni acentos y admite varias palabras
- En las sesiones, el dibujo del ejercicio tiene un tamaño máximo para que no se vea enorme en pantallas anchas

### 🌐 Pizarras del club (`pizarras.json`)
- Al abrir la app con internet, descarga `pizarras.json` y **añade las pizarras que falten**
- Nunca borra ni pisa las tuyas; si borras o renombras una pizarra del club, **no vuelve a aparecer**
- Cada pizarra se identifica por su **nombre**: usa nombres únicos (`Pizarra-33`, `Rondo 4x2`…). Una pizarra ya descargada no se actualiza aunque cambies su dibujo; publícala con otro nombre

### 💾 Copias de seguridad
- **Guardar copia / Restaurar copia** de todos los datos (club, jugadores, sesiones, partidos, biblioteca, pizarras…) en un único archivo JSON

---

## 🆕 Novedades v1.2

### 📚 Biblioteca del club con carga automática
- **Biblioteca compartida** en 7 categorías: Calentamiento, Físico, Técnica, Táctica, Juego dinámico, Portero y Otro
- Al abrir la app con internet, descarga `ejercicios.json` (y, si existen, `ejercicios-2.json`, `ejercicios-3.json`…, en orden, hasta el primero que falte) y **añade los ejercicios que falten**
- Respeta lo del entrenador: no pisa los ejercicios creados por él, ni los que haya editado, y **no vuelve a mostrar** los que haya borrado
- Sin conexión sigue funcionando con lo ya guardado en el dispositivo
- Los ejercicios importados incluyen objetivo, pasos, variantes, precauciones, edades y duración dentro de la descripción
- Botones **Importar JSON** y **Exportar JSON** en la Biblioteca (importar solo para el manager)

### ✏️ Cómo corregir un ejercicio del club
Edita el ejercicio en `ejercicios.json` y súbele el número `"rev"` (1, 2, 3…). Los dispositivos lo actualizan **si el entrenador no lo había editado**.

Si el cambio es de **imagen o dibujo** y quieres que se aplique también a quien lo tenga editado, añade además `"forzar": true`. Con `forzar`, el ejercicio se sustituye **por completo** (imagen y dibujo incluidos: si el nuevo no lleva imagen, se quita la antigua). Cada cambio posterior necesita un `rev` mayor que el anterior.

---

## 🔄 Cómo publicar novedades del club (mantenedor)

1. Crea o retoca los ejercicios y las pizarras en la app
2. Exporta: **Biblioteca → 📤 Exportar JSON** y **Pizarra → 📤 Exportar todas**
3. Prepara los archivos:
   - `ejercicios.json`: la biblioteca completa, **sin** la marca `"editado"`; pon `"rev"` (y `"forzar"` si procede) a lo que hayas cambiado; reduce las imágenes pesadas
   - `pizarras.json`: todas las pizarras que quieras compartir, con **nombres únicos**
4. Súbelos a este repositorio, junto al `index.html`, **con esos nombres exactos**
5. En uno o dos minutos GitHub Pages los publica y las apps los reciben al abrirse con internet

> Los ids de ejercicio siguen el patrón `cal-`, `fis-`, `tec-`, `tac-`, `jue-`, `por-`, `otr-` + número. Si un mismo id aparece en varios archivos, se aplica el primero que se lee.

---

## 🆕 Novedades v1.1

### 👥 Plantilla de jugadores flexible
- **➕ Añadir jugadores** sin límite fijo — la plantilla crece según las necesidades del equipo
- **🗑️ Eliminar jugadores** con confirmación previa
- **✅ Alta / ❌ Baja** — toggle por jugador; los de baja aparecen en gris y quedan excluidos automáticamente de asistencia y convocatorias
- Contador en tiempo real: total de jugadores y activos

### 🗓️ Inicio real de temporada
- Configura el **primer lunes de entrenamiento** en la sección Club
- El calendario **asigna fechas reales automáticamente** a cada sesión según los días configurados
- Las fechas editadas manualmente se respetan siempre

### 🚫 Sistema de festivos
- Añade días sin entrenamiento (festivos, vacaciones, lluvia…)
- El calendario **salta esos días automáticamente** al calcular fechas
- Gestión visual con etiquetas eliminables

---

## 🔍 Comprobar el espacio usado (mantenimiento)

**Esta app (versión local, IndexedDB):** en **Biblioteca** aparece el medidor «Espacio usado», que usa la cuota real del navegador. Si quieres verlo en la consola:

1. Abre la app en el navegador y pulsa **F12** → pestaña **Consola**.
2. Si Chrome bloquea el pegado, escribe `allow pasting` y pulsa Enter.
3. Pega y pulsa Enter:

```js
navigator.storage.estimate().then(e => console.log((e.usage/1e6).toFixed(1) + ' MB de ' + (e.quota/1e9).toFixed(1) + ' GB'))
```

**Versión Firebase (`mp-coach`)**, que guarda una copia local en `localStorage` (límite de unos 5.000.000 de caracteres):

```js
JSON.stringify(Object.assign({}, localStorage)).length
```

Para ver qué claves pesan más:

```js
console.table(Object.keys(localStorage).map(k => ({clave: k, caracteres: localStorage.getItem(k).length})).sort((a,b) => b.caracteres - a.caracteres))
```

- Medida de referencia (3-nov-2026): **1.988.161** caracteres, el 40 % del límite. Lo que más ocupa es la copia local de Firebase (`ext_espejo` y `ext_espejo_prev`, unos 1,5 millones entre las dos).
- Si el número pasa de **4.000.000**, mover esa copia a IndexedDB.
- Las fotos en los ejercicios son lo único que puede llenar el espacio de golpe. Los dibujos y pizarras casi no pesan (unos 1.000 a 2.000 caracteres cada uno).

---

## 🛠️ Tecnologías

- HTML5 / CSS3 / JavaScript puro — sin frameworks
- localStorage — almacenamiento local en el dispositivo
- Service worker — la app se instala y abre sin conexión
- Capacitor — empaquetado como app Android nativa
- 100% offline — no requiere internet ni servidor (internet solo para recibir novedades del club)

---

## 🚀 Cómo usar

### Opción 1 — Navegador (más fácil)

```bash
git clone https://github.com/entrenadormanuel68-png/Entrenamiento-local.git
```

Abre `index.html` directamente en Chrome, Firefox o Edge. ¡Listo!

### Opción 2 — App Android (con Capacitor)

```bash
# Instala dependencias
npm install

# Copia TODOS los archivos de la app a www (webDir de Capacitor),
# comprueba que son idénticos a la raíz y sincroniza con Android
npm run apk

# Abre en Android Studio
npx cap open android
```

> **Probar sin pisar la app instalada:** añade `appIdSuffix=.beta` en `android/gradle.properties` (sin hacer commit) para que se instale como `com.mpcoach.local.beta`, y quítalo antes de compilar la definitiva. Para iniciar sesión con Google dentro del APK hace falta un cliente OAuth de tipo **Android** (nombre de paquete + huella SHA-1 de la clave de firma) en el mismo proyecto de Google Cloud que el cliente web.

> Requiere Android Studio instalado y configurado. Antes de generar una APK que vaya a **actualizar** otra, sube el `versionCode` en `android/app/build.gradle` y fírmala con la misma clave. La APK de debug se genera en `android/app/build/outputs/apk/debug/`.

---

## 🗺️ Roadmap — Ideas para próximas versiones

### 📚 Biblioteca de ejercicios
- [x] Biblioteca del club con actualización automática (v1.2)
- [x] Ejercicios con dibujo propio o tomado de una pizarra (v1.3)
- [x] Juegos integrados en la Biblioteca como «Juego dinámico» (v1.4)
- [ ] Ampliar con más ejercicios técnicos (conducción, pase, tiro, regate)
- [ ] Añadir ejercicios tácticos por categoría (presión, salida de balón, ataque posicional)
- [ ] Filtros por dificultad, número de jugadores y material
- [ ] Exportar un ejercicio suelto a PDF

### 📋 Sesiones de entrenamiento
- [x] Sesiones propias con ejercicios de la biblioteca (v1.3)
- [x] Sistemas de Fútbol 7 y Fútbol 11 con sesiones editables (v1.4)
- [x] Sistemas de Fútbol 8 y fichas tácticas en Fútbol 7 (v1.5)
- [ ] Guardar las sesiones de sistemas en la nube (versión Firebase)
- [ ] Más plantillas predefinidas (por semana de temporada, por rival, por fase)
- [ ] Constructor de sesión arrastrando ejercicios
- [ ] Temporizador integrado por bloque de sesión
- [ ] Exportar sesión a PDF o imagen
- [ ] Duplicar/clonar sesiones existentes

### 🖊️ Pizarra táctica
- [x] Dibujar líneas, flechas (rectas y curvas) y zonas (rectangular, cuadrada y circular)
- [x] Guardar y cargar pizarras; exportar como imagen, PDF, SVG o JSON
- [x] Pizarras compartidas del club (`pizarras.json`)
- [ ] Animación de movimientos (modo presentación)
- [ ] Giro y escalado de figuras (escaleras, vallas, porterías)
- [ ] Capas o varios pasos en una misma pizarra

### 📊 Estadísticas y análisis
- [ ] Gráficos de progreso de jugadores a lo largo de la temporada
- [ ] Evolución de resultados (racha de partidos)
- [ ] Comparativa entre jugadores

### 🔒 Seguridad
- [ ] Cifrado de los datos locales (hoy el bloqueo es básico: no cifra)
- [x] Contraseña de bloqueo opcional con bloqueo automático (v1.6)

### 🌟 Mejoras generales
- [x] Sincronización opcional entre dispositivos con Google Drive (v1.6)
- [ ] Renovación silenciosa del permiso de Google en el APK
- [x] Backup y restore de todos los datos en JSON (v1.3)
- [x] Instalable como app (PWA) y como APK Android
- [x] Compartir por WhatsApp (pizarras, hoja de partido, valoración)
- [ ] Modo oscuro
- [ ] Soporte multiidioma (inglés, portugués, francés)
- [ ] Versión PWA instalable en iOS

¿Tienes otra idea? ¡Abre un Issue o una Discussion! Las nuevas funciones las desarrolla el autor.

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Lee [`CONTRIBUTING.md`](CONTRIBUTING.md) para empezar. El código lo mantiene solo el autor; tú puedes aportar ejercicios, pizarras e ideas. Hay plantillas para **proponer un ejercicio**, **compartir una pizarra**, **sugerir una mejora** o **reportar un error**.
Si es tu primera vez en open source, busca los issues con la etiqueta `good first issue`.

---

## 💬 Comunidad

Usa la pestaña **Discussions** para proponer ideas, preguntar o presentarte.

---

## 📄 Licencia

MIT — úsala, modifícala y compártela libremente. Ver `LICENSE`.

---

Hecho con ❤️ para entrenadores de fútbol base
