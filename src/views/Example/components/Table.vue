<template>
  <div class="Table">
    <div class="tool">
      <el-button type="primary" @click="openAddDialog()">新增</el-button>
    </div>
    <TableGenerator :data="tableData" :loading="loading" :tableOption="tableOption">
      <template #operation="scope">
        <el-button link type="primary" @click="openAddDialog(scope.row.id)">编辑</el-button>
        <el-button link type="primary">删除</el-button>
      </template>
    </TableGenerator>
  </div>
</template>
<script lang="ts" setup>
import { TableGenerator } from 'element-plus-generator'
import type { tableOption } from 'element-plus-generator/dist/type'
import $api from '@/services'

const $router = useRouter()
let loading = $ref(false)
let tableOption = $ref<tableOption[]>([
  {
    prop: 'key1',
    label: '文本1',
  }, {
    prop: 'key2',
    label: '文本2',
  },{
    prop: 'key3',
    label: '文本3',
  },{
    prop: 'key4',
    label: '文本4',
  },{
    prop: 'key5',
    label: '文本5',
  },
])
let tableData = $ref<Record<string, string>[]>([])

async function getTableData() {
  const { Form, Page } = getRefs()
  loading = true
  // const res = await $api.xxx.xxx({
  //   pageNum: Page.getPageNum(),
  //   pageSize: Page.getPageSize(),
  //   ...Form.form,
  // })
  // tableData = res?.data.list ?? []
  // Page.setTotal(res.total)
  loading = false
}

function openAddDialog(id?: number){
  getRefs().AddDialog.openDialog(id)
}

async function del(id:number) {
  const bool = await ElMessageBox.confirm('确定删除？')
  // bool && await $api.xxx.xxx({id})
  ElMessage.success('删除成功')
  getRefs().Table.getList1Data()
}

onMounted(() => {
  getTableData()
})

const getRefs = inject('getRefs') as Function
defineExpose({ getTableData })
</script>
