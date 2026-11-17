---
layout: touring
section: 05 / APLICACIONES Y CASOS DE USO
---

<h1 class="slide-title">¿Qué se está optimizando?</h1>

<div class="applications-ledger">
  <div class="applications-head" aria-hidden="true">
    <span>Candidato</span><span>Qué varía en la búsqueda</span><span>Referencia visual y evidencia</span>
  </div>
  <section class="applications-row pso">
    <svg viewBox="0 0 156 88" aria-hidden="true" class="applications-sketch">
      <rect x="49" y="35" width="32" height="46" />
      <rect x="102" y="6" width="24" height="24" />
      <path d="M13 69 H36 V23 H87 L106 47 H141" class="sketch-main" />
      <circle cx="13" cy="69" r="4.5" class="sketch-dot" />
      <circle cx="141" cy="47" r="5.5" class="sketch-target" />
    </svg>
    <div>
      <h2>Trayectorias de un robot móvil</h2>
      <p>PSO busca rutas parciales que eviten obstáculos.</p>
    </div>
    <div class="applications-evidence">
      <img class="application-image" src="/assets/imagenes/robot-nasa-k10.jpg" alt="Robot K10 de NASA, imagen ilustrativa de un robot móvil" />
      <strong>Prueba con robot físico</strong>
    </div>
  </section>
  <section class="applications-row pso">
    <svg viewBox="0 0 156 88" aria-hidden="true" class="applications-sketch">
      <path d="M15 10 V76 H140" />
      <path d="M25 77 C87 64 63 30 140 13" class="sketch-main sketch-dashed" />
      <circle cx="34" cy="42" r="5" class="sketch-dot" />
      <circle cx="50" cy="30" r="5" class="sketch-dot" />
      <circle cx="69" cy="19" r="5" class="sketch-dot" />
      <circle cx="106" cy="59" r="5" class="sketch-target" />
      <circle cx="116" cy="39" r="5" class="sketch-target" />
      <circle cx="129" cy="54" r="5" class="sketch-target" />
    </svg>
    <div>
      <h2>Configuraciones de un clasificador</h2>
      <p>PSO elige variables de entrada e hiperparámetros del núcleo de una SVM.</p>
    </div>
    <div class="applications-evidence">
      <img class="application-image" src="/assets/imagenes/svm.svg" alt="Ejemplo gráfico de separación entre dos clases con una SVM" />
      <strong>Prueba con conjuntos de datos</strong>
    </div>
  </section>
  <section class="applications-row ga">
    <svg viewBox="0 0 156 88" aria-hidden="true" class="applications-sketch">
      <path d="M22 25L75 15L130 34M22 25L75 44L130 34M22 25L75 73L130 54M22 63L75 15L130 54M22 63L75 44L130 54M22 63L75 73L130 34" class="sketch-network" />
      <path d="M22 63L75 44L130 34" class="sketch-main" />
      <circle cx="22" cy="25" r="5" />
      <circle cx="22" cy="63" r="5" class="sketch-dot" />
      <circle cx="75" cy="15" r="5" />
      <circle cx="75" cy="44" r="5.5" class="sketch-dot" />
      <circle cx="75" cy="73" r="5" />
      <circle cx="130" cy="34" r="5" class="sketch-dot" />
      <circle cx="130" cy="54" r="5" />
    </svg>
    <div>
      <h2>Pesos de una red neuronal</h2>
      <p>Un GA ajusta los pesos de la red a partir de la recompensa que logra en Atari.</p>
    </div>
    <div class="applications-evidence">
      <img class="application-image" src="/assets/imagenes/atari.jpg" alt="Consola Atari 2600, ilustración de la plataforma de juegos" />
      <strong>Prueba en juegos simulados</strong>
    </div>
  </section>
</div>

<!--
Sebastián Ramírez · 1:40

Pregunta al público qué representaría un candidato en cada fila. En robótica es una trayectoria parcial. Bouraine y Azouaoui probaron su variante de PSO en simulación y en una plataforma física de investigación. En clasificación, Huang y Dun usaron PSO para buscar conjuntamente qué variables entran y cómo se configura el núcleo de una máquina de vectores de soporte (SVM). La SVM es quien aprende a clasificar a partir de ejemplos etiquetados. En Atari, Such y sus coautores aplicaron un algoritmo genético basado en mutación para buscar pesos de una red. El ambiente da una recompensa para evaluar cada red. Los tres esquemas son didácticos.

