<template>
    <div>
        <div class="categories center">
            <p class="categories__text">Bathroom</p>
            <p class="categories__text">Bed Room</p>
            <p class="categories__text">Kitchan</p>
            <p class="categories__text">Living Area</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCategoriesComp',
};
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

.center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}

.categories {
    width: 880px;
    height: 76px;
    margin-top: 200px;
    display: flex;
    width: 880px;
    justify-content: center;
    align-items: center;
    gap: 96px;
    border-color: red;
    border-style: solid;
    border-width: 2px;

    &__text {
        width: 120px;
        height: 24px;
        color: #292F36;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        /* 22.5px */
        letter-spacing: 0.36px;
        // margin: 26px, 66px;
        border-color: green;
        border-style: solid;
        border-width: 2px;
    }
}
</style>