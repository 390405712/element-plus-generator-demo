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
    prop: 'date',
    label: 'Date',
  }, {
    label: 'Delivery Info',
    children: [
      {
        prop: 'name',
        label: 'Name',
      }, {
        label: 'Address Info',
        children: [
          {
            prop: 'address',
            label: 'Address',
          }, {
            prop: 'city',
            label: 'City',
          },
        ]
      },
    ]
  },
])

let tableData = ref<any>([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    city: 'Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    city: 'Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    city: 'Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    city: 'Los Angeles',
  },
])

onMounted(() => {
  console.log(RefTableGenerator.value());
})
</script>
