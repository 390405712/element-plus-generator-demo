<template>
  <TableGenerator ref="RefTableGenerator" :data="tableData" :tableOption="tableOption" :span-method="arraySpanMethod" />
  <TableGenerator :data="tableData" :tableOption="tableOption" :span-method="objectSpanMethod" />
</template>

<script lang="tsx" setup>
import { TableGenerator } from 'element-plus-generator'
import type { TableOption, RefTableGenerator } from 'element-plus-generator/dist/type'
import { ref, onMounted } from 'vue'
import type { TableColumnCtx } from 'element-plus'

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
  }, {
    prop: 'amount2',
    label: 'amount2',
  }, {
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

interface User {
  id: string
  name: string
  amount1: string
  amount2: string
  amount3: number
}

interface SpanMethodProps {
  row: User
  column: TableColumnCtx<User>
  rowIndex: number
  columnIndex: number
}

const arraySpanMethod = ({
  row,
  column,
  rowIndex,
  columnIndex,
}: SpanMethodProps) => {
  if (rowIndex % 2 === 0) {
    if (columnIndex === 0) {
      return [1, 2]
    } else if (columnIndex === 1) {
      return [0, 0]
    }
  }
}

const objectSpanMethod = ({
  row,
  column,
  rowIndex,
  columnIndex,
}: SpanMethodProps) => {
  if (columnIndex === 0) {
    if (rowIndex % 2 === 0) {
      return {
        rowspan: 2,
        colspan: 1,
      }
    } else {
      return {
        rowspan: 0,
        colspan: 0,
      }
    }
  }
}

onMounted(() => {
  console.log(RefTableGenerator.value());
})
</script>
