<template>
  <section class="py-5 overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between items-center mb-8">
        <h2 class="text-2xl font-bold text-gray-800">Category</h2>
        <div class="flex items-center space-x-4">
          <a
            href="#"
            class="text-slate-400 hover:text-slate-900 text-base font-medium transition duration-200"
            >View All Categories →</a
          >
          <div class="swiper-buttons">
            <button
              class="swiper-prev category-carousel-prev shadow-lg hover:bg-yellow-300 transition duration-300 ease-in-out"
              aria-label="Previous Category"
            >
              ❮
            </button>
            <button
              class="swiper-next category-carousel-next shadow-lg hover:bg-yellow-300 transition duration-300 ease-in-out"
              aria-label="Next Category"
            >
              ❯
            </button>
          </div>
        </div>
      </div>

      <Swiper v-bind="swiperOptions">
        <!-- Category Items -->
        <SwiperSlide v-for="(item, index) in categories" :key="index">
          <CategoryItem :item="item" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import broccoliImage from "@/assets/images/icon-vegetables-broccoli.png";
import CategoryItem from "./CategoryItem.vue";
import categories from "@/faker/category";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const modules = [Navigation];

const swiperOptions = {
  modules,
  slidesPerView: 6,
  breakpoints: {
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 6 },
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  spaceBetween: 20,
};
</script>

<style scoped>
.swiper-prev,
.swiper-next {
  width: 38px;
  height: 38px;
  line-height: 38px;
  background: #f1f1f1;
  color: #222222;
  padding: 0;
  text-align: center;
  border-radius: 10px;
  --bs-btn-border-color: transparent;
  --bs-btn-active-bg: #ec9b22;
  --bs-btn-active-border-color: transparent;
  --bs-btn-hover-bg: #ffc43f;
  --bs-btn-hover-border-color: transparent;
  --bs-btn-disabled-color: #ccc;
  --bs-btn-disabled-bg: #eaeaea;
  --bs-btn-disabled-border-color: #eaeaea;
}
.swiper-prev:hover,
.swiper-next:hover {
  background: #ffc43f;
}

/* category carousel */
.category-item {
  background: #ffffff;
  border: 1px solid #fbfbfb;
  box-shadow: 0px 5px 22px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  text-align: center;
  padding: 60px 20px;
  margin: 20px 0;
  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
}
.category-item:hover {
  transform: translate3d(0, -10px, 0);
  box-shadow: 0px 21px 44px rgba(0, 0, 0, 0.08);
}
.category-item .category-title {
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: #222222;
  margin-top: 20px;
}
</style>
