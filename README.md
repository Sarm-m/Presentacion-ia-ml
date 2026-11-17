# TOURING · Algoritmos evolutivos / Swarm

Presentación en español para Introducción a la Inteligencia Artificial. Equipo: Daniel Castro, Santiago Silva, Sebastián Ramírez y Nicolás Pinilla. La exposición está calculada para 21:50, seguida de 2:40 de preguntas. La diapositiva 15 queda como apéndice bibliográfico.

## Abrir la presentación

Con Node.js 22.12 o posterior y npm, abre una terminal en la carpeta donde se encuentra este README y ejecuta:

```sh
npm ci
npm run dev
```

Abre [la presentación](http://localhost:3030/). Usa las flechas del teclado para navegar y avanzar los pasos de las diapositivas 6, 7 y 11. La flecha izquierda vuelve al paso anterior. [Vista del presentador](http://localhost:3030/presenter/) para consultar notas y controlar el tiempo. [Vista general](http://localhost:3030/overview/) para revisar el orden.

Las fuentes tipográficas, la fotografía y los diagramas se sirven desde el proyecto. Las citas llevan a sus fuentes cuando hay conexión.

## Compilar y exportar

```sh
npm run build
npx playwright install chromium
npm run export:pdf
npm run export:pptx
```

Instala Chromium para exportar si Playwright aún no lo tiene. El PDF conserva una página por diapositiva y muestra el estado final de las demostraciones, con las operaciones y los resultados intermedios visibles. Si utilizas PowerPoint, su exportación conserva las diapositivas como imágenes. En el proyecto Slidev se pueden editar el texto, los diagramas y los pasos.

## Archivos de trabajo

- [Presentación](slides.md) y [capítulo de aplicaciones](capitulos/aplicaciones.md).
- [Guion de ensayo](guion/guion_exposicion.md), con tiempos, transiciones y fuentes por diapositiva.
- [Fuentes](investigacion/fuentes.md) y [verificación académica](investigacion/verificacion.md).
- [PDF](entrega/presentacion.pdf), [PowerPoint estático](entrega/presentacion.pptx) e [informe de entrega](entrega/informe_final.md).

La función y las trazas reproducibles de los ejemplos están en `components/terrainModel.ts`. El ejemplo enseña el mecanismo de búsqueda y sus estados intermedios. La comparación empírica de algoritmos requiere varias ejecuciones con un presupuesto comparable.

