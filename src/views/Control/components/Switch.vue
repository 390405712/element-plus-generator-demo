<template>
  <FormGenerator :model="form" :formOption="formOption" />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'element-plus-generator'
import type { formOption } from 'element-plus-generator/dist/type'
import { ref } from 'vue';
import { Check, Close } from '@element-plus/icons-vue'

let form = ref({})
let loading = ref(false)
let formOption = ref<formOption[]>([
  {
    type: 'switch',
    formItem: {
      prop: 'key1',
      label: '基础用法',
    },
  },
  {
    type: 'switch',
    formItem: {
      prop: 'key2',
      label: '尺寸',
    },
    control: {
      size: 'large'
    }
  },
  {
    type: 'switch',
    formItem: {
      prop: 'key3',
      label: '文字描述',
    },
    control: {
      activeText: "Pay by month",
      inactiveText: "Pay by year"
    }
  },
  {
    type: 'switch',
    formItem: {
      prop: 'key4',
      label: '显示自定义图标',
    },
    control: {
      activeIcon: Check,
      inactiveIcon: Close
    }
  },
  {
    type: 'switch',
    formItem: {
      prop: 'key5',
      label: '扩展的value类型',
    },
    control: {
      activeValue: "100",
      inactiveValue: "0"
    }
  },
  {
    type: 'switch',
    formItem: {
      prop: 'key6',
      label: '禁用状态',
    },
    control: {
      disabled: true
    }
  },
  {
    type: 'switch',
    formItem: {
      prop: 'key7',
      label: '加载状态',
    },
    control: {
      loading: true
    }
  },
  {
    type: 'switch',
    formItem: {
      prop: 'key8',
      label: '阻止切换',
    },
    control: {
      loading: loading.value,
      beforeChange: beforeChange
    }
  },
])

function beforeChange() {
  loading.value = true
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      loading.value = false
      return reject()
    }, 1000)
  })
}
</script>
