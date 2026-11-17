export const terrainVertices = [
  { x: 0, height: 1 },
  { x: 4, height: 9 },
  { x: 7, height: 3 },
  { x: 12, height: 13 },
  { x: 15, height: 4 },
]

const terrainSegments = terrainVertices.slice(1).map((end, index) => ({
  start: terrainVertices[index],
  end,
}))

export function heightAt(x: number): number {
  const segment = terrainSegments.find(({ start, end }) => start.x <= x && x <= end.x)
  if (!segment)
    throw new RangeError(`La posición ${x} está fuera del terreno.`)

  const { start, end } = segment
  const fraction = (x - start.x) / (end.x - start.x)
  return start.height + fraction * (end.height - start.height)
}

const spanishNumbers = new Intl.NumberFormat('es-CO', { maximumFractionDigits: 2 })
export const formatValue = (value: number) => spanishNumbers.format(value)

export function genomeAt(x: number): string {
  return x.toString(2).padStart(4, '0')
}

export const initialGeneration = [1, 5, 10, 15]

// Select by score, then keep the parents in the same order as the starting group.
const bestTwo = [...initialGeneration].sort((a, b) => heightAt(b) - heightAt(a)).slice(0, 2)
export const selectedParents = initialGeneration.filter(x => bestTwo.includes(x))

const [firstParent, secondParent] = selectedParents.map(genomeAt)
const firstChild = firstParent.slice(0, 2) + secondParent.slice(2)
const secondChild = secondParent.slice(0, 2) + firstParent.slice(2)
export const mutationBitIndex = 1
const flippedBit = secondChild[mutationBitIndex] === '0' ? '1' : '0'
const mutatedChild = secondChild.slice(0, mutationBitIndex) + flippedBit + secondChild.slice(mutationBitIndex + 1)

export const recombinedChildren = [firstChild, secondChild].map(genome => Number.parseInt(genome, 2))
export const mutatedPosition = Number.parseInt(mutatedChild, 2)
export const newGeneration = [...selectedParents, recombinedChildren[0], mutatedPosition]

type Particle = {
  name: string
  x: number
  velocity: number
  personalBestX: number
}

type SwarmFrame = {
  particles: Particle[]
  bestX: number
}

const initialParticles = [
  { name: 'A', x: 2, velocity: 1, personalBestX: 2 },
  { name: 'B', x: 8, velocity: 1, personalBestX: 8 },
  { name: 'C', x: 10, velocity: 0, personalBestX: 10 },
]

function observeSwarm(particles: Particle[]): SwarmFrame {
  const best = particles.reduce((best, current) => (
    heightAt(current.personalBestX) > heightAt(best.personalBestX) ? current : best
  ))
  return { particles, bestX: best.personalBestX }
}

function nextSwarmFrame(previous: SwarmFrame): SwarmFrame {
  // For this trace, inertia is 0.5 and the two random draws are fixed at 0.5.
  // Both acceleration coefficients are 1. All three updates use the same snapshot.
  const particles = previous.particles.map(({ name, x, velocity, personalBestX }) => {
    const inertia = 0.5 * velocity
    const personalPull = 0.5 * (personalBestX - x)
    const socialPull = 0.5 * (previous.bestX - x)
    const nextVelocity = inertia + personalPull + socialPull
    const nextX = x + nextVelocity
    return {
      name,
      x: nextX,
      velocity: nextVelocity,
      personalBestX: heightAt(nextX) > heightAt(personalBestX) ? nextX : personalBestX,
    }
  })
  return observeSwarm(particles)
}

const swarmStart = observeSwarm(initialParticles)
const swarmFirst = nextSwarmFrame(swarmStart)
const swarmSecond = nextSwarmFrame(swarmFirst)
export const swarmFrames = [swarmStart, swarmFirst, swarmSecond, nextSwarmFrame(swarmSecond)]
