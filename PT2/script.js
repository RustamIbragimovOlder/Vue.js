// Задание VUE Вы разрабатываете приложение для отображения и сортировки списка товаров. У вас есть массив объектов products, где каждый объект представляет товар с его названием и ценой. Вам необходимо отобразить список товаров и предоставить пользователю возможность сортировать товары по цене (по возрастанию и по убыванию).
new Vue({
    el: '#pt2',
    data: {
        sortParam: '',
        products: [
            { id: 1, name: 'name1', price: 350 },
            { id: 2, name: 'name2', price: 650 },
            { id: 3, name: 'name3', price: 750 },
            { id: 4, name: 'name4', price: 150 },
            { id: 5, name: 'name5', price: 250 },
            { id: 6, name: 'name6', price: 1500 },
            { id: 7, name: 'name7', price: 10 },
            { id: 8, name: 'name8', price: 900 },
            { id: 9, name: 'name9', price: 300 },
            { id: 10, name: 'name10', price: 5455 },
        ]
    },
    computed: {
        sortedList() {
            switch (this.sortParam) {
                case 'priceUp': return this.products.sort(sortByPriceUp);
                case 'priceDown': return this.products.sort(sortByPriceDown);
                default: return this.products;
            }
        }
    },
});
const sortByPriceUp = function (d1, d2) { return (d1.price > d2.price) ? 1 : -1; };
const sortByPriceDown = function (d1, d2) { return (d1.price < d2.price) ? 1 : -1; };
