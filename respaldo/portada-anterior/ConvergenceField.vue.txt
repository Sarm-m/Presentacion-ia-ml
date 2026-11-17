<script setup lang="ts">
const target = { x: 529, y: 250 }
const points = [
  [87, 52], [142, 63], [199, 42], [39, 118], [89, 164], [163, 138],
  [239, 121], [272, 142], [205, 206], [108, 225], [67, 273], [27, 333],
  [135, 330], [178, 371], [79, 404], [34, 473], [65, 528], [155, 546],
  [198, 491], [230, 445], [257, 531], [242, 68], [345, 64], [404, 111],
  [337, 151], [383, 184], [455, 166], [482, 194], [383, 223], [424, 241],
  [280, 274], [306, 315], [262, 359], [298, 416], [346, 402], [382, 358],
  [368, 506], [436, 472], [465, 420], [497, 359], [565, 406], [595, 473],
  [625, 436], [485, 498], [422, 326], [463, 304],
]

const paths = points.map(([x, y], index) => {
  const endX = target.x - 18 + (index % 5) * 4
  const endY = target.y + (index % 7 - 3) * 4
  const side = x < target.x ? 1 : -1
  const sweep = (target.y - y) * 0.46
  const controlX = x + (endX - x) * 0.28
  const controlY = y + sweep + (index % 3 - 1) * 31
  return {
    x, y,
    path: `M ${x} ${y} C ${controlX} ${controlY} ${endX - side * 91} ${endY - sweep * 0.45} ${endX} ${endY}`,
    radius: index < 21 ? 5.1 : 4.4,
    tone: index < 21 ? 'var(--blue)' : 'var(--teal)',
    opacity: index < 21 ? 0.28 : 0.34,
  }
})

const arrows = [
  [355, 235, 3], [399, 252, -1], [452, 243, 7], [416, 205, 22],
  [466, 221, 28], [432, 284, -24], [487, 262, -24], [464, 322, -44],
  [371, 334, -38], [500, 302, -59], [532, 316, -100], [566, 333, -122],
]
</script>

<template>
  <svg class="convergence" viewBox="0 0 680 586" role="img" aria-labelledby="convergence-title">
    <title id="convergence-title">Trayectorias de búsqueda de varias soluciones hacia una región prometedora</title>
    <g fill="none" stroke="var(--amber)" stroke-width="1" stroke-dasharray="6 8">
      <circle v-for="(radius, index) in [22, 47, 81, 117, 160, 208]" :key="radius"
        :cx="target.x" :cy="target.y" :r="radius" :opacity="0.82 - index * 0.08" />
    </g>
    <g fill="none">
      <path v-for="point in paths" :key="point.path" :d="point.path" :stroke="point.tone"
        :opacity="point.opacity" :stroke-width="0.9" />
    </g>
    <path v-for="([x, y, rotation], index) in arrows" :key="index" d="M -6 -4 L 6 0 L -6 4 Z"
      :transform="'translate(' + x + ' ' + y + ') rotate(' + rotation + ')'" fill="var(--teal)" />
    <circle v-for="point in paths" :key="point.path" :cx="point.x" :cy="point.y"
      :r="point.radius" :fill="point.tone" />
    <circle :cx="target.x" :cy="target.y" r="10.5" fill="var(--amber)" />
  </svg>
</template>
