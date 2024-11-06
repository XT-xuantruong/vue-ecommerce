<template>
  <DefaultLayout>
    <div class="p-4">
      <div class="mb-6">
        <h2 class="text-2xl font-bold">Order Management</h2>
      </div>

      <!-- Order Management Table -->
      <table
        class="min-w-full divide-y divide-gray-200 dark:border-strokedark dark:bg-boxdark"
      >
        <thead class="bg-gray-50 dark:border-strokedark dark:bg-boxdark">
          <tr>
            <th
              class="px-6 py-3 text-left text-xs font-medium dark:text-white text-gray-500 uppercase tracking-wider"
            >
              Order ID
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium dark:text-white text-gray-500 uppercase tracking-wider"
            >
              Customer
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium dark:text-white text-gray-500 uppercase tracking-wider"
            >
              Total
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium dark:text-white text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium dark:text-white text-gray-500 uppercase tracking-wider"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody
          class="bg-white dark:text-white divide-y dark:border-strokedark dark:bg-boxdark divide-gray-200"
        >
          <tr v-for="order in orders" :key="order.id">
            <td class="px-6 py-4 whitespace-nowrap">{{ order.id }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ order.customer }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ order.total }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ order.status }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <button
                @click="openEditModal(order)"
                class="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Edit Order Modal -->
      <div
        v-if="isEditModalOpen"
        class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-30"
      >
        <div
          class="relative top-20 mx-auto p-5 border w-full max-w-3xl shadow-lg rounded-md bg-white dark:border-strokedark dark:bg-boxdark"
        >
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-medium">Edit Order</h3>
            <button
              @click="closeEditModal"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="text-2xl">&times;</span>
            </button>
          </div>

          <form @submit.prevent="updateOrder">
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label
                  for="customer"
                  class="block text-sm font-medium text-gray-700 dark:text-white"
                  >Customer:</label
                >
                <input
                  v-model="editedOrder.customer"
                  id="customer"
                  required
                  class="mt-1 block w-full rounded-md dark:border-strokedark dark:bg-boxdark border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  for="status"
                  class="block text-sm font-medium text-gray-700 dark:text-white"
                  >Status:</label
                >
                <select
                  v-model="editedOrder.status"
                  id="status"
                  required
                  class="mt-1 block w-full rounded-md dark:border-strokedark dark:bg-boxdark border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option
                    v-for="status in orderStatuses"
                    :value="status"
                    :key="status"
                  >
                    {{ status }}
                  </option>
                </select>
              </div>
            </div>

            <div class="mt-6">
              <h4 class="font-semibold mb-2">Products</h4>
              <table
                class="min-w-full divide-y divide-gray-200 dark:border-strokedark dark:bg-boxdark"
              >
                <thead
                  class="bg-gray-50 dark:border-strokedark dark:bg-boxdark"
                >
                  <tr>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium dark:text-white text-gray-500 uppercase tracking-wider"
                    >
                      Code
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium dark:text-white text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium dark:text-white text-gray-500 uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium dark:text-white text-gray-500 uppercase tracking-wider"
                    >
                      Brand
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium dark:text-white text-gray-500 uppercase tracking-wider"
                    >
                      Quantity
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium dark:text-white text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      class="px-6 py-3 text-left text-xs font-medium dark:text-white text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody
                  class="bg-white dark:text-white divide-y dark:border-strokedark dark:bg-boxdark divide-gray-200"
                >
                  <tr
                    v-for="product in editedOrder.products"
                    :key="product.code"
                  >
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ product.code }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ product.name }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ product.category }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ product.brand }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ product.quantity }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      {{ product.price }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <button
                        type="button"
                        @click="editProduct(product)"
                        class="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="flex justify-end gap-4 mt-6">
              <button
                type="button"
                @click="closeEditModal"
                class="px-4 py-2 bg-gray-500 text-white text-sm font-medium rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Edit Product Modal -->
      <EditProductModal
        :is-open="showModal"
        :product="selectedProduct"
        @update:is-open="showModal = $event"
        @update-product="updateProduct"
      />
    </div>
  </DefaultLayout>
</template>

<script setup>
import { ref } from 'vue'
import EditProductModal from '@/components/admin/EditProductModal.vue'
import DefaultLayout from '@/layouts/admin/DefaultLayout.vue'

const orders = ref([
  {
    id: 1,
    customer: 'John Doe',
    total: 100,
    status: 'Pending',
    products: [
      {
        code: 'P001',
        name: 'Product 1',
        quantity: 2,
        price: 50,
        category: 'Phones',
        brand: 'Apple',
        thumbnail:
          'https://cdn.tgdd.vn/hoi-dap/637156/chup-anh-phoi-sang-la-chup-nhu-the-nao-25-800x450.jpg',
        images: [
          'https://cdn.tgdd.vn/hoi-dap/637156/chup-anh-phoi-sang-la-chup-nhu-the-nao-25-800x450.jpg',
          'https://cdn.tgdd.vn/hoi-dap/637156/chup-anh-phoi-sang-la-chup-nhu-the-nao-25-800x450.jpg',
        ],
      },
      {
        code: 'P002',
        name: 'Product 2',
        quantity: 1,
        price: 75,
        category: 'Laptops',
        brand: 'Samsung',
        thumbnail:
          'https://cdn.tgdd.vn/hoi-dap/637156/chup-anh-phoi-sang-la-chup-nhu-the-nao-25-800x450.jpg',
        images: [
          'https://cdn.tgdd.vn/hoi-dap/637156/chup-anh-phoi-sang-la-chup-nhu-the-nao-25-800x450.jpg',
          'https://cdn.tgdd.vn/hoi-dap/637156/chup-anh-phoi-sang-la-chup-nhu-the-nao-25-800x450.jpg',
        ],
      },
    ],
  },
  {
    id: 2,
    customer: 'Jane Smith',
    total: 200,
    status: 'Shipped',
    products: [
      {
        code: 'P001',
        name: 'Product 1',
        quantity: 2,
        price: 50,
        category: 'Phones',
        brand: 'Apple',
        thumbnail:
          'https://cdn.tgdd.vn/hoi-dap/637156/chup-anh-phoi-sang-la-chup-nhu-the-nao-25-800x450.jpg',
        images: [
          'https://cdn.tgdd.vn/hoi-dap/637156/chup-anh-phoi-sang-la-chup-nhu-the-nao-25-800x450.jpg',
          'https://cdn.tgdd.vn/hoi-dap/637156/chup-anh-phoi-sang-la-chup-nhu-the-nao-25-800x450.jpg',
        ],
      },
      {
        code: 'P002',
        name: 'Product 2',
        quantity: 1,
        price: 75,
        category: 'Laptops',
        brand: 'Samsung',
        thumbnail:
          'https://cdn.tgdd.vn/hoi-dap/637156/chup-anh-phoi-sang-la-chup-nhu-the-nao-25-800x450.jpg',
        images: [
          'https://cdn.tgdd.vn/hoi-dap/637156/chup-anh-phoi-sang-la-chup-nhu-the-nao-25-800x450.jpg',
          'https://cdn.tgdd.vn/hoi-dap/637156/chup-anh-phoi-sang-la-chup-nhu-the-nao-25-800x450.jpg',
        ],
      },
    ],
  },
  {
    id: 3,
    customer: 'Bob Johnson',
    total: 150,
    status: 'Delivered',
    products: [
      {
        code: 'P001',
        name: 'Product 1',
        quantity: 2,
        price: 50,
        category: 'Phones',
        brand: 'Apple',
        thumbnail:
          'https://cdn.tgdd.vn/hoi-dap/637156/chup-anh-phoi-sang-la-chup-nhu-the-nao-25-800x450.jpg',
        images: [
          'https://cdn.tgdd.vn/hoi-dap/637156/chup-anh-phoi-sang-la-chup-nhu-the-nao-25-800x450.jpg',
          'https://cdn.tgdd.vn/hoi-dap/637156/chup-anh-phoi-sang-la-chup-nhu-the-nao-25-800x450.jpg',
        ],
      },
      {
        code: 'P002',
        name: 'Product 2',
        quantity: 1,
        price: 75,
        category: 'Laptops',
        brand: 'Samsung',
        thumbnail:
          'https://cdn.tgdd.vn/hoi-dap/637156/chup-anh-phoi-sang-la-chup-nhu-the-nao-25-800x450.jpg',
        images: [
          'https://cdn.tgdd.vn/hoi-dap/637156/chup-anh-phoi-sang-la-chup-nhu-the-nao-25-800x450.jpg',
          'https://cdn.tgdd.vn/hoi-dap/637156/chup-anh-phoi-sang-la-chup-nhu-the-nao-25-800x450.jpg',
        ],
      },
    ],
  },
])

const orderStatuses = ['Pending', 'Shipped', 'Delivered']

const showModal = ref(false)
const isEditModalOpen = ref(false)
const editedOrder = ref(null)
const selectedProduct = ref(null)

const openEditModal = order => {
  editedOrder.value = { ...order }
  isEditModalOpen.value = true
}

const closeEditModal = () => {
  isEditModalOpen.value = false
}

const updateOrder = () => {
  try {
    const orderIndex = orders.value.findIndex(
      o => o.id === editedOrder.value.id,
    )

    if (orderIndex !== -1) {
      console.log(orderIndex)

      orders.value[orderIndex] = {
        ...orders.value[orderIndex],
        ...editedOrder.value,
      }
      console.log(orders)
      orders.value[orderIndex].total = orders.value[orderIndex].products.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0,
      )
    }

    editedOrder.value = null
    closeEditModal()
  } catch (error) {
    console.error('Error updating order:', error)
  }
}

const editProduct = (product, event) => {
  if (event) {
    event.preventDefault()
  }
  selectedProduct.value = { ...product }
  console.log(selectedProduct.value)
  showModal.value = true
}

const updateProduct = updatedProduct => {
  try {
    editedOrder.value.products = editedOrder.value.products.map(p => {
      if (p.code === updatedProduct.value.code) {
        return updatedProduct.value
      }
      return p
    })

    editedOrder.value.total = editedOrder.value.products.reduce(
      (sum, product) => {
        return sum + product.price * product.quantity
      },
      0,
    )

    selectedProduct.value = null
    showModal.value = false
  } catch (error) {
    console.error('Error updating product:', error)
  }
}
</script>
