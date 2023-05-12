<template>
  <FormGenerator :label-position="formAttrs.model.labelPosition" :size="formAttrs.model.size" ref="RefFormGenerator" v-bind="{ ...formAttrs }" />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'element-plus-generator'
import type { FormAttrs, RefFormGenerator } from 'element-plus-generator/lib/type'
import { ref } from 'vue'

const RefFormGenerator = ref<RefFormGenerator>()
const formAttrs = ref<FormAttrs>({
  model: {
    labelPosition: 'left',
    size: 'default',
  },
  formOption: [
    {
      type: 'radio-button',
      formItem: {
        prop: 'labelPosition',
        label: '对齐方式',
      },
      control: {
        radioGroup: [
          {
            label: 'left',
            value: 'left'
          }, {
            label: 'right',
            value: 'right'
          }, {
            label: 'top',
            value: 'top'
          },
        ]
      }
    },
    {
      type: 'radio-button',
      formItem: {
        prop: 'size',
        label: '尺寸控制',
      },
      control: {
        radioGroup: [
          {
            label: 'large',
            value: 'large'
          }, {
            label: 'default',
            value: 'default'
          }, {
            label: 'small',
            value: 'small'
          },
        ]
      }
    },
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
    {
      type: 'date-time-picker',
      formItem: {
        prop: 'date',
        label: 'Activity time',
      },
      control: {
        type: "datetime"
      },
    },
    {
      type: 'switch',
      formItem: {
        prop: 'delivery',
        label: 'Instant delivery',
      },
      control: {
      },
    },
    {
      type: 'checkbox',
      formItem: {
        prop: 'type',
        label: 'Activity type',
      },
      control: {
        checkboxGroup: [
          {
            value: 'Online activities',
            label: 'Online activities',
          }, {
            value: 'Promotion activities',
            label: 'Promotion activities',
          }, {
            value: 'Offline activities',
            label: 'Offline activities',
          },
          {
            value: 'Simple brand exposure',
            label: 'Simple brand exposure',
          },
        ]
      },
    },
    {
      type: 'radio',
      formItem: {
        prop: 'resource',
        label: 'Resources',
      },
      control: {
        radioGroup: [
          {
            value: 'Sponsor',
            label: 'Sponsor',
          }, {
            value: 'Venue',
            label: 'Venue',
          },
        ]
      },
    },
    {
      type: 'input',
      formItem: {
        prop: 'form',
        label: 'Activity form',
      },
      control: {
        type: 'textarea'
      }
    },
  ],
  onSubmit: () => {
    console.log(RefFormGenerator.value());
  }
})
</script>
