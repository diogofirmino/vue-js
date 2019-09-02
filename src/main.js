import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import VueMeta from 'vue-meta';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueMeta, {
    refreshOnceOnNavigation: true,
});
Vue.use(VueLazyload);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
