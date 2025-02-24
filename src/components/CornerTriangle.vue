<script setup>
defineProps({
  position: {
    type: String,
    required: true,
    validator: (value) => ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(value)
  }
})
</script>

<template>
  <div>
    <template v-if="position === 'top-left'">
      <div class="absolute -top-2 -left-2 w-0 h-0 -z-20 border-t-[100px] border-r-[100px] border-t-transparent border-r-transparent rounded-lg">
      </div>
      <div class="absolute -top-1 -left-1 w-0 h-0 -z-10 border-t-[80px] border-r-[80px] border-t-[#75e6da] border-r-transparent rounded-lg">
      </div>
    </template>
    <template v-else-if="position === 'top-right'">
      <div class="absolute -top-2 -right-2 w-0 h-0 -z-20 border-t-[100px] border-l-[100px] border-t-transparent border-l-transparent rounded-lg">
      </div>
      <div class="absolute -top-1 -right-1 w-0 h-0 -z-10 border-t-[80px] border-l-[80px] border-t-[#75e6da] border-l-transparent rounded-lg">
      </div>
    </template>
    <template v-else-if="position === 'bottom-left'">
      <div class="absolute -bottom-2 -left-2 w-0 h-0 -z-20 border-b-[100px] border-r-[100px] border-b-transparent border-r-transparent rounded-lg">
      </div>
      <div class="absolute -bottom-1 -left-1 w-0 h-0 -z-10 border-b-[80px] border-r-[80px] border-b-[#75e6da] border-r-transparent rounded-lg">
      </div>
    </template>
    <template v-else>
      <div class="absolute -bottom-2 -right-2 w-0 h-0 -z-20 border-b-[100px] border-l-[100px] border-b-transparent border-l-transparent rounded-lg">
      </div>
      <div class="absolute -bottom-1 -right-1 w-0 h-0 -z-10 border-b-[80px] border-l-[80px] border-b-[#75e6da] border-l-transparent rounded-lg">
      </div>
    </template>
  </div>
</template>
