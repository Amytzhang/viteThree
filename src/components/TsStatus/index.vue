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
<style lang="scss" scoped>

.ts-learn {
  border-radius: 14px;
  background-color: rgb(255 255 255 / 31%);
  backdrop-filter: blur(20px);
}


</style>
