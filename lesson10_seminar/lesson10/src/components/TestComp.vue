<template>
    <div>
        <button @click="$emit('mySupaEvent', { title: 'Test' })">Click Me!</button>
    </div>
</template>

<script>
export default {
    name: 'TestComp'
}
</script>


<style scoped lang="scss"></style>
