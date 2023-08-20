<template>
  <div class="define-header dark:text-white flex justify-end px-3.5 border-b-2">
    <div class="grow"></div>
    <div class="flex divide-x">
      <div class="px-1.5" @click="toTsStatus">Demos</div>
      <div class="px-1.5 container" @click="changBg">
        <SunIcon class="h-5 w-5" v-show="dark" />
        <MoonIcon class="h-5 w-5" v-show="!dark" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { MoonIcon, SunIcon } from '@heroicons/vue/outline'
const router = useRouter()
const dark = ref(true)
/**
 * 跳转知识
 */
const toTsStatus = () => {
  console.log('跳转')
  router.push({
    name: 'tsStatus'
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
