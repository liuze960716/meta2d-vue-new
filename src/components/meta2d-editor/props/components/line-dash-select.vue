<script setup lang="ts">
  import { compile, computed, h } from 'vue'

  const props = withDefaults(
    defineProps<{
      modelValue?: number[]
    }>(),
    {
      modelValue: () => [0, 0],
    }
  )

  const emit = defineEmits(['update:modelValue'])

  const computedModelValue = computed(() => props.modelValue.join())
  const onChange = (val: string) => {
    emit(
      'update:modelValue',
      val.split(',').map((num) => Number(num))
    )
  }

  const dashList = ['0,0', '5,5', '10,10', '10,10,2,10']
</script>

<template>
  <el-select
    :model-value="computedModelValue"
    class="line-dash-select"
    @change="onChange"
  >
    <template #prefix>
      <div style="position: relative">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="dash-svg">
          <g fill="none" stroke="black" stroke-width="1">
            <path
              d="M0 9 l85 0"
              :stroke-dasharray="computedModelValue.replace(',', ' ')"
            ></path>
          </g>
        </svg>
      </div>
    </template>
    <el-option v-for="dash in dashList" :key="dash" :value="dash">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="dash-svg">
        <g fill="none" stroke="black" stroke-width="1">
          <path
            d="M0 9 l85 0"
            :stroke-dasharray="dash.replace(',', ' ')"
          ></path>
        </g>
      </svg>
    </el-option>
  </el-select>
</template>

<style lang="scss">
  .line-dash-select {
    width: 100%;
    .select-trigger {
      .el-input__wrapper {
        .el-input__prefix {
          flex: 1;
        }
        .el-input__inner {
          // display: none;
          width: 0;
          visibility: hidden;
        }
      }
    }
  }

  body {
    .dash-svg {
      height: auto;
      display: inline-block;
      height: 10px;
      width: 68px;
      position: absolute;
      top: 50%;
      transform: translateY(-8px);
    }
  }
</style>
