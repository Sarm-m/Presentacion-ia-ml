---
theme: default
title: "TOURING · Algoritmos evolutivos / Swarm"
info: "Introducción a la Inteligencia Artificial"
layout: touring
cover: true
canvasWidth: 1280
aspectRatio: 16/9
colorSchema: light
fonts:
  provider: none
  sans: Geist Variable
  mono: IBM Plex Mono
transition: fade
duration: 25min
timer: countdown
drawings:
  enabled: false
---

<ConvergenceField />

<div class="cover-copy">
  <h1>La inteligencia<br>de muchas<br>soluciones</h1>
  <span class="cover-rule" aria-hidden="true"></span>
  <p>Algoritmos evolutivos / Swarm</p>
</div>

<p class="cover-team">Daniel Castro · Santiago Silva<br>Sebastián Ramírez · Nicolás Pinilla</p>

<svg class="cover-chromosome" viewBox="0 0 376 44" aria-hidden="true">
  <path d="M 10 1 H 1 V 43 H 10 M 366 1 H 375 V 43 H 366 M 28 22 H 350" stroke="var(--ink)" fill="none" />
  <circle cx="36" cy="22" r="8" fill="var(--blue)" />
  <circle cx="70" cy="22" r="8" fill="var(--blue)" />
  <circle cx="104" cy="22" r="8" fill="var(--teal)" />
  <circle cx="138" cy="22" r="8" fill="var(--teal)" />
  <circle cx="172" cy="22" r="8" fill="var(--blue)" />
  <circle cx="206" cy="22" r="8" fill="var(--teal)" />
  <circle cx="240" cy="22" r="9" fill="var(--amber)" />
  <circle cx="274" cy="22" r="8" fill="var(--teal)" />
  <circle cx="308" cy="22" r="8" fill="var(--blue)" />
  <circle cx="342" cy="22" r="8" fill="var(--teal)" />
</svg>

<!--
Daniel Castro · 0:30

Preséntanos como TOURING y menciona a los cuatro integrantes. Hoy exploraremos dos maneras de aprovechar la información de varias soluciones para buscar una mejor. Las trayectorias de la portada son una ilustración conceptual.

Transición: «Veamos primero un problema que podemos resolver a la vista».
-->

---
layout: touring
section: "01 / INTRODUCCIÓN"
---

<h1 class="slide-title">¿Cómo buscar sin probarlo todo?</h1>

<div class="intro-grid">
  <div class="intro-narrative">
    <p>Imagina que puedes medir la altura de un punto del terreno, pero cada medición consume tiempo.</p>
    <hr>
    <p><strong>Objetivo</strong><br>Encontrar la mayor altura.</p>
    <p class="secondary">Cada posición <em>x</em> es una solución. Su altura <em>h(x)</em> mide su calidad.</p>
  </div>
  <div class="intro-terrain"><TerrainChart /></div>
</div>

<!--
Daniel Castro · 1:35

Muestra los dos picos y pregunta dónde medirían si solo tuvieran unas pocas consultas. Nosotros vemos el perfil completo para poder verificar el ejemplo. Los algoritmos solo reciben la altura en los puntos que evalúan. El pico de x = 4 es local y el máximo de todo el tramo está en x = 12. En este terreno pequeño se puede calcular todo. El reto aparece cuando hay numerosas variables o cada consulta exige una simulación costosa.

Transición: «Para decidir dónde probar después, podemos imitar dos procesos de la naturaleza».
-->

---
layout: touring
section: "01 / INTRODUCCIÓN"
sources: "HOLLAND (1975)  /  KENNEDY Y EBERHART (1995)  /  FUENTES FOTOGRÁFICAS EN EL PIE"
---

<h1 class="slide-title">Dos formas de buscar en grupo</h1>
<p class="slide-subtitle">Ambas son metaheurísticas. Guían la búsqueda iterativa con reglas generales y una función objetivo.</p>

