
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
export type getRefs = () => ({
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


// q:上面的意思?
// a:这里的provide和inject是vue3的api，用于组件间的通信，
// 这里的provide是提供一个函数，函数返回一个对象，对象里面是组件的实例，
// 这样在子组件里面就可以通过inject获取到这个函数，然后调用这个函数，
// 就可以获取到父组件的实例，这样就可以在子组件里面调用父组件的方法了

</script>
