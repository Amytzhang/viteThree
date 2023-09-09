<template>
  <div>
    <p>Demos 初学three.js</p>
  </div>
  <div class="three-demo grid grid-cols-3 gap-3 dark:text-white">
    <div v-for="(item, index) in subList" :key="index">
      <DemoLayout @click="JumpDemo(item.path)">
        <template #img>
          <img src="../../../public/imgs/小埋1.jpeg" alt="" srcset="" />
        </template>
        <template #describe>
          <ul>
            <li v-for="(desc, dIndex) in item.describe.list" :key="dIndex">{{ desc }}</li>
          </ul>
        </template>
      </DemoLayout>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DemoLayout from '../Layout/DemoLayout.vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const imgPath = '/imgs/小埋1.jpeg'

const router = useRouter()
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

const JumpDemo = (path: string) => {
  router.push({ path })
}
</script>

<style lang="less" scoped></style>
