<template>
  <div class="AtypiaStyleFromGenerator">
    <FormGenerator ref="RefFormGenerator" inline :model="form" :formOption="formOption" @submit="submit" />
  </div>
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'element-plus-generator'
import type { FormOption, RefFormGenerator } from 'element-plus-generator/lib/type'
import { ref, onMounted } from 'vue'

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
])

formOption.value.forEach(i => {
  if (['form'].includes(i.formItem.prop)) {
    i.formItem.style = 'width:100%'
  } else {
    i.formItem.style = 'width:calc(50% - 10px)'
  }
});

onMounted(() => {
  // 1.创建容器
  const div = document.createElement('div')
  div.setAttribute('class', 'CustomDiv')
  // 2.塞入容器
  const el = document.querySelector('.AtypiaStyleFromGenerator .FormGenerator')
  el.insertBefore(div, el.children[0])
  // 3.将指定的formItem装进容器
  const CustomDiv = document.querySelector('.CustomDiv')
  document.querySelectorAll('.AtypiaStyleFromGenerator .FormGenerator .el-form-item').forEach((i, index) => { index <= 3 && CustomDiv.appendChild(i) })
})

function submit() {
  console.log(RefFormGenerator.value());
}
</script>
<style lang="scss" scoped>
.AtypiaStyleFromGenerator {
  :deep(.FormGenerator) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    .CustomDiv {
      padding: 10px;
      border-radius: 10px;
      background-color: #b5ddfc;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

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
}
</style>
