<!--
 * @Descripttion: 
 * @Version: 1.0
 * @Author: 13146504151@163.com
 * @Date: 2022-12-27 10:01:04
 * @LastEditors: 13146504151@163.com
 * @LastEditTime: 2023-03-08 10:52:50
-->
<template>
  <div class="contaner">
    <ul>
      <li v-for="(item, ind) in list" :key="ind">
        <div class="box">
          <span class="title">{{ item.name }}</span>
          <span class="input">{{ item.id }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'

  // 父组件的值
  const props = defineProps({
    list: Array,
  })
  console.log(props.list)
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
    padding: 0;
    li {
      margin: 10px 0;
      .box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          width: 100px;
        }
        .input {
          width: 80%;
        }
      }
    }
  }
</style>
