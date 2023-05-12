import { defineComponent, ref, inject,defineExpose } from 'vue'
import { ElPagination } from 'element-plus'

export default defineComponent({
  name: 'Page',
  setup(props, { expose, attrs, slots, emit }) {
    let pageNum = ref(1)
    let pageSize = ref(10)
    let total = ref(0)
    function handleCurrentChange(val: number) {
      pageNum.value = val
      getRefs().Table.getTableData(null, 'page')
    }
    function handleSizeChange(val: number) {
      pageNum.value = 1
      setPageSize(val)
      getRefs().Table.getTableData(null, 'page')
    }
    function getPageSize() {
      return pageSize
    }
    function getPageNum() {
      return pageNum
    }
    function setPageSize(val: number) {
      pageSize.value = val
    }
    function setPageNum(val: number) {
      pageNum.value = val
    }
    function setTotal(val: number) {
      total.value = val
    }
    const getRefs = inject('getRefs') as Function
    expose({ getPageNum, getPageSize, setPageNum, setTotal })
    return () => (
      <div>
        <ElPagination
          background
          onSizeChange={handleSizeChange}
          onCurrentChange={handleCurrentChange}
          v-model={[pageNum.value, 'currentPage', ['']]}
          layout="prev, pager, next"
          pageSize={pageSize.value}
          total={total.value} />
      </div>
    )
  },
})