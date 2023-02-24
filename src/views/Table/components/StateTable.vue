<template>
  <TableGenerator :data="tableData" :tableOption="tableOption" :cell-style="cellStyle" />
</template>

<script lang="tsx" setup>
import { TableGenerator } from 'element-plus-generator'
import type { tableOption } from 'element-plus-generator/dist/type'
import { ref } from 'vue';

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


const cellStyle = ({
  row,
  rowIndex,
}: {
  row: any
  rowIndex: number
}) => {
  console.log(rowIndex);
  if (rowIndex === 1) {
    return {
      backgroundColor: '#fdf6ec',
    }
  } else if (rowIndex === 3) {
    return {
      backgroundColor: '#f0f9eb',
    }
  }
  return {}
}
</script>