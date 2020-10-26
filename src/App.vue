<template>
<div>
   <Nav />
  <router-view v-slot="trans">
    <transition name="v">
      <component :is="trans.Component"></component>
    </transition>
  </router-view>
</div>
</template>

<script>
import Nav from './components/nav.vue'

export default {
  components: {
    Nav
  },
  data() {
    return {
     
    }
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.v-enter-active, .v-leave-active{
  transition: all .5s;
}
.v-enter-active{
  transition-delay: .5s;
}
.v-enter-from, .v-leave-to{
  opacity: 0
}
.v-leave-from, .v-enter-to{
  opacity: 1
}
</style>
