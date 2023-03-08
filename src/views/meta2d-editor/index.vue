<!--
 * @Descripttion: 
 * @Version: 1.0
 * @Author: 13146504151@163.com
 * @Date: 2023-02-14 15:15:06
 * @LastEditors: 13146504151@163.com
 * @LastEditTime: 2023-03-08 10:17:07
-->
<template>
  <div class="meta2d-editor-wrapper">
    <meta2d-header />
    <div class="meta2d-editor">
      <meta2d-material />
      <meta2d-canvas />
      <meta2d-props />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Meta2dHeader from '@/components/meta2d-header.vue'
  import Meta2dCanvas from '@/components/meta2d-canvas.vue'
  import Meta2dMaterial from './material/index.vue'
  import Meta2dProps from './props/index.vue'
  import '@/assets/css/t-icon.css'
  import '@/assets/css/m2-icon.css'
</script>

<style lang="scss">
  .meta2d-editor-wrapper {
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .meta2d-editor {
      flex: 1;
      display: flex;
      overflow: hidden;
      .meta2d-canvas {
        flex: 1;
      }
      .el-form-item__label {
        font-size: 12px;
      }
    }
  }
</style>
