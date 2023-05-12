<template>
  <FormGenerator :inline="true" ref="RefFormGenerator" v-bind="{ ...formAttrs }" />
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
    {
      type: 'select',
      formItem: {
        prop: 'region',
        label: 'Activity zone',
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
</script>
