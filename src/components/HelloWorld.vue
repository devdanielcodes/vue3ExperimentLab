<template>
  <div class="hello">
      <h1 v-for="(item, index) in users" :key="index">
        {{ item.name }} 
      </h1>
      <button @click="addUser">Add New User</button>
      <h2 class="bg-blue-500 text-white w-56 p-20" @click="counter">{{count}}</h2>
  </div>
  <h1 @click="change">{{meo}}</h1>
  <h1>{{name}}</h1>
  <div v-for="(item, index) in data" :key="index">
    {{item.title}}
  </div>
</template>

<script setup>
import store from '../store/store'
import manage from '@/data'
import { ref } from 'vue'

      export const users = store.state.users

      export const meo = manage().melo

      export const dada = manage().getTodo()

      export const data = manage().nu

      export const change = () => {
        meo.value = 12
      }

      export const count = ref(0)

      export const counter = () => count.value++
  
      export const addUser = () => store.commit('addUser')

</script>

<style lang="scss" vars="{color}" scoped>
h1{
  font-size: 40px;
  color: var(--color);
}
</style>
