<template>
  <v-main
    class="d-flex justify-center"
    style="background-color: #151731; min-height: 100vh"
  >
    <v-container class="py-10">
      <v-card
        elevation="6"
        max-width="700"
        max-height="340"
        class="mx-auto mb-8"
        style="background-color: #303569; border: 1px solid #A1A1AA "
      >
        <v-card-text class="text-white text-center">
          <h2>Meus Projetos</h2>
        </v-card-text>
      </v-card>

      <v-row>
        <v-col
          v-for="(projeto, index) in projetos"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
            elevation="6"
            class="pa-4"
            style="
              background-color: #303569;
              border: 1px solid #A1A1AA;
              height: 100%;
            "
          >
            <v-img
              :src="projeto.imagem"
              height="160"
              cover
              class="mb-4 rounded"
            ></v-img>
            <v-card-title class="text-white text-h6">
              {{ projeto.titulo }}
            </v-card-title>
            <v-card-text class="text-white">
              {{ projeto.descricao }}
            </v-card-text>
            <v-card-actions>
              <v-btn
                :href="projeto.link"
                target="_blank"
                class="text-white"
                variant="text"
              >
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
    },
    {
      titulo: "Meu Portfólio",
      descricao:
        "Projeto desenvolvido para apresentar minhas habilidades, experiências e projetos pessoais.",
      link: "http://localhost:3000/",
      imagem: "/img/PORTIFOLIO.png",
    },
    {
      titulo: "SDC - Sistema de Consulta",
      descricao:
        "Sistema desenvolvido para realizar consultas completas de CPF e CNPJ, oferecendo informações relevantes como score de crédito, dados cadastrais e outras análises importantes. A ferramenta foi projetada para auxiliar empresas na tomada de decisão com base em dados confiáveis e atualizados..",
      link: "https://app.sdconsulta.com.br/",
      imagem: "/img/projetos/SDC.png",
    },
    {
      titulo: "Jogo da Memória",
      descricao:
        "Um jogo da memória desenvolvido para unir diversão e tecnologia, mostrando minhas habilidades em desenvolvimento web, design interativo e boas práticas de código.",
      link: "https://memory-card-omega.vercel.app/",
      imagem: "/img/projetos/jogoMemoria.png",
    }
  ];
</script>