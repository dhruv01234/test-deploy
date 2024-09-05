<template>
  <q-layout view="lHh Lpr lFf" class="q-pa-md bg-image">
    <div class="header" style="">
      <div class="header-options">
        <span class="cursor-pointer animated">Home</span>
        <span class="cursor-pointer animated">Services</span>
        <span class="cursor-pointer animated">Contact Us</span>
        <span class="cursor-pointer animated">About</span>
      </div>
    </div>
    <div class="home-page row" style="width: 100%;margin-top: 50px;">
      <div style="flex:1" class="q-pa-md">
        <h2 class="q-ma-none">Web</h2>
        <h1 class="q-ma-none">Design &</h1>
        <h1 class="q-ma-none">Development</h1>
        <div class="column" style="gap: 10px;">
          <div class="animation-container">
            <span class="text-h4 word">Welcome</span>
            <span class="text-h4 word">To</span>
            <span class="text-h4 word">Our</span>
            <span class="text-h4 word">Landing</span>
            <span class="text-h4 word">Page</span>
          </div>
          <q-separator color="white" style="height:4px" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatem non voluptate cumque ipsa exercitationem debitis officia asperiores eius voluptates fuga eligendi error voluptatum aliquam laboriosam dolorum, laborum accusamus assumenda! Quae suscipit alias corporis aliquid voluptatem dolores quis vero odit, repellendus, iste nobis consequatur. Iure necessitatibus corrupti magnam reiciendis explicabo?</p>
        </div>
      <div class="auth-buttons" style="width: 100%; display: flex;gap:20px">
        <q-btn color="white text-orange" label="Sign In" rounded />
        <q-btn color="orange" label="Sign Up" rounded />
      </div>
      </div>
      <div style="min-width: 40%">

<!-- <spline-viewer url="https://prod.spline.design/cHkOOWeJnRZr42Oj/scene.splinecode"></spline-viewer> -->
        <img src="~assets/img.png" alt="Intro Image 1" style="width: 100%; border-radius: 20px;" fit="contain">
      </div>
    </div>
  </q-layout>
</template>

<script setup lang="ts">

import { onMounted } from 'vue';

onMounted(() => {
  const words = document.querySelectorAll('.word');
  words.forEach((word, index) => {
    setTimeout(() => {
      word.style.animation = 'slideInRight 1s forwards'; // Changed animation to slide in from the right
      word.style.opacity = '1';
    }, index * 500); // Adjust the delay time as needed
  });
});

</script>
<style lang="scss" scoped>
.header {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: white;
}

.header-options {
  display: flex;
  gap:20px;
  margin-top: 10px;
}

.animated{
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
}
.q-layout {
  &.bg-image {
    background-image: url('src/assets/lpbg.jpg');
    background-size: cover;
  }
}

.home-page {
  animation: fadeIn 1s ease-in-out;
  color:white;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animation-container {
  display: flex;
  flex-direction: row;
  gap:8px;
  animation: slideIn 0.3s forwards;
  margin-top: 20px;
}
.word {
  display: inline-block;
  opacity: 0;
  letter-spacing: 2px;
}
</style>
