<template>
    <div>
        <div class="categories center">
            <button class="categories__button">
                <a class="categories__button_text" href="">Bathroom</a>
            </button>
            <button class="categories__button">
                <a class="categories__button_text" href="">Bed Room</a>
            </button>
            <button class="categories__button">
                <a class="categories__button_text" href="">Kitchan</a>
            </button>
            <button class="categories__button">
                <a class="categories__button_text" href="">Living Area</a>
            </button>
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
    height: 80px;
    margin-top: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    &__button {
        display: flex;
        padding: 26px 54px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 260px;
        height: 80px;
        border: none;
        background: #FFF;

        &_text {
            color: black;
            text-align: center;
            font-family: Jost;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 125%;
            /* 22.5px */
            letter-spacing: 0.36px;
        }
    }

    // &__button:hover {
    //     border-radius: 20px;
    //     box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    //     background: #CDA274;
    // }
}

.categories__button:hover {
    border-radius: 20px;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    background: #CDA274;
    // color: white;

    &_text {
        color: white;
    }
}


// .categories__button_text:hover {
//     color: white;
// }
</style>