<template>
  <div class="three-color">
    <title>three color数据转换</title>
    <div class="three-color-scene" id="colorScene"></div>
  </div>
</template>

<script lang="ts" setup>
import * as THREE from 'three'
const initFunction = () => {
  const canvasDome = document.getElementById('colorScene')
  // 创建渲染器对象
  const renderer = new THREE.WebGLRenderer()
  // 定义threejs输出画布的尺寸(单位:像素px)
  const width = 800 //宽度
  const height = 500 //高度
  renderer.setSize(width, height) //设置three.js渲染区域的尺寸(像素px)

  renderer.render(scene, camera) //执行渲染操作
  canvasDome.appendChild(renderer.dome)
}
</script>

<style lang="less" scoped>
.three-color {
  width: 100%;
  height: 100%;
  &-scene {
    width: 100rem;
    height: 50rem;
  }
}
</style>
