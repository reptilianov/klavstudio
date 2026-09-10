# Guía de imágenes — KLAV

Se conservan los ocho proyectos que ya estaban visibles. Babilonia y Titos no aparecen en la selección ni en la navegación; sus rutas originales se conservan para no romper enlaces antiguos.

## Cómo reemplazar los placeholders

- Archivos locales: `public/placeholders/`. No dependen de servicios externos.
- Portadas: `{slug}-cover.webp`, relación 4:3 (1200 × 900). Se comparten entre inicio y caso.
- Sistemas: `{slug}-system.webp`, relación 30:19 (1200 × 760).
- Los formatos se detectan automáticamente: WebP, AVIF, JPG, JPEG, PNG y SVG, en ese orden de preferencia. Si existen `okhosting-cover.webp` y `okhosting-cover.svg`, se usa el WebP sin duplicar la imagen. No hace falta editar componentes. No cambies solamente la extensión: exporta la imagen al formato elegido.
- Los archivos originales en `public/projects/` y `public/siteimages/` se mantienen intactos.
- El texto bilingüe y la dirección de cada proyecto están en `src/data/directions.js`.
- `node scripts/generate-placeholders.mjs` regenera y sobrescribe los SVG de referencia; no lo ejecutes sobre SVG finales personalizados.

## Galería automática y comentarios por imagen

Guarda las imágenes directamente en `public/placeholders/`, usando el slug exacto del proyecto y un guion. No necesitas declarar cuántas imágenes hay ni editar código.

Ejemplo para OK Hosting:

```text
okhosting-cover.webp                → portada (inicio y caso)
okhosting-system.webp               → imagen de sistema visual
okhosting-development.webp          → galería
okhosting-development-1.webp        → galería
okhosting-development-2.webp        → galería
okhosting-development-10.webp       → galería
okhosting-cover-2.webp              → galería
okhosting-cover-3.webp              → galería
```

Se acepta cualquier nombre después del slug: `development`, `develptment`, `proceso`, `pantallas`, o solamente `1`, `2`, etc. Se ordenan por nombre, con orden numérico natural: 1, 2, 3, 10. No hace falta que la numeración sea consecutiva. Solo `-cover` y `-system` sin número se reservan para sus secciones; sus variantes numeradas sí se agregan a la galería. Una galería vacía no muestra sección.

### Escribir un comentario antes de cada imagen

Crea un JSON junto a la imagen con el mismo nombre base:

- Imagen: `okhosting-development-1.webp`
- Comentario: `okhosting-development-1.json`

```json
{
  "title": "Una navegación más clara",
  "comment": "Aquí explico qué se está mostrando y por qué tomé esta decisión de diseño.",
  "alt": "Vista de la navegación principal de OK Hosting"
}
```

El título y comentario aparecen **antes de la imagen**. `alt` sirve a lectores de pantalla. Todos los campos son opcionales. Sin JSON, la imagen aparece igual. Puedes escribir primero el JSON: no se muestra nada hasta que exista su imagen. Un JSON mal formado muestra un error con su nombre para que puedas corregirlo.

Para separar español e inglés, usa objetos en vez de texto:

```json
{
  "title": { "es": "Vista móvil", "en": "Mobile view" },
  "comment": { "es": "Comentario en español.", "en": "Comment in English." },
  "alt": { "es": "Pantalla de inicio en móvil", "en": "Mobile home screen" },
  "order": -1,
  "hidden": false
}
```

- Un texto simple se usa en ambos idiomas. Si falta una traducción, se utiliza la disponible.
- `order` es opcional: por defecto 0. Un valor -1 adelanta la imagen; 1 la coloca después de las imágenes con orden 0. Los empates se resuelven por nombre y número.
- `hidden: true` oculta una imagen de la galería sin borrar el archivo. No afecta a la portada ni al sistema principal.
- Los comentarios son texto plano; para saltos de párrafo usa `\n\n` dentro del texto JSON.
- Para portada y sistema también puedes poner JSON; se usa `alt` y se muestra `comment` (o `title`) como pie de imagen, debajo.
- Ejemplo editable ya incluido: `public/placeholders/okhosting-cover-2.json`.
- La carpeta `public/` se publica completa, incluidos los JSON. Úsalos para texto público, no para notas privadas o contraseñas; `hidden` oculta la imagen de la galería, pero no protege el archivo.

