<template>
  <v-main class="d-flex justify-center" style="background-color: #151731; min-height: 110vh">
      <v-row>
        <v-col cols="11" sm="10" md="12" class="d-flex justify-center mx-auto ">
           <ElectricBorder :color="'#7df9ff'" :speed="1" :chaos="0.5" :thickness="2"
      :style="{ borderRadius: '16px', }">
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
                  <div>
                    <v-img src="/img/Foto.jpeg" width="200" height="200" class="rounded-circle" cover
                      style="position: relative; z-index: 1" />
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
            </ElectricBorder>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-btn color="primary" :href="'/Luiz-Eduardo_CV.pdf'" target="_blank">
            Meu Currículo</v-btn>
        </v-col>
      </v-row>
  </v-main>
</template>
<script setup lang="ts">
import ElectricBorder from "../VueBits/EletricBorder.vue";
</script>
