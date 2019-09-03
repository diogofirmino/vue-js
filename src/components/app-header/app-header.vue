<template>
    <div class="app--header stick-on-top">
        <navigation></navigation>
        <div class="title" v-if="title">
            {{ title }}
        </div>
        <div class="subtitle" v-if="showTotalItems">
            {{ showTotalText }}
        </div>
    </div>
</template>

<script type="text/javascript" src="./app-header.js"></script>
<style lang="scss" scoped src="./app-header.scss"></style>
