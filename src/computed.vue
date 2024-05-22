<template>
   <div>
    <div>姓：<input v-model="firstName" type="text" /></div>
    <div>名：<input v-model="lastName" type="text" /></div>
    <div>全名：<input v-model="name" type="text" /></div>
    <button @click="changeName">修改名字</button>
   </div>
</template>


<script lang='ts' setup>
import { computed, ref } from "vue";

let firstName = ref('张')
let lastName = ref('三')

// 选项式
const name = computed<string>({
    get() {
        return firstName.value + '-' + lastName.value
    },
    // newValue 的值是 name， 当外部直接修改 name 时触发
    set(newValue) {
        [firstName.value, lastName.value] = newValue.split("-")
    }
})

// 函数式
let name1 = computed(() => firstName.value + '-' + lastName.value)


let total = ref<number>(0)
const total = () => {
    data.reduce((pre, cur) => {
        return prev + next.num*next.price
    },0)
}

const total1 = computed(()=> {
    return data.reduce((prev, next) => {
        return prev + next.num * next.price
    }, 0)
})

const searchData = computed(() => {
    return data.filter( item => {
        return item.name.includes(keyword.value)
    })
})

const changeName = () => {
    name.value = '小-满'
}
</script>


<style lang='' scoped>

</style>