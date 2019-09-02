import ItemCard from '@components/item-card/item-card.vue';

export default {
    name: 'items-list',
    props: ['items'],
    components: { ItemCard },
};
