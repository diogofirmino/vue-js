export default {
    LOAD_ITEMS(state, payload) {
        state.items = payload;
    },

    REMOVE_ITEM(state, id) {
        state.items = state.items.filter(item => item.id !== id);
    },

    SELECT_ITEM(state, id) {
        const itemObj = state.items.find(item => item.id === id);

        if (itemObj) {
            if (!itemObj.isSelected) {
                itemObj.isSelected = true;
                return;
            }
            itemObj.isSelected = false;
        }
    },

    DELETE_ALL_ITEMS(state) {
        state.items = [];
    },
};
