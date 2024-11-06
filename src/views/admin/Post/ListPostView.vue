<template>
  <DefaultLayout>
    <div class="p-4">
      <div class="mb-6 flex justify-between">
        <h2 class="text-2xl font-bold dark:text-white">Posts List</h2>
        <button
          @click="isAdding = true"
          class="px-6 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition-all"
        >
          <i class="fas fa-plus-circle mr-2"></i>
          Add Post
        </button>
      </div>

      <!-- Table List -->
      <div
        class="mt-6 rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
      >
        <div class="max-w-full overflow-x-auto">
          <table class="w-full table-auto">
            <thead>
              <tr class="bg-gray-2 text-left dark:bg-meta-4">
                <th
                  class="min-w-[50px] py-4 px-4 font-medium text-black dark:text-white"
                >
                  ID
                </th>
                <th
                  class="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white"
                >
                  Image
                </th>
                <th
                  class="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white"
                >
                  Title
                </th>
                <th
                  class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white"
                >
                  Slug
                </th>
                <th
                  class="min-w-[300px] py-4 px-4 font-medium text-black dark:text-white"
                >
                  Content
                </th>
                <th class="py-4 px-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="post in posts"
                :key="post.id"
                class="border-b border-[#eee] dark:border-strokedark"
              >
                <td class="py-5 px-4">
                  <p class="text-black dark:text-white">{{ post.id }}</p>
                </td>
                <td class="py-5 px-4">
                  <div class="h-12 w-12 rounded-md overflow-hidden">
                    <img
                      :src="post.image"
                      :alt="post.title"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </td>
                <td class="py-5 px-4">
                  <p class="text-black dark:text-white">{{ post.title }}</p>
                </td>
                <td class="py-5 px-4">
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ post.slug }}
                  </p>
                </td>
                <td class="py-5 px-4">
                  <p class="text-gray-600 dark:text-gray-400 line-clamp-2">
                    {{ post.content }}
                  </p>
                </td>
                <td class="py-5 px-4">
                  <div class="flex items-center space-x-3.5">
                    <button
                      @click="handleEdit(post)"
                      class="text-yellow-600 hover:text-yellow-900 mr-3"
                    >
                      <svg
                        class="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                          fill=""
                        />
                        <path
                          d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                          fill=""
                        />
                      </svg>
                    </button>
                    <button
                      @click="handleDelete(post.id)"
                      class="text-red-600 hover:text-red-900"
                    >
                      <svg
                        class="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                          fill=""
                        />
                        <path
                          d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                          fill=""
                        />
                        <path
                          d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                          fill=""
                        />
                        <path
                          d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                          fill=""
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Modal -->
      <div
        v-if="isAdding || isEditing"
        class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
      >
        <!-- Modal Content -->
        <div
          class="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white dark:border-strokedark dark:bg-boxdark"
          @click.stop
        >
          <!-- Modal Header -->
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-medium dark:text-white">
              {{ isEditing ? 'Edit Post' : 'Add New Post' }}
            </h3>
            <button
              @click="cancelEdit"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="text-2xl">&times;</span>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="mt-2">
            <form @submit.prevent="savePost" class="space-y-4">
              <!-- Image Preview -->
              <div class="space-y-2">
                <label class="block text-sm font-medium dark:text-white"
                  >Post Image</label
                >
                <div class="flex items-center space-x-4">
                  <div
                    class="w-full h-48 border-2 border-dashed rounded-lg flex items-center justify-center relative dark:border-strokedark"
                  >
                    <img
                      v-if="previewImage"
                      :src="previewImage"
                      class="w-full h-full object-cover rounded-lg"
                    />
                    <input
                      type="file"
                      ref="fileInput"
                      @change="handleImageUpload"
                      accept="image/*"
                      class="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div
                      v-if="!previewImage"
                      class="text-center text-gray-500 dark:text-gray-400"
                    >
                      <i class="fas fa-upload mb-2"></i>
                      <p class="text-sm">Upload Image</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Form Fields -->
              <div class="space-y-4">
                <div class="form-control">
                  <label class="block text-sm font-medium mb-1 dark:text-white"
                    >Title</label
                  >
                  <input
                    v-model="currentPost.title"
                    type="text"
                    required
                    class="w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-strokedark dark:bg-boxdark dark:text-white"
                    placeholder="Enter post title"
                    @input="generateSlug"
                  />
                </div>

                <div class="form-control">
                  <label class="block text-sm font-medium mb-1 dark:text-white"
                    >Slug</label
                  >
                  <input
                    v-model="currentPost.slug"
                    type="text"
                    class="w-full p-2 rounded-md bg-gray-50 border-gray-300 shadow-sm dark:border-strokedark dark:bg-boxdark dark:text-white"
                    readonly
                  />
                </div>

                <div class="form-control">
                  <label class="block text-sm font-medium mb-1 dark:text-white"
                    >Content</label
                  >
                  <textarea
                    v-model="currentPost.content"
                    rows="4"
                    required
                    class="w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-strokedark dark:bg-boxdark dark:text-white"
                    placeholder="Enter post content"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>

          <!-- Modal Footer -->
          <div class="items-center px-4 py-3 mt-4">
            <button
              @click="cancelEdit"
              class="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 mr-2"
            >
              Cancel
            </button>
            <button
              @click="savePost"
              class="px-4 py-2 bg-primary text-white text-base font-medium rounded-md shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              {{ isEditing ? 'Update' : 'Save' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { ref, reactive } from 'vue'
