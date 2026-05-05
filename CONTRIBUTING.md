🤝 Cómo contribuir a Entrenamiento Total
¡Gracias por tu interés en mejorar esta app! Este documento explica cómo participar, tanto si eres programador como si eres entrenador con ideas.
---
🧭 Antes de empezar
Lee el README.md para entender qué hace la app y el Roadmap para ver qué mejoras están planificadas. Así evitas trabajar en algo que ya está en marcha.
---
💡 Tengo una idea pero no sé programar
¡Perfecto! Las ideas son tan valiosas como el código.
Ve a la pestaña Issues
Haz clic en New Issue
Elige la plantilla "Propuesta de mejora"
Describe tu idea con el máximo detalle posible:
¿Qué problema resuelve?
¿Cómo imaginas que funcionaría?
¿En qué sección de la app encajaría?
También puedes abrir una Discussion para debatir ideas más abiertas antes de formalizarlas como Issue.
---
🐛 Encontré un error
Ve a Issues y busca si ya está reportado
Si no existe, abre uno nuevo con la plantilla "Bug report"
Incluye:
Qué paso a paso hiciste
Qué resultado esperabas
Qué resultado obtuviste
Navegador y sistema operativo
---
💻 Quiero contribuir con código
1. Haz un fork del repositorio
```bash
# Haz clic en "Fork" en la parte superior derecha de GitHub
# Luego clona tu fork:
git clone https://github.com/TU-USUARIO/Entrenamiento-local.git
cd Entrenamiento-local
```
2. Crea una rama para tu cambio
Usa nombres descriptivos:
```bash
git checkout -b feature/ejercicios-conduccion
# o para bugs:
git checkout -b fix/error-asistencia
```
3. Haz tus cambios
La app es un único archivo `index.html`. Está organizado en secciones claramente marcadas con comentarios:
```
// ═══════════════════════════════════════════
// SECCIÓN: BIBLIOTECA
// ═══════════════════════════════════════════
```
Busca el bloque correspondiente a la sección que quieres modificar.
Convenciones:
Usa español en los textos visibles de la app
Mantén el mismo estilo CSS (variables y clases existentes)
No añadas dependencias externas — la app debe seguir siendo un único archivo sin internet
Prueba en Chrome y en Firefox antes de enviar
4. Sube tu rama y abre un Pull Request
```bash
git add .
git commit -m "feat: añadir ejercicios de conducción a la biblioteca"
git push origin feature/ejercicios-conduccion
```
Luego ve a tu fork en GitHub y haz clic en "Compare & pull request".
En la descripción del PR incluye:
Qué cambiaste y por qué
Capturas de pantalla si tocaste la interfaz
El número del Issue relacionado (ej: `Cierra #12`)
---
📚 Cómo añadir ejercicios a la Biblioteca
Esta es una de las contribuciones más valiosas y accesibles. Los ejercicios están definidos como objetos JavaScript dentro de `index.html`.
Busca el bloque:
```javascript
// ═══════ BIBLIOTECA DE EJERCICIOS ═══════
```
Cada ejercicio tiene esta estructura:
```javascript
{
  nombre: "Rondo 4v2",
  categoria: "Posesion",        // Tecnica | Tactica | Fisico | Posesion | Porteros
  descripcion: "Cuatro jugadores en círculo mantienen la posesión contra dos defensores centrales.",
  jugadores: "6-10",
  duracion: "10-15 min",
  material: "Petos, conos",
  nivel: "Medio",               // Basico | Medio | Avanzado
  fase: "Principal"             // Calentamiento | Principal | Vuelta a la calma
}
```
Añade el tuyo siguiendo el mismo formato y abre un Pull Request.
---
🖊️ Cómo mejorar la Pizarra
El campo de fútbol de la pizarra está en el bloque:
```javascript
// ═══════ PIZARRA TÁCTICA ═══════
```
Se dibuja con SVG dentro de un `div.campo-wrap`. Las posiciones de los jugadores son `div.campo-pos` posicionados en porcentaje. Si quieres añadir funcionalidades (dibujar líneas, animaciones) trabaja sobre este bloque y comenta bien tu código.
---
✅ Checklist antes de enviar un Pull Request
[ ] Probé los cambios en Chrome
[ ] Probé los cambios en Firefox (o en móvil)
[ ] No añadí dependencias externas
[ ] El archivo sigue siendo un único `index.html` funcional
[ ] Los textos visibles están en español
[ ] Incluí una descripción clara en el PR
---
🏷️ Etiquetas de Issues
Etiqueta	Significado
`good first issue`	Ideal para primeras contribuciones
`enhancement`	Nueva funcionalidad o mejora
`bug`	Algo que no funciona como debería
`biblioteca`	Añadir ejercicios a la biblioteca
`pizarra`	Mejoras en la pizarra táctica
`sesiones`	Nuevas plantillas de sesiones
`seguridad`	Mejoras de seguridad
`ui/ux`	Cambios en la interfaz
`discussion`	Idea abierta a debate
---
🙏 Código de conducta
Sé respetuoso y constructivo. Este proyecto lo usa gente que dedica su tiempo libre al fútbol base. Toda contribución, grande o pequeña, es bienvenida.
---
¿Dudas? Abre una Discussion y te respondemos
