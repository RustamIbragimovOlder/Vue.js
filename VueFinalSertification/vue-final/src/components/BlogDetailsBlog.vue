<template>
    <div class="blog" @click="showDetails(blog.id)">
        <div class="blog-content">
            <div class="blog-header">
                <p class="blog-header__text">{{ blog.header }}</p>
            </div>
            <div class="blog-content-img-wrapper">
                <img class="blog-content-img" :src=blog.img alt="blog-img">
            </div>
            <div class="blog-footer">
                <div class="blog-date">
                    <p class="blog-date__text">
                        {{ blog.date }}
                    </p>
                </div>
                <div class="blog-crumbs">
                    <p class="blog-crumbs__text">
                        {{ blog.crumbs }}
                    </p>
                </div>
            </div>
            <div class="blog-text">
                {{ blog.text1 }}
            </div>
            <div class="blog-text">
                {{ blog.text2 }}
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'BlogDetailsBlog',
    props: ['blog'],
    methods: {
        showDetails(id) {
            this.$emit('showFullBlog', id);
            console.log(id);
        }
    }
}
</script>
  
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

.main-blog-details {
    width: 100%;

    &__intro {
        margin-top: 45px;
    }
}

.blogs-list {
    margin-top: 100px;

    &-content {
        padding: 25px;
        display: flex;
        gap: 52px;
        justify-content: space-between;
    }
}

.blogs-container {
    width: 67%;
}

.tags-container {
    width: 33%;
}

.blog {
    cursor: pointer;

    margin: 0 0 45px 0;

    &-content {
        &-img {
            width: 100%;
            border-radius: 50px;

            &-wrapper {
                margin-bottom: 46px;
            }
        }
    }

    &-header {
        margin-bottom: 21px;

        &__text {
            color: #292f36;
            font-family: 'DM Serif Display', serif;
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            /* 62.5px */
            letter-spacing: 1px;
        }
    }

    &-footer {
        display: flex;
        justify-content: space-between;
        margin-bottom: 48px;
    }

    &-date {
        &__text {
            color: #4d5053;
            font-family: 'Jost', sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            /* 24px */
            letter-spacing: 0.16px;
            text-transform: capitalize;
        }
    }

    &-crumbs {
        &__text {
            color: #4d5053;
            font-family: 'Jost', sans-serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            /* 24px */
            letter-spacing: 0.16px;
            text-transform: capitalize;
        }
    }

    &-text {
        color: #4d5053;
        font-family: 'Jost', sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 33px */
        letter-spacing: 0.22px;
    }

    &-details {
        &-content {
            &-top {
                display: flex;
                padding: 53px 227px;
                flex-direction: column;
                align-items: center;
                gap: 10px;
                border-radius: 50px;
                background: #f4f0ec;
                margin-bottom: 27px;

                &__content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                &__text {
                    color: #cda274;
                    text-align: center;
                    font-family: 'DM Serif Display', serif;
                    font-size: 25px;
                    font-style: italic;
                    font-weight: 400;
                    line-height: 125%;
                    /* 31.25px */
                    letter-spacing: 0.5px;
                }
            }

            &-main {
                margin-bottom: 44px;

                &__header {
                    color: #292f36;
                    font-family: 'DM Serif Display', serif;
                    font-size: 50px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 125%;
                    /* 62.5px */
                    letter-spacing: 1px;
                    margin-bottom: 20px;
                }

                &__text {
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

            &-sub {
                &-img {
                    border-radius: 50px;
                    width: 100%;

                    &-wrapper {
                        margin-bottom: 35px;
                    }
                }

                &__text {
                    text-align: center;
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
}

.tag {
    padding: 9px 30px;
    border-radius: 10px;
    background: #f4f0ec;
    color: #292f36;
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
    cursor: pointer;

    &:hover {
        background: #292f36;
        color: #fff;
        text-align: center;
        font-family: 'Jost', sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 22.5px */
        letter-spacing: 0.36px;
    }

    &-clicked {
        background: #292f36;
        color: #fff;
        text-align: center;
        font-family: 'Jost', sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 22.5px */
        letter-spacing: 0.36px;
    }
}

.tags-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 10px;
}
</style>