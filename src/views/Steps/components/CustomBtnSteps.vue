<template>
  <StepsGenerator ref="RefStepsGenerator" v-bind="{ ...stepsAttrs }">
    <template #step1>
      <Form1 ref="RefForm1" />
    </template>
    <template #step2>
      <Form2 ref="RefForm2" />
    </template>
    <template #step3>
      <Form3 ref="RefForm3" />
    </template>
    <template #default="scope">
      <ElButton @click="RefStepsGenerator.prev()" v-if="scope !== 0">返回上一步</ElButton>
      <ElButton @click="RefStepsGenerator.next()">{{ scope === 2 ? '提交' : '进入下一步' }}</ElButton>
    </template>
  </StepsGenerator>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage, ElButton } from 'element-plus'
import type { StepsAttrs } from 'element-plus-generator/lib/type'
import { StepsGenerator } from 'element-plus-generator/lib/index'
import Form1 from './components/Form1.vue'
import Form2 from './components/Form2.vue'
import Form3 from './components/Form3.vue'

let RefStepsGenerator = ref()
let RefForm1 = ref()
let RefForm2 = ref()
let RefForm3 = ref()

let stepsAttrs = ref<StepsAttrs>({
  stepsOption: [
    {
      key: 'step1',
      title: '步骤 1',
    },
    {
      key: 'step2',
      title: '步骤 2'
    },
    {
      key: 'step3',
      title: '步骤 3'
    },
  ],
  onPrev: async (activeIndex, prev) => {
    switch (activeIndex) {
      case 0:
        await RefForm1.value.RefFormGenerator().clearValidate()
        prev()
        break;
      case 1:
        await RefForm2.value.RefFormGenerator().clearValidate()
        prev()
        break;
      case 2:
        await RefForm3.value.RefFormGenerator().clearValidate()
        prev()
        break;
    }
  },
  onNext: async (activeIndex, next) => {
    switch (activeIndex) {
      case 0:
        await RefForm1.value.RefFormGenerator().validate()
        next()
        break;
      case 1:
        await RefForm2.value.RefFormGenerator().validate()
        next()
        break;
      case 2:
        await RefForm3.value.RefFormGenerator().validate()
        ElMessage.closeAll()
        ElMessage.success('提交成功')
        break;
    }
  },
})
</script>