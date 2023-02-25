<template>
  <FormGenerator :model="form" :formOption="formOption">
    <template #slotKey="scope">
      <el-rate v-model="form.slotKey" />
      {{ scope }}
    </template>
  </FormGenerator>
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'element-plus-generator'
import type { formOption } from 'element-plus-generator/dist/type'
import { ref } from 'vue'

let form = ref({
  slotKey: 5
})
let formOption = ref<formOption[]>([
  {
    type: 'slot',
    formItem: {
      prop: 'slotKey',
      label: '自定义插槽',
    },
  },
])
</script>
