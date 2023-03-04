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
  import Meta2dHeader from './meta2d-header.vue'
  import Meta2dCanvas from './meta2d-canvas.vue'
  import Meta2dMaterial from './material/index.vue'
  import Meta2dProps from './props/index.vue'
  import './assets/t-icon.css'
  import './assets/m2-icon.css'
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
