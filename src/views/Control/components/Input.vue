<template>
  <FormGenerator v-bind="{ ...formAttrs }" />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'element-plus-generator'
import type { FormAttrs } from 'element-plus-generator/lib/type'
import { Calendar, Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const formAttrs = ref<FormAttrs>({
  model: {},
  formOption: [
    {
      type: 'input',
      formItem: {
        prop: 'key1',
        label: '基础用法',
      },
    },
    {
      type: 'input',
      formItem: {
        prop: 'key2',
        label: '禁用状态',
      },
      control: {
        disabled: true,
      }
    },
    {
      type: 'input',
      formItem: {
        prop: 'key3',
        label: '一键清空',
      },
      control: {
        clearable: true
      }
    },
    {
      type: 'input',
      formItem: {
        prop: 'key4',
        label: '格式化',
      },
      control: {
        formatter: (value: string) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        parser: (value: string) => value.replace(/\$\s?|(,*)/g, '')
      }
    },
    {
      type: 'input',
      formItem: {
        prop: 'key5',
        label: '密码框',
      },
      control: {
        showPassword: true
      }
    },
    {
      type: 'input',
      formItem: {
        prop: 'key6',
        label: '图标:attr',
      },
      control: {
        suffixIcon: Calendar,
        prefixIcon: Search
      }
    },
    {
      type: 'input',
      formItem: {
        prop: 'key7',
        label: '图标:slot',
      },
      control: {
        slots: {
          suffix: () => (<el-icon><Calendar /></el-icon>),
          prefix: () => (<el-icon><Search /></el-icon>),
        }
      }
    },
    {
      type: 'input',
      formItem: {
        prop: 'key8',
        label: '文本域',
      },
      control: {
        rows: 2,
        type: "textarea",
        autosize: { minRows: 2, maxRows: 4 },
        maxlength: "30",
        showWordLimit: true,
      }
    },
    {
      type: 'input',
      formItem: {
        prop: 'key9',
        label: '复合型',
      },
      control: {
        slots: {
          prepend: () => (<el-icon><Calendar /></el-icon>),
          append: () => (<el-icon><Search /></el-icon>),
        }
      }
    },
    {
      type: 'input',
      formItem: {
        prop: 'key10',
        label: '监听方法',
      },
      control: {
        onBlur: (event) => { console.log('blur', event); },
        onFocus: (event) => { console.log('focus', event); },
        onChange: (value) => { console.log('change', value); },
        onInput: (value) => { console.log('input', value); },
        onClear: () => { console.log('clear'); },
      }
    },
    {
      type: 'input',
      formItem: {
        prop: 'key11',
        label: '尺寸',
      },
      control: {
        size: 'large',
      }
    },
    {
      type: 'input',
      formItem: {
        prop: 'key12',
        label: '长度限制',
      },
      control: {
        maxlength: "30",
      }
    },
  ]
})
</script>
