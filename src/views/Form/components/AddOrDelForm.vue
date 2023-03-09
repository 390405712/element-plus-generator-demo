<template>
  <FormGenerator ref="formRef" :model="form" :formOption="formOption" @submit="submit"/>
  <el-button @click="addItem">新增项</el-button>
  <el-button @click="formOption.pop()">删除项</el-button>
</template>

<script lang="tsx" setup>
import { FormGenerator, GeneratorUtils } from 'element-plus-generator'
import type { formOption, rule } from 'element-plus-generator/dist/type'
import { ref } from 'vue'

let formRef = ref()
let form = ref({})

const checkIphoneNum = (
  rule: rule,
  value: string | boolean,
): Promise<void> => {
  if (!value) return Promise.reject('请输入手机号')
  if (!/(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(value)) {
    return Promise.reject('手机格式有误')
  }
  return Promise.resolve()
}

let formOption = ref<formOption[]>([
  {
    type: 'input',
    formItem: {
      prop: 'phone',
      label: '手机号',
      rules: {
        trigger: 'change',
        validator: checkIphoneNum
      }
    },
  },
])

GeneratorUtils.setRequired(formOption.value)

function addItem() {
  formOption.value.push({
    type: 'input',
    formItem: {
      prop: `phone${formOption.value.length}`,
      label: `手机号${formOption.value.length}`,
      rules: {
        required: true,
        trigger: 'change',
        validator: checkIphoneNum
      }
    },
  },)
}


function submit() {
  console.log(formRef.value());
}
</script>
