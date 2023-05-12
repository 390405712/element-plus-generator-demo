
<template>
  <PageContainer class="CustomPageContainer">
    <template #search>
      <Form ref="RefForm" />
    </template>
    <template #table>
      <Table ref="RefTable" />
    </template>
    <template #page>
      <Page ref="RefPage" />
    </template>
  </PageContainer>
  <AddDialog ref="RefAddDialog" />
</template>
<script lang="ts">
export default {
  name: "页面容器"
}
export type GetRefs = () => ({
  Form: InstanceType<typeof Form>,
  Table: InstanceType<typeof Table>,
  Page: InstanceType<typeof Page>,
  AddDialog: InstanceType<typeof AddDialog>,
})

</script>

<script lang="ts" setup>
import { ref, provide } from 'vue'
import PageContainer from './components/PageContainer'
import Page from './components/Page'
// import Page from '@/components/Page.vue'
import AddDialog from './components/AddDialog.vue'
import Form from './components/Form.vue'
import Table from './components/Table.vue'

let RefForm = ref(null)
let RefTable = ref(null)
let RefPage = ref(null)
let RefAddDialog = ref(null)

provide('getRefs', () => ({
  Form: RefForm.value,
  Table: RefTable.value,
  Page: RefPage.value,
  AddDialog: RefAddDialog.value,
}))
</script>

<!-- <style lang="scss" scoped>
.CustomPageContainer{
    :deep(.table){
      width: 50%;
    }
  }
</style> -->