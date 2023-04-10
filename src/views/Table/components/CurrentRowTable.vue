<template>
  <TableGenerator ref="RefTableGenerator" :data="tableData" :tableOption="tableOption" highlight-current-row
    @current-change="handleCurrentChange" />
</template>

<script lang="tsx" setup>
import { TableGenerator } from 'element-plus-generator'
import type { TableOption, RefTableGenerator } from 'element-plus-generator/dist/type'
import { ElMessage } from 'element-plus'
import { ref, onMounted } from 'vue'

let RefTableGenerator = ref<RefTableGenerator>()
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

function handleCurrentChange(val: any) {
  ElMessage.closeAll()
  ElMessage.success(JSON.stringify(val))
}

onMounted(() => {
  console.log(RefTableGenerator.value());
})
</script>
