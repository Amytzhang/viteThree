<template>
  <div class="define-header dark:text-white flex justify-end px-3.5 border-b-2">
    <div class="function-tool divide-x">
      <span class="px-1.5" @click="toTsStatus">Demos</span>
      <span class="px-1.5" @click="changBg">切换</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
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
const dark = ref(true)
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
    document.documentElement.classList.add('dark')
  } else {
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
</style>
