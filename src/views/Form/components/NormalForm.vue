<template>
  <FormGenerator ref="RefFormGenerator" v-bind="{ ...formAttrs }" />
</template>

<script lang="tsx" setup>
import { FormGenerator, GeneratorUtils } from 'element-plus-generator'
import type { FormAttrs, RefFormGenerator } from 'element-plus-generator/lib/type'
import { ref } from 'vue'

const RefFormGenerator = ref<RefFormGenerator>()
const formAttrs = ref<FormAttrs>({
  model: {},
  formOption: [
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
  ],
  onSubmit: () => {
    console.log(RefFormGenerator.value());
  }
})

GeneratorUtils.setRequired(formAttrs.value.formOption)
</script>
