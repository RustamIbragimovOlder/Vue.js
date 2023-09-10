import { setTimeout } from 'core-js';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    // начальное состояние
    state: {
        paymentList: [],
    },

    // методы для изменения состояния
    mutations: {
        SET_PAYMENT(state, payments) {
            state.paymentList = payments;
        },
        ADD_PAYMENT(state, pay) {
            state.paymentList.push(pay)
        }
    },

    // методы для чтения состояния
    getters: {
        getPayment: (state) => state.paymentList,
        getFullValue: (state) => {
            return state.paymentList.reduce((a, b) => a + b.value, 0)
        }
    },

    // методы для асинхронных операций
    actions: {
        fetchData({ commit }) {
            setTimeout(() => {
                const paymentList = [
                    {
                        date: '05.09.2023',
                        category: 'Food',
                        value: 1217,
                    },
                    {
                        date: '05.09.2023',
                        category: 'Gift',
                        value: 5075,
                    },
                    {
                        date: '06.09.2023',
                        category: 'Building materials',
                        value: 1999,
                    },
                    {
                        date: '06.09.2023',
                        category: 'Transport',
                        value: 998.50,
                    },
                    {
                        date: '07.09.2023',
                        category: 'Building materials',
                        value: 582.75,
                    },
                    {
                        date: '07.09.2023',
                        category: 'Building materials',
                        value: 13750,
                    },
                ]
                commit('SET_PAYMENT', paymentList)
            }, 3000);
        }
    },

    // модули Vuex для разделения хранилища на под-хранилища
    modules: {
    }
});

