<template>
  <header>
    <div class="container mx-auto">
      <div class="flex flex-wrap py-3 border-b">
        <!-- Logo Section -->
        <div class="w-full sm:w-1/3 lg:w-1/4 text-center sm:text-left">
          <a href="/">
            <img
              src="../../assets/images/logo.png"
              alt="logo"
              class="mx-auto sm:mx-0 max-w-xs"
            />
          </a>
        </div>
        <!-- Search Bar Section -->
        <div
          class="lg:flex lg:w-5/12 mx-auto my-2 border bg-gray-100 rounded-lg focus-within:border focus-within:border-black"
        >
          <input
            type="text"
            placeholder="Search for more than 20,000 products"
            class="flex-grow bg-transparent border-none p-2 focus:outline-none"
            v-model="searchText"
            @keyup.enter="performSearch"
          />
          <button
            class="w-6 h-6 m-auto mr-2 border-none transition duration-150 ease-in-out"
            @click="performSearch"
          >
            <font-awesome-icon icon="search" class="text-gray-600 size-4" />
          </button>
        </div>

        <!-- Contact & Cart Section -->
        <div
          class="w-full sm:w-2/3 lg:w-1/3 flex justify-center sm:justify-end items-center gap-4 mt-4 sm:mt-0"
        >
          <div class="hidden xl:block text-right">
            <span class="text-sm text-gray-500">For Support?</span>
            <h5 class="text-lg">+980-34984089</h5>
          </div>
          <ul class="flex items-center gap-3">
            <li class="relative" @mouseleave="hideNotificationModal">
              <button
                @mouseover="showNotificationModal"
                class="bg-gray-100 p-3 rounded-full w-10 h-10 flex items-center justify-center"
              >
                <font-awesome-icon icon="bell" class="" />
              </button>
              <!-- Notification Modal -->
              <div
                v-if="isNotificationModalVisible"
                class="absolute bg-white shadow-lg rounded-lg w-80 p-5 border border-gray-200 z-50"
                style="top: 40px; right: 10px"
              >
                <h2 class="text-lg font-semibold mb-3">Notifications</h2>
                <ul>
                  <li class="py-2 border-b border-gray-200">
                    <p class="text-sm">You have a new message from John.</p>
                    <span class="text-xs text-gray-500">2 mins ago</span>
                  </li>
                  <li class="py-2 border-b border-gray-200">
                    <p class="text-sm">Your order #1234 has been shipped!</p>
                    <span class="text-xs text-gray-500">1 hour ago</span>
                  </li>
                  <li class="py-2">
                    <p class="text-sm">
                      A new product has been added to the store.
                    </p>
                    <span class="text-xs text-gray-500">3 hours ago</span>
                  </li>
                </ul>
              </div>
            </li>
            <li class="relative">
              <RouterLink
                to="/cart"
                class="bg-gray-100 p-3 rounded-full w-10 h-10 flex items-center justify-center"
              >
                <font-awesome-icon icon="shopping-cart" />
                <span
                  v-if="cartCount > 0"
                  class="flex h-4 w-4 absolute -top-1.5 -right-0.5"
                >
                  <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"
                  ></span>
                  <span
                    class="relative rounded-full h-4 w-4 bg-purple-500 text-white text-xs font-semibold flex items-center justify-center"
                    >{{ cartCount }}</span
                  >
                </span>
              </RouterLink>
            </li>
            <li class="relative" @mouseleave="hideAccountModal">
              <button
                @mouseover="showAccountModal"
                class="bg-gray-100 p-3 rounded-full w-10 h-10 flex items-center justify-center"
              >
                <font-awesome-icon icon="user" />
                <!-- Account Modal -->
                <div
                  v-if="isAccountModalVisible"
                  class="absolute bg-white shadow-lg rounded-lg w-48 p-2 border border-gray-200 z-50"
                  style="top: 40px; right: 10px"
                >
                  <ul class="space-y-1">
                    <li
                      class="py-2 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <RouterLink
                        class="w-full flex items-center"
                        :to="{ name: 'myaccount', query: { tab: 'profile' } }"
                      >
                        <font-awesome-icon icon="id-card" class="mx-4 size-4" />
                        <span>Profile</span>
                      </RouterLink>
                    </li>
                    <li
                      class="py-2 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <RouterLink
                        class="w-full flex items-center"
                        :to="{ name: 'myaccount', query: { tab: 'address' } }"
                      >
                        <font-awesome-icon
                          icon="map-marker-alt"
                          class="mx-4 size-4"
                        />
                        <span>Address</span>
                      </RouterLink>
                    </li>
                    <li
                      class="py-2 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <RouterLink
                        class="w-full flex items-center"
                        :to="{ name: 'myaccount', query: { tab: 'wishlist' } }"
                      >
                        <font-awesome-icon
                          :icon="['far', 'heart']"
                          class="mx-4 size-4"
                        />
                        <span>My Wishlist</span>
                      </RouterLink>
                    </li>
                    <li
                      class="py-2 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <RouterLink
                        class="w-full flex items-center"
                        :to="{ name: 'myaccount', query: { tab: 'orders' } }"
                      >
                        <font-awesome-icon
                          icon="clipboard-list"
                          class="text-gray-600 mx-4 size-4"
                        />
                        <span>Orders</span>
                      </RouterLink>
                    </li>
                    <li
                      class="flex items-center py-2 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <font-awesome-icon
                        icon="sign-out-alt"
                        class="text-gray-600 mx-4 size-4"
                      />
                      <span>Logout</span>
                    </li>
                  </ul>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Navigation Section -->
    <nav class="container mx-auto">
      <div class="flex justify-center sm:justify-between py-8">
        <div class="flex">
          <button class="lg:hidden" aria-controls="offcanvasNavbar">
            <font-awesome-icon icon="list" class="text-lg" />
          </button>
          <div class="offcanvas offcanvas-end lg:flex lg:gap-6">
            <div class="offcanvas-header lg:hidden">
              <button class="text-2xl" aria-label="Close">×</button>
            </div>
            <select
              class="border-none bg-transparent hidden lg:inline-block mr-6"
            >
              <option>Shop by Departments</option>
              <option>Groceries</option>
              <option>Drinks</option>
              <option>Chocolates</option>
            </select>
            <ul class="flex flex-col lg:flex-row gap-4 text-center">
              <li>
                <RouterLink to="/women" class="hover:text-blue-500"
                  >Women</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/men" class="hover:text-blue-500"
                  >Men</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/kids" class="hover:text-blue-500"
                  >Kids</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/accessories" class="hover:text-blue-500"
                  >Accessories</RouterLink
                >
              </li>
              <li class="relative group">
                <RouterLink
                  to="/pages"
                  class="hover:text-blue-500 flex items-center gap-1"
                >
                  Pages
                  <font-awesome-icon
                    icon="chevron-down"
                    class="text-sm transition-transform duration-200 group-hover:rotate-180"
                  />
                </RouterLink>
                <div
                  class="z-10 absolute left-0 top-full w-48 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ul
                    class="bg-white border border-gray-200 shadow-lg rounded-md mt-2"
                  >
                    <li>
                      <RouterLink
                        to="/about"
                        class="block px-4 py-2 hover:bg-gray-100"
                        >About Us</RouterLink
                      >
                    </li>
                    <li>
                      <RouterLink
                        to="/shop"
                        class="block px-4 py-2 hover:bg-gray-100"
                        >Shop</RouterLink
                      >
                    </li>
                    <li>
                      <RouterLink
                        to="/product"
                        class="block px-4 py-2 hover:bg-gray-100"
                        >Single Product</RouterLink
                      >
                    </li>
                    <li>
                      <RouterLink
                        to="/cart"
                        class="block px-4 py-2 hover:bg-gray-100"
                        >Cart</RouterLink
                      >
                    </li>
                    <li>
                      <RouterLink
                        to="/checkout"
                        class="block px-4 py-2 hover:bg-gray-100"
                        >Checkout</RouterLink
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <RouterLink to="/brand" class="hover:text-blue-500"
                  >Brand</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/sale" class="hover:text-blue-500"
                  >Sale</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/blog" class="hover:text-blue-500"
                  >Blog</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter, RouterLink } from "vue-router";
import { useCartStore } from "@/stores/cart";

const searchText = ref("");
const router = useRouter();

function performSearch() {
  if (searchText.value.trim() !== "") {
    router.push({ name: "search", query: { q: searchText.value } });
  }
}

const isNotificationModalVisible = ref(false);

// Show modal on hover
function showNotificationModal() {
  isNotificationModalVisible.value = true;
}

// Hide modal on mouse leave
function hideNotificationModal() {
  isNotificationModalVisible.value = false;
}
const isAccountModalVisible = ref(false);

// Show modal on hover
function showAccountModal() {
  isAccountModalVisible.value = true;
}

// Hide modal on mouse leave
function hideAccountModal() {
  isAccountModalVisible.value = false;
}

const cartStore = useCartStore();
const cartCount = computed(() => cartStore.items.length);
</script>
<style scoped>
.offcanvas {
  @apply fixed top-0 bottom-0 left-0 w-64 bg-white shadow-lg transform -translate-x-full transition-transform duration-300 ease-in-out lg:static lg:transform-none lg:shadow-none lg:w-auto;
}

.offcanvas.show {
  @apply translate-x-0;
}
</style>
