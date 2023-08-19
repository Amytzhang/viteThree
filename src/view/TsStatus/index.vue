<template>
  <div>
    <div class="content">
      <TsBasis1></TsBasis1>
    </div>
    <div class="content">
      <TsBasis2></TsBasis2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import TsBasis1 from './Ts_Basis1.vue'
import TsBasis2 from './Ts_Basis2.vue'
</script>
<style lang="css" scoped>
.content {
  width: 60vw;
  height: 90vh;
  overflow: auto;
  overflow-y: scroll;
}
</style>
