<template>
    <div>
        <UserComp v-for="user in users" :key="user.id" :user="user"> {{ user }}</UserComp>
    </div>
</template>
  
<script>
import UserComp from "@/components/UserComp.vue";
export default {
    components: {
        UserComp
    },
    name: "UserListComp",

    data() {
        return {
            users: [
                { name: "Ivan", lastname: 'Ivanov', age: 23, email: 'ivan@ivanov.ru' },
                { name: "Olga", lastname: 'Ivanova', age: 20, email: 'olga@ivanova.ru' },
                { name: "Petr", lastname: 'Petrov', age: 25, email: 'petr@petrov.ru' },
            ],
        };
    },
};
</script>
  