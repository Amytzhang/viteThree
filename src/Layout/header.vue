<template>
  <div class=""></div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const bg = ref(true)
const changBackground = () => {
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
