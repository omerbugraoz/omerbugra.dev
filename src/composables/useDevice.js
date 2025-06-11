import { ref, onMounted } from 'vue'

export const useDevice = () => {
  const isMobile = ref(false)
  const isTablet = ref(false)
  const isDesktop = ref(false)

  const updateDeviceType = () => {
    const width = window.innerWidth
    isMobile.value = width <= 768
    isTablet.value = width > 768 && width <= 1024
    isDesktop.value = width > 1024
  }

  onMounted(() => {
    updateDeviceType()
    window.addEventListener('resize', updateDeviceType)
  })

  return {
    isMobile,
    isTablet,
    isDesktop,
  }
}
