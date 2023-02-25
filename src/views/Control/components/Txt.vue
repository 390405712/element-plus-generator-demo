<template>
  <FormGenerator :model="form" :formOption="formOption"  />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'element-plus-generator'
import type { formOption } from 'element-plus-generator/dist/type'
import { ref } from 'vue'

let form = ref({
  key:'文本值'
})
let formOption = ref<formOption[]>([
  {
    type: 'txt',
    formItem: {
      prop: 'key',
      label: '基础用法',
    },
  },
])
</script>
