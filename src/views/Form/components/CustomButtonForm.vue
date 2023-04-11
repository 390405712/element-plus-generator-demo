<template>
  <FormGenerator ref="RefFormGenerator" :model="form" :formOption="formOption" @submit="submit">
    <template>
      <el-button @click="onClick" type="primary" round>自定义按钮</el-button>
    </template>
  </FormGenerator>
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'element-plus-generator'
import type { FormOption, RefFormGenerator } from 'element-plus-generator/lib/type'
import { ref } from 'vue'

let RefFormGenerator = ref<RefFormGenerator>()
let form = ref({})
let formOption = ref<FormOption[]>([
  {
    type: 'input',
    formItem: {
      prop: 'name',
      label: 'Activity name',
    },
  },
])

function onClick() {
  RefFormGenerator.value().submit()
}
function submit() {
  console.log(RefFormGenerator.value());
}
</script>
