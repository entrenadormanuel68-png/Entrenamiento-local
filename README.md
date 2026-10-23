# ⚽ Entrenamiento Total – Local

🌐 **Prueba la app en directo:** https://entrenadormanuel68-png.github.io/Entrenamiento-local/

---

> Aplicación web de gestión de equipos de fútbol base. Funciona **100% offline** sin necesidad de servidor. Todo se guarda en el dispositivo. Con internet, descarga además las novedades de la **biblioteca** y de las **pizarras** del club. Empaquetable como app Android con Capacitor.

![Estado](https://img.shields.io/badge/estado-activo-brightgreen)
![Versión](https://img.shields.io/badge/versión-1.3-blue)
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
| 🏆 Partidos | Resultados, goles por jugador, alineación por cuartos, **hoja de partido** (imagen, PDF y WhatsApp) y **valoración** del partido |
| 📋 Sesiones | Plantillas de sesiones por fases (carga, descanso, pretemporada); cada ejercicio admite dibujo o pizarra |
| 📝 Mis Sesiones | Sesiones propias: eliges ejercicios de la biblioteca o de tus pizarras y los editas sin tocar el original |
| 📐 Sist. Fútbol 7 | Sesiones y esquemas para el sistema de juego de Fútbol 7 |
| ✅ Asistencia | Control de presencia por jugador y sesión (solo jugadores activos) |
| 🎮 Juegos | Ejercicios y juegos de entrenamiento |
| 👥 Jugadores | Ficha de cada jugador con valoración, minutos y cuartos jugados |
| 📚 Biblioteca | **286 ejercicios del club** en 7 categorías (se actualiza sola al abrir la app con internet), más los ejercicios propios de cada entrenador |
| 🖊️ Pizarra | Pizarra táctica vectorial: dibujo, figuras, guardado y envío (ver abajo) |

**Roles de acceso:**
- 🛡️ **Manager** — Control total de la app, puede cambiar contraseñas e importar ejercicios
- 📋 **Entrenador** — Acceso limitado a las funciones de uso diario

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
- **Importar** pizarras desde archivos JSON y **exportar todas** de una vez
- Los trazos a lápiz se **simplifican al guardar** (sin perder aspecto), así los archivos pesan menos

### 🎨 Usar una pizarra en un ejercicio
- Al crear o editar un ejercicio, el botón **«🎨 Usar una pizarra»** abre un selector con miniaturas de tus pizarras guardadas y buscador por nombre
- Disponible en **Mis Sesiones**, en las **sesiones**, en el esquema de **Fútbol 7** y en la **Biblioteca**
- El dibujo **se copia** al ejercicio: después puedes editarlo sin cambiar la pizarra original
- En la Biblioteca, al editar un ejercicio con imagen aparece **«🗑 Quitar imagen»**

### 🌐 Pizarras del club (`pizarras.json`)
- Al abrir la app con internet, descarga `pizarras.json` y **añade las pizarras que falten**
- Nunca borra ni pisa las tuyas; si borras o renombras una pizarra del club, **no vuelve a aparecer**
- Cada pizarra se identifica por su **nombre**: usa nombres únicos (`Pizarra-11`, `Rondo 4x2`…). Una pizarra ya descargada no se actualiza aunque cambies su dibujo; publícala con otro nombre

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

# Copia index.html a la carpeta www (webDir de Capacitor)
# y sincroniza con Android
npx cap sync android

# Abre en Android Studio
npx cap open android
```

> Requiere Android Studio instalado y configurado. Antes de generar una APK que vaya a **actualizar** otra, sube el `versionCode` en `android/app/build.gradle` y fírmala con la misma clave. La APK de debug se genera en `android/app/build/outputs/apk/debug/`.

---

## 🗺️ Roadmap — Áreas donde puedes contribuir

### 📚 Biblioteca de ejercicios
- [x] Biblioteca del club con actualización automática (v1.2)
- [x] Ejercicios con dibujo propio o tomado de una pizarra (v1.3)
- [ ] Ampliar con más ejercicios técnicos (conducción, pase, tiro, regate)
- [ ] Añadir ejercicios tácticos por categoría (presión, salida de balón, ataque posicional)
- [ ] Filtros por dificultad, número de jugadores y material
- [ ] Exportar un ejercicio suelto a PDF

### 📋 Sesiones de entrenamiento
- [x] Sesiones propias con ejercicios de la biblioteca (v1.3)
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
- [ ] Cifrado de contraseñas en localStorage
- [ ] PIN de bloqueo con timeout automático

### 🌟 Mejoras generales
- [x] Backup y restore de todos los datos en JSON (v1.3)
- [x] Instalable como app (PWA) y como APK Android
- [x] Compartir por WhatsApp (pizarras, hoja de partido, valoración)
- [ ] Modo oscuro
- [ ] Soporte multiidioma (inglés, portugués, francés)
- [ ] Versión PWA instalable en iOS

¿Tienes otra idea? ¡Abre un Issue o una Discussion!

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Lee [`CONTRIBUTING.md`](CONTRIBUTING.md) para empezar. Hay plantillas para **proponer un ejercicio**, **compartir una pizarra**, **sugerir una mejora** o **reportar un error**.
Si es tu primera vez en open source, busca los issues con la etiqueta `good first issue`.

---

## 💬 Comunidad

Usa la pestaña **Discussions** para proponer ideas, preguntar o presentarte.

---

## 📄 Licencia

MIT — úsala, modifícala y compártela libremente. Ver `LICENSE`.

---

Hecho con ❤️ para entrenadores de fútbol base
