<template>
  <FormGenerator ref="formRef" :model="form" :formOption="formOption" @submit="submit" :rules="rules" />
</template>

<script lang="tsx" setup>
import { FormGenerator, GeneratorUtils } from 'element-plus-generator'
import type { formOption, rule } from 'element-plus-generator/dist/type'
import { ref } from 'vue';

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

const rules = GeneratorUtils.getRules(formOption.value)

function submit() {
  console.log(formRef.value());
}
</script>
