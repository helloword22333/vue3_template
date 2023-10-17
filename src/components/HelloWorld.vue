<script setup lang="ts">
import {store} from '@/store/index';
import { computed, ref } from 'vue'
import {storeToRefs} from "pinia"
defineProps<{ msg: string }>()
const teststore= store();
const {count} = storeToRefs(teststore);
const change = function(){
  teststore.count++;
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <el-button type="primary" size="default" @click="change">新增</el-button>
    <span>{{ count }}</span>

  </div>

</template>

<style scoped > 
</style>
