// Задание 1
// Вы разрабатываете страницу для отображения информации о товаре. У вас есть объект product, который содержит информацию о товаре, включая название, цену и URL изображения товара. Вам необходимо отобразить эту информацию на странице с использованием v-bind.
// Добавьте кнопку, которая будет изменять цену товара. При нажатии на кнопку должна генерироваться скидка на товар от 1 до 20% и обновиться цена товара в соответствии с значением скидки

new Vue({
    el: '#task1',
    data: {
        product: {
            name: 'jacket',
            price: 150_500,
            discount: `${0}%`,
            photo: 'image.png',
            hasDiscount: false,
        }
    },
    methods: {
        makeDiscount() {
            if (!this.product.hasDiscount) {
                let random = Math.floor(Math.random() * 20);
                this.discount = random;
                this.product.price = this.product.price - this.product.price * random / 100;
                this.product.hasDiscount = true;
            }

        },
    },
    computed: {},
})
// Задание 2
// Вы разрабатываете простое приложение для отображения списка пользователей. У вас есть массив объектов users, где каждый объект представляет одного пользователя с его именем и возрастом. Вам необходимо отобразить каждого пользователя из массива в виде списка на странице.
new Vue({
    el: '#task2',
    data: {
        users: [
            {
                id: 1,
                name: 'Ivan',
                age: 20
            },
            {
                id: 2,
                name: 'Petr',
                age: 25
            },
            {
                id: 3,
                name: 'Elena',
                age: 30
            },
            {
                id: 4,
                name: 'Stepan',
                age: 35
            }
        ]
    },
});

// Задание 3
// Вы разрабатываете приложение для создания списка покупок.У вас есть массив объектов items, где каждый объект представляет товар с его названием и количеством.Вам необходимо отобразить список товаров, предоставить возможность изменять количество каждого товара и отмечать товары, которые уже куплены.
new Vue({
    el: '#task3',
    data: {
        products: [
            { name: 'Молоко', quantity: 2, isBought: false },
            { name: 'Хлеб', quantity: 1, isBought: true },
            { name: 'Яблоки', quantity: 5, isBought: false },
            { name: 'Мясо', quantity: 3, isBought: false },
        ]
    }
})
// Задание 4
// Вы разрабатываете приложение для управления списком контактов. У вас есть форма с полями "Имя", "Фамилия" и "Email", где пользователь может вводить информацию о новом контакте. После добавления контакта он должен отображаться в списке контактов. Требуется связать форму с данными и отображать список контактов на странице.
// new Vue({
//     el: '#task4',
//     data: {
//         users: [
//             {
//                 name: 'Ivan',
//                 surname: 'Ivanov',
//                 email: 'ivan@jj.com',
//             }
//         ],
//         newUser: {
//             name: '',
//             surname: '',
//             email: '',
//         },
//     },
//     methods: {
//         addUser() {
//             this.users.push(this.newUser);
//         },
//     },
// })
new Vue({
    el: '#task4',
    data: {
        firstname: '',
        lastname: '',
        email: '',
        contacts: []
    },
    methods: {
        addContact() {
            this.contacts.push({
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email
            });
            this.firstname = '';
            this.lastname = '';
            this.email = '';
        }
    }
});