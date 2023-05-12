
<template>
  <div class="Container">
    <Form ref="RefForm" class="Form" />
    <Table ref="RefTable" class="Table" />
    <Page ref="RefPage" class="Page" />
    <AddDialog ref="RefAddDialog" />
  </div>
</template>
<script lang="ts">
export default {
  name: "模板化模块"
}
export type GetRefs = () => ({
  Form: InstanceType<typeof Form>,
  Table: InstanceType<typeof Table>,
  Page: InstanceType<typeof Page>,
  AddDialog: InstanceType<typeof AddDialog>,
})

</script>
<script lang="ts" setup>
import Page from '@/components/Page.vue'
import AddDialog from './components/AddDialog.vue'
import Form from './components/Form.vue'
import Table from './components/Table.vue'

let RefForm = $ref(null)
let RefTable = $ref(null)
let RefPage = $ref(null)
let RefAddDialog = $ref(null)

provide('getRefs', () => ({
  Form: RefForm,
  Table: RefTable,
  Page: RefPage,
  AddDialog: RefAddDialog,
}))
</script>
