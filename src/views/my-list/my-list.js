import ItemsList from '@components/items-list/items-list.vue';
import api from '@api/mock/index';
import { mapGetters } from 'vuex';

const PAGE_INFO = {
    title: 'My List',
    showTotalItems: true,
};

export default {
    name: 'MyList',
    metaInfo: PAGE_INFO,
    components: { ItemsList },
    computed: {
        ...mapGetters({
            images: 'items',
        }),
    },
    mounted() {
        this.$store.dispatch('LOAD_ITEMS');
        this.$store.dispatch('SET_HEADER_PROPERTIES', PAGE_INFO);
    },
};
