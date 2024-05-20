<template>
  <div class="vocal-list">
    <div class="bg-gradient-to-r from-indigo-500 tab-demo" v-for="(item, index) in subList" :key="index">
      <div class="tab-demo-item" @click="JumpDemo(item.path)">{{ item.label }}</div>
    </div>
    <router-view> </router-view>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DemoLayout from '../Layout/DemoLayout.vue'
import { useRouter } from 'vue-router'
const imgPath = '/imgs/小埋1.jpeg'

const router = useRouter()
const subList = ref([
  {
    label: 'waveuserfu',
    title: '音波',
    path: '/vocal/vocalWave',
    describe: {}
  }
])
const JumpDemo = (path) => {
  router.push({ path })
}
</script>

<style lang="less" scoped>
.vocal-list {
  width: 100%;
  height: 100%;
}
.tab-demo {
  width: 100%;
  height: 4rem;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  &-item {
    flex: 1;
  }
}
</style>
