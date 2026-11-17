# Verificación académica

TOURING. Consulta del 15 de noviembre de 2026.

Los identificadores remiten a la bibliografía comentada en [fuentes.md](./fuentes.md). Las afirmaciones sobre mecanismos se contrastaron con el artículo original o la documentación de sus autores. La información de ST5 se contrastó con la documentación técnica del equipo de diseño y el informe posvuelo.

## Afirmaciones comprobadas

| Diapositivas | Afirmación respaldada | Alcance de la evidencia |
| --- | --- | --- |
| 2–3 | Optimizar implica evaluar candidatos con un criterio. Los algoritmos genéticos y PSO buscan candidatos usando una población y reglas estocásticas. | [L26], capítulos 1 y 3. La gráfica de montaña es una función artificial creada para explicar el objetivo y la búsqueda. |
| 3 | El libro de John H. Holland apareció en 1975. Kennedy y Eberhart presentaron PSO en 1995. | [H75] y [KE95]. La fecha de 1992 corresponde a la reedición de MIT Press. |
| 3 y 12 | GA y PSO son optimizadores que se pueden incorporar a un sistema de IA o ML. El tipo de aprendizaje depende de los datos, la señal y la tarea. | [SB18], capítulo 1, distingue los paradigmas de ML. [KE95], [HD08] y [S18] muestran usos en problemas concretos. Los mismos principios también se usan en el diseño de ingeniería [NASA06]. |
| 4 y 6 | En el GA generacional, la aptitud influye en la selección de padres, el cruce combina partes de su representación y la mutación introduce cambios. Los descendientes conforman la nueva generación con las reglas de reemplazo elegidas. | [L26] §§3.2–3.3, [R94] §2 y [MW]. El ejemplo preserva dos padres por elitismo y destaca una mutación. Criterios de parada prácticos incluyen un presupuesto o un límite de generaciones. |
| 5 y 7 | En PSO, cada partícula tiene posición, velocidad y mejor posición personal histórica. La variante global usa además la mejor posición conocida por el enjambre. | [KE95] §3 y [L26] §3.5. La demo incluye el peso de inercia introducido en [SE98]. [MW] muestra una implementación con vecindarios e inercia adaptable. |
| 8 y 11 | Se pueden evaluar candidatos sin gradientes. Una selección fuerte puede reducir diversidad. Un enjambre puede estancarse. El costo y el rendimiento dependen de la función, la representación, el presupuesto y los parámetros. | [L26] §§3.2, 3.3 y 3.5, [R94], [V10] y [COCO16]. Las pruebas de convergencia de variantes bajo condiciones específicas se refieren al límite o a supuestos formales. En una ejecución finita, el mejor candidato observado por estos métodos no certifica optimalidad global. |
| 9 | Una variante de PSO generó trayectorias parciales para un robot móvil. PSO híbrido se usó para seleccionar atributos y ajustar el kernel de una SVM. Un GA de neuroevolución ajustó los pesos de redes probadas en juegos de Atari. | [BA21], [HD08] y [S18]. Son estudios de investigación. El primero incluye pruebas físicas además de simulaciones. El segundo y el tercero documentan experimentos computacionales. |
| 10 | Para ST5, una revisión de requisitos orbitales llevó a rediseñar la antena de banda X. El equipo evaluó la ganancia y la relación de onda estacionaria por simulación, fabricó el diseño resultante y comprobó los requisitos en una cámara anecoica. Se montó una antena evolucionada y una hélice convencional en cada uno de los tres satélites, y los diseños evolucionados se usaron durante la misión. | [NASA06] §§II.B–II.C y [NASA07], sección *Evolved Antenna*. Resultados de una misión concreta. La foto [JPL04] corresponde al prototipo del diseño de vuelo, identificado al contrastarla con [NASA06], figura 2b. |
| 11 | GA puede usar una representación adecuada a la solución, incluso real o discreta. PSO básico opera con coordenadas reales y tiene variantes discretas. | [L26] §§3.2–3.5, [KE95] y [KE97]. El ejemplo usa discretización solo para el GA. |
| 12 | El descenso por gradiente usa derivadas y la búsqueda aleatoria sirve de línea base. K-means agrupa, mientras que Random Forest aprende predictores para clasificación o regresión. | [BV04], [BB12] y [SkL]. Para evaluar optimizadores estocásticos se puede fijar un presupuesto de evaluaciones y comparar distribuciones entre varias ejecuciones [COCO16]. |
| 13–14 | Las diferencias entre los métodos se explican por cómo generan nuevos candidatos y comparten información. | Síntesis de [L26], [KE95] y [COCO16]. Una buena regla de búsqueda depende de la representación y de qué evaluaciones se puedan costear. |

