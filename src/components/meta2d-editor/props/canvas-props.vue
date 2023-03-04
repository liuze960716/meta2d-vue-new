<template>
  <el-form>
    <el-form-item label="默认颜色">
      <el-color-picker
        v-model="meta2dInstData.color"
        @change="render"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="画笔填充颜色">
      <el-color-picker
        v-model="meta2dInstData.penBackground"
        @change="render"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="背景颜色">
      <el-color-picker
        v-model="meta2dInstData.background"
        @change="setBackgroundColor"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="背景图片">
      <el-input
        v-model="meta2dInstData.bkImage"
        @change="setBackgroundImage"
      ></el-input>
    </el-form-item>
    <el-form-item label="背景网格">
      <el-switch v-model="meta2dInstData.grid" @change="setGrid"></el-switch>
    </el-form-item>
    <el-form-item label="网格颜色">
      <el-color-picker
        v-model="meta2dInstData.gridColor"
        @change="setGrid"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="网格大小">
      <el-input-number
        v-model="meta2dInstData.gridSize"
        @change="setGrid"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="网格角度">
      <el-input-number
        v-model="meta2dInstData.gridRotate"
        @change="setGrid"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="背景标尺">
      <el-switch v-model="meta2dInstData.rule" @change="setRule"></el-switch>
    </el-form-item>
    <el-form-item label="标尺颜色">
      <el-color-picker
        v-model="meta2dInstData.ruleColor"
        @change="setRule"
      ></el-color-picker>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import useMeta2dStore from '../store'

  const { meta2dInst, meta2dInstData } = storeToRefs(useMeta2dStore())

  const render = () => {
    meta2dInst.value.render()
  }

  const setBackgroundColor = (color: string | null) => {
    meta2dInst.value.setBackgroundColor(color as string)
    render()
  }

  const setBackgroundImage = (src: string) => {
    meta2dInst.value.setBackgroundImage(src as string)
  }

  const setGrid = () => {
    const _storeData = meta2dInstData.value
    meta2dInst.value.setGrid({
      grid: _storeData.grid,
      gridColor: _storeData.gridColor,
      gridSize: _storeData.gridSize,
      gridRotate: _storeData.gridRotate,
    })
    render()
  }

  const setRule = () => {
    const _storeData = meta2dInstData.value
    meta2dInst.value.setRule({
      rule: _storeData.rule,
      ruleColor: _storeData.ruleColor,
    })
    render()
  }
</script>

<style scoped></style>
