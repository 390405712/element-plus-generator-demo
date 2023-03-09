export default {
  mounted(
    el: {
      addEventListener: (arg0: string, arg1: () => void) => void;
      style: { pointerEvents: string };
      disabled: any
    },
    binding: {
      value: string | number
    }
  ) {
    el.addEventListener('click', () => {
      el.style.pointerEvents = 'none'
      if (!el.disabled) {
        setTimeout(() => {
          el.style.pointerEvents = 'auto'
        }, +binding.value || 1000)
      }
    })
  },
}