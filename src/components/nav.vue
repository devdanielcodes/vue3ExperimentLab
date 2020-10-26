<template>
    <div>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
    </div>
</template>

<script>
    export default {
        props: {
            users: Array
        }
    }
</script>

<style scoped>
a{
    margin: 0px 10px;
}

</style>