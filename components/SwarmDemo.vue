<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import TerrainChart from './TerrainChart.vue'
import { formatValue, heightAt, swarmFrames } from './terrainModel'

const { $clicks } = useSlideContext()
const step = computed(() => Math.min($clicks.value, swarmFrames.length - 1))

const firstA = swarmFrames[1].particles[0]
const descriptions = [
  'A, B y C evalúan x = 2, 8 y 10.',
  `A llega a x = ${formatValue(firstA.x)} y recuerda su mejor posición en x = ${formatValue(firstA.personalBestX)}.`,
  `B mejora el récord en x = ${formatValue(swarmFrames[2].bestX)}.`,
  `B vuelve a mejorar en x = ${formatValue(swarmFrames[3].bestX)}.`,
]
</script>

<template>
  <section class="swarm-demo" :data-step="step" aria-label="Tres iteraciones del enjambre">
    <div class="swarm-body">
      <div class="swarm-visual">
        <TerrainChart :step="step" />
        <div class="swarm-legend" aria-label="Leyenda">
          <span><i class="legend-mark position" aria-hidden="true" />Posición actual</span>
          <span><i class="legend-mark previous" aria-hidden="true" />Posición anterior</span>
          <span><i class="legend-mark memory" aria-hidden="true" />Memoria de A</span>
          <span><i class="legend-mark best" aria-hidden="true" />Mejor del grupo</span>
        </div>
      </div>

      <div class="swarm-record" aria-label="Historial por iteración">
        <div class="swarm-record-head"><span>Iteración</span><span>Mejor altura</span></div>
        <div
          v-for="(frame, iteration) in swarmFrames" :key="iteration"
          class="swarm-frame" :class="{ active: iteration === step, pending: iteration > step }"
        >
          <span class="iteration-number">{{ iteration }}</span>
          <span class="iteration-detail" :aria-hidden="iteration > step || undefined">{{ descriptions[iteration] }}</span>
          <strong class="record-height" :aria-hidden="iteration > step || undefined">{{ formatValue(heightAt(frame.bestX)) }}</strong>
        </div>
      </div>
    </div>

    <footer class="swarm-footer">
      La velocidad previa se ajusta con la memoria personal y la mejor posición compartida. El enjambre evalúa cada nueva posición.
    </footer>
  </section>
</template>

<style scoped>
.swarm-body {
  display: grid;
  grid-template-columns: minmax(0, 2.05fr) minmax(0, 1fr);
  gap: 42px;
  align-items: start;
}

.swarm-legend {
  display: flex;
  flex-wrap: wrap;
  column-gap: 21px;
  row-gap: 8px;
  margin: 9px 0 0 7%;
  color: var(--ink);
  font-size: 15px;
  line-height: 1.2;
}

.swarm-legend span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  white-space: nowrap;
}

.legend-mark {
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 1.5px solid var(--blue);
  border-radius: 50%;
}

.legend-mark.position {
  background-color: var(--blue);
}

.legend-mark.memory {
  width: 9px;
  height: 9px;
  transform: rotate(45deg);
  border-color: var(--teal);
  border-radius: 0;
  background-color: var(--teal);
}

.legend-mark.best {
  width: 12px;
  height: 12px;
  border: 2px solid var(--amber);
}

.swarm-record {
  margin-top: 12px;
}

.swarm-record-head {
  display: flex;
  justify-content: space-between;
  padding: 0 0 11px;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
  font: 500 14px var(--mono);
}

.swarm-frame {
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr) 44px;
  gap: 11px;
  min-height: 66px;
  align-items: center;
  border-bottom: 1px solid var(--line);
}

.iteration-number {
  color: var(--muted);
  font: 550 16px var(--mono);
}

.swarm-frame.active .iteration-number {
  color: var(--blue);
}

.iteration-detail {
  color: var(--ink);
  font-size: 17px;
  line-height: 1.25;
}

.record-height {
  color: var(--ink);
  font: 620 26px var(--mono);
  text-align: right;
}

.active .record-height {
  color: var(--blue);
}

.iteration-detail,
.record-height {
  transition: opacity 220ms ease;
}

.pending .iteration-detail,
.pending .record-height {
  opacity: 0;
}

.swarm-footer {
  margin-top: 26px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 17px;
  line-height: 1.35;
}

@media (prefers-reduced-motion: reduce), print {
  .iteration-detail, .record-height {
    transition: none;
  }
}
</style>
