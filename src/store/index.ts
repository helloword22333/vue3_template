import { defineStore } from 'pinia'
export const store = defineStore('testStore',{ 
  state:()=>{
    return {
        count : 0
    };
  },
  getters :{
    getCounte:(state)=>{
        return state.count
    }
  },
  actions:{
    setCount(count : number) {
        this.count = count
    }
  }
 }
)
