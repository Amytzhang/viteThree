<template>
  <div class="define-header dark:text-white flex justify-end px-3.5 border-b-2">
    <div class="grow"></div>
    <div class="header-fun">
      <!-- todo 此处放大功能模块 -->
      <div v-for="item in directory" @click="toPath(item.path)" class="cursor-pointer">{{ item.label }}</div>
      <!-- todo 黑白模式切换 -->
      <div class="header-mode cursor-pointer" @click="changBg">
        <SunIcon class="h-5 w-5" v-show="dark" />
        <MoonIcon class="h-5 w-5" v-show="!dark" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { MoonIcon, SunIcon } from '@heroicons/vue/outline'
const router = useRouter()
const dark = ref(true)
const directory = reactive([
  {
    label: 'ThreeDemos',
    path: '/demo'
  },
  {
    label: 'TS',
    path: 'tsStatus'
  }
])
/**
 * 跳转
 */
const toPath = (path: string) => {
  router.push({
    path
  })
}
/**
 * 模式切换
 */

const changBg = () => {
  // Whenever the user explicitly chooses light mode
  if (localStorage.getItem('theme') === 'light') {
    dark.value = true
    localStorage.setItem('theme', 'dark')
  } else {
    dark.value = false
    localStorage.setItem('theme', 'light')
  }
  translateBack()
}
const translateBack = () => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    dark.value = false
    document.documentElement.classList.add('dark')
  } else {
    dark.value = true
    document.documentElement.classList.remove('dark')
  }
}
</script>

<style lang="scss" scoped>
.define-header {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  box-sizing: border-box;
}
.header-fun {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}
.header-mode {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
