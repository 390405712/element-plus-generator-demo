<template>
  <FormGenerator v-bind="{ ...formAttrs }">
    <template #key2="scope">
      {{ scope }}
    </template>
    <template #key4="scope">
      <el-rate v-model="formAttrs.model.key4" />
    </template>
  </FormGenerator>
</template>

<script lang="tsx" setup>
import { FormGenerator } from 'element-plus-generator'
import type { FormAttrs } from 'element-plus-generator/lib/type'
import { ref } from 'vue'
import { ElRate } from 'element-plus'

const formAttrs = ref<FormAttrs>({
  model: {
    key1: '基础用法文本值',
    key2: '模板插槽文本值',
    key3: 'jsx插槽文本值',
    key4: 2,
    key5: 2,
  },
  formOption: [
    {
      type: 'slot',
      formItem: {
        prop: 'key1',
        label: '基础用法',
      },
    },
    {
      type: 'slot',
      formItem: {
        prop: 'key2',
        label: '模板插槽',
      },
    },
    {
      type: 'slot',
      formItem: {
        prop: 'key3',
        label: 'jsx插槽',
      },
      control: {
        slots: {
          default: (scope) => (<div style="word-break: break-all;">{JSON.stringify(scope)}</div>)
        }
      }
    },
    {
      type: 'slot',
      formItem: {
        prop: 'key4',
        label: '模板插槽(带组件)',
      },
    },
    {
      type: 'slot',
      formItem: {
        prop: 'key5',
        label: 'jsx插槽(带组件)',
      },
      control: {
        slots: {
          default: (scope) => <ElRate v-model={formAttrs.value.model.key5} />
        }
      }
    },
  ]
})
</script>
