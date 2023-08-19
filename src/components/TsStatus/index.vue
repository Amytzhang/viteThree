<template>
  <div class="ts-learn dark:text-white">
    <TsBasis2></TsBasis2>
    <TsBasis1></TsBasis1>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import TsBasis1 from './component/Ts_Basis1.vue'
import TsBasis2 from './component/Ts_Basis2.vue'
</script>
<style lang="less" scoped>
.ts-learn {
  width: 100%;
  height: 100%;
}
</style>
