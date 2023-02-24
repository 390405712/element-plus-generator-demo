<template>
  <div class="container">
    <el-tabs v-model="activeName" type="card" tabPosition="left">
      <el-tab-pane v-for="(item, index) in tabs" :key="index" :label="item" :name="item">
        <component :is="Com[item]"></component>
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
import Txt from './components/Txt.vue'
import Slot from './components/Slot.vue'

const Com = {
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
  'txt': Txt,
  'slot': Slot,
}

const tabs = Object.keys(Com)

let activeName = ref('input')
console.log(tabs);
let a:any = []
tabs.forEach(i => {
  console.log(i);
  // a.push({
  //   text: i,
  //   link:`/control/${i}`
  // })
});
JSON.stringify(a)
console.log(123123);
</script>
<style lang="scss" scoped>
.container {
  padding: 20px;
  box-sizing: border-box;
}
</style>