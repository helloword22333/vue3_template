<template>
    <el-container class="layout">
      <el-aside width="auto" class="asside"><Menu></Menu></el-aside>
      <el-container>
        <el-header  class="header"><Header ></Header></el-header>
        <el-main class="main">
          <Tabs></Tabs>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </template>
  <script setup lang="ts">
  import Header from '@/layout/Header/Header.vue';
  import Menu from '@/layout/Menu/MenuBar.vue';
  import Tabs from "@/layout/tabs/Tabs.vue";

</script>
  <style lang="scss">
  .layout {
    height: 100%;
    .asside {
      // background-color: blueviolet;
      background-color: #304156;
    }
    .header {
      background-color: #304256;
    }
    .main {
      background-color: #efefee;
    }
 }
  
  </style>
  