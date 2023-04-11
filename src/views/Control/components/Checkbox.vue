<template>
  <FormGenerator :model="form" :formOption="formOption" />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'element-plus-generator'
import type { FormOption } from 'element-plus-generator/lib/type'
import { ref } from 'vue'

let form = ref({})

const staticOption = [
  {
    label: '复选框选项1',
    value: '1'
  },
  {
    label: '复选框选项2',
    value: '2'
  },
]

let formOption = ref<FormOption[]>([
  {
    type: 'checkbox',
    formItem: {
      prop: 'key1',
      label: '基础用法',
    },
    control: {
      option: staticOption
    },
  },
  {
    type: 'checkbox',
    formItem: {
      prop: 'key2',
      label: '禁用状态',
    },
    control: {
      disabled: true,
      option: staticOption
    },
  },
  {
    type: 'checkbox-button',
    formItem: {
      prop: 'key3',
      label: '按钮样式',
    },
    control: {
      option: staticOption
    },
  },
  {
    type: 'checkbox',
    formItem: {
      prop: 'key4',
      label: '带有边框',
    },
    control: {
      option: [
        {
          label: '复选框选项1',
          value: '1',
          border: true,
        },
        {
          label: '复选框选项2',
          value: '2',
          border: true,
        },
      ]
    },
  },
  {
    type: 'checkbox',
    formItem: {
      prop: 'key5',
      label: '插槽内容',
    },
    control: {
      option: [
        {
          value: '1',
          border: true,
          slots: {
            default: () => (<span>插槽内容1</span>),
          }
        },
        {
          value: '2',
          border: true,
          slots: {
            default: () => (<span>插槽内容2</span>),
          }
        },
      ]
    },
  },
])
</script>
