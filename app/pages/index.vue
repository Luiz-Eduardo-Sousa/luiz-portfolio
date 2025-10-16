<template>
    <HomeBannerBio />
    <HomeBannerTech />
    <HomeBannerProjetos />
     <a
      href="https://wa.me/5541996037518?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vi%20seu%20Portf%C3%B3lio%20e%20Gostei%20do%20seu%20trabalho!%20Poderia%20me%20enviar%20mais%20informa%C3%A7%C3%B5es%2C%20Por%20Favor%3F"
      target="_blank"
      class="whatsapp-float"
      aria-label="Converse pelo WhatsApp"
    >
      <v-img src="/img/whats.png" alt="WhatsApp" width="50"/>
    </a>
</template>

<script setup></script>

<style>
 .whatsapp-float {
    position: fixed;
    bottom: 24px;
    right: 24px;
    background-color: #25d366;
    color: white;
    border-radius: 50%;
    padding: 8px;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }
  .whatsapp-float:hover {
    transform: scale(1.1);
  }
</style>