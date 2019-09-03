<template>
    <div class="app">
        <app-header></app-header>
        <router-view/>
    </div>
</template>

<script>
import AppHeader from '@components/app-header/app-header.vue';

export default {
    name: 'App',
    components: { AppHeader },
};
</script>

<style lang="scss" src="./styles/app.scss"></style>
