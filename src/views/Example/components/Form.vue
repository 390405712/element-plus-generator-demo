<template>
  <FormGenerator type="search" :model="form" :formOption="formOption" @submit="submit" />
</template>

<script lang="ts" setup>
import { FormGenerator } from 'element-plus-generator'
import type { FormOption } from 'element-plus-generator/lib/type'
import type { getRefs } from './../index.vue'

let form = $ref<Record<string, string>>({})
let formOption = $ref<FormOption[]>([
  {
    type: 'input',
    formItem: {
      prop: 'key1',
      label: '字段1',
    },
  },
  {
    type: 'select',
    formItem: {
      prop: 'key2',
      label: '字段2',
    },
    control: {
      option: [
        {
          label: '文本1',
          value: '值1'
        },
      ]
    }
  },
  {
    type: 'date-time-picker',
    formItem: {
      prop: 'key3',
      label: '字段3',
    },
  },
  {
    type: 'input',
    formItem: {
      prop: 'key4',
      label: '字段4',
    },
  },
  {
    type: 'input',
    formItem: {
      prop: 'key5',
      label: '字段5',
    },
  },
])

function submit() {
  getRefs().Page.setPageNum(1)
  getRefs().Table.getTableData()
}

const getRefs = inject('getRefs') as getRefs
defineExpose({ form })
</script>
