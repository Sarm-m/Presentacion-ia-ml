# Informe final de entrega · TOURING

**Proyecto** Algoritmos evolutivos / Swarm  
**Equipo** Daniel Castro, Santiago Silva, Sebastián Ramírez y Nicolás Pinilla  
**Verificación** 16 de noviembre de 2026

## 1. Resumen del proyecto

Presentación universitaria en español de 17 diapositivas en formato 16:9. Cubre algoritmos genéticos (GA) y optimización por enjambre de partículas (PSO), con un terreno compartido como ejemplo y la antena evolucionada de NASA ST5 como caso de vuelo. Incluye tres secuencias de avance por teclado, notas del presentador y guion de ensayo.

## 2. Investigación

Se consultaron la obra de Holland, el artículo original de Kennedy y Eberhart y la modificación con inercia de Shi y Eberhart. Para el alcance de los métodos se contrastaron los estudios de convergencia de Rudolph y de Van den Bergh y Engelbrecht, recursos técnicos de Luke y MathWorks y los criterios de evaluación de COCO. Los ejemplos de robótica, ajuste de SVM y neuroevolución provienen de publicaciones de sus autores. El caso ST5 se cotejó con el artículo de diseño de Hornby y colegas, el informe posvuelo de Carlisle y Webb y la página de JPL que publica la fotografía.

[Fuentes y enlaces](../investigacion/fuentes.md) y [verificación de afirmaciones y cálculos](../investigacion/verificacion.md).

## 3. Estructura

| Diapositivas | Apartado | Contenido |
| --- | --- | --- |
| 1 | Portada | Equipo y tema |
| 2–3 | Introducción | Problema, hitos y relación con aprendizaje |
| 4 | Inspiración natural | Pinzones para GA y bandada de estorninos para PSO |
| 5–6 | Fundamentos teóricos | Aptitud y representación en GA. Posición, velocidad y memoria en PSO |
| 7–8 | Algoritmo básico | Generación de GA e iteraciones de PSO en el mismo terreno |
| 9 | Ventajas y desventajas | Exploración, costo y comparación con presupuesto fijo |
| 10–11 | Aplicaciones y casos de uso | Tres ejemplos de investigación y antena NASA ST5 |
| 12–13 | Comparación con otras técnicas | GA frente a PSO. Casos de ImageNet, MNIST, turnos de enfermería y paneles solares |
| 14–15 | Resumen y conclusiones | Mecanismos, criterios de uso y preguntas |
| 16 | Referencias | Apéndice bibliográfico |
| 17 | Muchas gracias | Cierre |

El guion reserva 5:25 a Daniel, 5:30 a Santiago, 5:25 a Sebastián y 5:30 a Nicolás. Suma 21:50 de exposición y 2:40 de preguntas, para un total previsto de 24:30. La página de referencias puede consultarse sin asignación de tiempo en el guion.

## 4. Diseño

La referencia adjunta definió el blanco cálido, el grafito, el azul intenso, el verde azulado y el uso puntual del ámbar. Se aplicaron Geist Variable a titulares y cuerpo, e IBM Plex Mono a escalas, folios y rótulos. La portada usa trayectorias nativas de SVG. Los gráficos explicativos usan azul para GA o memoria individual y verde azulado para PSO o información colectiva según la escena. El ámbar señala puntos destacados y marcas de referencia. Las diapositivas de costos y preguntas usan grafito. Las composiciones cambian entre un perfil de terreno, una cronología, diagramas, comparaciones y una página de fotografía.

## 5. Recursos

- El diagrama de pinzones aportado por el usuario y la fotografía de estorninos de Walter Baxter se presentan juntos en la diapositiva 4. Sus fuentes están registradas en el documento de investigación.
- Una fotografía local de 300 × 358 píxeles del prototipo ST5-33-142-7, acreditada a NASA/JPL-Caltech. Se cotejó la geometría con la figura 2(b) de Hornby et al. y se verificó que la copia tenga los mismos bytes que el archivo original.
- Diagramas propios en SVG para el terreno, los vectores de PSO, las aplicaciones y las trayectorias de portada. Las flechas y gráficos se renderizan a partir de componentes Vue o HTML nativo.
- Secuencias progresivas de selección, cruce y mutación, actualización de partículas y comparación de GA con PSO. El código del terreno calcula la aptitud y las posiciones reproducibles de los ejemplos.

## 6. Implementación

Slidev 53.0.0, Vue 3.5.44, JavaScript/TypeScript, CSS, fuentes Fontsource y exportación mediante Playwright Chromium 1.65.1. El layout propio contiene la identidad compartida y los folios. El capítulo de aplicaciones se importa mediante la sintaxis de Slidev. La fotografía se sirve desde `public/assets` y las familias tipográficas se instalan con las dependencias. El archivo de bloqueo fija la instalación.

## 7. Verificación

