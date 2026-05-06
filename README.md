⚽ Entrenamiento Total – Local
🌐 **Prueba la app en directo:** https://entrenadormanuel68-png.github.io/Entrenamiento-local/

---
> Aplicación web de gestión de equipos de fútbol. Funciona **100% offline** sin necesidad de servidor. Todo se guarda en el dispositivo. Empaquetable como app Android con Capacitor.
![Estado](https://img.shields.io/badge/estado-activo-brightgreen)
![Versión](https://img.shields.io/badge/versión-1.0-blue)
![Contribuciones](https://img.shields.io/badge/contribuciones-bienvenidas-orange)
![Sin dependencias](https://img.shields.io/badge/dependencias-ninguna-success)
![Licencia](https://img.shields.io/badge/licencia-MIT-purple)
---
📋 ¿Qué es esta app?
Entrenamiento Total es una herramienta completa para entrenadores de fútbol base (Fútbol 7, 8 y 11). Permite gestionar el club, los jugadores, el calendario de entrenamientos, los partidos, la asistencia y mucho más desde cualquier dispositivo, sin necesidad de conexión a internet.
Está construida en un único archivo HTML con JavaScript vanilla. Sin frameworks, sin base de datos externa, sin pagos. Solo abre el archivo y funciona.
---
✨ Funcionalidades actuales
Sección	Descripción
📊 Resumen	Dashboard con estadísticas, progreso por fase, top jugadores y goleadores
⚽ Club	Datos del club, plantilla de 15 jugadores, sistemas de juego (F7/F8/F11), estructura semanal
📅 Calendario	Planificación de sesiones adaptada a 2-5 días de entrenamiento semanales
🏆 Partidos	Registro de resultados, goles por jugador, rivales
📋 Sesiones	Plantillas de sesiones de entrenamiento por fases (carga, descanso, pretemporada)
✅ Asistencia	Control de presencia por jugador y sesión
🎮 Juegos	Ejercicios y juegos de entrenamiento
👥 Jugadores	Ficha de cada jugador con valoración, minutos y cuartos jugados
📚 Biblioteca	Base de ejercicios técnicos y tácticos
🖊️ Pizarra	Pizarra táctica interactiva con campo de fútbol
Roles de acceso:
🛡️ Manager — Control total de la app, puede cambiar contraseñas
📋 Entrenador — Acceso limitado a las funciones de uso diario
---
🛠️ Tecnologías
HTML5 / CSS3 / JavaScript puro — sin frameworks
localStorage — almacenamiento local en el dispositivo
Capacitor — empaquetado como app Android nativa
100% offline — no requiere internet ni servidor
---
🚀 Cómo usar
Opción 1 — Navegador (más fácil)
Descarga o clona el repositorio:
```bash
   git clone https://github.com/entrenadormanuel68-png/Entrenamiento-local.git
   ```
Abre `index.html` directamente en Chrome, Firefox o Edge
¡Listo! No necesitas instalar nada más
Opción 2 — App Android (con Capacitor)
```bash
# Instala dependencias
npm install

# Sincroniza con Android
npx cap sync android

# Abre en Android Studio
npx cap open android
```
> Requiere Android Studio instalado y configurado.
---
🗺️ Roadmap — Áreas donde puedes contribuir
Aquí es donde necesitamos a la comunidad. Estas son las mejoras prioritarias:
📚 Biblioteca de ejercicios
[ ] Ampliar la biblioteca con más ejercicios técnicos (conducción, pase, tiro, regate)
[ ] Añadir ejercicios tácticos por categoría (presión, salida de balón, ataque posicional)
[ ] Incluir ejercicios con imágenes o diagramas en SVG
[ ] Filtros por categoría, dificultad, número de jugadores y material necesario
[ ] Exportar ejercicio a PDF o imagen para compartir
📋 Sesiones de entrenamiento
[ ] Más plantillas de sesiones predefinidas (por semana de temporada, por rival, por fase)
[ ] Constructor de sesión personalizable (arrastrar/soltar ejercicios)
[ ] Temporizador integrado por bloque de sesión
[ ] Exportar sesión a PDF o imagen para compartir con el equipo
[ ] Duplicar/clonar sesiones existentes
🖊️ Pizarra táctica
[ ] Añadir jugadores arrastrables sobre el campo
[ ] Dibujar líneas, flechas y zonas de presión
[ ] Guardar y cargar pizarras guardadas
[ ] Animación de movimientos (modo presentación)
[ ] Exportar pizarra como imagen
📊 Estadísticas y análisis
[ ] Gráficos de progreso de jugadores a lo largo de la temporada
[ ] Evolución de resultados (racha de partidos)
[ ] Estadísticas de asistencia por jugador
[ ] Comparativa entre jugadores
🔒 Seguridad
[ ] Cifrado de las contraseñas almacenadas en localStorage (actualmente en texto plano)
[ ] Opción de exportar/importar datos del equipo de forma segura
[ ] PIN de bloqueo con timeout automático
🌟 Mejoras generales
[ ] Modo oscuro
[ ] Soporte multiidioma (inglés, portugués, francés)
[ ] Versión PWA instalable en iOS
[ ] Backup y restore de todos los datos en JSON
[ ] Integración con WhatsApp para compartir convocatorias
[ ] Plantilla de hasta 20 jugadores (actualmente fija en 15)
¿Tienes otra idea? ¡Abre un Issue o una Discussion!
---
🤝 Contribuir
Las contribuciones son bienvenidas. Lee CONTRIBUTING.md para empezar.
Si es tu primera vez en open source, busca los issues con la etiqueta `good first issue`.
---
💬 Comunidad
Usa la pestaña Discussions para proponer ideas, preguntar o presentarte.
---
📄 Licencia
MIT — úsala, modifícala y compártela libremente. Ver LICENSE.
---
Hecho con ❤️ para entrenadores de fútbol base
