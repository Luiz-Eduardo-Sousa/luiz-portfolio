<template>
  <v-main class="d-flex justify-center" style="background-color: #151731;">
    <v-container class="">
      <v-card elevation="6" max-width="700" max-height="340" class="mx-auto mb-8"
        style="background-color: #303569; border: 1px solid #A1A1AA ">
        <v-card-text class="text-white text-center">
          <h2>Meus Projetos</h2>
        </v-card-text>
      </v-card>

      <v-row>
        <v-col v-for="(projeto, index) in projetos" :key="index" cols="12" sm="6" md="4">
          <v-card elevation="6" class="pa-4" style="
              background-color: #303569;
              border: 1px solid #A1A1AA;
              height: 100%;
            ">
            <v-img :src="projeto.imagem" height="160" cover class="mb-4 rounded"></v-img>
            <v-card-title class="text-white text-h6">
              {{ projeto.titulo }}
            </v-card-title>
            <v-card-text class="text-white">
              {{ projeto.descricao }}
            </v-card-text>
            <div class="mb-4">
              <v-chip v-for="tech in projeto.techs" :key="tech.name" :color="tech.color" small class="ma-1"
                text-color="white">
                {{ tech.name }}
              </v-chip>
            </div>
            <v-card-actions>
              <v-btn :href="projeto.link" target="_blank" class="text-white" variant="text">
                Ver Projeto
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script setup lang="ts">
const projetos = [
  {
    titulo: "E-commerce Certificado Digital",
    descricao:
      "Integrei a equipe responsável pela construção do e-commerce da Senha Digital Soluções Digitais.",
    link: "https://senhadigital.com.br/",
    imagem: "/img/projetos/siteSenha.png",
    techs: [
      { name: "Nuxt.js 2", color: "green" },
      { name: "Vuetify 2", color: "blue" },
      { name: "Tailwind", color: "cyan" },
      { name: "Sass", color: "pink" },
    ],
  },
  {
    titulo: "Meu Portfólio",
    descricao:
      "Projeto desenvolvido para apresentar minhas habilidades.",
    link: "http://localhost:3000/",
    imagem: "/img/PORTIFOLIO.png",
    techs: [
      { name: "Nuxt 3", color: "green" },
      { name: "Tailwind", color: "cyan" },
    ],
  },
  {
    titulo: "SDC - Sistema de Consulta",
    descricao:
      "Sistema para consultas de CPF e CNPJ com análise de dados.",
    link: "https://app.sdconsulta.com.br/",
    imagem: "/img/projetos/SDC.png",
    techs: [
      { name: "Nuxt 3", color: "green" },
      { name: "Vuetify 2", color: "blue" },
      { name: "API REST", color: "orange" },
     
    ],
  },
  { 
    titulo: "Jogo da Memória", 
    descricao: 
      "Um jogo da memória desenvolvido para unir diversão e tecnologia, mostrando minhas habilidades em desenvolvimento web, design interativo e boas práticas de código.", 
    link: "https://memory-card-omega.vercel.app/", 
    imagem: "/img/projetos/jogoMemoria.png", 
     techs: [
      { name: "JavaScript", color: "yellow" },
      { name: "CSS", color: "blue" },
      { name: "HTML", color: "orange" },
    ],
  },
    
];

</script>