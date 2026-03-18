<script setup lang="ts">
import ElectricBorder from "../VueBits/EletricBorder.vue";
</script>

<template>
  <v-main class="d-flex justify-center" style="background-color: #151731; min-height: 100vh">
    <v-row>
      <v-col cols="11" sm="10" md="12" class="d-flex justify-center mx-auto ">
        <ElectricBorder :color="'#7df9ff'" :speed="1" :chaos="0.5" :thickness="2" :style="{ borderRadius: '16px', }">
          <v-card-text class="text-white text-center">

            <h2 class="text-2xl pa-3">Sobre Mim</h2>
            <v-row>
              <v-col cols="12" md="6" class="d-flex justify-center mt-3 -mb-20">
                <p class="mt-3 text-subtitle-1 font-weight-medium" style="
                    font-family: 'Poppins', sans-serif;
                    max-width: 500px;
                    color: #e0ede8;
                  ">
                  Sou Luiz Eduardo de Sousa, desenvolvedor com experiência em front-end e back-end. Tenho domínio das
                  principais tecnologias do ecossistema web, como JavaScript, HTML, CSS, Vue,js, Nuxt.js e Vuetify,
                  além de conhecimento em Git, Linux e integração com APIs. Atualmente, estou formado em Análise e
                  Desenvolvimento de Sistemas pela UniBrasil e ja atuo como desenvolvedor web há mais de 2 anos.
                </p>
              </v-col>

              <v-col cols="12" md="6" class="d-flex justify-center mt-5">
                <v-card class="pa-8 rounded-xl" color="#111827" theme="dark" max-width="1100">

                  <v-row align="start">
                    <v-col cols="12" md="12">
                      <v-sheet class="terminal-window rounded-lg elevation-20" color="#1f2937"
                        border="cyan-accent-2 sm">
                        <div class="terminal-header d-flex align-center px-4 py-2 grey-darken-4">
                          <span class="text-caption text-grey-lighten-1 mono">>_ /~</span>
                          <v-spacer></v-spacer>
                          <div class="d-flex g-2">
                            <v-icon size="small" color="grey">mdi-minus</v-icon>
                            <v-icon size="small" color="grey">mdi-square-outline</v-icon>
                            <v-icon size="small" color="grey">mdi-close</v-icon>
                          </div>
                        </div>

                        <div class="terminal-body pa-5 mono">
                          <div class="code-line">
                            <span class="bracket">{</span>
                          </div>
                          <div class="code-line ps-4">
                            <span class="key">devData</span>: <span class="bracket">{</span>
                          </div>
                          <div class="code-line ps-8">
                            <span class="key">nome</span>: <span class="string">"Luiz Eduardo de Sousa"</span>,
                          </div>
                          <div class="code-line ps-8">
                            <span class="key">stack</span>: [<span class="string">"Vue"</span>, <span
                              class="string">"Nuxt"</span>, <span class="string">"Vuetify"</span>,],
                          </div>
                          <div class="code-line ps-8">
                            <span class="key">experiencia</span>: <span class="string">"2+ anos"</span>
                          </div>
                          <div class="code-line ps-4">
                            <span class="bracket">}</span>
                          </div>
                          <div class="code-line">
                            <span class="bracket">}</span><span class="cursor">|</span>
                          </div>
                        </div>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </ElectricBorder>
      </v-col>
      <v-col class="d-flex justify-center">
        <v-btn color="primary" size="large" elevation="4" rounded="lg" :href="'/Luiz-Eduardo_CV.pdf'" target="_blank">
          Meu Currículo
        </v-btn>
      </v-col>
    </v-row>
  </v-main>
</template>

<style scoped>

/* Estilo do Terminal */
.terminal-window {
  border: 2px solid #00ffff !important;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.4) !important;
}

.mono {
  font-family: 'Fira Code', monospace;
}

.key {
  color: #a78bfa;
}

.string {
  color: #34d399;
}

.bracket {
  color: #e5e7eb;
}


.cursor {
  display: inline-block;
  background: #00ffff;
  width: 8px;
  height: 18px;
  margin-left: 4px;
  animation: blink 1s infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.leading-relaxed {
  line-height: 1.8;
}
</style>