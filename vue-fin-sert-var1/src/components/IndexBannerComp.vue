<template>
    <div class="banner center">
        <div class="banner-box">
            <img src="@/assets/banner.png" alt="banner" class="banner__image" />
            <div class="banner__text">
                <h2 class="banner__heading">Let Your Home Be Unique</h2>
                <p class="banner__paragraph">
                    There are many variations of the passages of lorem Ipsum
                    fromavailable, majority.
                </p>
                <button class="banner__button">
                    <a href="#" class="banner__button-link">Get Started</a><img src="@/assets/vector1.png" alt="vector1" />
                </button>
            </div>
        </div>
    </div>
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

.banner {
    margin-top: 56px;

    &-box {
        position: relative;
    }

    &__image {
        border-radius: 70px;
    }

    &__text {
        position: absolute;
        max-width: 434px;
        top: 208px;
        left: 52px;
    }

    &__heading {
        margin-bottom: 18px;
        color: #292f36;
        font-family: 'DM Serif Display', serif;
        font-size: 64px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
    }

    &__paragraph {
        margin-bottom: 20px;
        color: #4d5053;
        font-family: 'Jost', sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
    }

    &__button {
        display: flex;
        padding: 23px 47px 24px 48px;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        border: none;
        border-radius: 18px;
        background: #292f36;
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
        transition: 0.3s;

        &:hover {
            background: #cda274;
        }

        &:hover .banner__button-svg path {
            stroke: #292f36;
        }
    }

    &__button-link {
        color: #fff;
        text-align: center;
        font-family: 'Jost', sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        letter-spacing: 1.25px;
    }
}
</style>