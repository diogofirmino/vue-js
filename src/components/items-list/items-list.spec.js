import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ItemList from './items-list.vue';
import { items } from '../../../tests/__mocks__/items';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ItemCard.vue', () => {
    let store;
    let state;

    beforeEach(() => {
        state = { items };
        store = new Vuex.Store({ state });
    });

    it('should have the same amount of items in props and state', () => {
        const wrapper = shallowMount(ItemList, { store, localVue, propsData: { items } });
        expect(wrapper.props().items.length).toBe(state.items.length);
    });
});
