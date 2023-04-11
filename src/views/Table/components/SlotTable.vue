<template>
  <TableGenerator ref="RefTableGenerator" :data="tableData" :tableOption="tableOption">
    <template #date="scope">
      {{ scope }}
    </template>
  </TableGenerator>
</template>

<script lang="tsx" setup>
import { TableGenerator } from 'element-plus-generator'
import type { TableOption, RefTableGenerator } from 'element-plus-generator/lib/type'
import { ref, onMounted } from 'vue'

let RefTableGenerator = ref<RefTableGenerator>()
let tableOption = ref<TableOption[]>([
  {
    prop: 'date',
    label: 'Date',
    width: '180',
    slots: {
      header: () => ('自定义标题')
    },
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

onMounted(() => {
  console.log(RefTableGenerator.value());
})
</script>
