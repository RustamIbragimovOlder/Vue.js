<template>
    <div>
        <p>Имя: {{ user.name }}</p>
        <p>Фамилия: {{ user.lastname }}</p>
        <p>Возраст: {{ user.age }}</p>
        <p>Почта: {{ user.email }}</p>
    </div>
</template>
    
<script>
export default {
    name: 'UserComp',
    props: ['user'],
};
</script>
    