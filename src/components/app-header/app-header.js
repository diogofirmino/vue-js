import navigation from '@components/navigation/navigation.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'app-header',
    components: { navigation },
    computed: {
        ...mapGetters({
            total: 'total',
            totalSelected: 'totalSelected',
            title: 'title',
            showTotalItems: 'showTotalItems',
        }),
        showTotalText() {
            return `There are ${this.total} items (${this.totalSelected} selected)`;
        },
    },
};