Transición. «Una trayectoria y un vector de pesos son candidatos muy distintos. Ahora veamos cómo se representó una pieza que terminó en órbita».

Fuentes. [Bouraine y Azouaoui (2021)](https://doi.org/10.1017/S0263574720000806), [Huang y Dun (2008)](https://doi.org/10.1016/j.asoc.2007.10.007) y [Such et al. (2018)](https://arxiv.org/abs/1712.06567v3).
-->

---
layout: touring
section: 05 / APLICACIONES Y CASOS DE USO
---

<div class="st5-layout">
  <div class="st5-story">
    <div class="st5-mission">NASA / SPACE TECHNOLOGY 5</div>
    <h1 class="slide-title">Una antena evolucionada<br>llegó a órbita</h1>
    <div class="st5-steps">
      <div class="st5-step">
        <strong>Problema</strong>
        <p>Un cambio de órbita exigió cubrir nuevos ángulos de comunicación.</p>
      </div>
      <div class="st5-step">
        <strong>Búsqueda</strong>
        <p>El algoritmo combinó y mutó diseños de alambre simulados. La aptitud valoró la ganancia y la reflexión de la señal.</p>
      </div>
      <div class="st5-step">
        <strong>Pruebas</strong>
        <p>NASA Goddard confirmó el cumplimiento de los requisitos en una cámara anecoica.</p>
      </div>
    </div>
    <div class="st5-process" aria-label="Proceso de diseño evolutivo de la antena">
      <div class="st5-process-step"><span class="process-number">1</span><div><b>Requisitos</b><small>Ángulos y señal</small></div></div>
      <div class="st5-process-step"><span class="process-number">2</span><div><b>Candidatos</b><small>Crear y variar</small></div></div>
      <div class="st5-process-step"><span class="process-number">3</span><div><b>Evaluación</b><small>Simular y probar</small></div></div>
      <div class="st5-process-step"><span class="process-number">4</span><div><b>Selección</b><small>Antena de misión</small></div></div>
    </div>
    <div class="st5-flight">
      <span class="st5-year">2006</span>
      <div><strong>3 microsatélites</strong><p>Cada uno operó con una antena evolucionada.</p></div>
    </div>
  </div>
  <figure class="st5-photo">
    <img src="/assets/imagenes/antena-nasa-st5.jpg" alt="Prototipo de un solo alambre doblado sobre un conector dorado. Una moneda muestra su escala." width="300" height="358" />
    <figcaption><strong>Prototipo del diseño de vuelo ST5-33-142-7</strong></figcaption>
  </figure>
</div>

<!--
Sebastián Ramírez · 2:10

Señala la moneda para que se vea la escala. El cambio a una órbita polar baja exigió una señal útil en ángulos que el diseño inicial de cuatro brazos no cubría bien. Los ingenieros delimitaron el nuevo espacio de búsqueda a un solo alambre. Cada candidato era un programa que construía una forma mediante segmentos y giros. Un simulador estimaba la ganancia por dirección y la relación de onda estacionaria, que indica el desajuste y la reflexión en la alimentación de la antena. El equipo dio preferencia a los diseños con mejor aptitud, recombinó partes de sus programas y mutó instrucciones.

La foto muestra el prototipo del diseño revisado. NASA Goddard comprobó sus prestaciones en una cámara anecoica, que reduce las reflexiones de las paredes. Los tres microsatélites despegaron el 22 de marzo de 2006. Cada uno llevaba una antena evolucionada y una convencional de hélice cuadrifilar. El informe posterior confirma que usaron las antenas evolucionadas durante la misión.

Transición. «Con la misma idea de evaluar candidatos aparecen dos estrategias muy distintas. Nicolás las pone lado a lado».

Fuentes. [Hornby et al. (2006), sec. II y fig. 2b](https://ntrs.nasa.gov/citations/20060024675), [Carlisle y Webb (2007), apartado Evolved Antenna](https://ntrs.nasa.gov/citations/20080013221). [Fotografía JPL](https://www.jpl.nasa.gov/nmp/st5/TECHNOLOGY/antenna.html).
-->
