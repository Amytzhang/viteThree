<template>
  <div class="three-demo grid grid-cols-3 gap-3">
    <div v-for="(item, index) in subList" :key="index">
      <!-- todo 此处封组件 -->
      <div class="border border-gray-300 shadow rounded-md w-full mx-auto">
        <div class="bg-slate-400">
          <!-- todo -->
          <img src="../../../public/imgs/小埋1.jpeg" alt="" srcset="" />
        </div>
        <div class="prose-sm p-4 pb3" v-if="item.describe.list.length > 0">
          <ul>
            <li v-for="(desc, dIndex) in item.describe.list" :key="dIndex">{{ desc }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
interface list {
  describe: { list: any[] }
  [key: string]: string
}
const subList: list[] = reactive([
  {
    label: 'lut',
    title: '颜色',
    path: '/demo/lut',
    describe: { list: [1, 2, 3, 4] }
  },
  {
    label: 'starts',
    title: '性能监控',
    path: '/demo/start',
    describe: { list: [3, 4, 4, 5] }
  },
  {
    label: 'track',
    title: '实现运动轨迹',
    path: '/demo/track',
    describe: { list: [] }
  },
  {
    label: 'pcdLoard',
    title: '',
    path: '/demo/pcdLoard',
    describe: { list: [] }
  }
])
</script>

<style lang="less" scoped>
.prose-sm {
  font-size: 0.875rem;
  line-height: 1.7142857;
}
.pb3 {
  padding-bottom: 0.75rem;
}
</style>
