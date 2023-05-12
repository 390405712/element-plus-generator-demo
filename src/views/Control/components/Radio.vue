<template>
  <FormGenerator v-bind="{ ...formAttrs }" />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'element-plus-generator'
import type { FormAttrs } from 'element-plus-generator/lib/type'
import { ref } from 'vue'

const staticOption = [
  {
    label: '单选框选项1',
    value: '1'
  },
  {
    label: '单选框选项2',
    value: '2'
  },
]

const formAttrs = ref<FormAttrs>({
  model: {},
  formOption: [
    {
      type: 'radio',
      formItem: {
        prop: 'key1',
        label: '基础用法',
      },
      control: {
        radioGroup: staticOption
      },
    },
    {
      type: 'radio',
      formItem: {
        prop: 'key2',
        label: '禁用状态',
      },
      control: {
        disabled: true,
        radioGroup: staticOption
      },
    },
    {
      type: 'radio-button',
      formItem: {
        prop: 'key3',
        label: '按钮样式',
      },
      control: {
        radioGroup: staticOption
      },
    },
    {
      type: 'radio',
      formItem: {
        prop: 'key4',
        label: '带有边框',
      },
      control: {
        radioGroup: [
          {
            label: '单选框选项1',
            value: '1',
            border: true,
          },
          {
            label: '单选框选项2',
            value: '2',
            border: true,
          },
        ]
      },
    },
    {
      type: 'radio',
      formItem: {
        prop: 'key5',
        label: '插槽内容',
      },
      control: {
        radioGroup: [
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
  ]
})
</script>
