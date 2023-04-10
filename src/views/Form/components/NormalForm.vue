<template>
  <FormGenerator ref="RefFormGenerator" :model="form" :formOption="formOption" @submit="submit" />
</template>

<script lang="tsx" setup>
import { FormGenerator, GeneratorUtils } from 'element-plus-generator'
import type { FormOption,RefFormGenerator } from 'element-plus-generator/dist/type'
import { ref } from 'vue'

let RefFormGenerator = ref<RefFormGenerator>()
let form = ref({})
let formOption = ref<FormOption[]>([
  {
    type: 'input',
    formItem: {
      prop: 'key1',
      label: '输入框',
    },
  },
  {
    type: 'select',
    formItem: {
      prop: 'key2',
      label: '选择器',
    },
    control: {
      option: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
      ]
    },
  },
])

GeneratorUtils.setRequired(formOption.value)

function submit() {
  console.log(RefFormGenerator.value());
}
</script>
