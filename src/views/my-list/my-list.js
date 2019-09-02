import ItemsList from '@components/items-list/items-list.vue';
import api from '@api/mock/index';
import { mapGetters } from 'vuex';

export default {
    name: 'MyList',
    metaInfo: {
        title: 'My List',
        showTotalItems: true,
    },
    components: { ItemsList },
    computed: {
        ...mapGetters({
            images: 'items',
        }),
    },
    mounted() {
        this.$store.dispatch('LOAD_ITEMS');
    },
};
