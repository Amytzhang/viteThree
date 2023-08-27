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
.content {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
