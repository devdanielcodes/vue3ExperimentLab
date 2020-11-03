<template>
    <h1 v-on:click="name.add">
        {{data}} -
        {{name}}
    </h1>
</template>

<script>

import store from '../store/store'
import {myData} from '@/data'
import { ref } from 'vue'

export default {
    setup () {
        const data = store.state.data
        const name = ref(myData.myName)

        function incre(){
            name.value++
        }

    
        return {
            data,
            name,
            incre,
        }
    }
}


</script>

<style lang="scss" scoped>
h1{
  font-size: 40px;
  color: blue;
}
</style>