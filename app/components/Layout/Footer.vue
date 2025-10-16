<template>
  <v-footer flat color="#303569" class="text-center text-white py-6">
    <div class="mx-auto">
      <p class="mb-4 font-semibold">Siga-me nas redes</p>

      <!-- Botões de redes sociais -->
      <div class="flex justify-center gap-4">
        <v-btn
          icon
          variant="text"
          href="https://github.com/Luiz-Eduardo-Sousa"
          target="_blank"
          aria-label="GitHub"
        >
          <v-icon size="28" icon="mdi-github" />
        </v-btn>

        <v-btn
          icon
          variant="text"
          href="https://www.linkedin.com/in/luiz-eduardo-de-sousa-4951a1184/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <v-icon size="28" icon="mdi-linkedin" />
        </v-btn>

        <v-btn
          icon
          variant="text"
          href="https://www.instagram.com/luizeduardos.c"
          target="_blank"
          aria-label="Instagram"
        >
          <v-icon size="28" icon="mdi-instagram" />
        </v-btn>
      </div>

      <p class="mt-4 text-sm text-gray-300">
        © {{ new Date().getFullYear() }} Luiz Eduardo de Sousa Carvalho — Todos os direitos reservados
      </p>
    </div>
  </v-footer>
</template>

<script setup lang="ts"></script>