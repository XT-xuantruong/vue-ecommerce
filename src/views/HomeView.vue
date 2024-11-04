<template>
  <DefaultLayout>
    <Slider />
    <CategoryList />
    <ProductList :products="products" :title="'Trending products'" />
    <Banner />
    <ProductList :products="products" :title="'Just arrived'" />
    <BlogList />
    <!-- People are also looking for -->
    <section class="py-5">
      <div class="container mx-auto">
        <h2 class="my-5 text-2xl font-bold">People are also looking for</h2>
        <a
          href="#"
          class="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded me-2 mb-2 inline-block"
          >Blue Diamond Almonds</a
        >
        <a
          href="#"
          class="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded me-2 mb-2 inline-block"
          >Angie’s Boomchickapop Corn</a
        >
        <a
          href="#"
          class="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded me-2 mb-2 inline-block"
          >Salty Kettle Corn</a
        >
        <a
          href="#"
          class="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded me-2 mb-2 inline-block"
          >Chobani Greek Yogurt</a
        >
        <a
          href="#"
          class="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded me-2 mb-2 inline-block"
          >Sweet Vanilla Yogurt</a
        >
        <a
          href="#"
          class="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded me-2 mb-2 inline-block"
          >Foster Farms Takeout Crispy Wings</a
        >
        <a
          href="#"
          class="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded me-2 mb-2 inline-block"
          >Warrior Blend Organic</a
        >
        <a
          href="#"
          class="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded me-2 mb-2 inline-block"
          >Chao Cheese Creamy</a
        >
        <a
          href="#"
          class="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded me-2 mb-2 inline-block"
          >Chicken Meatballs</a
        >
      </div>
    </section>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from "@/layouts/user/DefaultLayout.vue";
import Slider from "@/components/slider/Slider.vue";
import CategoryList from "@/components/category/CategoryList.vue";
import ProductList from "@/components/product/ProductList.vue";
import Banner from "@/components/banner/Banner.vue";
import BlogList from "@/components/blog/BlogList.vue";
import products from "@/faker/product";
</script>