| Comprobación | Resultado observado |
| --- | --- |
| Skill de Slidev | Se leyó la copia oficial que distribuye `@slidev/cli@53.0.0` en una instalación previa y se comprobaron sus 53 referencias. Esa instalación previa carecía de un binario de Rolldown para Windows. En un directorio aislado se probó un entorno funcional con el mismo CLI. |
| Prueba aislada | Node.js 24.18.0 y npm 11.16.0. Se abrió la prueba en Chrome, compiló y exportó a PDF de una página con Chromium local. |
| Proyecto final | La instalación local produjo un archivo de bloqueo y pasó una comprobación en seco de `npm ci`. `npm run dev` y `npm run build` terminaron la carga inicial y la compilación respectivamente. |
| Revisión visual | Se revisaron las 15 diapositivas en capturas de Chromium a 1280 × 720, se comprobó la portada y la vista general en Chrome y se renderizaron las 15 páginas del PDF con Poppler. Se corrigieron etiquetas SVG, contraste y espacio en la bibliografía y se volvieron a inspeccionar. |
| Interacción | Se recorrieron con teclado los pasos de GA y PSO. Se verificaron los movimientos, cambios de aptitud y memoria, y las dos revelaciones y el retroceso de la comparación. |
| Notas | La vista del presentador mostró las notas de PSO. El guion independiente coincide con los títulos, participantes y tiempos. |
| PDF | Abre con 17 páginas 16:9 y folios en orden. Incluye los estados completos de ambas demostraciones y 17 enlaces en la página de referencias. |
| PPTX | El paquete contiene 17 diapositivas 16:9, 17 imágenes PNG íntegras y sus archivos de notas. Se verificó la estructura del archivo. |

### Revisión de las mejoras didácticas

- En una revisión anterior, se inspeccionaron las diapositivas a 1280 × 720. Las fotografías cargaron y se vieron sus créditos. La diapositiva «Una partícula con memoria» conserva el diagrama e incorpora la suma de tres contribuciones hipotéticas en una dimensión.
- Las demostraciones de GA y PSO se recorrieron con las flechas de avance y retroceso entre los estados 0, 1, 2 y 3. En PSO se comprobaron los colores de las partículas y sus posiciones anteriores. En el tercer paso, A y C tienen el mismo centro y se distinguen por sus marcadores concéntricos.
- El modelo del terreno y las simulaciones se conservaron.

## 8. Estado final

La exposición, el guion, las fuentes, el PDF y la copia PPTX están listos. El PDF y el PPTX muestran los estados completos. El avance interactivo se conserva en Slidev. El PPTX representa cada diapositiva con una imagen. La duración corresponde al cálculo del guion. Los ejemplos fijan decisiones y números para poder reproducirlos en clase.

Durante las pruebas automatizadas, Chromium sin interfaz rechazó la solicitud de mantener la pantalla activa. Esto no impidió renderizar, navegar, compilar o exportar.

## 9. Ejecución

```powershell
Set-Location -LiteralPath 'D:/Documents/Universidad/Quinto Semestre/Intro a AI/Exposicion Machine Learning/TOURING_Algoritmos_Evolutivos_Swarm'
npm ci
npm run dev
```

[Presentación](http://localhost:3030/) · [Vista del presentador](http://localhost:3030/presenter/) · [Vista general](http://localhost:3030/overview/)

Para compilar o regenerar las exportaciones:

```sh
npm run build
npx playwright install chromium
npm run export:pdf
npm run export:pptx
```

## 10. Entregables

**Carpeta principal** `D:/Documents/Universidad/Quinto Semestre/Intro a AI/Exposicion Machine Learning/TOURING_Algoritmos_Evolutivos_Swarm`

- [Presentación Slidev](<D:/Documents/Universidad/Quinto Semestre/Intro a AI/Exposicion Machine Learning/TOURING_Algoritmos_Evolutivos_Swarm/slides.md>)
- [PDF final](<D:/Documents/Universidad/Quinto Semestre/Intro a AI/Exposicion Machine Learning/TOURING_Algoritmos_Evolutivos_Swarm/entrega/presentacion.pdf>)
- [PowerPoint estático](<D:/Documents/Universidad/Quinto Semestre/Intro a AI/Exposicion Machine Learning/TOURING_Algoritmos_Evolutivos_Swarm/entrega/presentacion.pptx>)
- [Guion](<D:/Documents/Universidad/Quinto Semestre/Intro a AI/Exposicion Machine Learning/TOURING_Algoritmos_Evolutivos_Swarm/guion/guion_exposicion.md>)
- [Fuentes](<D:/Documents/Universidad/Quinto Semestre/Intro a AI/Exposicion Machine Learning/TOURING_Algoritmos_Evolutivos_Swarm/investigacion/fuentes.md>) y [verificación](<D:/Documents/Universidad/Quinto Semestre/Intro a AI/Exposicion Machine Learning/TOURING_Algoritmos_Evolutivos_Swarm/investigacion/verificacion.md>)
- [README](<D:/Documents/Universidad/Quinto Semestre/Intro a AI/Exposicion Machine Learning/TOURING_Algoritmos_Evolutivos_Swarm/README.md>)
- [Informe final](<D:/Documents/Universidad/Quinto Semestre/Intro a AI/Exposicion Machine Learning/TOURING_Algoritmos_Evolutivos_Swarm/entrega/informe_final.md>)
