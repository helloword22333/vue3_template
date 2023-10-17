<template>
    <div>
        <el-icon class="icons" @click="setCollapes">
            <component :is="status ? Fold : Expand"></component>
        </el-icon>
    </div>
</template>

<script setup lang="ts">
    import {collapseStore} from "@/store/collapse/index"
    import {Fold,Expand} from "@element-plus/icons-vue"
    import { computed } from "vue";


    const store = collapseStore()

    const status = computed(()=>{
        return !store.getCollapse
    })

    const setCollapes = ()=>{
        store.setCollapse(!store.collapse)
    }

</script>

<style lang="scss" scoped>
    .icons{
        margin-top: 10px;
        color: #fff;
        font-size: 24px;
        cursor: pointer;
    }
</style>