<template>
  <li class="p-2 bg-white rounded-lg border shadow">
    <!-- Reduced width to 1/2 and centered -->
    <div class="flex items-start">
      <!-- Avatar with fallback -->
      <img
        :src="comment.createby?.avatar || defaultAvatar"
        alt="User avatar"
        class="w-8 h-8 rounded-full mr-3"
      />

      <!-- Comment Content -->
      <div>
        <p class="font-bold text-sm">
          {{ comment.createby?.name || "Anonymous" }}
        </p>
        <p class="text-gray-700 text-sm">{{ comment.body }}</p>
      </div>
    </div>
  </li>
</template>

<script setup>
import defaultAvatarImage from "@/assets/images/thumb-avocado.png";
import { defineProps } from "vue";
// Define props for the comment
const props = defineProps({
  comment: {
    type: Object,
    required: true,
  },
});

// Default avatar for fallback
const defaultAvatar = defaultAvatarImage;
</script>
