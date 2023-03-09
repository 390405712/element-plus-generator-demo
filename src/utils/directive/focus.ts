const findEle = (parent: { tagName: string; querySelector: (arg0: any) => any }, type: string) =>
  parent.tagName.toLowerCase() === type ? parent : parent.querySelector(type)

export default {
  mounted(el: { tagName: string; querySelector: (arg0: any) => any }) {
    const $inp = findEle(el, 'input')
    $inp.focus()
  },
}
