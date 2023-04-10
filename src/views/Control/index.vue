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
<script lang="ts" setup name="控件?sort=1">
import { ref } from 'vue'

import Input from './components/Input.vue'
import InputNumber from './components/InputNumber.vue'
import Select from './components/Select.vue'
import TreeSelect from './components/TreeSelect.vue'
import Cascader from './components/Cascader.vue'
import Radio from './components/Radio.vue'
import Checkbox from './components/Checkbox.vue'
import DateTime from './components/DateTime.vue'
import Switch from './components/Switch.vue'
import Upload from './components/Upload.vue'
import Slot from './components/Slot.vue'

import { DefineComponent } from 'vue'

const Com: Record<string, DefineComponent<any, any, any>> = {
  'input': Input,
  'input-number': InputNumber,
  'select': Select,
  'tree-select': TreeSelect,
  'cascader': Cascader,
  'radio': Radio,
  'checkbox': Checkbox,
  'datetime': DateTime,
  'switch': Switch,
  'upload': Upload,
  'slot': Slot,
}

const tabs = Object.keys(Com)

let activeName = ref('input')
</script>
<style lang="scss" scoped>
.container {
  padding: 20px;
  box-sizing: border-box;
}
</style>