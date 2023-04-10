<template>
  <FormGenerator :model="form" :formOption="formOption" />
</template>

<script lang="tsx" setup>
import { FormGenerator, GeneratorUtils } from 'element-plus-generator'
import type { FormOption,FormOptionItem } from 'element-plus-generator/dist/type'
import { ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'

let form = ref({})

const staticOptions = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
let formOption = ref<FormOption[]>([
  {
    type: 'select',
    formItem: {
      prop: 'key1',
      label: '基础用法',
    },
    control: {
      option: staticOptions
    },
  },
  {
    type: 'select',
    formItem: {
      prop: 'key2',
      label: '禁用选项',
    },
    control: {
      option: [
        {
          value: 'Option1',
          label: 'Option1',
          disabled: true,
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
      ]
    },
  },
  {
    type: 'select',
    formItem: {
      prop: 'key3',
      label: '禁用状态',
    },
    control: {
      disabled: true,
      option: staticOptions
    },
  },
  {
    type: 'select',
    formItem: {
      prop: 'key4',
      label: '清空单选',
    },
    control: {
      clearable: true,
      option: staticOptions
    },
  },
  {
    type: 'select',
    formItem: {
      prop: 'key5',
      label: '基础多选',
    },
    control: {
      multiple: true,
      option: staticOptions
    },
  },
  {
    type: 'select',
    formItem: {
      prop: 'key6',
      label: '自定义',
    },
    control: {
      option: [
        {
          value: 'Option1',
          slots: {
            default: () => (<span><el-icon><Calendar /></el-icon> Option1</span>),
          }
        },
        {
          value: 'Option2',
          slots: {
            default: () => (<span><el-icon><Search /></el-icon> Option2</span>),
          }
        },
      ]
    },
  },
  {
    type: 'select',
    formItem: {
      prop: 'key7',
      label: '筛选选项',
    },
    control: {
      filterable: true,
      option: staticOptions
    },
  },
  {
    type: 'select',
    formItem: {
      prop: 'key8',
      label: '新建选项',
    },
    control: {
      multiple: true,
      filterable: true,
      allowCreate: true,
      defaultFirstOption: true,
      reserveKeyword: false,
      option: staticOptions
    },
  },
  {
    type: 'select',
    formItem: {
      prop: 'key9',
      label: '异步加载',
    },
    control: {
      option: [],
    },
  },
])

const data = [
  {
    id: '1',
    name: 'Option1'
  }
];

(formOption.value.find(i => i.formItem.prop === 'key9') as FormOptionItem<'select'>).control.option = GeneratorUtils.getOption(data, 'name', 'id') // [{label:'Option1',value:'1'}]
</script>
