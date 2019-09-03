<template>
    <div class="about">
        <h1>Diogo Amaral</h1>

        <div class="wrapper">
            <h3 class="instructions-title">Project Setup</h3>

            <ul class="instructions-list">
                <li>Install dependencies: npm install</li>
                <li>Compiles and hot-reloads for development: npm run serve</li>
                <li>Runs tests: npm run test</li>
            </ul>

            <h3 class="instructions-title">Extra dependencies added</h3>

            <ul class="instructions-list">
                <li><a href="https://www.npmjs.com/package/vue-lazyload">vue-lazyload</a></li>
                <li><a href="https://vue-meta.nuxtjs.org/">vue-meta</a></li>
            </ul>


        </div>
    </div>
</template>

<script>
const PAGE_INFO = {
    title: 'About',
};
export default {
    name: 'about',
    metaInfo: PAGE_INFO,
    mounted() {
        this.$store.dispatch('SET_HEADER_PROPERTIES', PAGE_INFO);
    },
};
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
}

.instructions-title {
    margin: 30px 0 0 0;
}

.instructions-list {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: left;
    background-color: rgba(#fff, 0.8);

    > li {
        margin: 0;
        padding: 5px 10px;

        &:nth-child(odd) {
            background-color: rgba( black, 0.1 );
        }

        &:nth-child(even) {
            background-color: rgba( black, 0.3 );
        }
    }
}
</style>
