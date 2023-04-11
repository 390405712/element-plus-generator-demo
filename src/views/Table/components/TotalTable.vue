<template>
  <TableGenerator ref="RefTableGenerator" :data="tableData" :tableOption="tableOption" show-summary />
</template>

<script lang="tsx" setup>
import { TableGenerator } from 'element-plus-generator'
import type { TableOption, RefTableGenerator } from 'element-plus-generator/lib/type'
import { ref, onMounted } from 'vue'

let RefTableGenerator = ref<RefTableGenerator>()
let tableOption = ref<TableOption[]>([
  {
    prop: 'id',
    label: 'Id',
  }, {
    prop: 'name',
    label: 'Name',
  }, {
    prop: 'amount1',
    label: 'amount1',
  },{
    prop: 'amount2',
    label: 'amount2',
  },{
    prop: 'amount3',
    label: 'amount3',
  },
])

let tableData = ref<any>([
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9,
  },
  {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 17,
  },
  {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15,
  },
])

onMounted(() => {
  console.log(RefTableGenerator.value());
})
</script>
