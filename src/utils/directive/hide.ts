export default {
  beforeMount(el: { style: { visibility: string } }, binding: { value: any }) {
    el.style.visibility = binding.value ? 'hidden' : 'visible'
  },
  updated(el: { style: { visibility: string } }, binding: { value: any }) {
    el.style.visibility = binding.value ? 'hidden' : 'visible'
  },
}
