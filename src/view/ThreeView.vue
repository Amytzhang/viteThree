<template>
  <div class="three-demo grid grid-cols-3 gap-3">
    <div v-for="(item, index) in subList" :key="index">
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
interface list {
  [key: string]: string
}
const subList: list[] = reactive([
  {
    label: 'lut',
    title: '颜色',
    path: '/demo/lut'
  },
  {
    label: 'starts',
    title: '性能监控',
    path: '/demo/start'
  },
  {
    label: 'track',
    title: '实现运动轨迹',
    path: '/demo/track'
  },
  {
    label: 'pcdLoard',
    title: '',
    path: '/demo/pcdLoard'
  }
])
</script>

<style></style>
