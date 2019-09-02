const items = [
    {
        id: 31,
        title: 'Mayo',
        img: 'watch-01.jpg',
        date: '2019-02-52 24:23:52',
        isSelected: false,
    },
    {
        id: 2,
        title: 'Ramsey',
        img: 'watch-02.jpg',
        date: '2019-02-52 24:23:52',
        isSelected: false,
    },

];

const singleItemMock = items[0];

const itemSelectedMock = {
    ...items[0],
    isSelected: true,
};

export { items, singleItemMock, itemSelectedMock };
