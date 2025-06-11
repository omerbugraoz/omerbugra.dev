<template>
  <section class="flex flex-col items-center justify-center md:justify-normal md:py-30 w-full h-screen bg-[#FFFDF6]">
    <img
      :src="photoUrl"
      class="rounded-full w-[240px] h-[240px] border-8 border-[#F5ECD5] object-cover"
      alt="Profile Picture"
    />
    <h1 class="text-4xl font-bold mt-15 md:mt-4">
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
      :direction="isMobile ? 'up' : 'down'"
      :model="items"
      :radius="120"
      :style="isMobile ? 'position: absolute; bottom: 5%' : 'position: absolute; bottom: 35%'"
      showIcon="pi pi-link"
      hideIcon="pi pi-wave-pulse"
      @show="isSpeedDialOpen = true"
      @hide="isSpeedDialOpen = false"
      :buttonProps="{
        label: isSpeedDialLabel,
        severity: 'secondary',
        rounded: true,
        raised: true,
        'aria-label': 'Share',
        class: 'p-button-text',
        onMouseenter: () => {
          if (!isSpeedDialOpen) isSpeedDialLabel = 'Links'
        },
        onMouseleave: () => {
          if (!isSpeedDialOpen) isSpeedDialLabel = ''
        },
      }"
    />
  </section>
</template>
<script setup>
import SpeedDial from 'primevue/speeddial'
import { ref, watch } from 'vue'
import { useDevice } from '../composables/useDevice'

const { isMobile } = useDevice()

const photoUrl = new URL('../assets/pp.jpeg', import.meta.url).href

const isSpeedDialOpen = ref(false)
const isSpeedDialLabel = ref('')

watch(isSpeedDialOpen, (newValue) => {
  if (newValue) {
    isSpeedDialLabel.value = ''
  }
})

const items = ref([
  {
    label: 'Phone',
    icon: 'pi pi-phone',
    tooltip: 'Call',
    command: () => {
      window.open('tel:+905067907173', '_blank')
    },
  },
  {
    label: 'Email',
    icon: 'pi pi-envelope',
    tooltip: 'Send Email',
    command: () => {
      window.open('mailto:oomerbugraoz@gmail.com', '_blank')
    },
  },
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
</script>
