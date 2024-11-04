<template>
  <RouterLink
    :to="`/category/${item.slug}`"
    class="category-item flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out space-y-4 text-center"
  >
    <img :src="item.image" :alt="item.name" />
    <h3 class="category-title">{{ item.name }}</h3>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from "vue";
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
