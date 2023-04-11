<template>
  <el-dialog :title="type" v-model="visible" width="500px">
    <FormGenerator type="dialog" ref="RefFormGenerator" :model="form" :formOption="formOption" @submit="submit" />
  </el-dialog>
</template>

<script lang="tsx" setup>
import { FormGenerator, GeneratorUtils } from 'element-plus-generator'
import type { FormOption, RefFormGenerator } from 'element-plus-generator/lib/type'
import type { getRefs } from './../index.vue'
import $api from '@/services'

let RefFormGenerator = $ref<RefFormGenerator>()
let visible = $ref(false)
let type = $ref<'新增' | '修改'>('新增')
let form = $ref<Record<string, string>>({})

const option = [
  {
    label: '文本1',
    value: '值1'
  },
  {
    label: '文本2',
    value: '值2'
  },
]
let formOption = $ref<FormOption[]>([
  {
    type: 'input',
    formItem: {
      prop: 'key1',
      label: '文本1',
    },
  },
  {
    type: 'select',
    formItem: {
      prop: 'key2',
      label: '文本2',
    },
    control: {
      option
    }
  },
  {
    type: 'input-number',
    formItem: {
      prop: 'key3',
      label: '文本3',
    },
  },
  {
    type: 'radio',
    formItem: {
      prop: 'key4',
      label: '文本4',
    },
    control: {
      option
    }
  },
  {
    type: 'checkbox',
    formItem: {
      prop: 'key5',
      label: '文本5',
    },
    control: {
      option
    }
  },
])

async function openDialog(id?: number) {
  type = id ? '修改' : '新增'
  visible = true
  nextTick(async () => {
    RefFormGenerator()?.resetFields()
    if (type === '新增') {
    } else {
      //  const res = await $api.xxx.xxx()
      // form = res.data
    }
  })
}

async function submit() {
  visible = false
  if (type === '新增') {
    // await $api.xxx.xxx(form)
  } else {
    // await $api.xxx.xxx(form)
  }
  ElMessage.success(`${type}成功`)
  getRefs().Table.getTableData()
}

const getRefs = inject('getRefs') as getRefs
defineExpose({ openDialog })

</script>
