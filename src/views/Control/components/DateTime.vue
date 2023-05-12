<template>
  <FormGenerator v-bind="{ ...formAttrs }" />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'element-plus-generator'
import type { FormAttrs } from 'element-plus-generator/lib/type'
import { ref } from 'vue'

const formAttrs = ref<FormAttrs>({
  model: {},
  formOption: [
    {
      type: 'date-picker',
      formItem: {
        prop: 'key1',
        label: '日期',
      },
    },
    {
      type: 'date-picker',
      formItem: {
        prop: 'key2',
        label: '日期范围',
      },
      control: {
        type: "daterange",
      },
    },
    {
      type: 'date-time-picker',
      formItem: {
        prop: 'key3',
        label: '日期时间',
      },
      control: {
        type: "datetime",
      },
    },
    {
      type: 'date-time-picker',
      formItem: {
        prop: 'key4',
        label: '日期时间范围',
      },
      control: {
        type: 'datetimerange',
      },
    },
    {
      type: 'time-picker',
      formItem: {
        prop: 'key5',
        label: '时间',
      },
    },
    {
      type: 'time-picker',
      formItem: {
        prop: 'key6',
        label: '时间范围',
      },
      control: {
        isRange: true
      },
    },
  ]
})
</script>
