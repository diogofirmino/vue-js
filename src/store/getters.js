export default {
    total: state => state.items.length,
    totalSelected: state => state.items.filter(item => item.isSelected).length,
    items: state => state.items,
};
