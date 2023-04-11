<template>
  <FormGenerator ref="RefFormGenerator" :model="form" :formOption="formOption" @submit="submit" />
</template>

<script lang="tsx" setup>
import { FormGenerator, GeneratorUtils } from 'element-plus-generator'
import type { FormOption, RefFormGenerator } from 'element-plus-generator/lib/type'
import type { FormItemRule } from 'element-plus'

import { RegExpMobilePhoneNunber } from 'common-rules'
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
      prop: 'phone1',
      label: '手机号',
      rules: {
        trigger: 'change',
        validator: checkIphoneNum
      }
    },
  },
  {
    type: 'input',
    formItem: {
      prop: 'phone2',
      label: '手机号',
      rules: {
        trigger: 'change',
        pattern: RegExpMobilePhoneNunber
      }
    },
  }, {
    type: 'input',
    formItem: {
      prop: 'phone3',
      label: '手机号',
      rules: {
        trigger: 'change',
        message: '自定义校验提示',
        pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
      }
    },
  },
])

GeneratorUtils.setRequired(formOption.value)

function submit() {
  console.log(RefFormGenerator.value());
}
</script>
