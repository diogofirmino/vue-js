<template>
    <div class="home">
        <h1>Front-End Test</h1>

        <div class="wrapper">
            <h2 class="instructions-title">Instructions</h2>

            <ul class="instructions-list">
                <li>Do as much as you can in 4 hours</li>
                <li>Create a responsive item list</li>
                <li>Use any front-end framework you want</li>
                <li>Use a state management if needed</li>
                <li>Use any plugins/addons that you need</li>
                <li>Create all necessary components needed</li>
                <li>Ensure that your code is flexible for future changes</li>
            </ul>

            <h3 class="instructions-title">Let's get started</h3>
            <ol class="instructions-list">
                <li>Use Lexend Exa from Google font for the entire website</li>
                <li>Add a fixed 2 colors 45° gradient background color</li>
                <li>Create a navigation:<br>
                    - Home -> /<br>
                    - My List -> /mylist</li>
            </ol>


            <h3 class="instructions-title">Inside My List</h3>
            <ol class="instructions-list">
                <li>Load the JSON data with AJAX<br>
                    /item-list-1.json</li>
                <li>List each item in rows.<br>
                    For viewport >= 1200px, have 4 items per row.<br>
                    For viewport less than 576px, have 1 item per row</li>
            </ol>

            <h3 class="instructions-title">Per Item</h3>

            <ol class="instructions-list">
                <li>Each item should be displayed like the concept</li>
                <li>Add functionality on Remove button to remove item from list<br>
                    (No AJAX necessary)</li>
                <li>Add functionality on Select button.<br>
                    On active state, entire item component should be 50% transparent.<br>
                    On deactive state, entire item compentnt should be opaque</li>
            </ol>

            <h3 class="instructions-title">Functionalities (using VueX if possible)</h3>
            <ol class="instructions-list">
                <li>Create a function to display the total items</li>
            </ol>

            <h3 class="instructions-title">Create an About page</h3>
            <ol class="instructions-list">
                <li>Add link to About page on the navigation</li>
                <li>Add the About page (/src/components/views/About.vue)</li>
                <li>Have the About page lazy load only if the page is called</li>
            </ol>

            <h3 class="instructions-title">Add fancy bells and whistles</h3>
            <ol class="instructions-list">
                <li>Add CSS transitions to any (or all) hover state</li>
            </ol>

            <h3 class="instructions-title">BONUS</h3>
            <ol class="instructions-list">
                <li>Add different meta description for each page</li>
                <li>Add 5 Jest Unit tests</li>
                <li>Add 5 Cypress.IO UI tests</li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    metaInfo: {
        title: 'Home',
    },
};
</script>


<style lang="scss" scoped>
.wrapper {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    // background-color: green;
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
