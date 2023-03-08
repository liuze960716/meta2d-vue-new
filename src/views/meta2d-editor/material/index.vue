<template>
  <div class="meta2d-material">
    <el-scrollbar>
      <el-collapse v-model="activeNames">
        <el-collapse-item
          v-for="{ pens, name, titile } in materialList"
          :key="name"
          :title="titile"
          :name="name"
        >
          <div class="pen-list">
            <div
              v-for="pen in pens"
              :key="pen.name"
              :title="pen.name"
              class="pen"
              draggable="true"
              @dragstart="handleDragstart($event, pen.config)"
            >
              <i class="t-icon" :class="pen.icon"></i>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { Pen } from '@meta2d/core'
  import materialList from './materialList'

  const activeNames = ref<string[]>(['common'])

  const handleDragstart = (ev: DragEvent, pen: Pen) => {
    ev.dataTransfer?.setData('Text', JSON.stringify(pen))
  }
</script>

<style lang="scss">
  .meta2d-material {
    width: 250px;
    border-right: 1px solid #dcdfe6;
    .el-collapse {
      border-top: none;
      .el-collapse-item__header {
        padding-left: 8px;
      }
      .pen-list {
        padding: 8px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        row-gap: 8px;
        column-gap: 8px;
        .pen {
          width: 100%;
          height: 40px;
          text-align: center;
          line-height: 40px;
          box-sizing: border-box;
          &:hover {
            color: #409eff;
          }
          .t-icon {
            font-size: 36px;
          }
        }
      }
    }
  }
</style>
