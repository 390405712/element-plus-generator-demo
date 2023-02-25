<template>
  <FormGenerator :model="form" :formOption="formOption" />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'element-plus-generator'
import type { formOption } from 'element-plus-generator/dist/type'
import { ref } from 'vue'

let form = ref({})
let formOption = ref<formOption[]>([
  {
    type: 'datetime',
    formItem: {
      prop: 'key1',
      label: '日期',
    },
  },
  {
    type: 'datetime',
    formItem: {
      prop: 'key2',
      label: '日期范围',
    },
    control: {
      type: "daterange",
    },
  },
  {
    type: 'datetime',
    formItem: {
      prop: 'key3',
      label: '日期时间',
    },
    control: {
      type: "datetime",
    },
  },

  {
    type: 'datetime',
    formItem: {
      prop: 'key4',
      label: '日期时间范围',
    },
    control: {
      type: "datetimerange",
    },
  },
  {
    type: 'time',
    formItem: {
      prop: 'key5',
      label: '时间',
    },
  },
  {
    type: 'time',
    formItem: {
      prop: 'key6',
      label: '时间范围',
    },
    control: {
      'is-range': true
    },
  },
])
</script>
