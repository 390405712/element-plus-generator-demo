<template>
  <FormGenerator :model="form" :formOption="formOption" />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'element-plus-generator'
import type { FormOption } from 'element-plus-generator/lib/type'
import { ref } from 'vue'

let form = ref({})
let formOption = ref<FormOption[]>([
  {
    type: 'input-number',
    formItem: {
      prop: 'key1',
      label: '基础用法',
    },
  },
  {
    type: 'input-number',
    formItem: {
      prop: 'key2',
      label: '禁用状态',
    },
    control: {
      disabled: true
    }
  },
  {
    type: 'input-number',
    formItem: {
      prop: 'key3',
      label: '步进',
    },
    control: {
      step: 2
    }
  },
  {
    type: 'input-number',
    formItem: {
      prop: 'key4',
      label: '严格步进',
    },
    control: {
      step: 2,
      stepStrictly: true
    }
  },
  {
    type: 'input-number',
    formItem: {
      prop: 'key5',
      label: '精度',
    },
    control: {
      step: 0.1,
      precision: 2,
      max: 10
    }
  },
  {
    type: 'input-number',
    formItem: {
      prop: 'key6',
      label: '尺寸',
    },
    control: {
      size: 'large'
    }
  },
  {
    type: 'input-number',
    formItem: {
      prop: 'key7',
      label: '按钮位置',
    },
    control: {
      controlsPosition: "right"
    }
  },
])
</script>
