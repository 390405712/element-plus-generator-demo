<template>
  <TableGenerator ref="RefTableGenerator" :data="tableData" :tableOption="tableOption" />
</template>

<script lang="tsx" setup>
import { TableGenerator } from 'element-plus-generator'
import type { TableOption, RefTableGenerator } from 'element-plus-generator/lib/type'
import { ref, onMounted } from 'vue'

let RefTableGenerator = ref<RefTableGenerator>()
let tableOption = ref<TableOption[]>([
  {
    type: "index",
    label: '序号',
    width: '60'
  },
  {
    type: "index",
    label: '自定义序号',
    width: '120',
    index: indexMethod,
  },
  {
    prop: 'date',
    label: 'Date',
    width: '180'
  }, {
    prop: 'name',
    label: 'Name',
    width: '180'
  }, {
    prop: 'address',
    label: 'Address',
  },
])

let tableData = ref<any>([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
])

function indexMethod(index: number) {
  return index * 2
}

onMounted(() => {
  console.log(RefTableGenerator.value());
})
</script>
