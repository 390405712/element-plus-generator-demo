<template>
  <FormGenerator type="search" ref="formRef" :model="form" :formOption="formOption" @submit="submit" />
</template>

<script lang="tsx" setup>
import { FormGenerator, GeneratorUtils } from 'element-plus-generator'
import type { formOption } from 'element-plus-generator/dist/type'
import { ref } from 'vue'

let formRef = ref()
let form = ref({})
let formOption = ref<formOption[]>([
  {
    type: 'input',
    formItem: {
      prop: 'key1',
      label: '输入框1',
    },
  },
  {
    type: 'input',
    formItem: {
      prop: 'key2',
      label: '输入框2',
    },
  },
  {
    type: 'select',
    formItem: {
      prop: 'key3',
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
  {
    type: 'datetime',
    formItem: {
      prop: 'key4',
      label: '日期',
    },
  },
])

function submit() {
  console.log(formRef.value());
}
</script>
