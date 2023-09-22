<template>
    <section class="counter center">
        <div class="counter__content center">
            <div class="counter__content_item">
                <p class="counter__content_item-number">12</p>
                <p class="counter__content_item-text">Years Of Experiance</p>
            </div>
            <div class="counter__content_line"></div>
            <div class="counter__content_item">
                <p class="counter__content_item-number">85</p>
                <p class="counter__content_item-text">Success Project</p>
            </div>
            <div class="counter__content_line counter__content_line-middle"></div>
            <div class="counter__content_item">
                <p class="counter__content_item-number">15</p>
                <p class="counter__content_item-text">Active Project</p>
            </div>
            <div class="counter__content_line counter__content_line-right"></div>
            <div class="counter__content_item">
                <p class="counter__content_item-number">95</p>
                <p class="counter__content_item-text">Happy CUstomers</p>
            </div>
        </div>
    </section>
</template>
  
<script></script>
  
<style scoped lang="scss">
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

.counter {
    margin-bottom: 96px;
    background-color: #f4f0ec;

    &__content {
        display: flex;
        flex-direction: row;
        padding-top: 160px;
        padding-bottom: 160px;
        justify-content: center;
        align-items: center;

        &_item {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 16px;

            &-number {
                margin-top: -10px;
                text-align: center;
                color: #cda274;
                font-family: 'DM Serif Display', serif;
                font-size: 84px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%;
                letter-spacing: 1.7px;
            }

            &-text {
                color: #4d5053;
                font-family: 'Jost', sans-serif;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 0.22px;
            }
        }

        &_line {
            border-left: 1px solid #cda274;
            height: 130px;
            margin-right: 76px;
            margin-left: 54px;

            &-middle {
                margin-left: 76px;
            }

            &-right {
                margin-left: 84px;
            }
        }
    }
}
</style>