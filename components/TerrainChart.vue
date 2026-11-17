<script setup lang="ts">
import { computed } from 'vue'
import { heightAt, swarmFrames, terrainVertices } from './terrainModel'

const props = defineProps<{ step?: number }>()

const left = 64
const right = 744
const bottom = 293
const scaleX = (x: number) => left + ((right - left) * x) / 15
const scaleY = (height: number) => bottom - height * 18
const gridHeights = [0, 3, 6, 9, 12]
const gridPositions = terrainVertices.map(({ x }) => x)
const peaks = [
  { x: 4, title: 'Máximo local' },
  { x: 12, title: 'Máximo global' },
]

const ridge = terrainVertices.map(({ x, height }) => `${scaleX(x)},${scaleY(height)}`).join(' ')
const filledRidge = `${left},${bottom} ${ridge} ${right},${bottom}`
const currentFrame = computed(() => props.step === undefined ? undefined : swarmFrames[props.step])
const previousFrame = computed(() => props.step ? swarmFrames[props.step - 1] : undefined)
const firstParticle = computed(() => currentFrame.value?.particles[0])
const labelOffsets: Record<string, { x: number, y: number }> = {
  A: { x: -12, y: -17 },
  B: { x: -15, y: -16 },
  C: { x: 8, y: 24 },
}

function markerPosition(x: number) {
  return { transform: `translate(${scaleX(x)}px, ${scaleY(heightAt(x))}px)` }
}

const markers = computed(() => {
  const particles = currentFrame.value?.particles ?? []
  return particles.map(({ name, x }) => {
    const nearby = particles.filter(particle => particle.x === x)
    const label = nearby[0].name === name ? nearby.map(particle => particle.name).join(', ') : ''
    return { name, x, label, offset: labelOffsets[name] }
  })
})

const previousMarkers = computed(() => previousFrame.value?.particles.filter((particle, index) => (
  particle.x !== currentFrame.value?.particles[index].x
)))

const description = computed(() => currentFrame.value
  ? `Posiciones de las partículas en la iteración ${props.step} y mejor resultado conocido por el grupo.`
  : 'Terreno de búsqueda. El máximo local está en x igual a 4, con altura 9. El máximo global está en x igual a 12, con altura 13.')
</script>

<template>
  <svg class="terrain-chart" viewBox="0 0 780 352" role="img" :aria-label="description">
    <text x="0" y="25" class="axis-heading">Altura h(x)</text>

    <g v-for="height in gridHeights" :key="height">
      <line :x1="left" :x2="right" :y1="scaleY(height)" :y2="scaleY(height)" class="grid-line" />
      <text :x="left - 13" :y="scaleY(height) + 5" text-anchor="end" class="axis-tick">{{ height }}</text>
    </g>

    <polygon :points="filledRidge" class="ridge-fill" />
    <polyline :points="ridge" class="ridge-line" />
    <path :d="`M ${left} 41 V ${bottom} H ${right}`" class="axis-line" />

    <g v-for="x in gridPositions" :key="x">
      <line :x1="scaleX(x)" :x2="scaleX(x)" :y1="bottom" :y2="bottom + 7" class="axis-line" />
      <text :x="scaleX(x)" :y="bottom + 28" text-anchor="middle" class="axis-tick">{{ x }}</text>
    </g>
    <text :x="right" y="346" text-anchor="end" class="axis-heading">Posición x</text>

    <template v-if="currentFrame">
      <circle
        v-for="marker in previousMarkers" :key="marker.name"
        :cx="scaleX(marker.x)" :cy="scaleY(heightAt(marker.x))" r="5" class="previous-marker"
      />

      <g v-for="marker in markers" :key="marker.name" class="moving-marker" :style="markerPosition(marker.x)">
        <circle r="7.5" class="particle-marker" />
        <text :x="marker.offset.x" :y="marker.offset.y" class="particle-name">{{ marker.label }}</text>
      </g>

      <g v-if="firstParticle && firstParticle.personalBestX !== firstParticle.x" :style="markerPosition(firstParticle.personalBestX)">
        <path d="M 0 -8 L 8 0 L 0 8 L -8 0 Z" class="personal-marker" />
        <text x="14" y="-13" class="particle-name">Mejor de A</text>
      </g>

      <g class="moving-marker" :style="markerPosition(currentFrame.bestX)">
        <circle r="13" class="global-marker" />
      </g>
    </template>

    <template v-else>
      <g v-for="(peak, index) in peaks" :key="peak.x" :class="['peak', { 'peak-global': index === 1 }]">
        <line
          :x1="scaleX(peak.x)" :x2="scaleX(peak.x)"
          :y1="scaleY(heightAt(peak.x))" :y2="bottom" class="peak-guide"
        />
        <circle :cx="scaleX(peak.x)" :cy="scaleY(heightAt(peak.x))" r="9" class="peak-halo" />
        <circle :cx="scaleX(peak.x)" :cy="scaleY(heightAt(peak.x))" r="5.5" class="peak-dot" />
        <text :x="scaleX(peak.x)" :y="scaleY(heightAt(peak.x)) - 22" text-anchor="middle" class="peak-text">{{ peak.title }} ({{ heightAt(peak.x) }})</text>
      </g>
    </template>
  </svg>
</template>

<style scoped>
.terrain-chart {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}

.axis-heading {
  fill: var(--ink);
  font-size: 17px;
  font-weight: 550;
}

.axis-tick {
  fill: var(--muted);
  font: 500 16px var(--mono);
}

.axis-line {
  fill: none;
  stroke: var(--muted);
  stroke-width: 1.1px;
}

.grid-line {
  stroke: var(--line);
  stroke-width: 1px;
  stroke-dasharray: 4 6;
}

.ridge-line {
  fill: none;
  stroke: var(--blue);
  stroke-width: 2.3px;
  stroke-linejoin: round;
}

.ridge-fill {
  fill: color-mix(in srgb, var(--blue) 7%, transparent);
}

.peak {
  --peak: var(--teal);
}

.peak-global {
  --peak: var(--amber);
}

.peak-guide {
  stroke: var(--peak);
  stroke-width: 1px;
  stroke-dasharray: 4 5;
}

.peak-halo {
  fill: var(--paper);
  stroke: var(--peak);
  stroke-width: 1.2px;
}

.peak-dot {
  fill: var(--peak);
}

.peak-text,
.particle-name {
  fill: var(--ink);
  font-size: 18px;
  font-weight: 630;
  paint-order: stroke;
  stroke: var(--paper);
  stroke-width: 4px;
}

.particle-marker {
  fill: var(--blue);
  stroke: var(--paper);
  stroke-width: 2px;
}

.previous-marker {
  fill: var(--paper);
  stroke: var(--blue);
  stroke-width: 1.4px;
  opacity: 0.75;
}

.personal-marker {
  fill: var(--teal);
  stroke: var(--paper);
  stroke-width: 2px;
}

.global-marker {
  fill: none;
  stroke: var(--amber);
  stroke-width: 2.3px;
}

.moving-marker {
  transition: transform 480ms cubic-bezier(0.25, 0.75, 0.3, 1);
}

@media (prefers-reduced-motion: reduce), print {
  .moving-marker {
    transition: none;
  }
}
</style>
