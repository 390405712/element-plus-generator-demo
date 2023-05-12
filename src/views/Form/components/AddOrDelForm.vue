<template>
  <FormGenerator ref="RefFormGenerator" v-bind="{ ...formAttrs }" />
  <el-button @click="addItem">新增项</el-button>
  <el-button @click="formAttrs.formOption.pop()">删除项</el-button>
</template>

<script lang="tsx" setup>
import { FormGenerator, GeneratorUtils } from 'element-plus-generator'
import type { FormAttrs, RefFormGenerator } from 'element-plus-generator/lib/type'
import type { FormItemRule } from 'element-plus'

import { ref } from 'vue'


const checkIphoneNum: FormItemRule['validator'] = (rule, value, callback) => {
  if (!value) return callback(new Error('请输入手机号'))
  if (!/(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(value)) {
    return callback(new Error('手机格式有误'))
  }
  return callback()
}
const RefFormGenerator = ref<RefFormGenerator>()
const formAttrs = ref<FormAttrs>({
  model: {},
  formOption: [
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
  ],
  onSubmit: () => {
    console.log(RefFormGenerator.value());
  }
})

GeneratorUtils.setRequired(formAttrs.value.formOption)

function addItem() {
  formAttrs.value.formOption.push({
    type: 'input',
    formItem: {
      prop: `phone${formAttrs.value.formOption.length}`,
      label: `手机号${formAttrs.value.formOption.length}`,
      rules: {
        required: true,
        trigger: 'change',
        validator: checkIphoneNum
      }
    },
  },)
}

</script>
