<template>
  <div v-if="isLoading" class="loading-container">
    <v-progress-circular
      :model-value="progress"
      color="primary"
      size="80"
      width="8"
    >
      {{ progress }}%
    </v-progress-circular>
  </div>
  <v-app v-else>
    <LayoutHeader />
    <v-main>
      <NuxtPage />
    </v-main>
    <LayoutFooter />
  </v-app>
</template>

<script setup lang="ts">
const isLoading = ref(true);
const progress = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += 10;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        isLoading.value = false;
      }, 100);
    }
  }, 100);
});
</script>


<style>
  html {
    scroll-behavior: smooth;
  }

  .loading-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #303569;
  }

  .whatsapp-float {
    position: fixed;
    bottom: 24px;
    right: 24px;
    background-color: #25d366;
    color: white;
    border-radius: 50%;
    padding: 16px;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }
  .whatsapp-float:hover {
    transform: scale(1.1);
  }
</style>