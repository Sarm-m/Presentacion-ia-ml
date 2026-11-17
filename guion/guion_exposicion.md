# Guion de exposición de TOURING

**Algoritmos evolutivos / Swarm**  
Introducción a la Inteligencia Artificial

| Integrante | Diapositivas | Tiempo de exposición | Marca de relevo |
| --- | --- | ---: | ---: |
| Daniel Castro | 01–04 | 5:25 | 5:25 |
| Santiago Silva | 05–07 | 5:30 | 10:55 |
| Sebastián Ramírez | 08–10 | 5:25 | 16:20 |
| Nicolás Pinilla | 11–14 | 5:30 | 21:50 |
| **Exposición principal** | **01–14** | **21:50** | |
| **Preguntas** | **14** | **2:40** | **24:30** |

El plan deja 30 segundos de margen antes del límite de 25 minutos. Las marcas de cada diapositiva indican el minuto de salida desde el inicio. En las diapositivas 06 y 07 hay tres avances internos y en la 11 hay dos. Usen la flecha derecha para revelar cada paso y lean las notas con la vista del presentador. Las fuentes se identifican con los mismos códigos de [la bibliografía](../investigacion/fuentes.md).

## Daniel Castro · Introducción y fundamentos de GA

### 01. La inteligencia de muchas soluciones

**Daniel Castro · 0:30 · Salida 0:30**

- **Qué explicar.** Preséntanos como TOURING y menciona a Daniel, Santiago, Sebastián y Nicolás. Anuncia que se verán dos formas de usar varios candidatos para resolver un mismo problema.
- **Cómo decirlo.** «Imaginemos que podemos probar unas pocas soluciones. ¿Cómo aprovecharíamos lo que cada una nos enseña para elegir la siguiente?»
- **Apoyo visual.** Señala las trayectorias de la portada como una ilustración de búsqueda colectiva.
- **Transición.** «Veamos primero un problema que podemos resolver a la vista».

### 02. ¿Cómo buscar sin probarlo todo?

**Daniel Castro · 1:35 · Salida 2:05**

- **Qué explicar.** Cada punto del eje horizontal es una solución candidata. Se mide su altura y se intenta encontrar la mayor con pocas consultas.
- **Cómo decirlo.** «Desde la silla vemos toda la montaña. El algoritmo solo conoce la altura de los lugares que ha medido. Si prueba cerca del primer pico, podría pensar que ya encontró la mejor zona».
- **Apoyo visual.** Señala la cima local en \(x=4\) y la más alta en \(x=12\). Pregunta dónde medirían primero y da unos segundos para que el público mire el perfil. En el problema real, una consulta podría costar el tiempo de una simulación.
- **Transición.** «Para decidir dónde probar después, podemos imitar dos procesos de la naturaleza».
- **Fuente.** [L26]. Terreno de elaboración propia.

### 03. Dos formas de buscar en grupo

**Daniel Castro · 1:40 · Salida 3:45**

