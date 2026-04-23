# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a:** James
**Fecha:** 23/04/2026

---

> **Instrucciones:** Documentar los 2 prompts más importantes que usaste durante el examen.
> Completar **todas** las secciones con criterio propio. No se trata de copiar lo que generó la IA — se evalúa tu capacidad de analizar, detectar errores y tomar decisiones técnicas fundamentadas.
>
> **Mínimo por sección de análisis: 3 oraciones.** Respuestas de una línea no se consideran válidas.

---

## Prompt 1

### Momento del proceso

Cuando estaba corrigiendo los errores estructurales del HTML. Había múltiples `<div>` usados incorrectamente donde debían ir etiquetas semánticas como `<section>`, `<h2>` y `<p>`. También necesitaba reparar los problemas de accesibilidad en los labels del formulario.

### Lo que le pedí a la IA

```
"El HTML tiene varios errores que debo corregir:
1. Hay comentarios que dicen '<!-- Error: div en lugar de section -->' 
   — necesito reemplazar esos divs por etiquetas semánticas correctas (section, h2, p)
2. Las imágenes tienen comentarios como '<!-- Error: img de icono sin alt -->' 
   — todas ya tienen alt en el HTML que me pasaste, así que esos comentarios están obsoletos
3. Los labels del formulario tienen el atributo 'for' apuntando al ID incorrecto

¿Puedes identificar exactamente dónde están estos errores y darme el código corregido?"
```

### Análisis del resultado obtenido

La IA identificó correctamente los 3 puntos problemáticos y proporcionó el HTML corregido. El enfoque fue sistemático: primero listó cada error, luego mostró el fragmento de código antes y después. Sin embargo, inicialmente la IA no notó que algunos comentarios de error ya estaban obsoletos (porque ya habían sido corregidos en iteraciones anteriores), así que debí aplicar criterio para saber cuáles cambios eran realmente necesarios y cuáles no. En particular, los `alt` de las imágenes ya estaban correctos, así que eliminé esos comentarios sin realizar cambios de código. Los cambios más importantes fueron: cambiar `<div class="challenge-section">` a `<section>`, reemplazar los `<div>` que hacían de título y párrafo por `<h2>` y `<p>`, y corregir los `for=""` duplicados en los labels del formulario a `for="challenger-class"` y `for="challenger-level"`.

### Correcciones manuales que realicé

Debí revisar manualmente el HTML completo contra los comentarios de error, porque algunos ya estaban resueltos. La IA me dio la solución general, pero yo fui quién filtró qué cambios realmente faltaban y cuáles ya estaban hechos. Esto fue importante para no introducir cambios redundantes que podían causar inconsistencias en el documento.

---

## Prompt 2

### Momento del proceso

Cuando necesitaba completar el `script.js` con todas las funciones y variables requeridas por la consigna. El script original solo manejaba el evento submit del formulario, pero le faltaban las 4 funciones obligatorias (`calculateDamage`, `isAlive`, `canCastSpell`, `getPresentation`), las variables de stats del personaje, y las llamadas con `console.log()` para verificar que todo funciona.

### Lo que le pedí a la IA

```
"Necesito implementar un script.js con:

**Variables:**
const name = 'Zara Darkbane'
const characterClass = 'Hechicera'  
const level = 7
const health = 80
const mana = 120
const attack = 45
const defense = 30

**Funciones que debo crear:**
1. calculateDamage(attack, defense) → function declarada
   - Retorna attack - defense
   - Si el resultado es negativo, retorna 0

2. isAlive(health) → arrow function
   - Retorna true si health > 0, false si <= 0

3. canCastSpell(currentMana, spellCost, isStunned) → arrow function
   - Retorna true si currentMana >= spellCost AND !isStunned

4. getPresentation(name, characterClass, level) → function declarada
   - Retorna string: 'Zara Darkbane — Hechicera (Nivel 7)'
   - Formato exacto: 'Nombre — Clase (Nivel N)'

**Luego:**
- Llamar a cada función con ejemplos y mostrar los resultados con console.log()
- Mantener el código que maneja el formulario que ya tenía

¿Puedes generar esto?"
```

### Análisis del resultado obtenido

La IA comprendió correctamente la diferencia entre `function` declaradas y `arrow function`, implementó la lógica correcta en cada una (especialmente la lógica ternaria en `calculateDamage` y la negación en `canCastSpell`), y generó ejemplos de `console.log()` que demuestran cada función. El código estaba bien formateado y usaba nombres descriptivos. Sin embargo, hubo un pequeño detalle: la IA generó console.log() con ejemplos de valores "hardcodeados" para testar canCastSpell (como defensa enemiga = 20), lo cual es correcto pero podría haber sido más coherente usar valores que correspondan al personaje Zara directamente. De todas formas, los ejemplos variados de prueba son educativos y demuestran que las funciones funcionan en diferentes escenarios.

### Correcciones manuales que realicé

El código generado fue funcional sin necesidad de grandes correcciones. La única cosa que ajusté ligeramente fue renombrar las variables dentro del manejador del formulario (cambié `const name` a `const challengerName` dentro del addEventListener) para evitar conflictos con la variable global `name` del personaje, asegurando claridad de contexto. También verifiqué que los console.log() mostraran información clara y ordenada con separadores (`console.log("---")`) para mejorar la legibilidad en consola. Todo lo demás funcionó según las especificaciones de la consigna.

---
  - ¿Qué parte te resultó útil como punto de partida?
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
  - ¿Qué error concreto tenía el resultado? (semántico, de accesibilidad, lógico, de estilo, etc.)
  - ¿Cómo lo detectaste? (al probarlo en el browser, al leer el código, al ver la consola...)
  - ¿Por qué estaba técnicamente incorrecto o insuficiente?
  - ¿Qué cambiaste exactamente para que funcionara bien?
  Si no corregiste nada, explicá por qué el resultado era correcto tal como estaba.
-->
```

---

## Prompt 2

### Momento del proceso

```
<!--
  Indicá en qué punto del examen usaste este prompt.
  No es sobre la hora exacta — es sobre el contexto: ¿qué estabas intentando resolver cuando recurriste a la IA?
  Ej: "Cuando no sabía cómo estructurar el layout con Grid."
  Ej: "Al terminar el HTML, para verificar si me faltaba algo de accesibilidad."
  Ej: "Al principio del ejercicio de JS, para entender cómo arrancar."
-->
```

### Lo que le pedí a la IA

```
<!-- Pegá aquí el prompt exacto que escribiste. Debe ser el texto que vos escribiste, no la respuesta. -->
```

### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  - ¿Qué enfoque tomó la IA para resolver el problema?
  - ¿El resultado era lo que esperabas? ¿Por qué sí o por qué no?
  - ¿Qué parte te resultó útil como punto de partida?
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
  - ¿Qué error concreto tenía el resultado? (semántico, de accesibilidad, lógico, de estilo, etc.)
  - ¿Cómo lo detectaste? (al probarlo en el browser, al leer el código, al ver la consola...)
  - ¿Por qué estaba técnicamente incorrecto o insuficiente?
  - ¿Qué cambiaste exactamente para que funcionara bien?
  Si no corregiste nada, explicá por qué el resultado era correcto tal como estaba.
-->
```

---

## Reflexión final

```
<!--
  Mínimo 3 oraciones. Respondé:
  - ¿Qué tipo de errores repitió la IA que tuviste que corregir?
  - ¿Hubo algo que la IA resolvió bien a la primera sin que necesitaras tocarlo?
  - ¿Cambiarías la forma en que le pedís cosas a la IA la próxima vez? ¿Por qué?
-->
```
