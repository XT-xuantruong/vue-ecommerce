<script setup>
import { defineProps } from "vue";
const props = defineProps({
  blog: {
    type: Object,
    required: true,
  },
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<template>
  <article
    class="bg-white p-4 rounded-lg shadow-lg transition-transform hover:-translate-y-1"
  >
    <img
      :src="blog.image || '/api/placeholder/300/200'"
      :alt="blog.title"
      class="w-full h-48 object-cover rounded-lg mb-4"
    />
    <div class="flex items-center mb-2 text-sm text-gray-500">
      <span>{{ formatDate(blog.publishedAt) }}</span>
      <span class="mx-2">•</span>
      <span>{{ blog.category }}</span>
    </div>
    <h2 class="text-xl font-bold mb-2 line-clamp-2">{{ blog.title }}</h2>
    <p class="text-gray-600 mb-4 line-clamp-3">{{ blog.description }}</p>
    <div class="flex items-center justify-between">
      <RouterLink
        :to="{ name: 'blog-detail', params: { id: blog.id } }"
        class="text-blue-500 font-bold hover:underline"
      >
        Read More
      </RouterLink>
      <div class="flex items-center text-gray-500 text-sm">
        <span class="flex items-center">
          <font-awesome-icon :icon="['far', 'eye']" class="mr-1" />
          {{ blog.views }}
        </span>
        <span class="mx-2">•</span>
        <span class="flex items-center">
          <font-awesome-icon :icon="['far', 'comment']" class="mr-1" />
          {{ blog.comments }}
        </span>
      </div>
    </div>
  </article>
</template>
