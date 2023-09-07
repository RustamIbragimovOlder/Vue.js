<template>
    <div>
        <h3>Задание 1</h3>
        <p class="task">Создайте компонент "Аутентификация" (Authentication), который будет отображать форму входа или
            сообщение об успешной аутентификации в зависимости от переданного пропса isAuthenticated. Используйте директиву
            v-if для
            условного отображения разных элементов в шаблоне компонента.</p>
        <div>
            <form v-if="!isAuthenticated" @submit.prevent="login">
                <label for="username">Имя пользователя:</label>
                <input type="text" id="username" v-model="username" required>
                <label for="password">Пароль:</label>
                <input type="password" id="password" v-model="password" required>
                <button type="submit">Войти</button>
            </form>
            <p v-else>Вы успешно авторизованы!</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AuthenticationComp',
    data() {
        return {
            isAuthenticated: false,
        };
    },
    methods: {
        login() {
            this.isAuthenticated = true;
        }
    }
};
</script>

<style lang="scss" scoped>
h3 {
    margin: 40px 0 0;
}
</style>