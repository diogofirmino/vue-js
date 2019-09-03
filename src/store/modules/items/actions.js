import api from '@api/mock/index';

export default {
    LOAD_ITEMS({ commit }) {
        api.fetchItems().then((data) => {
            commit('LOAD_ITEMS', data.items);
        });
    },

    REMOVE_ITEM(context, payload) {
        context.commit('REMOVE_ITEM', payload);
    },

    SELECT_ITEM(context, payload) {
        context.commit('SELECT_ITEM', payload);
    },

    DELETE_ALL_ITEMS(context) {
        context.commit('DELETE_ALL_ITEMS');
    },
};
