<script setup lang="ts">
const contours = [1, .82, .64, .46, .29, .14]
const routes = [
  { tone: 'var(--blue)', path: 'M 45 117 C 118 132 142 248 252 244 S 340 206 391 176', points: [[45,117],[144,207],[252,244]] },
  { tone: 'var(--teal)', path: 'M 52 366 C 134 351 160 302 247 309 S 341 238 391 176', points: [[52,366],[150,329],[247,309]] },
  { tone: 'var(--blue)', path: 'M 225 57 C 276 85 267 158 332 178 S 369 181 391 176', points: [[225,57],[281,139],[332,178]] },
  { tone: 'var(--teal)', path: 'M 560 338 C 508 352 441 320 441 251 S 419 202 391 176', points: [[560,338],[474,321],[441,251]] },
]
</script>

<template>
  <svg class="convergence" viewBox="0 0 600 445" role="img" aria-label="Cuatro trayectorias recorren un mapa de nivel hacia una solución prometedora">
    <g v-for="scale in contours" :key="scale" :transform="'translate(391 176) scale(' + scale + ')'" fill="none">
      <path d="M -207 8 C -197 -115 -101 -164 -8 -146 C 80 -129 172 -113 185 -36 C 205 46 141 171 28 172 C -82 175 -226 88 -207 8 Z"
        stroke="var(--teal)" stroke-opacity=".28" vector-effect="non-scaling-stroke" />
    </g>
    <g v-for="route in routes" :key="route.path">
      <path :d="route.path" fill="none" :stroke="route.tone" stroke-width="2.4" stroke-linecap="round" />
      <circle v-for="([x, y]) in route.points" :key="x" :cx="x" :cy="y" r="5" :fill="route.tone" stroke="var(--paper)" stroke-width="2" />
    </g>
    <circle cx="391" cy="176" r="16" fill="var(--paper)" stroke="var(--amber)" stroke-width="2" />
    <circle cx="391" cy="176" r="8" fill="var(--amber)" />
  </svg>
</template>