<div class="history-pair">
  <article class="history-origin ga-origin">
    <span class="date blue">1975</span>
    <div class="history-detail">
      <figure class="historian-portrait"><img class="historian-photo" src="/assets/imagenes/john-holland-university-of-michigan.jpg" alt="John Holland, retratado en su oficina por la Universidad de Michigan" width="94" height="94" /><figcaption>John Holland</figcaption></figure>
      <div class="history-copy">
        <h2>Algoritmos Genéticos (GA)</h2>
        <p class="history-name"><i>Genetic Algorithm</i> significa «Algoritmo Genético».</p>
        <p>Holland los presenta en 1975. Una población busca mejores soluciones mediante selección, cruce y mutación.</p>
      </div>
    </div>
  </article>
  <article class="history-origin pso-origin">
    <span class="date teal">1995</span>
    <div class="history-detail">
      <div class="researcher-photos" aria-label="James Kennedy y Russell Eberhart">
        <figure><img src="/assets/imagenes/james-kennedy.jpg" alt="James Kennedy junto a su familia" width="148" height="118" /><figcaption>James Kennedy</figcaption></figure>
        <figure><img src="/assets/imagenes/russell-eberhart.jpg" alt="Retrato de Russell Eberhart" width="108" height="118" /><figcaption>Russell Eberhart</figcaption></figure>
      </div>
      <div class="history-copy">
        <h2>Optimización por Enjambre de Partículas (PSO)</h2>
        <p class="history-name">PSO significa <i>Particle Swarm Optimization</i>.</p>
        <p>Kennedy y Eberhart la presentan en 1995. Cada partícula aprovecha su experiencia y la mejor posición encontrada por el grupo.</p>
      </div>
    </div>
  </article>
</div>

<div class="ml-band">
  <h2>Tipo de aprendizaje</h2>
  <div>
    <p>GA y PSO son <strong>métodos de optimización</strong>. El tipo de aprendizaje depende de la tarea donde se usen.</p>
    <p>En clasificación supervisada pueden ajustar pesos o hiperparámetros usando una métrica de desempeño.</p>
  </div>
</div>

<!--
Daniel Castro · 1:40

Ubica el problema dentro de IA. Optimizar significa buscar un valor o configuración que maximice o minimice una función. Una metaheurística aporta un marco de búsqueda que puede aplicarse a distintos problemas. Holland es un hito de los GA, y PSO es un exponente de la inteligencia de enjambre. El origen colectivo inspira el método. Si se usa en un clasificador con etiquetas, la tarea sigue siendo supervisada. Para ajustar hiperparámetros se entrena el modelo y se mide en validación. Si la tarea consiste en encontrar una geometría de antena, podemos optimizar físicamente sin tener un problema de aprendizaje.

