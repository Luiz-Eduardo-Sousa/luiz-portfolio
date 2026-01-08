<template>
  <section class="flex flex-col items-center gap-6 text-center py-16">
    <h2 class="text-3xl font-bold inline-flex">
      Vamos criar algo
      <RotatingText
        :texts="['incrível', 'rápido', 'bem feito']"
        mainClassName="px-2 bg-green-300 text-black rounded-lg ml-2"
        :rotationInterval="2000"
      />
    </h2>

    <p class="text-gray-400 max-w-md">
      Se você precisa de um front-end moderno, performático e bem pensado,
      bora conversar.
    </p>

    <a
      href="#contato"
      class="px-6 py-3 rounded-xl bg-green-400 text-black font-semibold hover:scale-105 transition"
    >
      Entrar em contato
    </a>
  </section>
</template>


<script setup lang="ts">
  import RotatingText from "../VueBits/RotatingText.vue";
</script>