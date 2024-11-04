<template>
  <div>
    <Header />
    <div>
      <slot> </slot>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
</script>
