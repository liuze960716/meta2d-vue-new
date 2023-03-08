<template>
  <div class="canvas-structure">
    <el-scrollbar>
      <div
        v-for="pen in meta2dInstData.pens"
        :key="pen.id"
        class="canvas-pen"
        :class="[activePen?.id === pen.id ? 'active-pen' : '']"
        @click="setActivePen(pen as Pen)"
      >
        <i
          class="icon m2-icon"
          :class="[
            pen.name === 'line' ? 'm2-icon-zhexiantu' : 'm2-icon-ui_component',
          ]"
        />
        <div class="pen-name">
          {{ pen.name }}
        </div>

        <i
          class="icon m2-icon"
          :class="[
            pen.visible === false
              ? 'm2-icon-yincangbukejian'
              : 'm2-icon-xianshikejian',
          ]"
          @click="setPenVisible(pen as Pen, $event)"
        />
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
  import { Pen } from '@meta2d/core'
  import { storeToRefs } from 'pinia'
  import useMeta2dStore from '../store'

  const meta2dStore = useMeta2dStore()
  const { meta2dInst, meta2dInstData, activePen } = storeToRefs(meta2dStore)

  const setActivePen = (pen: Pen) => {
    // meta2dStore.setActivePen(pen)
    meta2dInst.value.active([pen])
    meta2dInst.value.render()
  }

  const setPenVisible = ({ id, visible }: Pen, ev: Event) => {
    ev.stopPropagation()
    meta2dInst.value.setValue({
      id,
      visible: visible === false,
    })
  }
</script>

<style lang="scss">
  .canvas-structure {
    height: 100%;
    overflow: hidden;
    .canvas-pen {
      margin-bottom: 4px;
      height: 28px;
      // line-height: 28px;
      background-color: #fafafa;
      padding: 0 8px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      .icon {
        font-size: 14px;
      }
      .pen-name {
        margin: 0 4px;
        flex: 1;
        cursor: default;
      }
    }
    .active-pen {
      color: #409eff;
    }
  }
</style>
