<template>
  <FormGenerator class="CustomStyleFormGenerator" ref="RefFormGenerator" inline v-bind="{ ...formAttrs }" />
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

formAttrs.value.formOption.forEach(i => {
  if (['form'].includes(i.formItem.prop)) {
    i.formItem.style = 'width:100%'
  } else {
    i.formItem.style = 'width:calc(50% - 10px)'
  }
});
</script>
<style lang="scss">
.CustomStyleFormGenerator {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .el-form-item {
    margin: 0 !important;

    .el-form-item__content {
      align-items: flex-start;
    }
  }


  .btnItem {
    width: 100%;

    .el-form-item__label-wrap {
      display: none;
    }

    .el-form-item__content {
      display: flex;
      justify-content: center;
    }

  }
}
</style>
