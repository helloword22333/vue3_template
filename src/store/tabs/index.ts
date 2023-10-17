import { ta } from 'element-plus/es/locale'
import {defineStore} from 'pinia'
export type Tab ={
    title : string,
    path: string
}

export type  TabState = {
    tabList: Tab[]
}

export const tabStore = defineStore("tabStore",{
    state: ():TabState=>{
        return {
            tabList:[]
        }
    },
    getters:{
        getTabs(state){
            return state.tabList
        }
    },
    actions:{
        addTab(tab:Tab){
            
            //判断是否是重复的
            if(this.tabList.some(item=>item.path === tab.path)){    
                return;
        }
        this.tabList.push(tab)
    }
}
})