<template>
  <div class="border border-gray-300 shadow rounded-md w-full mx-auto">
    <div class="bg-slate-400">
      <slot name="img"> </slot>
    </div>

    <div class="prose-sm p-4 pb3">
      <slot name="describe"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.prose-sm {
  font-size: 0.875rem;
  line-height: 1.7142857;
}
.pb3 {
  padding-bottom: 0.75rem;
}
</style>
