<script setup lang="ts">
type Point = readonly [number, number]

const target: Point = [529, 250]
const [targetX, targetY] = target

const blueOrigins: Point[] = [
  [87, 52], [142, 63], [199, 42], [39, 118], [89, 164], [163, 138],
  [205, 206], [108, 225], [67, 273], [27, 333], [135, 330], [178, 371],
  [79, 404], [34, 473], [65, 528], [155, 546], [198, 491], [257, 531],
]

const tealOrigins: Point[] = [
  [242, 68], [345, 64], [404, 111], [337, 151], [383, 184], [455, 166],
  [280, 274], [262, 359], [346, 402], [368, 506], [436, 472], [465, 420],
  [497, 359], [565, 406], [595, 473], [625, 436], [485, 498],
]

function trajectory(origin: Point, index: number, color: string) {
  const [x, y] = origin
  const deltaX = targetX - x
  const deltaY = targetY - y
  const bend = (index % 3 - 1) * 25
  const controlA: Point = [x + deltaX * .33, y + deltaY * .04 + bend]
  const controlB: Point = [targetX - deltaX * .22, targetY - deltaY * .57]
  const progress = .61 + (index % 4) * .045
  const remaining = 1 - progress

  const position = (axis: 0 | 1) =>
    remaining ** 3 * origin[axis] + 3 * remaining ** 2 * progress * controlA[axis]
    + 3 * remaining * progress ** 2 * controlB[axis] + progress ** 3 * target[axis]

  const tangent = (axis: 0 | 1) =>
    remaining ** 2 * (controlA[axis] - origin[axis])
    + 2 * remaining * progress * (controlB[axis] - controlA[axis])
    + progress ** 2 * (target[axis] - controlB[axis])

  return {
    x,
    y,
    color,
    path: 'M ' + origin.join(' ') + ' C ' + controlA.join(' ') + ' ' + controlB.join(' ') + ' ' + target.join(' '),
    accent: index % 3 === 0,
    arrow: 'translate(' + position(0) + ' ' + position(1) + ') rotate('
      + Math.atan2(tangent(1), tangent(0)) * 180 / Math.PI + ')',
  }
}

const paths = [
  ...blueOrigins.map((point, index) => trajectory(point, index, 'var(--blue)')),
  ...tealOrigins.map((point, index) => trajectory(point, index, 'var(--teal)')),
]
</script>

<template>
  <svg class="convergence" viewBox="0 0 680 586" role="img"
    aria-label="Trayectorias azules y verdes hacia una región prometedora marcada en ámbar">
    <defs>
      <radialGradient id="cover-target-glow">
        <stop stop-color="var(--amber)" stop-opacity=".18" />
        <stop offset="1" stop-color="var(--amber)" stop-opacity="0" />
      </radialGradient>
      <radialGradient id="cover-trajectory-fade" gradientUnits="userSpaceOnUse"
        :cx="targetX" :cy="targetY" r="90">
        <stop offset=".12" stop-color="black" />
        <stop offset="1" stop-color="white" />
      </radialGradient>
      <mask id="cover-trajectory-mask">
        <rect width="680" height="586" fill="url(#cover-trajectory-fade)" />
      </mask>
    </defs>

    <circle :cx="targetX" :cy="targetY" r="116" fill="url(#cover-target-glow)" />
    <g fill="none" stroke="var(--amber)" stroke-width="1">
      <ellipse v-for="(radius, index) in [28, 53, 86, 124, 168]" :key="radius"
        :cx="targetX" :cy="targetY" :rx="radius" :ry="radius * .87"
        :stroke-dasharray="index === 0 ? undefined : '4 8'"
        :opacity=".8 - index * .12" />
    </g>

    <g fill="none" mask="url(#cover-trajectory-mask)">
      <path v-for="point in paths" :key="point.path" :d="point.path" :stroke="point.color"
        :opacity="point.accent ? .53 : .23" :stroke-width="point.accent ? 1.65 : 1" />
    </g>

    <g v-for="point in paths" :key="point.path" :fill="point.color">
      <circle :cx="point.x" :cy="point.y" :r="point.accent ? 5.5 : 4"
        :opacity="point.accent ? 1 : .83" />
      <path v-if="point.accent" d="M -4 -3.5 L 3.5 0 L -4 3.5 Z"
        :transform="point.arrow" opacity=".9" />
    </g>

    <circle :cx="targetX" :cy="targetY" r="12" fill="var(--amber)"
      stroke="var(--paper)" stroke-width="2" />
  </svg>
</template>
