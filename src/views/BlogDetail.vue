<script setup>
import DefaultLayout from "@/layouts/user/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <div class="container mx-auto flex py-8">
      <!-- Main Blog Content -->
      <main class="w-3/4 pr-4">
        <!-- Blog Title -->
        <h1 class="text-4xl font-bold mb-4">Blog Title Goes Here</h1>

        <!-- Blog Metadata -->
        <div class="flex items-center text-gray-600 mb-6">
          <p class="mr-4">By <span class="font-semibold">Author Name</span></p>
          <p>Posted on <span class="font-semibold">October 20, 2024</span></p>
        </div>

        <!-- Blog Image -->
        <img
          src="https://via.placeholder.com/700x400"
          alt="Blog Image"
          class="rounded-lg mb-6"
        />

        <!-- Blog Content -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <p class="text-gray-800 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            viverra mauris eget tortor imperdiet, sit amet consequat justo
            tristique. Cras at metus quis nisl suscipit malesuada. Nulla
            facilisi. Vivamus a suscipit velit, a fringilla risus.
          </p>
          <p class="text-gray-800 leading-relaxed mb-4">
            Nulla consectetur, nisl vel consequat pellentesque, mauris enim
            euismod augue, a aliquet lacus felis a risus. Suspendisse potenti.
            Donec efficitur libero nec neque faucibus, sit amet porttitor ex
            convallis.
          </p>
          <p class="text-gray-800 leading-relaxed mb-4">
            Quisque eu justo at elit vehicula vestibulum. Etiam vitae sodales
            libero. Mauris varius purus nec dolor condimentum, a iaculis ex
            vulputate. Nulla facilisi. Praesent ultrices orci sed metus bibendum
            vehicula.
          </p>
        </div>
      </main>

      <!-- Sidebar -->
      <aside class="w-1/4 pl-4">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-4">Related Posts</h2>

          <!-- Related Post 1 -->
          <div class="mb-4">
            <a
              href="#"
              class="text-xl font-semibold text-blue-500 hover:underline"
              >Related Post Title 1</a
            >
            <p class="text-gray-600">
              A short description for the related post...
            </p>
          </div>

          <!-- Related Post 2 -->
          <div class="mb-4">
            <a
              href="#"
              class="text-xl font-semibold text-blue-500 hover:underline"
              >Related Post Title 2</a
            >
            <p class="text-gray-600">
              A short description for the related post...
            </p>
          </div>

          <!-- Related Post 3 -->
          <div class="mb-4">
            <a
              href="#"
              class="text-xl font-semibold text-blue-500 hover:underline"
              >Related Post Title 3</a
            >
            <p class="text-gray-600">
              A short description for the related post...
            </p>
          </div>
        </div>
      </aside>
    </div>
  </DefaultLayout>
</template>
