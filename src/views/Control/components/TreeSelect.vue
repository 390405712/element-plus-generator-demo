<template>
  <FormGenerator v-bind="{ ...formAttrs }" />
</template>

<script lang="tsx" setup>
import { FormGenerator, GeneratorUtils } from 'element-plus-generator'
import type { FormAttrs, FormOptionItem } from 'element-plus-generator/lib/type'
import type Node from 'element-plus/es/components/tree/src/model/node'
import { ref } from 'vue'
// import type {TreeData} from 'element-plus/lib/components/tree/src/tree.type.d.ts'

let id = 0
const staticData = [{
  value: '1',
  label: 'Level one 1',
  children: [
    {
      value: '1-1',
      label: 'Level two 1-1',
      children: [
        {
          value: '1-1-1',
          label: 'Level three 1-1-1',
        },
      ],
    },
  ],
}]
const formAttrs = ref<FormAttrs>({
  model: {},
  formOption: [
    {
      type: 'tree-select',
      formItem: {
        prop: 'key1',
        label: '基础用法',
      },
      control: {
        data: staticData,
      },
    },
    {
      type: 'tree-select',
      formItem: {
        prop: 'key2',
        label: 'checkbox',
      },
      control: {
        showCheckbox: true,
        data: staticData
      },
    },
    {
      type: 'tree-select',
      formItem: {
        prop: 'key3',
        label: '选择任意级别',
      },
      control: {
        checkStrictly: true,
        data: staticData
      },
    },
    {
      type: 'tree-select',
      formItem: {
        prop: 'key4',
        label: '多选',
      },
      control: {
        multiple: true,
        data: staticData
      },
    },
    {
      type: 'tree-select',
      formItem: {
        prop: 'key5',
        label: '可筛选',
      },
      control: {
        filterMethod: (value: string) => {
          let data = (formAttrs.value.formOption.find(i => i.formItem.prop === 'key5') as FormOptionItem<'tree-select'>).control.data
          data = [...data].filter((item) => item.label.includes(value))
        },
        filterable: true,
        data: [{
          value: '1',
          label: 'Level one 1',
          children: [
            {
              value: '1-1',
              label: 'Level two 1-1',
              children: [
                {
                  value: '1-1-1',
                  label: 'Level three 1-1-1',
                },
              ],
            },
          ],
        }, {
          value: '2',
          label: 'Level one 2',
          children: [
            {
              value: '2-1',
              label: 'Level two 2-1',
              children: [
                {
                  value: '2-1-1',
                  label: 'Level three 2-1-1',
                },
              ],
            },
            {
              value: '2-2',
              label: 'Level two 2-2',
              children: [
                {
                  value: '2-2-1',
                  label: 'Level three 2-2-1',
                },
              ],
            },
          ],
        },]
      },
    },
    {
      type: 'tree-select',
      formItem: {
        prop: 'key6',
        label: '自定义内容',
      },
      control: {
        data: [{
          value: '1',
          label: 'Level one 1',
          children: [
            {
              value: '1-1',
              label: 'Level two 1-1',
              children: [
                {
                  value: '1-1-1',
                  label: 'Level three 1-1-1',
                },
              ],
            },
          ],
        }],
        slots: {
          default: (scope: { data: { label: string } }) => (<>{scope.data.label}<span style="color: gray">(suffix)</span></>)
        }
      },
    },
    {
      type: 'tree-select',
      formItem: {
        prop: 'key7',
        label: '懒加载',
      },
      control: {
        lazy: true,
        load: (node, resolve) => {
          if (node.isLeaf) return resolve([])
          setTimeout(() => {
            resolve([
              {
                value: ++id,
                label: `lazy load node${id}`,
              },
              {
                value: ++id,
                label: `lazy load node${id}`,
                isLeaf: true,
              },
            ])
          }, 400)
        },
        props: {
          label: 'label',
          children: 'children',
          isLeaf: 'isLeaf',
        },
        cacheData: [{ value: '5', label: 'lazy load node5' }],
      },
    },
  ]
})
</script>
