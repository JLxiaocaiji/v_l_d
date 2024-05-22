<template>
   <div>
    <form>
        <input v-model="form.name" type="text"/>
        <br/>
        <input v-model="form.age" type="text"/>
        <br/>
        <span>{{ state.foo }}</span>
        <br/>
        <span>{{ state.nested.bar }}</span>
        <br/>
        <button @click.prevent="submit">提交</button>
    </form>
   </div>
</template>


<script lang='ts' setup>
import { shallowReactive } from 'vue';

/*
    ref 支持所有类型; reactive支持引用类型：Array Object Map Set
    ref 取值赋值都需要 .value; reactive 不需要

    let list = reactive<string[]>([])
    reactive 不能直接赋值，否则破坏对象的响应式
        解决办法1：list.push(...res)
        解决办法2：添加一个对象，把数据作为一个属性去解决
                let list = reactive<{arr: string[]}>({ arr:[]})

    shallowReactive 也和 shallowRef 一样会受到影响;

    shallowReactive 若其属性一同变化，则深层嵌套的属性会被自身属性带着变化，
        state.foo++，state.nested.bar++ 都会在页面变化
    
        但若是单独的，则是浅层的，只有自身的属性是响应式的，下层嵌套对象不会被转为响应式
*/
let form = ({
    name: "小曼",
    age: 23,
})

const submit = () => {
    // console.log(form)
    state.foo++
    // state.nested.bar++
}

const state = shallowReactive({
    foo: 1,
    nested: { bar: 1 }
})

</script>


<style lang='' scoped>

</style>