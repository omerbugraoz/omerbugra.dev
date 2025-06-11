<template>
  <section class="flex flex-col items-center py-30 w-full h-screen bg-[#FFFDF6]">
    <img
      :src="photoUrl"
      class="rounded-full w-[240px] h-[240px] border-8 border-[#F5ECD5] object-cover"
      alt="Profile Picture"
    />
    <h1 class="text-4xl font-bold mt-4">
      Hello, I'm
      <span class="relative">
        Ömer Buğra! <span class="absolute bottom-0 left-0 w-full h-[4px] bg-[#FFD70080] transform -rotate-2"></span>
      </span>
    </h1>
    <p class="text-lg md:text-2xl mt-4 text-center">
      Helping
      <span class="relative">
        mobile and web
        <span class="absolute bottom-0 left-0 w-full h-[4px] bg-[#FFD70080] transform -rotate-2"></span>
      </span>
      products
      <span class="relative">
        grow with seamless user experiences.
        <span class="absolute bottom-0 left-0 w-full h-[4px] bg-[#FFD70080] transform -rotate-2"> </span>
      </span>
    </p>
    <SpeedDial
      mask
      type="semi-circle"
      direction="down"
      :model="items"
      :radius="80"
      style="position: absolute; bottom: 35%"
      showIcon="pi pi-link"
      hideIcon="pi pi-times"
      v-model:visible="isSpeedDialOpen"
      :buttonProps="{
        label: speedDialLabel,
        severity: 'secondary',
        rounded: true,
        raised: true,
        'aria-label': 'Share',
        class: 'p-button-text',
      }"
      :tooltipOptions="{ position: 'bottom' }"
    />
  </section>
</template>
<script setup>
import SpeedDial from 'primevue/speeddial'
import { ref, computed } from 'vue'

const photoUrl = new URL('../assets/pp.jpeg', import.meta.url).href

const items = ref([
  {
    label: 'CV',
    icon: 'pi pi-file-pdf',
    tooltip: 'View CV',
    command: () => {
      window.open('https://cv.omerbugra.dev', '_blank')
    },
  },
  {
    label: 'LinkedIn',
    icon: 'pi pi-linkedin',
    tooltip: 'Visit LinkedIn',
    command: () => {
      window.open('https://www.linkedin.com/in/omerbugraoz', '_blank')
    },
  },
  {
    label: 'GitHub',
    icon: 'pi pi-github',
    tooltip: 'Visit GitHub',
    command: () => {
      window.open('https://github.com/omerbugraoz', '_blank')
    },
  },
])

const isSpeedDialOpen = ref(false)
const speedDialLabel = computed(() => (isSpeedDialOpen.value ? '' : 'Links'))
</script>
