<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  categories: {
    type: Array,
    required: true,
    default: () => [],
  },
  selectedCategory: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["select-category"]);

const handleCategoryClick = (category) => {
  emit("select-category", category);
};
</script>

<template>
  <aside class="w-1/4 pr-4">
    <div class="bg-white p-6 rounded-lg shadow-lg sticky top-4">
      <h2 class="text-xl font-bold mb-4">Blog categories</h2>
      <ul>
        <li v-for="category in categories" :key="category.id" class="mb-2">
          <button
            @click="handleCategoryClick(category.slug)"
            class="text-left w-full px-2 py-1 rounded hover:bg-blue-50 transition-colors"
            :class="
              selectedCategory === category.slug
                ? 'text-blue-500 font-semibold bg-blue-50'
                : 'text-gray-700'
            "
          >
            <span class="flex items-center justify-between">
              {{ category.name }}
              <span class="text-sm text-gray-500">({{ category.count }})</span>
            </span>
          </button>
        </li>
      </ul>
    </div>
  </aside>
</template>
