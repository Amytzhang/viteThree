<template>
  <div class="home">
    <header>header content</header>
    <div class="home-content">
      <div class="ts-study">ts学习</div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
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
.ts-study{
  width: 10rem;
  height: 5rem;
  border:  10px solid hsla(0, 0%, 100%, .5);
  background: white;
  background-clip: padding-box;
}
</style>
