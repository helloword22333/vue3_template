<template>
   <el-tabs
    v-model="activeTab"
    type="card"
    class="demo-tabs"
    closable
    @tab-click="clickBtn"
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="item in tabList"
      :key="item.path"
      :label="item.title"
      :name="item.path"
    >
    </el-tab-pane>
    
  </el-tabs>
</template>

<script lang="ts" setup>
    import {tabStore,Tab} from "@/store/tabs/index"
    import { ref,watch,computed, onMounted } from 'vue'
    import {useRoute,useRouter} from "vue-router";
    import {TabsPaneContext} from "element-plus"

const store = tabStore()

const route = useRoute()

const router = useRouter()

const activeTab = ref("")

const setActiveTab = ()=>{
  activeTab.value = route.path
}
//选项卡数据
const tabList = computed(()=>{
    return store.getTabs
})
//当前选中的选项卡


const removeTab = (targetName: string) => {
  if(targetName === "/dashboard") return;
  const tabs = tabList.value
  let activeName = activeTab.value
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.path === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.path
        }
      }
    })
  }
  activeTab.value = activeName
  
  store.tabList = tabs.filter((tab) => tab.path !== targetName)
  router.push({path:activeName})
}
//点击事件的方法
const  clickBtn = (tab : TabsPaneContext)=>{
  const {props} = tab;
  router.push({path : props.name as string})
}

//解决刷新数据消失

const beforeRefresh = ()=>{
  window.addEventListener('beforeUnload',()=>{
    sessionStorage.setItem("tabsView",JSON.stringify(tabList.value))
  });
  let tabSession = sessionStorage.getItem("tabsView")
  if(tabSession){
    let old = JSON.parse(tabSession)
    if(old.length > 0){
      store.tabList = old
    }
  }
}
onMounted(()=>{
  beforeRefresh();
  setActiveTab();
  addTab();
})

    const addTab = ()=>{
        const {path,meta} = route
        const tab : Tab = {
            title : meta.title as string,
            path : path,
        }
        store.addTab(tab)
    }
    watch(()=>route.path,
            ()=>{
                setActiveTab()
                addTab()
            }
    )
</script>

<style lang="scss" scoped>
 :deep(.el-tabs__header) {
  margin: 0px;
}
:deep(.el-tabs__item) {
  height: 26px !important;
  line-height: 26px !important;
  text-align: center !important;
  border: 1px solid #d8dce5 !important;
  margin: 0px 3px !important;
  color: #495060;
  font-size: 12px !important;
  padding: 0xp 10px !important;
}
:deep(.el-tabs__nav) {
  border: none !important;
}
:deep(.is-active) {
  border-bottom: 1px solid transparent !important;
  border: 1px solid #42b983 !important;
  background-color: #42b983 !important;
  color: #fff !important;
}
:deep(.el-tabs__item:hover) {
  color: #495060 !important;
}
:deep(.is-active:hover) {
  color: #fff !important;
}
:deep(.el-tabs__nav-next){
  line-height: 26px !important;
}
:deep(.el-tabs__nav-prev){
  line-height: 26px !important;
}
</style>