### Cuándo aparecen los cambios

En desarrollo (`npm run dev`), agregar, borrar o cambiar una imagen o JSON recarga automáticamente la vista previa. Si tu servidor ya estaba ejecutándose al actualizar esta configuración, reinícialo una vez si no recarga.

El sitio publicado es estático: debes ejecutar `npm run build` y volver a publicar para incorporar nuevas imágenes o comentarios. No hay un escaneo del disco desde el navegador del visitante.

Slugs disponibles: `okhosting`, `firstchoice`, `caintra`, `mindsherpa`, `airtm`, `artearabia`, `steps`, `raicesuniversales`.

## Criterio editorial

La idealización se presenta como dirección conceptual, sin métricas inventadas. AirTM conserva explícitamente su condición de propuesta no implementada. Cuando sustituyas imágenes, mantén esa distinción si representan conceptos y no trabajo entregado.

## Briefs por proyecto

### OK Hosting

Tecnología con ambición. Una marca a su altura.

Mockup de sitio en desktop, módulos de servicios sobre fondo oscuro y piezas de marca con contraste verde. Composición técnica, limpia y expansiva.

- Portada: `okhosting-cover.webp`
- Sistema: `okhosting-system.webp`
- Colores: `#273528` / `#c5ef65` / `#f1eee6`

### 1st Choice CE

El siguiente paso empieza con confianza.

Pantallas de catálogo y detalle de curso, certificados sobre papel claro y módulos azules. Fotografía humana luminosa, evitando clichés de graduación.

- Portada: `firstchoice-cover.webp`
- Sistema: `firstchoice-system.webp`
- Colores: `#153d5a` / `#b9dfff` / `#f1eee6`

### Caintra

Muchas voces. Una fuerza industrial.

Composición de informes, diapositivas y gráfica de datos. Papel blanco, carbón y acentos naranja; fotografía industrial de gran escala.

- Portada: `caintra-cover.webp`
- Sistema: `caintra-system.webp`
- Colores: `#313737` / `#f27945` / `#f1eee6`

### Mind Sherpa

Una identidad para abrir otras perspectivas.

Libros en una composición escultórica, portadas tipográficas y un sitio de autor. Luz lateral suave, papel cálido y contrastes ciruela.

- Portada: `mindsherpa-cover.webp`
- Sistema: `mindsherpa-system.webp`
- Colores: `#442943` / `#edb4cb` / `#f1eee6`

### AirTM

Mover dinero debería sentirse así de claro.

Dashboard y pantallas móviles sobre azul claro. Mostrar saldo, acciones y estados como datos de muestra; nunca información financiera real.

- Portada: `airtm-cover.webp`
- Sistema: `airtm-system.webp`
- Colores: `#124a73` / `#9cdcff` / `#f1eee6`

### Arte Arabia

Un mundo por descubrir. Un objeto para llevarlo contigo.

Bodegones de perfume, cerámica y metal sobre piedra cálida. Luz de tarde, sombras definidas y espacio para titulares; complementar con mockups de tienda.

- Portada: `artearabia-cover.webp`
- Sistema: `artearabia-system.webp`
- Colores: `#59362b` / `#e5b477` / `#f1eee6`

### Steps

El cuidado empieza antes del primer paso.

Envases mate, toallas y tarjetas sobre piedra clara. Verde salvia, crema y luz natural; composición silenciosa con texturas suaves.

- Portada: `steps-cover.webp`
- Sistema: `steps-system.webp`
- Colores: `#586457` / `#efd8c8` / `#f1eee6`

### Raíces Universales

Un espacio para conectar, aprender y pertenecer.

Material editorial sobre papel natural, detalles botánicos y pantallas de servicios. Luz suave, verdes profundos y fotografías de espacios abiertos.

- Portada: `raicesuniversales-cover.webp`
- Sistema: `raicesuniversales-system.webp`
- Colores: `#354a3c` / `#c8d8a0` / `#f1eee6`
