<template>
    <section class="project center">
        <p class="project__title">Follow Our Projects</p>
        <p class="project__text">
            It is a long established fact that a reader will be distracted by the
            of readable content of page lookings at its layouts points.
        </p>
        <div class="project__items">
            <div class="project__item">
                <img class="border-top-right" src="@/assets/photo1.png" alt="photo1" />
                <div class="project__item_content">
                    <div class="project__item_content-text">
                        <p class="project__item_content-title">Modern Kitchan</p>
                        <p class="project__item_content-subtitle">
                            <span>Decor</span>
                            /
                            <span>Artchitecture</span>
                        </p>
                    </div>
                    <img src="@/assets/vector2.svg" alt="vector2" class="project__item_elem" />
                </div>
            </div>
            <div class="project__item">
                <img class="border-top-left" src="@/assets/photo2.png" alt="photo2" />
                <div class="project__item_content">
                    <div class="project__item_content-text">
                        <p class="project__item_content-title">Modern Kitchan</p>
                        <p class="project__item_content-subtitle">
                            <span>Decor</span>
                            /
                            <span>Artchitecture</span>
                        </p>
                    </div>
                    <img src="@/assets/vector2.svg" alt="vector2" class="project__item_elem" />
                </div>
            </div>
            <div class="project__item">
                <img class="border-bottom-right" src="@/assets/photo3.png" alt="photo3" />
                <div class="project__item_content">
                    <div class="project__item_content-text">
                        <p class="project__item_content-title">Modern Kitchan</p>
                        <p class="project__item_content-subtitle">
                            <span>Decor</span>
                            /
                            <span>Artchitecture</span>
                        </p>
                    </div>
                    <img src="@/assets/vector2.svg" alt="vector2" class="project__item_elem" />
                </div>
            </div>
            <div class="project__item">
                <img class="border-bottom-left" src="@/assets/photo4.png" alt="photo4" />
                <div class="project__item_content">
                    <div class="project__item_content-text">
                        <p class="project__item_content-title">Modern Kitchan</p>
                        <p class="project__item_content-subtitle">
                            <span>Decor</span>
                            /
                            <span>Artchitecture</span>
                        </p>
                    </div>
                    <img src="@/assets/vector2.svg" alt="vector2" class="project__item_elem" />
                </div>
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

.project {
    margin-top: 96px;

    &__title {
        color: #292f36;
        text-align: center;
        font-family: 'DM Serif Display', serif;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 62.5px */
        letter-spacing: 1px;
    }

    &__text {
        margin-top: 8px;
        margin-bottom: 92px;
        width: 738px;
        margin-left: auto;
        margin-right: auto;
        color: #4d5053;
        text-align: center;
        font-family: 'Jost', sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 33px */
        letter-spacing: 0.22px;
    }

    &__items {
        display: grid;
        grid-template-columns: repeat(2, auto);
        column-gap: 104px;
        row-gap: 56px;
        margin-bottom: 96px;
    }

    &__item {
        display: grid;
        gap: 24px;

        &_content {
            display: flex;
            gap: 260px;

            &-title {
                color: #292f36;
                font-family: 'DM Serif Display', serif;
                font-size: 25px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%;
                /* 31.25px */
                letter-spacing: 0.5px;
            }

            &-subtitle {
                width: 217px;
                height: 27px;
                color: #4d5053;
                font-family: 'Jost', sans-serif;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                /* 33px */
                letter-spacing: 0.22px;
            }
        }
    }
}

.border-top-right {
    border-radius: 0 90px 0 0;
}

.border-top-left {
    border-radius: 90px 0 0 0;
}

.border-bottom-right {
    border-radius: 0 0 90px 0;
}

.border-bottom-left {
    border-radius: 0 0 0 90px;
}
</style>