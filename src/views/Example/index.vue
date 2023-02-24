
<template>
  <div class="Container">
    <Form ref="RefForm" class="Form" />
    <Table ref="RefTable" class="Table" />
    <Page ref="RefPage" class="Page" />
    <AddDialog ref="RefAddDialog" />
  </div>
</template>

<script lang="ts" setup name="模板化模块">
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
