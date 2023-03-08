<template>
  <TableGenerator :data="tableData" :tableOption="tableOption" :loading="loading">
    <template #operation="scope">
      <el-button type="primary">Primary</el-button>
    </template>
  </TableGenerator>
</template>

<script lang="tsx" setup>
import { Loading } from '@element-plus/icons-vue';
import { TableGenerator } from 'element-plus-generator'
import type { tableOption } from 'element-plus-generator/dist/type'
import { ref } from 'vue'

let loading = ref(false)
let tableOption = ref<tableOption[]>([
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
</script>
