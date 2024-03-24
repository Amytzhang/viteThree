<template>
  <div class="dark:text-white">
    <button class="fill" @click="getVList">点击获取数据</button>
  </div>
</template>

<script lang="ts" setup>
import { getFetchList, postFetchNum } from '../../utils/fetchApi/apiList'
import { ref } from 'vue'
const getVList = () => {
  const { data } = postFetchNum({ page: 1 })
  console.log(data)
}
</script>

<style></style>
