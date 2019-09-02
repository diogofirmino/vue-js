import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ItemCard from './item-card.vue';
import { items, singleItemMock, itemSelectedMock } from '../../../tests/__mocks__/items';

const itemTitle = 'Mayo';
const localVue = createLocalVue();
localVue.use(Vuex);

describe('ItemCard.vue', () => {
    let actions;
    let store;
    let state;

    beforeEach(() => {
        state = {
            items,
        };
        actions = {
            REMOVE_ITEM: jest.fn(),
            SELECT_ITEM: jest.fn(),
        };
        store = new Vuex.Store({
            actions,
            state,
        });
    });

    it('should match the item title rendered', () => {
        const wrapper = shallowMount(ItemCard, {
            propsData: { item: singleItemMock },
        });
        expect(wrapper.props().item.title).toMatch(itemTitle);
    });

    it('should set item as select at the store', () => {
        const wrapper = shallowMount(ItemCard, { store, localVue, propsData: { item: singleItemMock } });
        wrapper.find('.button--secondary').trigger('click');
        expect(actions.SELECT_ITEM).toHaveBeenCalled();
    });

    it('should remove the item to the store', () => {
        const wrapper = shallowMount(ItemCard, { store, localVue, propsData: { item: singleItemMock } });
        wrapper.find('.button--danger').trigger('click');
        expect(actions.REMOVE_ITEM).toHaveBeenCalled();
    });

    it('should not show an item without image', () => {
        const title = 'Mayo';
        const wrapper = shallowMount(ItemCard, {
            propsData: { item: singleItemMock },
        });
        expect(wrapper.props().item.title).toMatch(title);
    });
});
