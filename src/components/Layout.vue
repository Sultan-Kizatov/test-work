<script setup>
    import {RouterLink, RouterView} from 'vue-router'
    import Header from './Header.vue'
    import Footer from './Footer.vue'
</script>

<template>
    <div class="layout">
        <Header></Header>
        <RouterView />
        <Footer></Footer>
    </div>
</template>

<style lang="scss" scoped>
    .layout {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>