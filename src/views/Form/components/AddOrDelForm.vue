<template>
  <FormGenerator ref="RefFormGenerator" :model="form" :formOption="formOption" @submit="submit" />
  <el-button @click="addItem">新增项</el-button>
  <el-button @click="formOption.pop()">删除项</el-button>
</template>

<script lang="tsx" setup>
import { FormGenerator, GeneratorUtils } from 'element-plus-generator'
import type { FormOption, RefFormGenerator } from 'element-plus-generator/dist/type'
import type { FormItemRule } from 'element-plus'

import { ref } from 'vue'

let RefFormGenerator = ref<RefFormGenerator>()
let form = ref({})

const checkIphoneNum: FormItemRule['validator'] = (rule, value, callback) => {
  if (!value) return callback(new Error('请输入手机号'))
  if (!/(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(value)) {
    return callback(new Error('手机格式有误'))
  }
  return callback()
}

let formOption = ref<FormOption[]>([
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
  console.log(RefFormGenerator.value());
}
</script>
