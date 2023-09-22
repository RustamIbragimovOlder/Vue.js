<template>
    <div class="blogs-list center">
        <div class="blogs-list-content">
            <div class="blogs-container" v-if="showDetails === false">
                <BlogDetailsBlog @showFullBlog="showAll" v-for="blog in filteredItems" :key="blog.id" :blog="blog" />
            </div>
            <div class="blogs-container" v-if="showDetails === true">
                <BlogDetailsBlog @showFullBlog="showAll" :blog="filteredBlog" />
                <BlogDetailsBlogDetails :blog="filteredBlog" />
            </div>
            <div class="tags-container">
                <div class="tag" :class="{ 'tag-clicked': tag === filterItem }" v-for="tag in getTags" :key="tag.id"
                    @click="clickTag(tag)">{{ tag }}</div>
            </div>
        </div>
    </div>
</template>
  
<script>
import BlogDetailsBlogDetails from '@/components/BlogDetailsBlogDetails.vue';
import BlogDetailsBlog from '@/components/BlogDetailsBlog.vue';
import photo3 from '@/assets/photo3.png';
import photo5 from '@/assets/photo5.png';
import photo10 from '@/assets/photo10.png';
import photo11 from '@/assets/photo11.png';
import photo13 from '@/assets/photo13.png';
import photo14 from '@/assets/photo14.png';
export default {
    name: 'BlogDetailsBlogList',
    components: {
        BlogDetailsBlogDetails,
        BlogDetailsBlog,
    },
    data() {
        return {
            blogs: [
                {
                    id: 1,
                    header: 'Let’s Get Solution for Building Construction Work',
                    img: photo13,
                    date: '26 December, 2022',
                    crumbs: 'Interior / Home / Decore',
                    text1: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    text2: 'Для получения подробной информации - кликните на картинку или текст.',
                    tags: ['Bedroom'],
                    detailsHeader: 'Design sprints are great',
                    detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsText1: '1. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsText2: '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsText3: '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsImg: photo14,
                    detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 2,
                    header: 'Let’s Get Solution for Building Construction Work',
                    img: photo11,
                    date: '26 December, 2023',
                    crumbs: 'Interior / Home / Decore',
                    text1: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    text2: 'Для получения подробной информации - кликните на картинку или текст.',
                    tags: ['Architecture'],
                    detailsHeader: 'Design sprints are great',
                    detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsText1: '1. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsText2: '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsText3: '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsImg: photo14.png,
                    detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 3,
                    header: 'Let’s Get Solution for Building Construction Work',
                    img: photo10,
                    date: '26 December, 2022',
                    crumbs: 'Interior / Home / Decore',
                    text1: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    text2: 'Для получения подробной информации - кликните на картинку или текст.',
                    tags: ['Kitchen Planning'],
                    detailsHeader: 'Design sprints are great',
                    detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsText1: '1. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsText2: '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsText3: '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsImg: photo14,
                    detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 4,
                    header: 'Let’s Get Solution for Building Construction Work',
                    img: photo5,
                    date: '26 December, 2022',
                    crumbs: 'Interior / Home / Decore',
                    text1: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    text2: 'Для получения подробной информации - кликните на картинку или текст.',
                    tags: ['Kitchen'],
                    detailsHeader: 'Design sprints are great',
                    detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsText1: '1. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsText2: '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsText3: '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsImg: photo14.png,
                    detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 5,
                    header: 'Let’s Get Solution for Building Construction Work',
                    img: photo3,
                    date: '26 December, 2022',
                    crumbs: 'Interior / Home / Decore',
                    text1: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    text2: 'Для получения подробной информации - кликните на картинку или текст.',
                    tags: ['Building'],
                    detailsHeader: 'Design sprints are great',
                    detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsText1: '1. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsText2: '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsText3: '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    detailsImg: photo14,
                    detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
            ],
            filterItem: '',
            filterId: '',
            showDetails: false,
        };
    },
    computed: {
        getTags() {
            let tags = [];
            this.blogs.forEach((el) => {
                tags.push(...el.tags)
            })
            return new Set(tags);
        },

        filteredItems() {
            return this.blogs.filter((blog) => {
                if (this.filterItem === '') {
                    return this.blogs;
                } else {
                    return blog.tags.includes(this.filterItem);
                }
            });
        },

        filteredBlog() {
            const blog = this.blogs.filter((blog) => {
                return blog.id === Number(this.filterId)
            })

            return blog[0]
        },
    },

    methods: {
        clickTag(tag) {
            if (this.filterItem === tag) {
                this.filterItem = '';
            } else {
                this.filterItem = tag;
            }
        },

        showAll(id) {
            this.filterId === id ? this.filterId = '' : this.filterId = id;
            this.showDetails = !this.showDetails;
        }
    },
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