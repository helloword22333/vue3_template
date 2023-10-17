import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/layout/dashboard/Index.vue'),
        name: 'dashboard',
        meta: {
          title: '首页',
          icon: '#icondashboard'
        }
      }
    ]
  },
  {
    path: "/system",
    component: Layout,
    name: "system",
    meta: {
      title: "系统管理",
      icon: "el-icon-menu",
      roles: ["sys:manage"]
    },
    children: [
      {
        path: "/userList",
        component: () => import('@/views/system/UserList.vue'),
        name: "userList",
        meta: {
          title: "员工管理",
          icon: "el-icon-s-custom",
          roles: ["sys:user"]
        },
      },
      {
        path: "/roleList",
        component: () => import('@/views/system/RoleList.vue'),
        name: "roleList",
        meta: {
          title: "角色管理",
          icon: "el-icon-s-tools",
          roles: ["sys:role"]
        },
      },
      {
        path: "/menuList",
        component: () => import('@/views/system/MuneList.vue'),
        name: "menuList",
        meta: {
          title: "权限管理",
          icon: "el-icon-document",
          roles: ["sys:menu"]
        },
      },
    ]
  },
  {
    path: "/totelRoot",
    component: Layout,
    name: "totelRoot",
    meta: {
      title: "酒店管理",
      icon: "Setting",
      roles: ["sys:totelRoot"],
    },
    children: [
      {
        path: "/roomType",
        component: () => import('@/views/hotel/RoomType.vue'),
        name: "roomType",
        meta: {
          title: "房间类型",
          icon: "UserFilled",
          roles: ["sys:roomType"],
        },
      },
      {
        path: "/hotelLayer",
        component: () => import('@/views/hotel/HotelLayer.vue'),
        name: "hotelLayer",
        meta: {
          title: "楼层管理",
          icon: "Wallet",
          roles: ["sys:hotelLayer"],
        }
      },
      {
        path: "/hotelRoom",
        component: () => import('@/views/hotel/HotelRoom.vue'),
        name: "hotelRoom",
        meta: {
          title: "房间管理",
          icon: "Menu",
          roles: ["sys:hotelRoom"],
        },
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router