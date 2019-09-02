export default {
    name: 'item-card',
    props: ['item'],
    computed: {
        selectButtonText() {
            return this.item.isSelected
                ? 'Unselect'
                : 'Select';
        },
        imgObj() {
            return {
                src: `/img/${this.item.img}`,
                error: '/img/404.gif',
                loading: '/img/loading.gif',
            };
        },
    },
    methods: {
        remove() {
            this.$store.dispatch('REMOVE_ITEM', this.item.id);
        },
        select() {
            this.$store.dispatch('SELECT_ITEM', this.item.id);
        },
    },

};
