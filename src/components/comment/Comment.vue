<template>
  <div class="mt-12 w-1/2">
    <h2 class="text-2xl font-bold">Comments</h2>

    <!-- Comment Form -->
    <form @submit.prevent="addComment" class="mt-4">
      <textarea
        v-model="newComment"
        placeholder="Write your comment here..."
        class="w-full border border-gray-300 rounded p-2"
        rows="4"
        required
      ></textarea>
      <button
        type="submit"
        class="mt-2 bg-yellow-500 text-white px-4 py-2 rounded w-full"
      >
        Submit Comment
      </button>
    </form>

    <div class="mt-6">
      <h3 class="text-xl font-bold">All Comments:</h3>
      <ul class="space-y-4 flex flex-col">
        <CommentItem
          v-for="(comment, index) in comments"
          :key="index"
          :comment="comment"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CommentItem from "./CommentItem.vue";
import comments from "@/faker/comment";
import defaultAvatarImage from "@/assets/images/thumb-avocado.png";

// Default avatar for fallback
const defaultAvatar = defaultAvatarImage;

// New comment input
const newComment = ref("");

// Add comment method
const addComment = () => {
  if (newComment.value) {
    comments.push({
      id: comments.length + 1,
      body: newComment.value,
      createby: {
        name: "Current User", // You might want to replace this with actual user data
        avatar: defaultAvatar,
      },
    });
    newComment.value = ""; // Reset the input after submission
  }
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
