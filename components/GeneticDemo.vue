<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import {
  genomeAt, heightAt, initialGeneration, mutatedPosition, mutationBitIndex, newGeneration,
  recombinedChildren, selectedParents,
} from './terrainModel'

const { $clicks } = useSlideContext()
const step = computed(() => Math.min($clicks.value, 3))

const stages = [
  { title: 'Población inicial', detail: 'Generar y evaluar', positions: initialGeneration },
  { title: 'Selección', detail: 'Escoger los dos mejores', positions: selectedParents },
  { title: 'Cruce', detail: 'Intercambiar los bits finales', positions: recombinedChildren },
  { title: 'Mutación y relevo', detail: `Cambiar el ${mutationBitIndex + 1}.º bit de ${genomeAt(recombinedChildren[1])}`, positions: newGeneration },
]

const initialBest = Math.max(...initialGeneration.map(heightAt))
const newBest = Math.max(...newGeneration.map(heightAt))

function bitColor(stage: number, position: number, index: number) {
  const isMutated = stage === 3 && position === mutatedPosition
  if (isMutated && index === mutationBitIndex)
    return 'mutated-bit'

  const chromosomeSource = isMutated ? recombinedChildren[1] : position
  if (stage >= 2 && recombinedChildren.includes(chromosomeSource)) {
    const startsWithBlue = chromosomeSource === recombinedChildren[0]
    const usesBlue = index < 2 ? startsWithBlue : !startsWithBlue
    return usesBlue ? 'blue-bit' : 'teal-bit'
  }

  if (position === selectedParents[0])
    return 'blue-bit'

  if (position === selectedParents[1])
    return 'teal-bit'

  return ''
}
</script>

<template>
  <section class="genetic-demo" :data-step="step" aria-label="Una generación del algoritmo genético">
    <div class="ga-stages">
      <div
        v-for="(stage, stageIndex) in stages" :key="stage.title"
        class="ga-stage" :class="{ 'current-stage': stageIndex === step, 'future-stage': stageIndex > step }"
      >
        <div class="ga-stage-marker" aria-hidden="true"><span>{{ stageIndex + 1 }}</span></div>
        <h3>{{ stage.title }}</h3>
        <p class="ga-detail">{{ stage.detail }}</p>

        <div class="ga-values" :aria-hidden="stageIndex > step || undefined">
          <div class="ga-labels"><span>Bits</span><span>x</span><span>h(x)</span></div>
          <div
            v-for="position in stage.positions" :key="position" class="ga-row"
            :class="{
              discarded: stageIndex === 0 && step > 0 && !selectedParents.includes(position),
              best: stageIndex === 3 && position === mutatedPosition,
            }"
          >
            <div class="genome" :aria-label="genomeAt(position)">
              <span
                v-for="(bit, index) in genomeAt(position)" :key="index"
                :class="[step ? bitColor(stageIndex, position, index) : '', { split: index === 2 && stageIndex > 0 }]"
                aria-hidden="true"
              >{{ bit }}</span>
            </div>
            <span class="ga-number">{{ position }}</span>
            <span class="ga-number">{{ heightAt(position) }}</span>
          </div>
        </div>
      </div>
    </div>

    <footer class="ga-footer">
      <p>La siguiente generación conserva dos padres. El ciclo continúa hasta cumplir el criterio de parada.</p>
      <div class="ga-result" :class="{ 'result-hidden': step < 3 }" :aria-hidden="step < 3 || undefined">
        <span>Mejor altura</span><strong>{{ initialBest }}</strong>
        <svg viewBox="0 0 28 14" width="28" height="14" aria-hidden="true"><path d="M1 7 H25 M20 2 L25 7 L20 12" /></svg>
        <strong>{{ newBest }}</strong>
      </div>
    </footer>
  </section>
</template>

<style scoped>
.genetic-demo {
  width: 100%;
}

.ga-stages {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

.ga-stage-marker {
  position: relative;
  display: flex;
  height: 37px;
  align-items: flex-start;
  margin-bottom: 15px;
  color: var(--muted);
}

.ga-stage-marker::after {
  position: absolute;
  inset: 16px -24px auto 0;
  border-top: 1px solid var(--line);
  content: '';
}

.ga-stage:last-child .ga-stage-marker::after {
  right: 0;
}

.ga-stage-marker span {
  position: relative;
  z-index: 1;
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 50%;
  background-color: var(--paper);
  font: 600 16px var(--mono);
}

.current-stage .ga-stage-marker span {
  border-color: var(--blue);
  background-color: var(--blue);
  color: white;
}

.ga-stage h3 {
  margin: 0;
  color: var(--ink);
  font-size: 24px;
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.ga-detail {
  min-height: 2.4em;
  margin: 8px 0 23px;
  color: var(--muted);
  font-size: 17px;
  line-height: 1.2;
}

.ga-values {
  transition: opacity 280ms ease, transform 280ms ease;
}

.future-stage .ga-values {
  transform: translateY(8px);
  opacity: 0;
}

.ga-labels,
.ga-row {
  display: grid;
  grid-template-columns: 1fr 40px 46px;
  align-items: center;
  padding-right: 7px;
}

.ga-labels {
  padding-bottom: 8px;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
  font: 500 14px var(--mono);
}

.ga-labels span:not(:first-child),
.ga-number {
  text-align: center;
}

.ga-row {
  min-height: 43px;
  border-bottom: 1px solid var(--line);
  color: var(--ink);
  transition: color 250ms ease;
}

.ga-row.discarded {
  color: var(--muted);
}

.ga-row.best .ga-number:last-child {
  font-weight: 700;
  color: var(--blue);
}

.genome {
  display: flex;
  gap: 3px;
  font: 600 17px var(--mono);
  line-height: 1.1;
}

.genome span {
  display: grid;
  width: 22px;
  height: 23px;
  align-items: center;
  justify-items: center;
  transition: background-color 250ms ease;
}

.genome span.split {
  margin-left: 5px;
}

.genome .blue-bit {
  background-color: color-mix(in srgb, var(--blue) 14%, transparent);
}

.genome .teal-bit {
  background-color: color-mix(in srgb, var(--teal) 18%, transparent);
}

.genome .mutated-bit {
  background-color: color-mix(in srgb, var(--amber) 35%, transparent);
  box-shadow: inset 0 -2px 0 var(--amber);
}

.ga-number {
  font: 500 17px var(--mono);
}

.ga-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
  margin-top: 35px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
}

.ga-footer p {
  margin: 0;
  color: var(--muted);
  font-size: 17px;
  line-height: 1.35;
}

.ga-result {
  display: flex;
  gap: 15px;
  align-items: center;
  color: var(--blue);
  white-space: nowrap;
  transition: opacity 280ms ease;
}

.ga-result span {
  color: var(--ink);
  font-size: 17px;
  font-weight: 600;
}

.ga-result strong {
  font: 650 27px var(--mono);
}

.ga-result svg {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.4px;
}

.result-hidden {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce), print {
  .ga-values, .ga-row, .genome span, .ga-result {
    transition: none;
  }
}
</style>
