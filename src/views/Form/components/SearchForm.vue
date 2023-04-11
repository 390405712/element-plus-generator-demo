<template>
  <FormGenerator type="search" ref="RefFormGenerator" :model="form" :formOption="formOption" @submit="submit" />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'element-plus-generator'
import type { FormOption,RefFormGenerator } from 'element-plus-generator/lib/type'
import { ref } from 'vue'

let RefFormGenerator = ref<RefFormGenerator>()
let form = ref({})
let formOption = ref<FormOption[]>([
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
    type: 'date-time-picker',
    formItem: {
      prop: 'key4',
      label: '日期',
    },
  },
])

function submit() {
  console.log(RefFormGenerator.value());
}
</script>
