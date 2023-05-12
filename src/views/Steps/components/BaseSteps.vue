<template>
  <StepsGenerator v-bind="{...stepsAttrs}" >
    <template #step1>
      <Form1 />
    </template>
    <template #step2>
      <Form2 />
    </template>
    <template #step3>
      <Form3 />
    </template>
  </StepsGenerator>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { StepsAttrs } from 'element-plus-generator/lib/type'
import { StepsGenerator } from 'element-plus-generator/lib/index'
import Form1 from './components/Form1.vue'
import Form2 from './components/Form2.vue'
import Form3 from './components/Form3.vue'


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
})

</script>