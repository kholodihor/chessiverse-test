<script setup>
defineProps({
  icon: {
    type: Object,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <li class="flex flex-col md:flex-row items-center gap-6 md:gap-24 w-full md:w-[90%] lg:w-[80%] mx-auto px-4 group">
    <div class="w-16 h-16 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
      <component :is="icon" />
    </div>
    <div class="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
      <h5 class="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#189ab4] to-[#75e6da] bg-clip-text text-transparent">
        {{ text }}
      </h5>
      <p class="text-xs text-gray-600 mt-2 max-w-prose">
        {{ description }}
      </p>
    </div>
  </li>
</template>
