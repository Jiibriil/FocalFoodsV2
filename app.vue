<template>
  <div>
    <!-- Fixed bar at the top tracking scroll position -->
    <div class="fixed top-0 left-0 w-full border-b border-gray-500 p-2">
      Scroll Position: {{ y }}
    </div>

    <div class="h-[200vh] relative">
      <div class="h-full w-20 outline">
        <!-- Horizontal text to be animated on scroll -->
        <div
          class="text-4xl text-center transform -rotate-90 origin-center py-10"
          :class="{ 'fade-in': isTextVisible }"
        >
          Scroll
        </div>
      </div>

      <!-- Display scroll percentage in fixed bottom-left corner -->
      <div class="fixed bottom-0 left-0 bg-gray-800 text-white p-2">
        Scroll Percentage: {{ scrollPercent }}%
      </div>
    </div>
  </div>
</template>

<script setup>
const scroll = useWindowScroll();
const { y } = scroll;

// get scroll percentage (0-100)
const scrollPercent = computed(() => {
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  return Math.round((y.value / (scrollHeight - clientHeight)) * 100);
});

// Define a ref to track if text is visible
const isTextVisible = ref(false);

// Watch for changes in the scroll percentage
watch(scrollPercent, (newVal) => {
  // You can adjust the threshold as needed
  const threshold = 50;
  isTextVisible.value = newVal >= threshold;
});
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.fade-in.isTextVisible {
  opacity: 1;
}
</style>
