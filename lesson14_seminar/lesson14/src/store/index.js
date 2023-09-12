export default ({
    // начальное состояние
    state: {
        count: 0,
        cartItems: [],
    },

    // методы для изменения состояния
    mutations: {
        INCREMENT(state) {
            state.count++
        },
        DECREMENT(state) {
            state.count--
        },
        // принимает товар в качестве параметра и добавляет его в массив "cartItems", при этом проверяет есть ли уже товар в корзине
        ADD_ITEM_TO_CART(state, item) {
            const find = state.cartItems.find((stateItem) => stateItem.id === item.id);
            if (find) {
                find.quantity++; // если товар найден, то увеличивается его количество
            } else { // если товар не найден, то создается новый товар (количество - 1)
                const newItem = {
                    ...item,
                    quantity: 1,
                };
                state.cartItems.push(newItem) // и добавляется в корзину
            }
        },
        // активация данных о корзине
        SET_CART(state, cart) {
            state.cartItems = cart;
        }
    },

    // методы для чтения состояния
    getters: {
        // возвращает массив товаров в корзине
        cartItems(state) {
            return state.cartItems;
        },
        // возвращает общую стоимость всех товаров в корзине
        totalPrice(state) {
            return state.cartItems.reduce((totalPrice, item,) => totalPrice + item.quantity * item.price, 0)
        },
        // возвращает общее количество товаров в корзине
        totalItems(state) {
            return state.cartItems.reduce((totalQuantity, item,) => totalQuantity + item.quantity, 0)
        }
    },

    // методы для асинхронных операций
    actions: {
        // принимает товар в качестве параметра и вызывает мутацию "ADD_ITEM_TO_CART"
        addToCart({ commit }, item) {
            commit('ADD_ITEM_TO_CART', item);
        },
        // получение информации о корзине якобы с сервера
        getCart({ commit }) {
            setTimeout(() => {
                // объекты товаров в корзине
                const cart = [
                    {
                        id: 1,
                        name: 'Товар 1',
                        price: 100,
                        quantity: 3,
                    },
                    {
                        id: 2,
                        name: 'Товар 2',
                        price: 50,
                        quantity: 2,
                    },
                    {
                        id: 3,
                        name: 'Товар 3',
                        price: 200,
                        quantity: 1,
                    },
                ];

                commit('SET_CART', cart); // задержка получения информации о корзине на 5 сек
            }, 5000);
        }
    },

    // модули Vuex для разделения хранилища на под-хранилища
    modules: {
    }
});