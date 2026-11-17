<script setup lang="ts">
defineProps<{ value: string; selected?: boolean }>()
</script>

<template>
  <span class="genotype" :class="{ 'genotype-selected': selected }" :aria-label="'Genotipo ' + value">
    <span v-for="(bit, index) in value" :key="index" :class="{ 'bit-on': bit === '1' }">{{ bit }}</span>
  </span>
</template>
