<template>
  <div class="error-page">
    <div class="glitch-container">
      <GlitchText
        children="Error 404 "
        :speed="0.9"
        :enable-shadows="true"
        :enable-on-hover="false"
      />
    </div>
  </div>
</template>


<script setup lang="ts">
import GlitchText from "@/components/VueBits/GlitchiText.vue"

defineProps({
  error: Object
})
</script>

<style scoped>
.error-page {
  height: 100vh;
  width: 100vw;
  background-color: #151731;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
}

.glitch-container {
  max-width: 50vw;
  text-align: center;
}

</style>
