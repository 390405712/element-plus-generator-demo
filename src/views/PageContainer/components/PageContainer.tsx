import { defineComponent } from 'vue'
import './PageContainer.scss'
export default defineComponent({
  name: 'PageContainer',
  setup(props, { expose, attrs, slots, emit }) {
    return () => (
      <div class='PageContainer'>
        {slots?.search
          ? <div class='search'>{slots.search?.()}</div>
          : ''}
        {slots?.table
          ? <div class='table'>{slots.table?.()}</div>
          : ''}
        {slots?.page
          ? <div class='page'>{slots.page?.()}</div>
          : ''}
      </div>
    )
  },
})