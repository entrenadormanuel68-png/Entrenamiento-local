# 🤝 Cómo contribuir a Entrenamiento Total

¡Gracias por querer ayudar! Puedes aportar **ejercicios**, **pizarras**, **ideas** o **correcciones**, aunque no sepas programar.

---

## 💡 Formas de contribuir

| Quiero… | Qué hacer |
|---|---|
| Proponer un ejercicio | Abre un Issue con la plantilla **Ejercicio** |
| Compartir una pizarra | Abre un Issue y adjunta el JSON exportado de la pizarra |
| Sugerir una mejora | Abre un Issue con la plantilla **Propuesta** |
| Avisar de un error | Abre un Issue con la plantilla **Bug** |
| Preguntar o hablar de ideas | Pestaña **Discussions** |
| Añadir ejercicios o pizarras en el propio archivo JSON | Pull Request solo de datos (ver abajo) |

---

## 📚 Aportar ejercicios a la biblioteca del club

### La forma más fácil (sin tocar código)
1. En la app, ve a **Biblioteca → ➕ Nuevo ejercicio** y créalo (con imagen o con dibujo de pizarra)
2. Pulsa **📤 Exportar JSON**
3. Abre un Issue con la plantilla **Ejercicio** y adjunta el archivo

### Formato de un ejercicio (`ejercicios.json`)

```json
{
  "id": "tec-037",
  "nombre": "Rondo 4x2 con dos toques",
  "categoria": "Técnica",
  "descripcion": "Objetivo: ... Pasos: ... Variantes: ... Precauciones: ... Edades: 8-12 · Duración: 10 min",
  "material": "Conos, petos, 1 balón",
  "jugadores": "6",
  "rev": 1
}
```

- **Categorías válidas:** `Calentamiento`, `Físico`, `Técnica`, `Táctica`, `Juego dinámico`, `Portero`, `Otro`
- **Id:** prefijo de la categoría (`cal-`, `fis-`, `tec-`, `tac-`, `jue-`, `por-`, `otr-`) + número libre y **único** en toda la biblioteca
- **Imagen:** si llevas una, que sea ligera (menos de ~100 KB). El dibujo de pizarra pesa mucho menos y es lo preferible
- **No incluyas** la marca `"editado"`: es solo de uso interno de cada dispositivo

### Corregir un ejercicio existente
Sube el número `"rev"` (1 → 2 → 3…). Se actualiza en los dispositivos donde nadie lo haya editado. Para que se aplique también a quien lo editó (por ejemplo, un cambio de dibujo), añade `"forzar": true`: sustituye el ejercicio entero, imagen y dibujo incluidos.

### Si hay muchos ejercicios
La app lee `ejercicios.json`, `ejercicios-2.json`, `ejercicios-3.json`… en orden y se detiene en el primero que falte. Mantén la numeración sin saltos.

---

## 🖊️ Aportar pizarras (`pizarras.json`)

1. En la app, ve a **Pizarra**, dibuja y **💾 guarda** con un nombre claro y **único**
2. **📤 Exportar** (una pizarra, JSON) o **Exportar todas**
3. Adjúntalo en un Issue o en un Pull Request

Formato del archivo: `{"app":..., "tipo":"pizarras", "v":1, "pizarras":[{"nombre":..., "fecha":..., "dibujo":{"f":..., "s":[...]}}]}`

Reglas importantes:
- Las pizarras se identifican por **nombre**. Una pizarra con el mismo nombre que otra ya publicada **no la sustituye**: usa otro nombre
- Las que alguien ya borró o renombró no vuelven a aparecer
- Procura no pasar de unas pocas decenas de figuras por pizarra

---

## 🔧 Sobre el código

El código de la app (`index.html`) lo mantiene **solo el autor del proyecto**. No se aceptan Pull Requests que cambien el código.

Si ves algo que mejorar o que falla, no hace falta que lo programes: cuéntalo con un Issue (**Propuesta** o **Bug**) y se valorará para una próxima versión.

Los Pull Requests solo se aceptan para **datos del club**: ejercicios (`ejercicios.json`) y pizarras (`pizarras.json`), siguiendo los formatos de arriba. El mantenedor los revisa antes de publicarlos.

---

## 🐛 Reportar un error

Incluye: qué hacías, qué esperabas, qué ocurrió, dispositivo y navegador (o "APK Android"), y una captura si puedes.

---

## 📜 Normas

Al participar aceptas el [Código de Conducta](CODE_OF_CONDUCT.md). Todo lo que aportes se publica bajo licencia [MIT](LICENSE).

¡Gracias por ayudar a que más entrenadores de base tengan buenas herramientas! ⚽
