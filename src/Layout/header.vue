<template>
  <div class="define-header flex justify-end">
    <div class="">
      <div @click="changBg" class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">切换</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const bg = ref(true)
const changBg = () => {
  // Whenever the user explicitly chooses light mode
  if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark")
  } else {
    localStorage.setItem("theme", "light")
  }
  translateBack()
}
const translateBack = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}
</script>

<style></style>