## Cálculo del ejemplo compartido

La función objetivo $h(x)$ interpola linealmente los vértices $(0,1)$, $(4,9)$, $(7,3)$, $(12,13)$ y $(15,4)$ en el dominio $0\le x\le15$. La cima de $x=4$ tiene altura 9 y la de $x=12$ tiene altura 13. Maximizar $h$ representa buscar una cima con un presupuesto de evaluaciones.

### GA

La población inicial tiene cuatro enteros codificados en cuatro bits. Se ilustran selección por puntuación y cruce de un punto tras el segundo bit. Los dos padres permanecen en la generación siguiente. La mutación del segundo bit contado desde la izquierda transforma `1001` en `1101`.

| Estado | Representación binaria | $x$ | $h(x)$ |
| --- | --- | ---: | ---: |
| Población inicial | `0001`, `0101`, `1010`, `1111` | 1, 5, 10, 15 | 3, 7, 9, 4 |
| Padres seleccionados | `0101`, `1010` | 5, 10 | 7, 9 |
| Cruce | `0110`, `1001` | 6, 9 | 5, 7 |
| Resultado de mutación | `1101` | 13 | 10 |
| Siguiente generación | `0101`, `1010`, `0110`, `1101` | 5, 10, 6, 13 | 7, 9, 5, 10 |

El mejor valor observado aumenta de 9 a 10 en esta generación. El cruce y la mutación muestran resultados elegidos para ilustrar los operadores. En ejecuciones estocásticas, los resultados varían.

### PSO

Las tres partículas actualizan sus posiciones simultáneamente a partir de los mejores registros de la iteración anterior. La demostración fija $w=0.5$, $c_1=c_2=1$ y $r_1=r_2=0.5$ para hacer reproducible una trayectoria sencilla. En una ejecución habitual, los factores $r_1$ y $r_2$ se muestrean. En caso de empate, el registro conserva la posición anterior.

```text
velocidad nueva = 0,5 × velocidad anterior
                + 0,5 × (mejor personal − posición actual)
                + 0,5 × (mejor global − posición actual)
posición nueva = posición actual + velocidad nueva
```

| Iteración | Posiciones A, B, C | Velocidades A, B, C | Mejores posiciones personales | Mejor global y altura |
| --- | --- | --- | --- | --- |
| 0 | 2 · 8 · 10 | 1 · 1 · 0 | 2 · 8 · 10 | $x=10$, $h=9$ |
| 1 | 6,5 · 9,5 · 10 | 4,5 · 1,5 · 0 | 2 · 9,5 · 10 | $x=10$, $h=9$ |
| 2 | 8,25 · 10,5 · 10 | 1,75 · 1 · 0 | 8,25 · 10,5 · 10 | $x=10,5$, $h=10$ |
| 3 | 10,25 · 11 · 10,25 | 2 · 0,5 · 0,25 | 10,25 · 11 · 10,25 | $x=11$, $h=11$ |

La partícula A conserva $x=2$ como mejor personal después de la primera actualización porque su altura en $x=6.5$ es 4, frente a 5 en $x=2$. Al cierre, $h=11$ es lo mejor que encontró el enjambre en las iteraciones ilustradas. La demostración usa cuatro candidatos iniciales en GA y tres partículas en PSO, con diferentes presupuestos. Las trayectorias sirven para seguir los pasos de cada método. Una comparación de rendimiento requeriría el mismo presupuesto y varias corridas.

## Nivel de acceso y recursos visuales

- El registro de IEEE del PSO de 1995 pidió JavaScript durante la consulta. Se leyó el texto íntegro en la copia de la Universidad de Washington. La atribución del peso de inercia usa el resumen original de IEEE de 1998 y se contrasta con MathWorks.
- Para el estudio de robótica se usó el resumen en Cambridge Core. El estudio PSO–SVM se cotejó con el resumen y la introducción disponibles en la ficha editorial de Elsevier. Las afirmaciones seleccionadas se limitan a los problemas, métodos y entornos de prueba descritos.
- Para ST5 se cotejó el informe de diseño con la sección de antenas del informe posvuelo. La fecha de la misión (2006) y la de publicación del informe posvuelo (2007) corresponden a eventos distintos.
- La fotografía de ST5 se conserva localmente, con origen y condiciones en [fuentes.md](./fuentes.md). Los diagramas y ejemplos son de elaboración propia. La imagen de referencia proporcionada por el equipo orienta la dirección visual.
