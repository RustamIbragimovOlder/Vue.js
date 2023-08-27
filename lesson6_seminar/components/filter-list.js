Vue.component('filter-list', {
    template: `
          <div>
            <input type="text" v-model="filterItem">
            <div v-for="item in items">{{ item }}</div>
            <p>filtered</p>
            <div v-for="item in filteredItems">{{ item }}</div>
          </div>`,
    data() {
        return {
            items: ['list 1', 'list 2', 'list 3', '12345', 'kjhgse', 'ijhbdiw'],
            filterItem: '',
        };
    },
    computed: {
        filteredItems() {
            return this.items.filter(item => item.includes(this.filterItem));
        }
    },
})