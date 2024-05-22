<template>
   <div>
    <input v-mode="message" type="text" />
    <input v-mode="message2" type="text" />

    <button @click="stopWatch">停止监听</button>
   </div>
</template>


<script lang='ts' setup>
import { watchEffect, ref } from "vue";

let message = ref<string>("飞机")
let message2 = ref<string>("飞机1")

watchEffect(( oninvalidate)=> {
    console.log("message", message.value)
    console.log("message2", message.value)

    // 先执行这个
    oninvalidate(() => {
        console.log("before")
    })
})
</script>


<style lang='' scoped>

</style>