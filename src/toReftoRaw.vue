<template>
   <div>
    {{ man }}

    <div><button @click="change">修改</button></div>
   </div>
</template>


<script lang='ts' setup>
import { toRef, reactive, toRefs, toRaw } from "vue";
import type { Ref } from 'vue';

/*
    1.toRef 只能修改响应式对象的值，非响应式不会变化
    2.toRef 某个对象属性会使其与源属性同步
        const fooRef = toRef(state, 'foo')
        fooRef.value++ 会与源属性同步，响应式更改

    3.toRef 可将 props 的某个属性转化为 ref 再传入一个组合式函数，
        但不能将新值传递给 ref,因为这等效于直接更改 props

    toRefs: 使用解构赋值，let { name, age } = toRefs(man)
            在改变时 name.value="大满" age.value=1

    toRaw 返回由 reactive(), shallowReactive() 等创建的2代理对应的原始对象，
        代理对象有 proxy 在外包裹,原始对象无
        
*/

const man = reactive({ name: "小满", age: 23 })

// 创建对象属性响应式签名
// const like = toRef(man, 'name')

// const change = () => {
//     man.name = "小曼"
// }

// toRefs 手写
// <T extends object> 表示泛型 T 必须是一个对象类型，只能传入对象类型的参数，而不能是基本类型
const toRefs1 = <T extends object>(object: T) => {
    const map: any = {}
    for ( let key in object) {
        map[key] = toRef(object, key)
    }
    return map
}

let { name, age } = toRefs(man)

const change = () => {
    name.value="大满"
    age.value=1
}
</script>


<style lang='' scoped>

</style>