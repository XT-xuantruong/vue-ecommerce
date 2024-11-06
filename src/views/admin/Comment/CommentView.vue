<template>
  <DefaultLayout>
    <div class="container mx-auto p-4">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Comment Management</h1>
      </div>

      <!-- Edit Modal remains the same -->
      <div
        v-if="showModal"
        class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
      >
        <div
          class="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white dark:border-strokedark dark:bg-boxdark"
        >
          <!-- Modal Header -->
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-medium dark:text-white">Edit Comment</h3>
            <button
              @click="closeModal"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="text-2xl">&times;</span>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="mt-2">
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <!-- User Field (Read-only) -->
              <div class="form-control">
                <label class="block text-sm font-medium mb-1 dark:text-white">
                  User
                </label>
                <input
                  v-model="formData.user"
                  class="w-full p-2 rounded-md border-gray-300 bg-gray-100 shadow-sm dark:border-strokedark dark:bg-gray-700 dark:text-white"
                  readonly
                />
              </div>

              <!-- Reply To Field (Read-only) -->
              <div class="form-control">
                <label class="block text-sm font-medium mb-1 dark:text-white">
                  Reply To
                </label>
                <input
                  v-model="formData.replyToUser"
                  class="w-full p-2 rounded-md border-gray-300 bg-gray-100 shadow-sm dark:border-strokedark dark:bg-gray-700 dark:text-white"
                  readonly
                />
              </div>

              <!-- Comment Field -->
              <div class="form-control">
                <label class="block text-sm font-medium mb-1 dark:text-white">
                  Comment <span class="text-red-500">*</span>
                </label>
                <textarea
                  v-model="formData.comment"
                  rows="4"
                  class="w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-strokedark dark:bg-boxdark dark:text-white"
                  :class="{ 'border-red-500': errors.comment }"
                  placeholder="Enter comment"
                ></textarea>
                <span v-if="errors.comment" class="text-red-500 text-sm">
                  {{ errors.comment }}
                </span>
              </div>

              <!-- Rating Field -->
              <div class="form-control">
                <label class="block text-sm font-medium mb-1 dark:text-white">
                  Rating <span class="text-red-500">*</span>
                </label>
                <div class="flex items-center space-x-2">
                  <button
                    v-for="star in 5"
                    :key="star"
                    type="button"
                    @click="formData.rating = star"
                    class="focus:outline-none"
                  >
                    <span
                      class="text-2xl"
                      :class="
                        star <= formData.rating
                          ? 'text-yellow-500'
                          : 'text-gray-300'
                      "
                    >
                      ★
                    </span>
                  </button>
                  <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    ({{ formData.rating }}/5)
                  </span>
                </div>
                <span v-if="errors.rating" class="text-red-500 text-sm">
                  {{ errors.rating }}
                </span>
              </div>

              <!-- Modal Footer -->
              <div class="items-center px-4 py-3">
                <button
                  type="button"
                  @click="closeModal"
                  class="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="px-4 py-2 bg-primary text-white text-base font-medium rounded-md shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                >
                  <span v-if="isSubmitting">Processing...</span>
                  <span v-else>Update</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Modified Comment List Table with Reply To column -->
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
                  class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white"
                >
                  User
                </th>
                <th
                  class="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white"
                >
                  Reply To
                </th>
                <th
                  class="min-w-[300px] py-4 px-4 font-medium text-black dark:text-white"
                >
                  Comment
                </th>
                <th
                  class="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white"
                >
                  Rating
                </th>
                <th class="py-4 px-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <template
                v-for="comment in hierarchicalComments"
                :key="comment.id"
              >
                <tr class="border-b border-[#eee] dark:border-strokedark">
                  <td class="py-5 px-4">
                    <p class="text-black dark:text-white">{{ comment.id }}</p>
                  </td>
                  <td class="py-5 px-4">
                    <p class="text-black dark:text-white">
                      <span v-if="comment.level > 0">{{
                        '--'.repeat(comment.level)
                      }}</span>
                      {{ comment.user }}
                    </p>
                  </td>
                  <td class="py-5 px-4">
                    <p
                      v-if="comment.replyToUser"
                      class="text-gray-600 dark:text-gray-400"
                    >
                      {{ comment.replyToUser }}
                    </p>
                  </td>
                  <td class="py-5 px-4">
                    <p class="text-gray-600 dark:text-gray-400">
                      {{ comment.comment }}
                    </p>
                  </td>
                  <td class="py-5 px-4">
                    <div class="flex items-center">
                      <span class="text-yellow-500">{{
                        '★'.repeat(comment.rating)
                      }}</span>
                      <span class="text-gray-300">{{
                        '★'.repeat(5 - comment.rating)
                      }}</span>
                      <span class="ml-2 text-gray-600 dark:text-gray-400"
                        >({{ comment.rating }}/5)</span
                      >
                    </div>
                  </td>
                  <td class="py-5 px-4">
                    <div class="flex items-center space-x-3.5">
                      <button
                        @click="editComment(comment)"
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
                        @click="deleteComment(comment.id)"
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
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import DefaultLayout from '@/layouts/admin/DefaultLayout.vue'

