<template>
   <div>
    {{ Man }}
       <button @click="change">修改</button>

       <!-- <div>shallowRef: {{ Man2 }}</div> -->
       <hr/>
       <div>customRef: {{ obj }}</div>
   </div>
</template>


<script lang='ts' setup>
import { ref, reactive, isRef, shallowRef, triggerRef, customRef } from 'vue';
import type { Ref } from 'vue';

/*
    1. isRef 检查某个值是否为 ref
    2. shallowRef: 浅层 ref,只对 .value 的访问是响应式的
        shallowRef 和 ref 不能一起写，后者会影响前者，造成视图的更新,
        shallowRef 可以通过 trigger 触发
    
    3. customRef: 自定义 Ref,显式声明对其依赖追踪和更新触发的控制方式
*/

type M = { name: string}

// const Man:M = reactive({name: ''})

// ref
const Man:Ref<M> = ref({name: "小满"})

const change = () => {
    // Man.value.name = "大满"

    obj.value = 'test'
    console.log(1)
}

/*
// shallowRef
const Man = shallowRef({name:"小满"})
const change = () => {
    Man.value.name = "大满" // 不起作用, 可以添加 triggerRef 触发
    Man.value = { name: "大满"} // 起作用
}
*/

function MyRef<T>(value: T, delay: number){
    let timeout: ReturnType<typeof setTimeout>;
    return customRef((track, trigger)=> {
        return {
            get() {
                track()
                return value
            },
            set(newValue) {
                clearTimeout(timeout)
                timeout = setTimeout(()=> {
                    value = newValue
                    trigger()
                }, delay)

            }
        }
    })
}

const obj = MyRef<string>('customRef小满', 1000)
</script>


<style lang='' scoped>

</style>