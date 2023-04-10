<template>
  <FormGenerator class="CustomStyleFormGenerator" ref="RefFormGenerator" inline :model="form" :formOption="formOption"
    @submit="submit" />
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'element-plus-generator'
import type { FormOption,RefFormGenerator } from 'element-plus-generator/dist/type'
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
])

formOption.value.forEach(i => {
  if (['form'].includes(i.formItem.prop)) {
    i.formItem.style = 'width:100%'
  } else {
    i.formItem.style = 'width:calc(50% - 10px)'
  }


});

function submit() {
  console.log(RefFormGenerator.value());
}
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