// State
const showModal = ref(false)
const isSubmitting = ref(false)
const selectedComment = ref(null)

const formData = reactive({
  id: null,
  user: '',
  comment: '',
  rating: 0,
  parentId: null,
  replyToUser: '',
})

const errors = reactive({
  comment: '',
  rating: '',
})

// Sample data with reply information
const comments = ref([
  {
    id: 1,
    user: 'John Doe',
    comment: 'Great product! Really enjoyed using it.',
    rating: 5,
    parentId: null,
    replyToUser: null,
  },
  {
    id: 2,
    user: 'Jane Smith',
    comment: 'I agree with John, its amazing!',
    rating: 5,
    parentId: 1,
    replyToUser: 'John Doe',
  },
  {
    id: 3,
    user: 'Mike Johnson',
    comment: 'The customer support is excellent.',
    rating: 4,
    parentId: null,
    replyToUser: null,
  },
  {
    id: 4,
    user: 'Sarah Wilson',
    comment: 'They helped me quickly.',
    rating: 5,
    parentId: 3,
    replyToUser: 'Mike Johnson',
  },
  {
    id: 5,
    user: 'Tom Brown',
    comment: 'Same experience here.',
    rating: 4,
    parentId: 4,
    replyToUser: 'Sarah Wilson',
  },
])

// Enhanced hierarchical comments computation
const hierarchicalComments = computed(() => {
  const buildHierarchy = (parentId = null, level = 0) => {
    return comments.value
      .filter(comment => comment.parentId === parentId)
      .flatMap(comment => [
        { ...comment, level },
        ...buildHierarchy(comment.id, level + 1),
      ])
  }

  return buildHierarchy()
})

// Methods
const validateForm = () => {
  let isValid = true
  errors.comment = ''
  errors.rating = ''

  if (!formData.comment.trim()) {
    errors.comment = 'Comment is required'
    isValid = false
  }

  if (!formData.rating || formData.rating < 1) {
    errors.rating = 'Rating is required'
    isValid = false
  }

  return isValid
}

const editComment = comment => {
  selectedComment.value = comment
  formData.id = comment.id
  formData.user = comment.user
  formData.comment = comment.comment
  formData.rating = comment.rating
  formData.parentId = comment.parentId
  formData.replyToUser = comment.replyToUser
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedComment.value = null
  formData.id = null
  formData.user = ''
  formData.comment = ''
  formData.rating = 0
  formData.parentId = null
  formData.replyToUser = null
  errors.comment = ''
  errors.rating = ''
}

const handleSubmit = async () => {
  if (!validateForm()) return

  try {
    isSubmitting.value = true
    await new Promise(resolve => setTimeout(resolve, 1000))

    const index = comments.value.findIndex(c => c.id === formData.id)
    if (index !== -1) {
      comments.value[index] = {
        ...comments.value[index],
        comment: formData.comment,
        rating: formData.rating,
        replyToUser: formData.replyToUser,
      }
    }

    alert('Comment updated successfully')
    closeModal()
  } catch (error) {
    console.error('Error updating comment:', error)
    alert('Failed to update comment')
  } finally {
    isSubmitting.value = false
  }
}

const deleteComment = async id => {
  if (!confirm('Are you sure you want to delete this comment?')) return

  try {
    const deleteRecursive = commentId => {
      comments.value = comments.value.filter(comment => {
        if (comment.id === commentId) {
          // Recursively delete children
          const children = comments.value.filter(c => c.parentId === commentId)
          children.forEach(child => deleteRecursive(child.id))
          return false
        }
        return true
      })
    }

    await new Promise(resolve => setTimeout(resolve, 1000))
    deleteRecursive(id)
    alert('Comment deleted successfully')
  } catch (error) {
    console.error('Error deleting comment:', error)
    alert('Failed to delete comment')
  }
}
</script>
