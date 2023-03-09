const findEle = (parent: { $inp?: any; tagName?: any; querySelector?: any }, type: string) =>
  parent.tagName.toLowerCase() === type ? parent : parent.querySelector(type)

const trigger = (el: { dispatchEvent: (arg0: Event) => void }, type: string) => {
  const e = document.createEvent('HTMLEvents')
  e.initEvent(type, true, true)
  el.dispatchEvent(e)
}

const emoji = {
  beforeMount(el: { $inp: any }) {
    const regRule = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi
    const $inp = findEle(el, 'input')
    el.$inp = $inp
    $inp.handle = function () {
      const val = $inp.value
      $inp.value = val.replace(regRule, '')
      trigger($inp, 'input')
    }
    $inp.addEventListener('change', $inp.handle)
  },
  unmounted(el: { $inp: { removeEventListener: (arg0: string, arg1: any) => void; handle: any } }) {
    el.$inp.removeEventListener('change', el.$inp.handle)
  },
}

export default emoji
