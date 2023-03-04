<template>
  <div class="meta2d-header-toolbar">
    <div class="editor-logo">
      <img :src="logo" alt="logo" width="42" height="42"
    /></div>
    <div class="editor-name">Meta2d Editor</div>
  </div>
</template>

<script setup lang="ts">
  import logo from './assets/logo.png'
</script>

<style lang="scss" scoped>
  .meta2d-header-toolbar {
    height: 42px;
    border-bottom: 1px solid #dcdfe6;
    padding: 4px 8px;
    display: flex;
    .editor-name {
      width: 200px;
      font-size: 24px;
      font-weight: 700;
      line-height: 42px;
      background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
</style>
