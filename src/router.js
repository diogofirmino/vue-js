import Vue from 'vue';
import Router from 'vue-router';
import About from '@views/About.vue';
import MyList from '@views/my-list/my-list.vue';

const Home = () => import('@views/Home.vue');

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            props: { title: 'Home' },
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            props: { title: 'About' },
        },
        {
            path: '/mylist',
            name: 'mylist',
            component: MyList,
            props: { title: 'My List', showTotal: true },
        },
    ],
});
