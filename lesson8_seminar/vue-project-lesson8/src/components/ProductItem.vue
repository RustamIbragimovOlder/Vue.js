<template>
    <div>
        <h2>Название</h2>
        <div>{{ product.name }}</div>
        <h2>Цена</h2>
        <div>{{ product.price }}</div>
    </div>
</template>
  
<script>
export default {
    name: 'ProductItem',
    // props: ['product'],
    props: {
        product: {
            type: Object,
            // required: true,
            // default: {}
            // validate(val) {
            //
            // }
        }
    },
}
</script>
  
<style scoped lang="scss"></style>