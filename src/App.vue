<script setup>
import CornerTriangle from './components/CornerTriangle.vue';
import FeatureItem from './components/FeatureItem.vue';
import { features } from './data/features';
</script>

<template>
<div class="min-h-screen py-8 md:py-12 px-4">
  <div class="max-w-5xl mx-auto relative border-2 border-[#75e6da]/30 bg-white flex flex-col p-6 md:p-8 items-center backdrop-blur-sm rounded-xl ">
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-stroke text-center chess-title">Chessiverse Features</h1>
    <p class="text-lg md:text-xl mt-4 text-[#21b6a8] font-bold text-center">Play chess against computer!</p>
    <ul class="w-full mt-8 md:mt-12 space-y-8 md:space-y-12">
      <FeatureItem 
        v-for="feature in features" 
        :key="feature.text"
        :icon="feature.icon"
        :text="feature.text"
        :description="feature.description"
      />
    </ul>
    <CornerTriangle position="top-left" />
    <CornerTriangle position="top-right" />
    <CornerTriangle position="bottom-left" />
    <CornerTriangle position="bottom-right" />
  </div>
 
</div>
</template>

<style scoped>

.text-stroke {
  color: #189ab4;
  text-shadow: 
    -2px -2px 0 #000,
    2px -2px 0 #000,
    -2px 2px 0 #000,
    2px 2px 0 #000;
}

.chess-title {
  position: relative;
  padding: 0 1.2em;
  /* Smaller padding on mobile */
  @media (min-width: 768px) {
    padding: 0 1.5em;
  }
}

.chess-title::before,
.chess-title::after {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.1em;
  /* Smaller icons on mobile */
  color: #189ab4;
  text-shadow: none;
  
  /* @media (min-width: 768px) {
    font-size: 1.1em;
  } */
  
  @media (min-width: 1024px) {
    font-size: 1.2em;
  }
}

.chess-title::before {
  content: '♔';
  left: 0;
}

.chess-title::after {
  content: '♔';
  right: 0;
}

</style>
