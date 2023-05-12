<template>
  <FormGenerator ref="RefFormGenerator" v-bind="{ ...formAttrs }" />
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
      control: {
        'onUpdate:modelValue': (val) => {
          console.log(val);
        }
      }
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
        ],
        'onUpdate:modelValue': (val) => {
          console.log(val);
        }
      },
    },
    {
      type: 'date-time-picker',
      formItem: {
        prop: 'date',
        label: 'Activity time',
      },
      control: {
        type: "datetime",
        'onUpdate:modelValue': (val) => {
          console.log(val);
        }
      },
    },
    {
      type: 'switch',
      formItem: {
        prop: 'delivery',
        label: 'Instant delivery',
      },
      control: {
        'onUpdate:modelValue': (val) => {
          console.log(val);
        }
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
        ],
        'onUpdate:modelValue': (val) => {
          console.log(val);
        }
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
        ],
        'onUpdate:modelValue': (val) => {
          console.log(val);
        }
      },
    },
    {
      type: 'input',
      formItem: {
        prop: 'form',
        label: 'Activity form',
      },
      control: {
        type: 'textarea',
        'onUpdate:modelValue': (val) => {
          console.log(val);
        }
      }
    },
  ],
  onSubmit: () => {
    console.log(RefFormGenerator.value());
  }
})

</script>
