<template>
  <FormGenerator ref="RefFormGenerator" v-bind="{ ...formAttrs }">
    <template>
      <el-button @click="onClick" type="primary" round>自定义按钮</el-button>
    </template>
  </FormGenerator>
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'element-plus-generator'
import type { FormAttrs, RefFormGenerator } from 'element-plus-generator/lib/type'
import { ref } from 'vue'

const RefFormGenerator = ref<RefFormGenerator>()
const formAttrs = ref<FormAttrs>({
  model: {},
  formOption: [
    {
      type: 'input',
      formItem: {
        prop: 'name',
        label: 'Activity name',
      },
    },
  ],
  onSubmit: () => {
    console.log(RefFormGenerator.value());
  }
})

function onClick() {
  RefFormGenerator.value().submit()
}
</script>
