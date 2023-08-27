Vue.component('counter-component', {
    props: {},

    data() {
        return {
            counter: 0,
        }
    },

    methods: {
        increase(step) {
            this.counter += step;
        },
        decrease(step) {
            this.counter -= step;
        },
    },

    template: `
        <div>
            <h2>Counter {{ counter }}</h2>
            <button @click="increase(1)">+step</button>
            <button @click="decrease(1)">-step</button>
        </div>
        `
});