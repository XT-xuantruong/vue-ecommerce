<script setup>
import { ref, onMounted } from "vue";
import CategorySidebar from "./CategorySidebar.vue";
import BlogItem from "./BlogItem.vue";

// Sample data - replace with actual API calls
const categories = ref([
  { id: 1, name: "Technology", slug: "technology", count: 12 },
  { id: 2, name: "Business", slug: "business", count: 8 },
  { id: 3, name: "Travel", slug: "travel", count: 15 },
  { id: 4, name: "Lifestyle", slug: "lifestyle", count: 10 },
  { id: 5, name: "Health", slug: "health", count: 7 },
]);

const blogs = ref([]);
const selectedCategory = ref("");
const loading = ref(false);
const error = ref(null);

const fetchBlogs = async (category = "") => {
  loading.value = true;
  error.value = null;

  try {
    // Simulate API call - replace with actual API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    blogs.value = [
      {
        id: 1,
        title: "Understanding Modern Web Development",
        description:
          "A comprehensive guide to modern web development practices and tools...",
        category: "Technology",
        image: "/api/placeholder/300/200",
        publishedAt: "2024-03-15",
        views: 1234,
        comments: 45,
      },
      // Add more blog posts here
    ];
  } catch (err) {
    error.value = "Failed to fetch blogs. Please try again later.";
    console.error("Error fetching blogs:", err);
  } finally {
    loading.value = false;
  }
};

const handleCategorySelect = (category) => {
  selectedCategory.value = category;
  fetchBlogs(category);
};

onMounted(() => {
  fetchBlogs();
});
</script>

<template>
  <div class="container mx-auto flex py-8">
    <!-- Sidebar -->
    <CategorySidebar
      :categories="categories"
      :selected-category="selectedCategory"
      @select-category="handleCategorySelect"
    />

    <!-- Blog List -->
    <main class="w-3/4 pl-4">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold">
          {{ selectedCategory ? `${selectedCategory} Blogs` : "All Blogs" }}
        </h1>
        <div class="flex items-center gap-4">
          <!-- Add sorting options here if needed -->
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center h-64">
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"
        ></div>
      </div>

      <!-- Error State -->
      <div
        v-else-if="error"
        class="bg-red-100 text-red-700 p-4 rounded-lg mb-6"
      >
        {{ error }}
      </div>

      <!-- Blog Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogItem v-for="blog in blogs" :key="blog.id" :blog="blog" />
      </div>

      <!-- Empty State -->
      <div
        v-if="!loading && !error && blogs.length === 0"
        class="text-center py-12 text-gray-500"
      >
        No blogs found {{ selectedCategory ? `in ${selectedCategory}` : "" }}
      </div>
    </main>
  </div>
</template>
