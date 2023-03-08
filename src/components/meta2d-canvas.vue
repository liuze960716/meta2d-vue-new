<!--
 * @Descripttion: 
 * @Version: 1.0
 * @Author: 13146504151@163.com
 * @Date: 2023-02-14 15:15:06
 * @LastEditors: 13146504151@163.com
 * @LastEditTime: 2023-03-08 10:14:12
-->
<template>
  <div class="meta2d-canvas-wrapper">
    <div ref="canvasRef" class="meta2d-canvas"></div>
  </div>
</template>

<script setup lang="ts">
  import { Meta2d, Pen } from '@meta2d/core'
  import { onBeforeUnmount, onMounted, ref } from 'vue'
  import useMeta2dStore from '../views/meta2d-editor/store'

  const canvasRef = ref<HTMLCanvasElement>()
  const meta2dInst = ref<Meta2d>()

  const { setMeta2dInst, setActivePen, clearActivePen } = useMeta2dStore()

  onMounted(() => {
    const _meta2dInst = new Meta2d(canvasRef.value as HTMLCanvasElement, {})
    meta2dInst.value = _meta2dInst

    // meta2d的增加节点等操作都是在原始对象上进行的，这不会触发vue的响应式更新，将原始对象的canvas.store替换成响应式对象即可解决
    // https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#reactive-proxy-vs-original-1
    // @ts-ignore
    _meta2dInst.canvas.store = meta2dInst.value.store

    meta2dInst.value.on('active', (pens: Pen[]) => {
      if (pens.length === 1) setActivePen(pens[0])
      else clearActivePen()
    })
    meta2dInst.value.on('inactive', () => {
      clearActivePen()
    })

    setMeta2dInst(meta2dInst.value as Meta2d)
  })

  onBeforeUnmount(() => {
    meta2dInst.value?.destroy()
  })
</script>

<style lang="scss">
  .meta2d-canvas-wrapper {
    width: 100%;
    overflow: hidden;
    .meta2d-canvas {
      width: 100%;
      height: 100%;
      background-color: #fafafa;
    }
  }
</style>
