Vue.component('list-item', {
    props: ['itemData'],

    methods: {
        removeItem(id) {
            this.$emit('removeItem', id);
        }
    },

    template:
        `<div>
            <p>{{ itemData.title }}</p>
            <button @click="removeItem(itemData.id)">X</button>
        </div>`,
});

Vue.component('todo-list', {
    props: {},

    data() {
        return {
            items: [],
            newItem: '',
        }
    },

    methods: {
        addItem() {
            const newItem = {
                id: Date.now(),
                title: this.newItem,
            };

            this.items.push(newItem);
            this.newItem = '';
        },
        removeItem(id) {
            this.items = this.items.filter(item => item.id !== id);
        }
    },

    template:
        `<div>
            <h2>Todo List</h2>
            <input type="text" v-model="newItem">
            <button @click="addItem">Add item</button>
            <list-item
                v-for="item in items"
                :item-data="item"
                @removeItem="removeItem"
                :key="item.id"
                ></list-item>
        </div>`
});