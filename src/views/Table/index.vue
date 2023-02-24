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
<script lang="ts" setup name="表格?sort=1">
import TypicalTable from './components/TypicalTable.vue'
import NoStripeTable from './components/NoStripeTable.vue'
import BorderTable from './components/BorderTable.vue'
import StateTable from './components/StateTable.vue'
import HeightTable from './components/HeightTable.vue'
import FixedTable from './components/FixedTable.vue'
import MultilevelHeadTable from './components/MultilevelHeadTable.vue'
import CurrentRowTable from './components/CurrentRowTable.vue'
import SelectionTable from './components/SelectionTable.vue'
import SortTable from './components/SortTable.vue'
import FormatTable from './components/FormatTable.vue'
import SlotTable from './components/SlotTable.vue'
import ExpandTable from './components/ExpandTable.vue'
import TreeTable from './components/TreeTable.vue'
import LazyTreeTable from './components/LazyTreeTable.vue'
import TotalTable from './components/TotalTable.vue'
import MegerTable from './components/MegerTable.vue'
import IndexTable from './components/IndexTable.vue'

import { DefineComponent } from 'vue'

const Com:Record<string,DefineComponent<any,any,any>> = {
  '基础表格': TypicalTable,
  '不带斑马纹表格': NoStripeTable,
  '带边框表格': BorderTable,
  '带状态表格': StateTable,
  '固定表头': HeightTable,
  '固定列': FixedTable,
  '多级表头': MultilevelHeadTable,
  '单选': CurrentRowTable,
  '多选': SelectionTable,
  '排序': SortTable,
  '格式化': FormatTable,
  '自定义列模板': SlotTable,
  '展开行': ExpandTable,
  '树形数据与懒加载': TreeTable,
  '表尾合计行': TotalTable,
  '合并行或列': MegerTable,
  '自定义索引': IndexTable,
}

const tabs = Object.keys(Com)
let activeName = $ref('基础表格')
</script>
<style lang="scss" scoped>
.container {
  padding: 20px;
  box-sizing: border-box;
}
</style>