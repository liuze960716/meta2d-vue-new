<script setup lang="ts">
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import useMeta2dStore from '../../store'
  import Position from './position.vue'
  import VStyle from './style.vue'
  import PenDataEntry from '../components/pen-data-entry'

  const activeNames = ref(['position', 'style'])

  const { activePen } = storeToRefs(useMeta2dStore())
</script>

<template>
  <div class="pen-exterior">
    <pen-data-entry label="组件名称" field="name">
      <el-input disabled />
    </pen-data-entry>
    <el-collapse v-model="activeNames">
      <el-collapse-item
        v-if="activePen?.name !== 'line'"
        title="位置与大小"
        name="position"
      >
        <position />
      </el-collapse-item>
      <el-collapse-item title="样式" name="style">
        <v-style />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style lang="scss">
  .pen-exterior {
    .el-collapse {
      border: none;
      .el-collapse-item__header {
        height: 36px;
        line-height: 36px;
      }
      .el-collapse-item__content {
        padding-bottom: 8px;
      }
    }
  }
</style>