Fuentes y fotografías. [H75], [KE95], [University of Michigan: John Holland](https://lsa.umich.edu/cscs/people/in-memoriam/JohnHolland1929-2015.html), [ACISS 2009: James Kennedy y Russell Eberhart, diapositiva 9](https://ecs.wgtn.ac.nz/foswiki/pub/Groups/ECRG/ResearchTeam/vuw-pso-xli.pdf).

Transición: «Empecemos con la familia que construye nuevas soluciones a partir de una población».
-->

---
layout: touring
section: "02 / FUNDAMENTOS TEÓRICOS"
sources: "HOLLAND (1975)  /  LUKE (2026)"
---

<h1 class="slide-title">Una población que cambia</h1>
<p class="slide-subtitle">En el algoritmo genético, cada individuo codifica una solución candidata.</p>

<div class="genetics-frame">
  <div class="population">
    <span class="micro">GENERACIÓN INICIAL</span>
    <div class="population-row"><GenomeBits value="0001" /><code>x = 1</code><code>h = 3</code></div>
    <div class="population-row"><GenomeBits value="0101" selected /><code>x = 5</code><code>h = 7</code></div>
    <div class="population-row"><GenomeBits value="1010" selected /><code>x = 10</code><code>h = 9</code></div>
    <div class="population-row"><GenomeBits value="1111" /><code>x = 15</code><code>h = 4</code></div>
    <span class="population-note">En el ejemplo la aptitud (<em>fitness</em>) es la altura.</span>
  </div>
  <div class="genetics-explain">
    <p>Cuatro bits representan una posición entera <em>x</em>. La aptitud orienta qué individuos se reproducen.</p>
    <dl class="gene-operations">
      <div><dt>Selección</dt><dd>Elige progenitores según su aptitud.</dd></div>
      <div><dt>Cruce</dt><dd>Recombina partes de sus representaciones.</dd></div>
      <div><dt>Mutación</dt><dd>Introduce cambios, por ejemplo invierte un bit.</dd></div>
    </dl>
    <p class="new-gen">La regla de reemplazo forma la generación siguiente.</p>
  </div>
</div>

<!--
Daniel Castro · 1:40

La cadena 0101 significa 5. El algoritmo evalúa al 5 por su altura, 7. El 10 tiene altura 9. Los cuatro individuos forman una población. En la demostración seleccionamos los mejor puntuados para hacer visibles las operaciones. Existen variantes con selección probabilística y otras codificaciones. El cruce mezcla partes conocidas. La mutación puede introducir un valor que esa combinación no tenía. Llamamos generación a cada renovación de la población.

Fuentes: [H75], [L26].

Transición a Santiago: «Ya vimos qué se hereda cuando la población se renueva. Ahora, ¿qué conserva una partícula cuando se mueve?».
-->

---
layout: touring
section: "02 / FUNDAMENTOS TEÓRICOS"
sources: "KENNEDY Y EBERHART (1995)  /  SHI Y EBERHART (1998)"
---

<h1 class="slide-title">Una partícula con memoria</h1>
<p class="slide-subtitle">La posición es una solución y la velocidad indica cómo cambiarla.</p>

<div class="pso-model">
  <svg viewBox="0 0 647 304" role="img" aria-labelledby="pso-forces">
    <title id="pso-forces">Una partícula tiene velocidad hacia la derecha. Su mejor personal queda a la izquierda y la mejor posición compartida queda más a la derecha.</title>
    <defs>
      <marker id="momentum-pointer" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="var(--muted)" /></marker>
      <marker id="private-pointer" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="var(--blue)" /></marker>
      <marker id="swarm-pointer" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="var(--teal)" /></marker>
    </defs>
    <path d="M 20 217 H 625" stroke="var(--line)" stroke-width="2" />
    <path d="M 161 81 V 206 M 322 30 V 206 M 554 150 V 206" stroke="var(--line)" stroke-dasharray="3 6" />
    <line x1="322" y1="45" x2="405" y2="45" stroke="var(--muted)" stroke-width="3" marker-end="url(#momentum-pointer)" />
    <line x1="322" y1="102" x2="162" y2="102" stroke="var(--blue)" stroke-width="3" marker-end="url(#private-pointer)" />
    <line x1="322" y1="159" x2="553" y2="159" stroke="var(--teal)" stroke-width="3" marker-end="url(#swarm-pointer)" />
    <g class="pso-vector-labels">
      <text x="359" y="32" fill="var(--muted)">Inercia</text>
      <text x="174" y="89" fill="var(--blue)">Atracción personal</text>
      <text x="354" y="146" fill="var(--teal)">Atracción social</text>
    </g>
    <circle cx="161" cy="217" r="7" fill="var(--blue)" />
    <circle cx="322" cy="217" r="10" stroke="var(--ink)" fill="var(--paper)" stroke-width="3" />
    <circle cx="554" cy="217" r="9" fill="var(--amber)" />
    <g class="pso-position-labels">
      <text x="161" y="253" text-anchor="middle" fill="var(--blue)">pbest</text>
      <text x="322" y="253" text-anchor="middle" fill="var(--ink)">posición actual</text>
      <text x="554" y="253" text-anchor="middle" fill="var(--teal)">gbest</text>
    </g>
  </svg>
  <div>
    <dl class="pso-terms">
      <div><dt>Inercia</dt><dd>Conserva parte del movimiento previo.</dd></div>
      <div><dt class="blue">Mejor personal</dt><dd>Mejor posición que visitó esa partícula.</dd></div>
      <div><dt class="teal">Mejor del enjambre</dt><dd>Mejor posición hallada por el grupo.</dd></div>
    </dl>
    <p class="pso-foot">El enjambre comparte su mejor hallazgo.</p>
  </div>
</div>

<!--
Santiago Silva · 1:30

En PSO cada partícula recorre posiciones y guarda un récord propio. El enjambre global comparte el mejor de esos récords. Señala las tres flechas: parte del impulso previo, una atracción a pbest y otra a gbest. Pueden apuntar en sentidos distintos y entran en una suma ponderada y aleatoria. El dibujo muestra direcciones posibles, con longitudes esquemáticas. Gbest es la mejor solución conocida por el grupo. El óptimo global del problema se define sobre todo el espacio. Usamos el PSO con inercia y vecindad global.

Fuentes: [KE95], [SE98].

Transición: «Apliquemos ahora ambos mecanismos al terreno de la introducción».
-->

---
layout: touring
section: "03 / ALGORITMO BÁSICO"
sources: "HOLLAND (1975)  /  LUKE (2026)  /  EJEMPLO DIDÁCTICO"
clicks: 3
---

<h1 class="slide-title">Una generación en cuatro pasos</h1>
<p class="slide-subtitle">GA en el terreno. Se evalúan posiciones enteras y se heredan fragmentos de los cuatro bits.</p>

<div class="demo-body"><GeneticDemo /></div>

<!--
Santiago Silva · 1:50

En el terreno hay cuatro posiciones iniciales, 1, 5, 10 y 15. Evalúa cada una por su altura. Las flechas de navegación revelan las operaciones.

[click] Selección. En esta ejecución elegimos a 0101 y 1010 por su aptitud 7 y 9.
[click] Cruce. Separamos después del segundo bit. Al intercambiar los sufijos 01 y 10, salen 0110 (x = 6) y 1001 (x = 9).
[click] Mutación. Cambiamos el segundo bit de 1001. Queda 1101, que representa x = 13 y alcanza altura 10. Conservamos los dos padres seleccionados y añadimos ambos descendientes. El mejor avanza de 9 a 10.

La escena muestra una generación didáctica con decisión de cruce y mutación fijada. En la práctica se elige un presupuesto o criterio de parada, por ejemplo un máximo de generaciones. Otras ejecuciones pueden perder calidad en sus descendientes.

Fuentes: [H75], [L26] y cálculos en la verificación.

Transición: «En el mismo terreno, PSO va a cambiar posiciones sin cruzar cadenas».
-->

---
layout: touring
section: "03 / ALGORITMO BÁSICO"
sources: "KENNEDY Y EBERHART (1995)  /  SHI Y EBERHART (1998)  /  EJEMPLO DIDÁCTICO"
clicks: 3
---

<h1 class="slide-title">Tres movimientos del enjambre</h1>
<p class="slide-subtitle">PSO en el mismo terreno. Las partículas pueden visitar posiciones intermedias.</p>

<div class="demo-body"><SwarmDemo /></div>

<!--
Santiago Silva · 2:10

Inicia A en 2, B en 8 y C en 10. Evalúa sus alturas 5, 5 y 9. Cada una registra su posición inicial como pbest y el enjambre comparte x = 10. Cada iteración usa los mejores registros anteriores para calcular velocidad y posición. Allí se evalúa la nueva altura y se actualizan los registros.

[click] A llega a x = 6,5 con altura 4 y conserva su mejor personal en x = 2, de altura 5.
[click] B mide altura 10 en x = 10,5 y el enjambre actualiza su mejor registro.
[click] B mide 11 en x = 11. Observa cómo cambian las posiciones del resto.

Los factores aleatorios se fijaron en 0,5 para reproducir la aritmética. La inercia es 0,5 y los coeficientes de atracción valen 1. Este ejemplo muestra tres iteraciones. En práctica el ciclo se repite hasta alcanzar el criterio de parada, como agotar las evaluaciones. El máximo del terreno sigue en x = 12 con altura 13.

Fuentes: [KE95], [SE98] y cálculos en la verificación.

Transición a Sebastián: «Ya vimos de qué forma exploran. ¿Cuánto cuesta esa búsqueda cuando salimos del ejemplo?».
-->

---
layout: touring
section: "04 / VENTAJAS Y DESVENTAJAS"
tone: dark
sources: "LUKE (2026)  /  RUDOLPH (1994)  /  VAN DEN BERGH Y ENGELBRECHT (2010)  /  COCO"
---

<h1 class="slide-title">El costo de explorar</h1>
<p class="slide-subtitle">Cuando evaluar una solución exige una simulación, el presupuesto de búsqueda es decisivo.</p>

<div class="tradeoff">
  <article>
    <span class="micro teal">FORTALEZAS</span>
    <h2>Explorar varias zonas</h2>
    <p>Una población permite evaluar candidatos dispersos, incluso en superficies con varios picos.</p>
    <p><span>Ambas familias admiten objetivos evaluables aunque el gradiente sea difícil de obtener.</span></p>
  </article>
  <article>
    <span class="micro amber">LIMITACIONES</span>
    <h2>Evaluar cuesta</h2>
    <p>Los parámetros afectan la diversidad y el grupo puede concentrarse demasiado pronto.</p>
    <p><span>El resultado depende de cómo se define la aptitud. En general, el óptimo global no está garantizado.</span></p>
  </article>
</div>

<p class="trade-rule"><b>Comparación justa.</b> Mantener el mismo presupuesto de evaluaciones y repetir con distintas semillas.</p>

<!--
Sebastián Ramírez · 1:35

La ventaja de mantener varios candidatos es poder explorar regiones distintas. En algunos problemas la calidad viene de una simulación, un ensayo o una métrica sin derivada práctica. La dificultad aparece si cada evaluación tarda mucho, si el objetivo premia algo distinto de lo que se quería o si el grupo se concentra pronto. Para comparar métodos fija presupuesto y objetivo, registra tiempo, factibilidad y mejor resultado, y repite con varias semillas. Aun si una versión tiene un resultado asintótico bajo supuestos, la ejecución que podemos pagar tiene un presupuesto finito.

Fuentes: [L26], [R94], [V10], [COCO16].

Transición: «Miremos qué cuenta como candidato y qué cuenta como calidad en problemas reales de investigación».
-->

---
src: ./capitulos/aplicaciones.md
---

---
layout: touring
section: "06 / COMPARACIÓN CON OTRAS TÉCNICAS"
sources: "HOLLAND (1975)  /  KENNEDY Y EBERHART (1995, 1997)  /  LUKE (2026)"
---

<h1 class="slide-title">GA frente a PSO</h1>
<p class="slide-subtitle">Los dos evalúan poblaciones. Cada familia aprovecha de forma distinta lo que ya exploró.</p>

<table class="compare-grid">
  <colgroup><col style="width: 211px"><col><col></colgroup>
  <thead><tr><th scope="col">Aspecto</th><th scope="col" class="ga-col">Algoritmo genético</th><th scope="col" class="pso-col">Particle Swarm Optimization</th></tr></thead>
  <tbody>
    <tr><th scope="row">Inspiración</th><td>Evolución y herencia</td><td>Movimiento colectivo</td></tr>
    <tr><th scope="row">Representación</th><td>Genotipo, por ejemplo bits o reales</td><td>Posición y velocidad, típicamente reales</td></tr>
    <tr v-click="1"><th scope="row">Búsqueda</th><td>Selecciona, recombina y muta</td><td>Mueve partículas y actualiza recuerdos</td></tr>
    <tr v-click="1"><th scope="row">Información</th><td>Herencia a través de los descendientes</td><td>Mejor personal y mejor del grupo</td></tr>
    <tr v-click="2"><th scope="row">Parámetros</th><td>Tamaño, selección, cruce y mutación</td><td>Tamaño, inercia y atracciones</td></tr>
    <tr v-click="2"><th scope="row">Casos típicos</th><td>Configuraciones y diseños codificables</td><td>Ajuste de parámetros continuos</td></tr>
  </tbody>
</table>

<!--
Nicolás Pinilla · 1:50

Empieza con el contraste que vivieron en el terreno. En GA el candidato es una representación. En PSO lleva una posición y un movimiento.

[click] En GA la calidad determina las oportunidades de reproducción y partes de los genotipos pasan a los descendientes. En PSO, la misma partícula se mueve usando sus registros y el mejor compartido.
[click] Menciona los controles que afectan la búsqueda. La tabla describe casos típicos. Existen GA sobre variables reales y variantes de PSO para variables binarias, entre otras.

Fuentes: [H75], [KE95], [SE98], [KE97], [L26].

Transición: «Antes de elegir alguno, revisemos dos alternativas de búsqueda y qué papel cumple el modelo de aprendizaje».
-->

---
layout: touring
section: "06 / COMPARACIÓN CON OTRAS TÉCNICAS"
sources: "BOYD Y VANDENBERGHE (2004)  /  BERGSTRA Y BENGIO (2012)  /  SCIKIT-LEARN"
---

<h1 class="slide-title">¿Cuándo conviene usar GA o PSO?</h1>

<div class="choice-grid">
  <div>
    <h2>Métodos para buscar una solución</h2>
    <div class="choice-row">
      <b>Gradiente</b><span>Cuando hay derivadas útiles, ofrecen una dirección local para mejorar.</span>
    </div>
    <div class="choice-row">
      <b>Búsqueda aleatoria</b><span>Sirve como referencia de bajo costo para juzgar si guiar la búsqueda aporta valor.</span>
    </div>
    <div class="choice-row">
      <b>GA o PSO</b><span>Considerarlos con objetivos evaluables, gradientes poco prácticos y presupuesto para explorar.</span>
    </div>
  </div>
  <aside class="learning-box">
    <h2>Algoritmos de aprendizaje</h2>
    <p><strong>K-means</strong> agrupa datos. Su procedimiento optimiza la dispersión dentro de los grupos.</p>
    <p><strong>Random Forest</strong> aprende con etiquetas para clasificar o predecir.</p>
  </aside>
</div>
<p class="budget"><b>Ejemplo de uso.</b> PSO puede buscar los hiperparámetros de un clasificador que se evalúa en validación.</p>

<!--
Nicolás Pinilla · 1:55

El gradiente usa información local cuando se cuenta con derivadas aprovechables. La búsqueda aleatoria prueba candidatos independientes de los resultados previos y ofrece una referencia razonable, incluso para algunos hiperparámetros. Si el objetivo es evaluable pero tiene discontinuidades o es una simulación, puede tener sentido probar GA o PSO y exigir una mejora frente a esa referencia. K-means es aprendizaje no supervisado y su objetivo formal usa distancias. Random Forest es un método supervisado. Ambos pueden recibir hiperparámetros seleccionados por un optimizador externo. La validación elige, y el conjunto de prueba estima rendimiento final.

Fuentes: [BV04], [BB12], [SkL], [HD08].

Transición: «Volvamos a la idea que comparten los dos métodos».
-->

---
layout: touring
section: "07 / RESUMEN Y CONCLUSIONES"
---

<h1 class="slide-title">Qué conserva cada búsqueda</h1>
<p class="slide-subtitle">Una función objetivo permite evaluar candidatos y aprovechar lo aprendido en cada iteración.</p>

<div class="synthesis">
  <article>
    <h2 class="blue">GA hereda fragmentos</h2>
    <p>La selección y la variación cambian la población a lo largo de las generaciones.</p>
  </article>
  <article>
    <h2 class="teal">PSO comparte posiciones</h2>
    <p>Las partículas cambian su movimiento con memoria personal y social.</p>
  </article>
  <article>
    <h2>Cuándo ayudan</h2>
    <p>Al explorar diseños o parámetros cuando podemos medir la calidad de cada candidato.</p>
  </article>
  <article>
    <h2>Qué hay que medir</h2>
    <p>La calidad alcanzada, el costo de las evaluaciones y la variación entre ejecuciones.</p>
  </article>
</div>

<p class="synthesis-end">Una geometría tan compleja como la antena ST5 pudo surgir de repetir cambios pequeños y medir su efecto.</p>

<!--
Nicolás Pinilla · 1:20

Deja una imagen mental de cada familia. En GA cambia la población por generaciones. En PSO persisten partículas con memoria. Los métodos pueden ser útiles si es posible evaluar un candidato y repetir la evaluación un número razonable de veces. Su calidad real se demuestra con comparaciones bajo el mismo presupuesto. Cierra el hilo con la antena: pequeñas variaciones guiadas por una medida física dieron lugar a una geometría que se probó y voló.

Fuentes: [L26], [NASA06], [NASA07], [COCO16].

Transición: «Con esa idea, pensemos en una decisión de diseño experimental».
-->

---
layout: touring
section: "07 / RESUMEN Y CONCLUSIONES"
tone: dark
---

<div class="question">
  <h1 class="slide-title">Preguntas</h1>
  <div class="question-line" aria-hidden="true"></div>
  <p>Si solo pudieras evaluar <strong>100 candidatos</strong>, ¿cómo compararías dos algoritmos de búsqueda?</p>
  <svg class="budget-mark" viewBox="0 0 490 400" aria-hidden="true">
    <g fill="none" stroke="var(--line)" stroke-width="1">
      <circle cx="280" cy="200" r="170" stroke-dasharray="5 8" />
      <circle cx="280" cy="200" r="130" />
      <path d="M 84 200 H 474 M 280 6 V 394" stroke-dasharray="4 7" />
    </g>
    <path d="M 150 200 A 130 130 0 0 1 280 70" stroke="var(--teal)" stroke-width="5" fill="none" />
    <path d="M 280 330 A 130 130 0 0 0 410 200" stroke="var(--blue)" stroke-width="5" fill="none" />
    <circle cx="150" cy="200" r="6" fill="var(--teal)" />
    <circle cx="410" cy="200" r="6" fill="var(--blue)" />
    <circle cx="280" cy="70" r="7" fill="var(--amber)" />
    <text class="budget-value" x="280" y="223" text-anchor="middle" fill="var(--ink)">100</text>
  </svg>
</div>

<!--
Nicolás Pinilla · 0:25 de apertura + 2:40 para preguntas

Plantea la pregunta y escucha primero una respuesta. Si hace falta, sugiere la misma función objetivo, 100 evaluaciones por ejecución, varias semillas y una métrica antes de empezar. Si preguntan por comparaciones del ejemplo, recuerda que son trazas didácticas y GA usa aquí posiciones discretas. Luego abre preguntas del público. El equipo responde según su sección.

La siguiente página es el apéndice de referencias. Se puede abrir al final o ante una pregunta de fuentes.
-->

---
layout: touring
section: "APÉNDICE / FUENTES"
---

<h1 class="slide-title">Referencias</h1>

<div class="bibliography">
  <div class="bib-column">
    <div class="bib-entry"><a href="https://mitpress.mit.edu/9780262581110/adaptation-in-natural-and-artificial-systems/">[H75]</a><p>Holland, J. H. (1975/1992). <i>Adaptation in Natural and Artificial Systems.</i> University of Michigan Press / MIT Press.</p></div>
    <div class="bib-entry"><a href="https://staff.washington.edu/paymana/swarm/kennedy95-ijcnn.pdf">[KE95]</a><p>Kennedy, J. y Eberhart, R. (1995). <i>Particle Swarm Optimization.</i> IEEE ICNN.</p></div>
    <div class="bib-entry"><a href="https://doi.org/10.1109/ICEC.1998.699146">[SE98]</a><p>Shi, Y. y Eberhart, R. C. (1998). <i>A Modified Particle Swarm Optimizer.</i> IEEE ICEC.</p></div>
    <div class="bib-entry"><a href="https://people.cs.gmu.edu/~sean/book/metaheuristics/Essentials.pdf">[L26]</a><p>Luke, S. (2026). <i>Essentials of Metaheuristics</i>, v2.4. George Mason University.</p></div>
    <div class="bib-entry"><a href="https://doi.org/10.1109/72.265964">[R94]</a><p>Rudolph, G. (1994). <i>Convergence Analysis of Canonical Genetic Algorithms.</i> IEEE Transactions on Neural Networks.</p></div>
    <div class="bib-entry"><a href="https://doi.org/10.3233/FI-2010-370">[V10]</a><p>Van den Bergh, F. y Engelbrecht, A. P. (2010). <i>A Convergence Proof for the Particle Swarm Optimiser.</i> Fundamenta Informaticae.</p></div>
    <div class="bib-entry"><a href="https://www.jmlr.org/papers/v13/bergstra12a.html">[BB12]</a><p>Bergstra, J. y Bengio, Y. (2012). <i>Random Search for Hyper-Parameter Optimization.</i> JMLR.</p></div>
    <div class="bib-entry"><a href="https://doi.org/10.1109/ICSMC.1997.637339">[KE97]</a><p>Kennedy, J. y Eberhart, R. C. (1997). <i>A Discrete Binary Version of the Particle Swarm Algorithm.</i> IEEE SMC.</p></div>
    <div class="bib-entry"><a href="https://scikit-learn.org/stable/user_guide.html">[SkL]</a><p>Scikit-learn developers. <i>User Guide.</i> Secciones de clustering y conjuntos de árboles.</p></div>
  </div>
  <div class="bib-column">
    <div class="bib-entry"><a href="https://doi.org/10.1017/S0263574720000806">[BA21]</a><p>Bouraine, S. y Azouaoui, O. (2021). <i>Safe Motion Planning Based on a New Encoding Technique for Tree Expansion Using Particle Swarm Optimization.</i> Robotica.</p></div>
    <div class="bib-entry"><a href="https://doi.org/10.1016/j.asoc.2007.10.007">[HD08]</a><p>Huang, C.-L. y Dun, J.-F. (2008). <i>A Distributed PSO–SVM Hybrid System with Feature Selection and Parameter Optimization.</i> Applied Soft Computing.</p></div>
    <div class="bib-entry"><a href="https://arxiv.org/abs/1712.06567v3">[S18]</a><p>Such, F. P., et al. (2018). <i>Deep Neuroevolution: Genetic Algorithms Are a Competitive Alternative for Training Deep Neural Networks for Reinforcement Learning.</i> arXiv.</p></div>
    <div class="bib-entry"><a href="https://ntrs.nasa.gov/citations/20060024675">[NASA06]</a><p>Hornby, G. S., Globus, A., Linden, D. S. y Lohn, J. D. (2006). <i>Automated Antenna Design with Evolutionary Algorithms.</i> AIAA Space.</p></div>
    <div class="bib-entry"><a href="https://ntrs.nasa.gov/citations/20080013221">[NASA07]</a><p>Carlisle, C. y Webb, E. H. (2007). <i>Space Technology 5: A Successful Micro-Satellite Constellation Mission.</i> AIAA/USU.</p></div>
    <div class="bib-entry"><a href="https://www.jpl.nasa.gov/nmp/st5/TECHNOLOGY/antenna.html">[JPL04]</a><p>NASA/JPL (2004). <i>Space Technology 5.</i></p></div>
    <div class="bib-entry"><a href="https://web.stanford.edu/~boyd/cvxbook/">[BV04]</a><p>Boyd, S. y Vandenberghe, L. (2004). <i>Convex Optimization.</i> Cambridge University Press.</p></div>
    <div class="bib-entry"><a href="https://numbbo.github.io/coco-doc/perf-assessment/">[COCO16]</a><p>Hansen, N., et al. (2016). <i>COCO: Performance Assessment.</i> Guía del proyecto COCO.</p></div>
  </div>
</div>

<!--
Apéndice sin tiempo de exposición. Las fichas bibliográficas con enlaces y el registro de afirmaciones se encuentran en la carpeta investigacion.
-->




