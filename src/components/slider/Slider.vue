<template>
  <section
    class="py-12 bg-cover bg-no-repeat"
    style="background-image: url('../assets/images/background-pattern.jpg')"
  >
    <div class="container mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Main Banner (Swiper Section) -->
        <div class="col-span-2 bg-blue-100 rounded-lg p-8 relative">
          <Swiper
            :modules="modules"
            :slides-per-view="1"
            :pagination="{ clickable: true }"
          >
            <!-- First Slide -->
            <SwiperSlide>
              <div class="flex flex-wrap items-center justify-between">
                <div class="w-full md:w-2/3 mb-6 md:mb-0">
                  <span class="text-yellow-600 text-lg font-semibold mb-2 block"
                    >100% Natural</span
                  >
                  <h3 class="text-4xl font-bold mb-4">
                    Fresh Smoothie & Summer Juice
                  </h3>
                  <p class="text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dignissim massa diam elementum.
                  </p>
                  <a
                    href="#"
                    class="inline-block bg-transparent text-gray-800 border border-gray-800 rounded-lg px-5 py-3 uppercase text-sm font-semibold hover:bg-gray-800 hover:text-white transition"
                    >Shop Collection</a
                  >
                </div>
                <div class="w-full md:w-1/3">
                  <img
                    src="../assets/images/product-thumb-1.png"
                    class="w-full"
                    alt="Smoothie & Juice"
                  />
                </div>
              </div>
            </SwiperSlide>

            <!-- Second Slide -->
            <SwiperSlide>
              <div class="flex flex-wrap items-center justify-between">
                <div class="w-full md:w-2/3 mb-6 md:mb-0">
                  <span class="text-yellow-600 text-lg font-semibold mb-2 block"
                    >100% Natural</span
                  >
                  <h3 class="text-4xl font-bold mb-4">
                    Fresh Smoothie & Summer Juice
                  </h3>
                  <p class="text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dignissim massa diam elementum.
                  </p>
                  <a
                    href="#"
                    class="inline-block bg-transparent text-gray-800 border border-gray-800 rounded-lg px-5 py-3 uppercase text-sm font-semibold hover:bg-gray-800 hover:text-white transition"
                    >Shop Collection</a
                  >
                </div>
                <div class="w-full md:w-1/3">
                  <img
                    src="../assets/images/product-thumb-1.png"
                    class="w-full"
                    alt="Smoothie & Juice"
                  />
                </div>
              </div>
            </SwiperSlide>

            <!-- Third Slide -->
            <SwiperSlide>
              <div class="flex flex-wrap items-center justify-between">
                <div class="w-full md:w-2/3 mb-6 md:mb-0">
                  <span class="text-yellow-600 text-lg font-semibold mb-2 block"
                    >100% Natural</span
                  >
                  <h3 class="text-4xl font-bold mb-4">Heinz Tomato Ketchup</h3>
                  <p class="text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dignissim massa diam elementum.
                  </p>
                  <a
                    href="#"
                    class="inline-block bg-transparent text-gray-800 border border-gray-800 rounded-lg px-5 py-3 uppercase text-sm font-semibold hover:bg-gray-800 hover:text-white transition"
                    >Shop Collection</a
                  >
                </div>
                <div class="w-full md:w-1/3">
                  <img
                    src="../assets/images/product-thumb-2.png"
                    class="w-full"
                    alt="Ketchup"
                  />
                </div>
              </div>
            </SwiperSlide>

            <!-- Pagination
            <div class="swiper-pagination"></div> -->
          </Swiper>
        </div>

        <!-- Small Banner 1 -->
        <div>
          <div
            class="bg-green-50 rounded-lg p-8 flex items-center justify-between"
          >
            <div>
              <span class="text-green-700 text-lg font-semibold mb-2 block"
                >20% Off</span
              >
              <h3 class="text-2xl font-bold mb-4">Fruits & Vegetables</h3>
              <a
                href="#"
                class="text-gray-800 inline-flex items-center hover:text-green-700 transition"
                >Shop Collection
                <svg
                  class="w-5 h-5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  /></svg
              ></a>
            </div>
            <div>
              <img
                src="../assets/images/ad-image-1.png"
                class="w-40 h-auto"
                alt="Fruits & Vegetables"
              />
            </div>
          </div>

          <!-- Small Banner 2 -->
          <div
            class="bg-red-50 rounded-lg p-8 mt-8 flex items-center justify-between"
          >
            <div>
              <span class="text-red-700 text-lg font-semibold mb-2 block"
                >15% Off</span
              >
              <h3 class="text-2xl font-bold mb-4">Baked Products</h3>
              <a
                href="#"
                class="text-gray-800 inline-flex items-center hover:text-red-700 transition"
                >Shop Collection
                <svg
                  class="w-5 h-5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  /></svg
              ></a>
            </div>
            <div>
              <img
                src="../assets/images/ad-image-2.png"
                class="w-40 h-auto"
                alt="Baked Products"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination];
</script>
