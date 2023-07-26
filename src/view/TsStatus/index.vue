<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-change="handleClick">
    <el-tab-pane label="ts基础1" name="first">
      <div class="content">
        <TsBasis1></TsBasis1>
      </div>
    </el-tab-pane>
    <el-tab-pane label="ts基础2" name="second">
      <div class="content">
        <TsBasis2></TsBasis2>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { ref } from "vue"
import type { TabsPaneContext, TabPaneName } from "element-plus"
import TsBasis1 from "./Ts_Basis1.vue"
import TsBasis2 from "./Ts_Basis2.vue"
export default defineComponent({
  name: "tsVue3",
  components: {
    TsBasis1,
    TsBasis2
  },
  setup() {
    const activeName = ref("first")
    const handleClick = (tab: TabPaneName) => {
      console.log(tab, activeName.value)
    }
    return {
      activeName,
      handleClick
    }
  }
})
</script>
<style lang="css" scoped>
.content {
  width: 60vw;
  height: 90vh;
  overflow: auto;
  overflow-y: scroll;
}
</style>
