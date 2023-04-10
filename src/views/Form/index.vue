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
<script lang="ts" setup name="表单?sort=1">
import TypicalForm from './components/TypicalForm.vue'
import InlineForm from './components/InlineForm.vue'
import PositionSizeForm from './components/PositionSizeForm.vue'
import RuleForm from './components/RuleForm.vue'
import CustomRuleForm from './components/CustomRuleForm.vue'
import AddOrDelForm from './components/AddOrDelForm.vue'
import DialogForm from './components/DialogForm.vue'
import SearchForm from './components/SearchForm.vue'
import CustomButtonForm from './components/CustomButtonForm.vue'
import CustomStyleFrom from './components/CustomStyleFrom.vue'
import AtypiaStyleFrom from './components/AtypiaStyleFrom.vue'

import { DefineComponent } from 'vue'

const Com: Record<string, DefineComponent<any, any, any>> = {
  '典型表单': TypicalForm,
  '行内表单': InlineForm,
  '对齐方式与尺寸控制': PositionSizeForm,
  '校验表单': RuleForm,
  '自定义校验表单': CustomRuleForm,
  '添加/删除表单项': AddOrDelForm,
  '弹窗表单': DialogForm,
  '搜索表单': SearchForm,
  '自定义按钮': CustomButtonForm,
  '自定义表单样式': CustomStyleFrom,
  '异型表单样式': AtypiaStyleFrom,
}

const tabs = Object.keys(Com)
let activeName = $ref('典型表单')
</script>
<style lang="scss" scoped>
.container {
  padding: 20px;
  box-sizing: border-box;
}
</style>