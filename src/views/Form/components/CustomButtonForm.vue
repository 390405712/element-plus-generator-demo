<template>
  <FormGenerator ref="formRef" :model="form" :formOption="formOption" @submit="submit">
    <template>
      <el-button @click="onClick" type="primary" round>自定义按钮</el-button>
    </template>
  </FormGenerator>
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'element-plus-generator'
import type { formOption } from 'element-plus-generator/dist/type'
import { ref } from 'vue';

let formRef = ref()
let form = ref({})
let formOption = ref<formOption[]>([
  {
    type: 'input',
    formItem: {
      prop: 'name',
      label: 'Activity name',
    },
  },
])

function onClick() {
  formRef.value().submit()
}
function submit() {
  console.log(formRef.value());
}
</script>
