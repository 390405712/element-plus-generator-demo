<template>
  <FormGenerator ref="formRef" :model="form" :formOption="formOption" @submit="submit" :rules="rules" />
</template>

<script lang="tsx" setup>
import { FormGenerator, GeneratorUtils } from 'element-plus-generator'
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
    type: 'datetime',
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
      option: [
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
      option: [
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
  {
    type: 'input',
    formItem: {
      prop: 'omitKey',
      label: '非必填字段',
    },
  },
])
const rules = GeneratorUtils.getRules(formOption.value, ['omitKey'])

function submit() {
  console.log(formRef.value());
}
</script>
