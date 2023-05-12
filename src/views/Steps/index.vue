<template>
  <div class="container">
    <el-tabs v-model="activeName" tabPosition="left">
      <el-tab-pane v-for="(item, index) in tabs" :key="index" :label="item" :name="item">
        <template v-if="activeName === item">
          <component :is="Com[item]"></component>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup name="流程?sort=1">
import BaseSteps from './components/BaseSteps.vue'
import EventsSteps from './components/EventsSteps.vue'
import CustomBtnSteps from './components/CustomBtnSteps.vue'

import { DefineComponent } from 'vue'

const Com: Record<string, DefineComponent<any, any, any>> = {
  '基础用法': BaseSteps,
  '监听步骤': EventsSteps,
  '自定义按钮': CustomBtnSteps,
}

const tabs = Object.keys(Com)
let activeName = $ref('基础用法')
</script>
<style lang="scss" scoped>
.container {
  padding: 20px;
  box-sizing: border-box;
}
</style>