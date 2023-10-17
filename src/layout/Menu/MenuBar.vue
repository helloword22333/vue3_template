<template>
  <menu-logo :is-collapsed="!isCollpase"></menu-logo>
  <el-menu
    :default-active="activeIndex"
    unique-opened
    background-color="#304156"
    router
    class="el-menu-vertical-demo"
    :collapse="isCollpase">
    <menu-item :menuList="menuList"></menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import MenuItem from "@/layout/Menu/MenuItem.vue";
import MenuLogo from "@/layout/Menu/MenuLogo.vue";
import { collapseStore } from "@/store/collapse/index";
import {useRoute} from "vue-router";
const Collapse = collapseStore()
const isCollpase = computed(()=>{
  return Collapse.getCollapse
})
const route = useRoute();
let activeIndex = computed(()=>{
  const {path} = route;
  return path;
})
let menuList =reactive([
  {
    path: "/dashboard",
    component: "Layout",
    name: "dashboard",
    meta: {
      title: "首页",
      icon: "HomeFilled",
      roles: ["sys:dashboard"],
    }
  },
  {
    path: "/system",
    component: "Layout",
    name: "system",
    meta: {
      title: "系统管理",
      icon: "Setting",
      roles: ["sys:manage"],
    },
    children: [
      {
        path: "/userList",
        component: "/system/User/UserList",
        name: "userList",
        meta: {
          title: "员工管理",
          icon: "UserFilled",
          roles: ["sys:user"],
        },
      },
      {
        path: "/roleList",
        component: "/system/Role/RoleList",
        name: "roleList",
        meta: {
          title: "角色管理",
          icon: "Wallet",
          roles: ["sys:role"],
        },
      },
      {
        path: "/menuList",
        component: "/system/Menu/MenuList",
        name: "menuList",
        meta: {
          title: "菜单管理",
          icon: "Menu",
          roles: ["sys:menu"],
        },
      },
    ],
  },
  {
    path: "/totelRoot",
    component: "Layout",
    name: "totelRoot",
    meta: {
      title: "酒店管理",
      icon: "Setting",
      roles: ["sys:totelRoot"],
    },
    children: [
      {
        path: "/roomType",
        component: "/hotel/RoomType",
        name: "roomType",
        meta: {
          title: "房间类型",
          icon: "UserFilled",
          roles: ["sys:roomType"],
        },
      },
      {
        path: "/hotelLayer",
        component: "/hotel/HotelLayer",
        name: "hotelLayer",
        meta: {
          title: "楼层管理",
          icon: "Wallet",
          roles: ["sys:hotelLayer"],
        },
      },
      {
        path: "/hotelRoom",
        component: "/system/HotelRoom",
        name: "hotelRoom",
        meta: {
          title: "房间管理",
          icon: "Menu",
          roles: ["sys:hotelRoom"],
        }
      }
    ]
  }
]);
</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
}
.el-menu {
  border-right: none;
}

:deep(.el-sub-menu .el-sub-menu__title){
	 color: #f4f4f5 !important;
}

:deep(.el-menu .el-menu-item){
	color: #bfcbd9;
}
/* 菜单点中文字的颜色 */

:deep(.el-menu-item.is-active){
	color: #409eff !important;
}
/* 当前打开菜单的所有子菜单颜色 */

:deep(.is-opened .el-menu-item){
	background-color: #1f2d3d !important;
}
/* 鼠标移动菜单的颜色 */

:deep(.el-menu-item:hover){
	background-color: #001528 !important;
}
</style>