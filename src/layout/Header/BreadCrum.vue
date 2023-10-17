<template>
    <div>
        <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tabs" >{{ item.meta.title }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script setup lang="ts">
    /* 
     使用useRoute()获得route
     通过 mached[0]来判断当前是否为首页
     不为首页在路径数组前面加
      */
    import { watch,ref,Ref } from 'vue';
    import { useRoute,RouteLocationMatched } from 'vue-router';
    const tabs:Ref<RouteLocationMatched[]> = ref([])
    const getBredCrum = ()=>{
        let mached = route.matched.filter((item)=>item.meta && item.meta.title)
        const first = mached[0];
        if(first.path != "/dashboard"){
            mached = [{path:'/dashboard',meta:{title:"首页"}} as any].concat(mached)
        }
        tabs.value = mached;
    }
    
    const route = useRoute()
    getBredCrum()
    watch(()=>route.path,
          ()=>getBredCrum()
    )
</script>

<style lang="scss" scoped>
     :deep(.el-breadcrumb__inner) {
       color: #fff !important;
     }
    .bred{
        margin-left: 20px;
    }
</style>