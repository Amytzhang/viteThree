<script setup lang="ts">
import Header from './Layout/Header.vue'
</script>

<template>
  <div class="bg-white dark:bg-black h-screen font-serif content">
    <Header></Header>
    <!-- container ml content-box -->
    <div class="content content-box px-7 py-10">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup></script>
<style lang="less">
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.content {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background: linear-gradient(-45deg, #ee7752, #d76691, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
</style>
