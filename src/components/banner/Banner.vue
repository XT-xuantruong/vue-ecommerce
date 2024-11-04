<template>
  <section class="py-5">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Banner 1 -->
        <div
          class="bg-pink-100 rounded-lg relative overflow-hidden"
          :style="{
            backgroundImage: `url(${adImage1})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right bottom',
          }"
        >
          <div class="p-12">
            <div class="text-yellow-500 text-3xl font-bold">Upto 25% Off</div>
            <h3 class="text-2xl font-semibold text-gray-900">
              Luxa Dark Chocolate
            </h3>
            <p class="text-gray-600">
              Very tasty & creamy vanilla flavour creamy muffins.
            </p>
            <a
              href="#"
              class="inline-block bg-black text-white uppercase px-4 py-2 mt-3 rounded"
              >Show Now</a
            >
          </div>
        </div>

        <!-- Banner 2 -->
        <div
          class="bg-blue-100 rounded-lg relative overflow-hidden"
          :style="{
            backgroundImage: `url(${adImage2})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right bottom',
          }"
        >
          <div class="p-12">
            <div class="text-yellow-500 text-3xl font-bold">Upto 25% Off</div>
            <h3 class="text-2xl font-semibold text-gray-900">Creamy Muffins</h3>
            <p class="text-gray-600">
              Very tasty & creamy vanilla flavour creamy muffins.
            </p>
            <a
              href="#"
              class="inline-block bg-black text-white uppercase px-4 py-2 mt-3 rounded"
              >Show Now</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import adImage1 from "@/assets/images/ad-image-3.png";
import adImage2 from "@/assets/images/ad-image-4.png";
</script>
