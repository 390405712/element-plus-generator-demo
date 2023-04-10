<template>
  <TableGenerator ref="RefTableGenerator" :data="tableData" :tableOption="tableOption" :loading="loading">
    <template #operation="scope">
      <el-button type="primary">Primary</el-button>
    </template>
  </TableGenerator>
</template>

<script lang="tsx" setup>
import { TableGenerator } from 'element-plus-generator'
import type { TableOption, RefTableGenerator } from 'element-plus-generator/dist/type'
import { ref } from 'vue'

let RefTableGenerator = ref<RefTableGenerator>()
let loading = ref(false)
let tableOption = ref<TableOption[]>([
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

let tableData = ref<any>([])


function getTableData() {
  loading.value = true
  setTimeout(() => {
    tableData.value = [
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
    ]
    loading.value = false
  }, 1000);
}

getTableData()

onMounted(() => {
  console.log(RefTableGenerator.value());
})
</script>
