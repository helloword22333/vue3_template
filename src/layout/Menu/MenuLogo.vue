<template>
    <div class="logo">
        <img src="@/assets/MenuLogo.png"/>
        <span v-if="isCollapsed" class="logo-title">{{ title }}</span>
    </div>
</template>

<script lang="ts" setup>
import { ref,watch } from 'vue';
const title = ref("酒店管理系统")
const show = ref(true)
const props = defineProps({
    isCollapsed:{
        require:true,
        type:Boolean
    }
})
watch(
    ()=>props.isCollapsed,
    (collapse:boolean)=>{
        if(!collapse){
            setTimeout(()=>{
                show.value = !collapse;
            },300)
        }
        else{
            show.value = !collapse;
        }
    }
)
</script>

<style lang="scss" scoped>
   
    .logo{
        display: flex;
        width: 100%;
        height: 60px;
        line-height: 60px;
        background-color: #2b2f3a;
        text-align: center;
        cursor: pointer;
        align-items: center;
        img{
            width: 36px;
            height: 36px;
            margin-left: 20px;
            margin-right: 12px;
        }
        .logo-title{
            color:white;
            font-size: 20px;
            font-weight: 600;
            line-height: 60px;
            font-family: Fangsong;
        }
    }
</style>