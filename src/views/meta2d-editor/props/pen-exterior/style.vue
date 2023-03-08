<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { Pen } from '@meta2d/core'
  import useMeta2dStore from '../../store'
  import PenDataEntry from '../components/pen-data-entry'
  import LineDashSelect from '../components/line-dash-select.vue'

  const { activePen, meta2dInst } = storeToRefs(useMeta2dStore())

  const onLineNameChange = (val: string) => {
    meta2dInst.value.updateLineType(activePen.value as Pen, val)
  }
</script>

<template>
  <div>
    <pen-data-entry label="线条样式" field="lineDash">
      <line-dash-select />
    </pen-data-entry>
    <pen-data-entry
      v-if="activePen?.name === 'line'"
      label="线条样式"
      field="lineName"
    >
      <el-select-v2
        :options="[
          {
            label: '曲线',
            value: 'curve',
          },
          {
            label: '折线',
            value: 'polyline',
          },
          {
            label: '直线',
            value: 'line',
          },
        ]"
        @change="onLineNameChange"
      />
    </pen-data-entry>
    <pen-data-entry label="颜色" field="color">
      <el-color-picker />
    </pen-data-entry>
    <pen-data-entry label="线条宽度" field="lineWidth">
      <el-input-number />
    </pen-data-entry>
    <pen-data-entry label="背景" field="bkType">
      <el-select-v2
        :options="[
          {
            label: '纯色背景',
            value: 0,
          },
          {
            label: '线性渐变',
            value: 1,
          },
          {
            label: '径向渐变',
            value: 2,
          },
        ]"
      />
    </pen-data-entry>
    <pen-data-entry
      v-if="!activePen?.bkType"
      label="背景颜色"
      field="background"
    >
      <el-color-picker />
    </pen-data-entry>
    <template v-else>
      <pen-data-entry label="开始颜色" field="gradientFromColor">
        <el-color-picker />
      </pen-data-entry>
      <pen-data-entry label="结束颜色" field="gradientToColor">
        <el-color-picker />
      </pen-data-entry>
      <pen-data-entry
        v-if="activePen?.bkType === 1"
        label="渐变角度"
        field="gradientAngle"
      >
        <el-input-number />
      </pen-data-entry>
      <pen-data-entry v-else label="渐变半径" field="gradientRadius">
        <el-input-number />
      </pen-data-entry>
    </template>
    <pen-data-entry label="透明度" field="globalAlpha">
      <el-input-number :min="0" :max="1" :step="0.1" />
    </pen-data-entry>
  </div>
</template>

<style lang="scss" scoped></style>
