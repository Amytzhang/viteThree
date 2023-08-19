<script setup lang="ts">
import Header from './Layout/Header.vue'
</script>

<template>
  <div class="bg-white dark:bg-black h-screen font-serif content">
    <Header></Header>
    <div class="container ml content-box">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup></script>
<style lang="less">
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-box {
    height: 100vh;
    overflow-y: auto;
  }
}
</style>
