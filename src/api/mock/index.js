import items from './item-list-1.json';

export default {
    // Fetch items from json file
    // @returns {Promise<AxiosResponse<any> | never>}
    async fetchItems() {
        const promise = new Promise((res, rej) => {
            setTimeout(() => res(items), 1000);
        });
        return promise;
    },
};
