<!--
 * @Descripttion: 
 * @Version: 1.0
 * @Author: 13146504151@163.com
 * @Date: 2023-02-14 15:15:06
 * @LastEditors: 13146504151@163.com
 * @LastEditTime: 2023-03-08 11:21:18
-->
<template>
  <div class="meta2d-props">
    <el-tabs v-if="meta2dInst" v-model="activeName">
      <template v-if="activePen">
        <el-tab-pane label="外观" name="exterior">
          <pen-exterior />
        </el-tab-pane>
        <el-tab-pane label="动效" name="second">
          <div>动效</div>
        </el-tab-pane>
        <el-tab-pane label="数据" name="data">
          <dataEditor :list="data" />
        </el-tab-pane>
      </template>
      <el-tab-pane v-else label="画布" name="canvas">
        <canvas-props />
      </el-tab-pane>
      <el-tab-pane label="结构" name="structure">
        <canvas-structure />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { ref, watch } from 'vue'
  import useMeta2dStore from '../store'
  import CanvasProps from './canvas-props.vue'
  import CanvasStructure from './canvas-structure.vue'
  import PenExterior from './pen-exterior/index.vue'
  import dataEditor from './components/dataEditor.vue'

  const activeName = ref('canvas')
  const { activePen, meta2dInst } = storeToRefs(useMeta2dStore())
  const data = [
    {
      name: '嘻嘻',
      id: 1,
    },
  ]

  watch(
    () => activePen.value,
    (newVal) => {
      if (activeName.value === 'structure') return
      // activeName.value = newVal ? 'style' : 'canvas'
      if (!newVal) {
        activeName.value = 'canvas'
      } else if (activeName.value === 'canvas') {
        activeName.value = 'exterior'
      }
    }
  )
</script>

<style lang="scss">
  .meta2d-props {
    min-width: 240px;
    border-left: 1px solid #dcdfe6;
    .el-tabs {
      height: 100%;
      .el-tabs__header {
        margin-bottom: 8px;
      }
      .el-tabs__nav {
        width: 100%;
        display: flex;
        .el-tabs__item {
          flex: 1;
          padding: 0;
          text-align: center;
        }
      }
      .el-tabs__content {
        height: calc(100% - 40px - 8px - 8px);
        padding: 8px;
        padding-top: 0;
        overflow: hidden;
      }
    }
  }
</style>
