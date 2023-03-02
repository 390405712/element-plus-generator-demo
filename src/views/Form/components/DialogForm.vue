<template>
  <el-button type="primary" @click="visible = true">打开dialog</el-button>
  <el-dialog v-model="visible" title="弹窗表单" width="400px">
    <FormGenerator type="dialog" ref="formRef" :model="form" :formOption="formOption" :rules="rules" @submit="submit" />
  </el-dialog>
</template>

<script lang="tsx" setup>
import { FormGenerator, GeneratorUtils } from 'element-plus-generator'
import type { formOption } from 'element-plus-generator/dist/type'
import { ref } from 'vue'

let visible = ref(false)
let formRef = ref()
let form = ref({})
let formOption = ref<formOption[]>([
  {
    type: 'input',
    formItem: {
      prop: 'key1',
      label: '输入框',
    },
  },
  {
    type: 'select',
    formItem: {
      prop: 'key2',
      label: '选择器',
    },
    control: {
      option: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
      ]
    },
  },
])

const rules = GeneratorUtils.getRules(formOption.value)

function submit() {
  console.log(formRef.value());
}
</script>
