export default {
    SET_HEADER_PROPERTIES(state, { title, showTotalItems }) {
        state.title = title;
        state.show_total_items = showTotalItems;
    },
};
