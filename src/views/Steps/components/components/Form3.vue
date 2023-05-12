<template>
  <FormGenerator ref="RefFormGenerator" v-bind="{ ...formAttrs }" />
</template>

<script lang="tsx" setup>
import { FormGenerator, GeneratorUtils } from 'element-plus-generator'
import type { RefFormGenerator, FormAttrs } from 'element-plus-generator/lib/type'
import { RegExpMobilePhoneNunber } from 'common-rules'
import { ref } from 'vue'

const RefFormGenerator = ref<RefFormGenerator>()
const formAttrs = ref<FormAttrs>({
  model: {},
  formOption: [
    {
      type: 'input',
      formItem: {
        prop: 'phone1',
        label: '手机号',
        rules: {
          trigger: 'change',
          validator: (rule, value, callback) => {
            if (!value) return callback(new Error('请输入手机号'))
            if (!/(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(value)) {
              return callback(new Error('手机格式有误'))
            }
            return callback()
          }
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
  ],
  onSubmit: () => { console.log(RefFormGenerator.value()); },
  noFooter: true
})
GeneratorUtils.setRequired(formAttrs.value.formOption)
defineExpose({ RefFormGenerator, formAttrs })
</script>