- **Qué explicar.** En 1975, John Holland publicó su trabajo sobre algoritmos genéticos (GA, *Genetic Algorithm*, «Algoritmo Genético»): una población busca mejores soluciones mediante selección, cruce y mutación. En 1995, James Kennedy y Russell Eberhart presentaron PSO (*Particle Swarm Optimization*): cada partícula aprovecha lo que aprendió en sus recorridos y la mejor posición conocida por el grupo.
- **Cómo decirlo.** «Si usamos PSO para elegir la configuración de un clasificador entrenado con etiquetas, el clasificador sigue haciendo aprendizaje supervisado. PSO decide qué configuración probar. Cuando optimizamos la forma de una antena, cada geometría se puede evaluar con criterios físicos».
- **Apoyo visual.** Recorre las dos fechas y termina en la franja del tipo de aprendizaje. Si aparece la duda sobre hiperparámetros, explica que se entrenan los candidatos y se comparan en validación.
- **Transición.** «Veamos cómo cambia una población en un algoritmo genético».
- **Fuentes.** [H75], [KE95], [L26], [SB18], [SkL].
- **Retratos.** [John Holland, University of Michigan](https://lsa.umich.edu/cscs/people/in-memoriam/JohnHolland1929-2015.html); [Kennedy y Eberhart, rótulos de autores en la presentación de Victoria University of Wellington para ACISS 2009](https://ecs.wgtn.ac.nz/foswiki/pub/Groups/ECRG/ResearchTeam/vuw-pso-xli.pdf).

### 04. Una población que cambia

**Daniel Castro · 1:40 · Salida 5:25**

- **Qué explicar.** Define individuo, población, genotipo y aptitud con la tabla. Introduce selección, cruce y mutación. La regla de reemplazo determina qué individuos pasan a la siguiente generación.
- **Cómo decirlo.** «0101 es la manera de escribir la posición 5. En el terreno, esa posición vale 7. La aptitud orienta qué candidatos podrán reproducirse. Podemos recombinar fragmentos de dos candidatos y hacer pequeños cambios en los descendientes».
- **Apoyo visual.** Señala los dos candidatos seleccionados, cuya altura es 7 y 9. En la demo ganan los de mayor aptitud. Otra variante puede favorecerlos de forma probabilística.
- **Relevo a Santiago.** «Ya vimos qué se hereda cuando la población se renueva. Ahora, ¿qué conserva una partícula cuando se mueve?»
- **Fuentes.** [H75], [L26].

## Santiago Silva · Fundamentos de PSO y demostraciones

### 05. Una partícula con memoria

**Santiago Silva · 1:30 · Salida 6:55**

- **Qué explicar.** La posición es el candidato actual y la velocidad indica cuánto y en qué dirección cambia. Cada partícula conserva la mejor posición que visitó, llamada *pbest*. En la variante global, todas comparten el mejor registro detectado, llamado *gbest*.
- **Cómo decirlo.** «La partícula combina algo de su movimiento anterior con dos atracciones. Una apunta al mejor lugar que ella recuerda. La otra apunta al mejor lugar que alguien del grupo encontró».
- **Apoyo visual.** Sigue las tres flechas del diagrama. Señala que las atracciones pueden oponerse, como en el esquema. Las longitudes son ilustrativas. El máximo de todo el terreno puede estar más lejos que el mejor punto visitado.
- **Transición.** «Apliquemos cada mecanismo al terreno de la introducción».
- **Fuentes.** [KE95], [SE98], [L26].

### 06. Una generación en cuatro pasos

**Santiago Silva · 1:50 · Salida 8:45**

- **Qué explicar.** Comienza en la población inicial y señala las alturas. Cada avance revela una operación.
- **Apoyo visual.**
  1. **Selección.** Los candidatos 0101 y 1010 representan 5 y 10. Sus alturas son 7 y 9.
  2. **Cruce.** Señala el corte después de dos bits. Se intercambian los sufijos y aparecen 0110 y 1001, que representan 6 y 9.
  3. **Mutación y reemplazo.** En 1001 cambia el segundo bit desde la izquierda y queda 1101. La siguiente generación conserva a ambos padres e incorpora a los dos hijos. El candidato 13 tiene altura 10.
- **Cómo decirlo.** «Después de la primera vuelta, la mejor altura pasa de 9 a 10. Elegimos estos eventos para mostrar las operaciones. En una corrida real repetimos el ciclo hasta agotar un presupuesto o alcanzar otro criterio de parada».
- **Transición.** «En ese mismo terreno, el enjambre puede visitar puntos entre los enteros y usar lo que recuerda de cada medición».
- **Fuentes.** [H75], [L26], [comprobación de las alturas y las cadenas](../investigacion/verificacion.md#ga).

### 07. Tres movimientos del enjambre

**Santiago Silva · 2:10 · Salida 10:55**

- **Qué explicar.** Las partículas A, B y C empiezan en 2, 8 y 10. Evalúan su altura y cada una guarda su posición inicial. La que está en 10 tiene el mejor registro inicial, con altura 9.
- **Apoyo visual.**
  1. **Primera iteración.** A llega a 6,5 y mide 4. Como mide menos que en 2, conserva el mejor personal anterior.
  2. **Segunda iteración.** B llega a 10,5 y mide 10. Su récord se convierte en el mejor del grupo.
  3. **Tercera iteración.** B mide 11 en la posición 11. A y C llegan a 10,25. Señala la cima de 13 en la posición 12 para recuperar la diferencia entre el mejor hallazgo y el máximo del problema.
- **Cómo decirlo.** «Cada partícula calcula su movimiento con los récords de la ronda anterior. Luego visita el nuevo punto, mide su altura y actualiza el récord si mejoró». Aclara que los factores aleatorios se fijan en 0,5 para poder reproducir el ejemplo.
- **Relevo a Sebastián.** «Ya vimos cómo exploran. ¿Cuánto cuesta esa búsqueda cuando salimos del ejemplo?»
- **Fuentes.** [KE95], [SE98], [cálculo de velocidades y posiciones](../investigacion/verificacion.md#pso).

## Sebastián Ramírez · Ventajas, límites y aplicaciones

### 08. El costo de explorar

**Sebastián Ramírez · 1:35 · Salida 12:30**

- **Qué explicar.** Una población permite explorar varias zonas y usar criterios difíciles de derivar. La función objetivo debe representar lo que se quiere lograr. La configuración de los parámetros afecta la diversidad y el grupo puede concentrarse pronto. El mejor hallazgo de una corrida finita carece de certificación de óptimo global.
- **Cómo decirlo.** «Si simular una antena toma dos minutos, cada intento se paga. Si queremos comparar dos métodos, podemos darles la misma cantidad de evaluaciones y mirar la calidad alcanzada en varias ejecuciones».
- **Apoyo visual.** Usa ese ejemplo para pasar de las fortalezas al costo. Para explicar convergencia prematura, recuerda que la cima de \(x=4\) parecía buena si solo se miraba su región.
- **Transición.** «Miremos qué cuenta como candidato y cómo se mide en tres estudios».
- **Fuentes.** [L26], [R94], [V10], [COCO16].

### 09. ¿Qué se está optimizando?

**Sebastián Ramírez · 1:40 · Salida 14:10**

- **Qué explicar.** Lee la columna de candidatos como tres respuestas a una pregunta común. En robótica, un candidato es un camino parcial evaluado en simulación y después en un robot de investigación. En clasificación, es una configuración de variables e hiperparámetros de una SVM. En Atari, es un conjunto de pesos de una red cuya ejecución obtiene una recompensa.
- **Cómo decirlo.** «La idea de evaluar candidatos se mantiene, aunque cambie mucho lo que representa cada uno. Podemos mover un robot, ajustar un clasificador o decidir cuánto se modifica la respuesta de una red».
- **Apoyo visual.** Recorre los tres esquemas. La SVM aprende con datos etiquetados, PSO busca la configuración y el GA de Atari optimiza pesos para una tarea de refuerzo. Los tres se reportan como experimentos de investigación.
- **Transición.** «Ahora veamos cómo se representó una pieza que sí terminó en órbita».
- **Fuentes.** [BA21], [HD08], [S18].

### 10. Una antena evolucionada llegó a órbita

**Sebastián Ramírez · 2:10 · Salida 16:20**

- **Qué explicar.** El cambio de órbita de ST5 modificó los ángulos que debía cubrir la antena. El equipo rediseñó un monopolo de alambre mediante un algoritmo evolutivo. El simulador estimaba ganancia y desajuste de impedancia. NASA Goddard probó el prototipo revisado en una cámara anecoica. Los tres microsatélites usaron antenas evolucionadas durante la misión lanzada en 2006.
- **Cómo decirlo.** «Un candidato era un conjunto de instrucciones para doblar un alambre. El algoritmo variaba esas instrucciones y la simulación decía qué tan bien se comunicaría la antena. Con los mejores candidatos, el equipo podía pasar al laboratorio».
- **Apoyo visual.** Recorre el esquema: requisitos, generación y evolución de candidatos, evaluación en simulaciones y pruebas, y selección para la misión. Señala la moneda para fijar la escala. La foto muestra el prototipo del diseño revisado ST5-33-142-7. La cámara reduce las reflexiones de las paredes. El informe posvuelo registra una antena evolucionada y una convencional de hélice cuadrifilar por satélite. Crédito fotográfico: Courtesy NASA/JPL-Caltech.
- **Relevo a Nicolás.** «La forma del candidato y la forma de compartir los hallazgos influyen en qué método elegimos. Nicolás pone a GA y PSO lado a lado».
- **Fuentes.** [NASA06], secciones II.B y II.C y figura 2b, [NASA07], sección *Evolved Antenna*, y [JPL04], fotografía.

## Nicolás Pinilla · Comparación y cierre

### 11. GA frente a PSO

**Nicolás Pinilla · 1:50 · Salida 18:10**

- **Qué explicar.** Empieza por inspiración y representación. Con el primer avance muestra cómo se busca y se comparte información. Con el segundo muestra parámetros y casos típicos.
- **Cómo decirlo.** «En el ejemplo, el GA eligió dos cadenas y creó descendientes que heredaron fragmentos. En PSO reconocimos a la misma partícula A al moverse, y su mejor punto personal siguió guiándola».
- **Apoyo visual.** Señala que el cruce y la mutación son controles del GA, y que la inercia y las atracciones gobiernan el movimiento de PSO. La representación de 4 bits fue una decisión del ejercicio. GA admite valores reales y PSO tiene variantes discretas.
- **Transición.** «Para elegir un método de búsqueda, primero miremos qué información ofrece el problema».
- **Fuentes.** [H75], [KE95], [SE98], [KE97], [L26].

### 12. ¿Cuándo conviene usar GA o PSO?

**Nicolás Pinilla · 1:55 · Salida 20:05**

- **Qué explicar.** El descenso por gradiente aprovecha derivadas para obtener una dirección local. La búsqueda aleatoria es una línea base. GA y PSO se pueden considerar cuando se puede evaluar una solución y el gradiente resulta poco práctico. K-means agrupa sin etiquetas y Random Forest usa objetivos etiquetados para aprender a clasificar o predecir.
- **Cómo decirlo.** «Una búsqueda externa puede probar valores de profundidad y número de árboles de un Random Forest. Entrena el modelo de cada configuración y usa su resultado en validación para elegir. El conjunto de prueba queda para estimar qué tan bien generaliza el modelo elegido».
- **Apoyo visual.** Señala las dos zonas de la diapositiva para distinguir el método que busca una buena configuración del algoritmo que la usa para aprender.
- **Transición.** «Volvamos a lo que cambia de una iteración a otra en cada búsqueda».
- **Fuentes.** [BV04], [BB12], [SkL], [HD08].

### 13. Qué conserva cada búsqueda

**Nicolás Pinilla · 1:20 · Salida 21:25**

- **Qué explicar.** Resume las dos reglas de búsqueda. Recordar cómo se propagó la información permite explicar por qué un método encaja con un problema. Para juzgar el rendimiento importan la calidad, el costo y la variación entre corridas.
- **Cómo decirlo.** «En GA reconocemos partes de los padres en los descendientes. En PSO reconocemos a las partículas por sus posiciones y sus recuerdos. Con reglas pequeñas que se repiten, como vimos con la antena, una búsqueda puede producir una forma difícil de prever».
- **Apoyo visual.** Señala brevemente GA y PSO, y cierra regresando a la geometría de ST5.
- **Transición.** «Con esa idea, pensemos en cómo diseñaríamos una comparación».
- **Fuentes.** [L26], [NASA06], [NASA07], [COCO16].

### 14. Preguntas

**Nicolás Pinilla · 0:25 de apertura · Exposición hasta 21:50 · Preguntas hasta 24:30**

- **Qué preguntar.** «Si solo pudieras evaluar 100 candidatos, ¿cómo compararías dos algoritmos de búsqueda?»
- **Cómo moderar.** Da espacio a una respuesta. Si el público necesita una pista, propón usar la misma función objetivo y 100 evaluaciones por método y ejecución. Mide el mejor resultado y repite con distintas semillas. Daniel puede responder sobre clasificación y fundamentos de GA. Santiago cubre el movimiento del enjambre y las demos. Sebastián cubre los estudios y ST5. Nicolás toma las preguntas de comparación y presupuesto.
- **Ejemplo.** Si preguntan quién ganó en el terreno, recuerda que en GA se visitan enteros y en PSO se visitan posiciones reales, y que las trazas usaron diferentes presupuestos.
- **Transición.** Consulta el apéndice si alguien pide la fuente exacta.
- **Fuentes.** [COCO16] y [comprobación del ejemplo](../investigacion/verificacion.md).

### 15. Referencias

**Nicolás Pinilla · 0:00 · Apéndice de consulta**

- **Uso.** Abre la diapositiva si alguien solicita una publicación. Los códigos enlazan con los trabajos a los que se hizo referencia.
- **Ejemplo.** Para la antena, [NASA06] documenta el desarrollo y [NASA07] el uso durante el vuelo.
- **Cierre.** Si se requiere el detalle de una fuente, comparte la ruta a [la bibliografía comentada](../investigacion/fuentes.md).
