<template>
  <ElConfigProvider :locale="zhCn">
    <Layout />
  </ElConfigProvider>
</template>

<script lang="ts" setup>
import { ElConfigProvider } from 'element-plus'
import Layout from '@/components/Layout/index.vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<style lang="scss" >
body {
  margin: 0;
}
</style>