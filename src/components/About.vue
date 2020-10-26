<template>
    <h1>
        {{data}}
    </h1>
</template>

<script>
//import store from '../store/store'
    export default{
        data(){
            return{
                data: this.$store.state.data
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