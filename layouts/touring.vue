<script setup lang="ts">
import { computed } from 'vue'
import { useNav, useSlideContext } from '@slidev/client'

defineProps<{ section?: string; tone?: 'light' | 'dark'; sources?: string; cover?: boolean }>()
const { $page } = useSlideContext()
const { total } = useNav()
const page = computed(() => String($page.value).padStart(2, '0'))
const count = computed(() => String(total.value).padStart(2, '0'))
</script>

<template>
  <main class="slidev-layout touring" :class="{ 'touring-dark': tone === 'dark', 'touring-cover': cover }">
    <header class="deck-header">
      <span class="touring-mark"><i aria-hidden="true" />TOURING</span>
      <span v-if="section" class="slide-section">{{ section }}</span>
    </header>
    <div class="deck-body"><slot /></div>
    <footer class="deck-footer">
      <span class="folio"><b>{{ page }}</b> / {{ count }}</span>
    </footer>
  </main>
</template>
