<template>
  <button @click="increment">装饰器</button>
</template>

<script lang="ts">
import { MyClass } from '../components/es/decorator.ts'

export default {
  setup() {
    // 在setup函数中使用响应式数据

    // 定义一个增加计数的方法
    const increment = () => {
      const myObj = new MyClass('哞', 12).myMethod()
      console.log(myObj)
    }

    // 返回数据和方法，使其在模板中可用
    return {
      increment
    }
  }
}
</script>

<style></style>