import DefaultLayout from '@/layouts/admin/DefaultLayout.vue'

const posts = ref([
  {
    id: 1,
    title: 'Post 1',
    slug: 'post-1',
    content: 'Content for post 1',
    image: '/placeholder-1.jpg',
  },
  {
    id: 2,
    title: 'Post 2',
    slug: 'post-2',
    content: 'Content for post 2',
    image: '/placeholder-2.jpg',
  },
])

const isAdding = ref(false)
const isEditing = ref(false)
const previewImage = ref(null)
const fileInput = ref(null)

const currentPost = reactive({
  id: null,
  title: '',
  slug: '',
  content: '',
  image: null,
})

const generateSlug = () => {
  currentPost.slug = currentPost.title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

const handleImageUpload = event => {
  const file = event.target.files[0]
  if (file) {
    if (file.size > 5 * 1024 * 1024) {
      alert('Image file must not exceed 5MB')
      return
    }

    if (!file.type.match('image.*')) {
      alert('Please select an image file')
      return
    }

    const reader = new FileReader()
    reader.onload = e => {
      previewImage.value = e.target.result
      currentPost.image = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const resetForm = () => {
  currentPost.id = null
  currentPost.title = ''
  currentPost.slug = ''
  currentPost.content = ''
  currentPost.image = null
  previewImage.value = null
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

const savePost = () => {
  if (!currentPost.title.trim() || !currentPost.content.trim()) {
    alert('Please fill in both title and content')
    return
  }

  if (!currentPost.image && !isEditing.value) {
    alert('Please upload a post image')
    return
  }

  if (isEditing.value) {
    const index = posts.value.findIndex(p => p.id === currentPost.id)
    if (index !== -1) {
      posts.value[index] = { ...currentPost }
    }
  } else {
    const newPost = {
      ...currentPost,
      id: posts.value.length + 1,
    }
    posts.value.push(newPost)
  }

  isAdding.value = false
  isEditing.value = false
  resetForm()
}

const handleEdit = post => {
  isEditing.value = true
  Object.assign(currentPost, post)
  previewImage.value = post.image
}

const cancelEdit = () => {
  isAdding.value = false
  isEditing.value = false
  resetForm()
}

const handleDelete = id => {
  if (window.confirm('Are you sure you want to delete this post?')) {
    posts.value = posts.value.filter(p => p.id !== id)
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
