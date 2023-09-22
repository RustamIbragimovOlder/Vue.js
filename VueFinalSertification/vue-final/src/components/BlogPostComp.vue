<template>
    <section class="blog-post center">
        <h2 class="blog-post__title">Latest Post</h2>
        <div class="blog-post__latest-post">
            <div class="blog-post__latest-post-subbox">
                <img class="blog-post__latest-post-image" src="@/assets/photo8.png" alt="photo8" />
                <article class="blog-post__latest-post-text">
                    <h3 class="blog-post__latest-post-head">
                        Low Cost Latest Invented Interior Designing Ideas
                    </h3>
                    <p class="blog-post__latest-post-paragrath blog-post__latest-post-paragrath_1">
                        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                        turpis dignissim maximus.posuere in.Contrary to popular belief.
                    </p>
                    <p class="blog-post__latest-post-paragrath blog-post__latest-post-paragrath_2">
                        Lorem Ipsum is not simply random text. It has roots in a piece
                        of classica.
                    </p>
                    <div class="blog__data-arrow-box blog-post__data-arrow-box">
                        <p class="blog__date">26 December, 2022</p>
                        <a href="#" class="blog__arrowbox">
                            <img src="@/assets/vector3.svg" alt="vector3" />
                        </a>
                    </div>
                </article>
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

.blog-post {
    padding-top: 202px;
    padding-bottom: 150px;
    display: flex;
    flex-direction: column;
    gap: 28px;

    &__title {
        color: #292f36;
        font-family: 'DM Serif Display', serif;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;
    }

    &__latest-post {
        padding: 22px;
        border-radius: 62px;
        border: 1px solid #e7e7e7;
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
        transition: 0.3s;

        &:hover {
            background: #f4f0ec;
        }

        &-subbox {
            display: flex;
            flex-direction: row;
            gap: 64px;
        }

        &-image {
            border-radius: 48px;
        }

        &-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-top: 16px;
        }

        &-head {
            max-width: 463px;
            margin-bottom: 22px;
            color: #292f36;
            font-family: 'DM Serif Display', serif;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.5px;
        }

        &-paragrath {
            max-width: 482px;
            color: #4d5053;
            font-family: 'Jost', sans-serif;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.22px;

            &_1 {
                margin-bottom: 34px;
            }

            &_2 {
                margin-bottom: 42px;
            }
        }
    }

    &__data-arrow-box {
        display: flex;
        width: 489px;
        align-items: center;
        gap: 214px;
    }
}
</style>