<template>
  <div>
    
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
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  background-color: black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.home-content {
  flex: 1;
  padding: 1.5rem 2rem;
  overflow: hidden;
}
.ts-study {
  width: 10rem;
  height: 5rem;
  border: 10px solid hsla(0, 0%, 100%, 0.5);
  background: white;
  background-clip: padding-box;
}
</style>
