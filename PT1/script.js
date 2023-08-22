// Task1
// Создать кнопку "Перевернуть". При клике на кнопку текст кнопки должен перевернуться и отобразиться в обратном порядке.
new Vue({
    el: '#task1',
    data: {
        message: 'Перевернуть',
    },
    computed: {
        reversedMessage() {
            this.message = this.message.split('').reverse().join('');
            return this.message;
        },
    },
});

// Task2
// Есть список элементов. Пользователь может добавлять новые элементы списка с текстом “Новый элемент списка” нажав на кнопку "Добавить".
new Vue({
    el: '#task2',
    data: {
        newElement: 'Новый элемент списка',
    },
    methods: {
        addNewElement(newElement) {
            let ul = document.getElementById('listOfElements');
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(newElement));
            ul.appendChild(li);
        },
    },
});

// Task3
// При клике на элемент списка он должен быть удален. (по желанию)
new Vue({
    el: '#task3',
    data: {
        items: [
            'Элемент списка №1',
            'Элемент списка №2',
            'Элемент списка №3',
            'Элемент списка №4',
            'Элемент списка №5',
            'Элемент списка №6',
            'Элемент списка №7',
        ],
    },
    methods: {
        removeItem(index) {
            this.items.splice(index, 1);
        },
    },
});