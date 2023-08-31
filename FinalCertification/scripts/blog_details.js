Vue.component('blogs-list', {
    data() {
        return {
            blogs: [
                {
                    id: 1,
                    header: 'Let’s Get Solution for Building Construction Work',
                    img: 'images/photo13.png',
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
                    detailsImg: 'images/photo14.png',
                    detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 2,
                    header: 'Let’s Get Solution for Building Construction Work',
                    img: 'images/photo11.png',
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
                    detailsImg: 'images/photo14.png',
                    detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 3,
                    header: 'Let’s Get Solution for Building Construction Work',
                    img: 'images/photo10.png',
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
                    detailsImg: 'images/photo14.png',
                    detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 4,
                    header: 'Let’s Get Solution for Building Construction Work',
                    img: 'images/photo5.png',
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
                    detailsImg: 'images/photo14.png',
                    detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                },
                {
                    id: 5,
                    header: 'Let’s Get Solution for Building Construction Work',
                    img: 'images/photo3.png',
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
                    detailsImg: 'images/photo14.png',
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

    template: `
    <div class="blogs-list">
        <div class="blogs-list-content">
            <div class="blogs-container" v-if="showDetails === false">
                <blog @showFullBlog="showAll" v-for="blog in filteredItems" :key="blog.id" :blog="blog"></blog>
            </div>
            <div class="blogs-container" v-if="showDetails === true">
                <blog @showFullBlog="showAll" :blog="filteredBlog"></blog>
                <blog-details :blog="filteredBlog"></blog-details>
            </div>
            <div class="tags-container">
                <div class="tag" :class="{'tag-clicked': tag === filterItem}" v-for="tag in getTags" :key="tag.id" @click="clickTag(tag)">{{ tag }}</div>
            </div>
        </div>
    </div>
    `,
})

Vue.component('blog', {
    props: ['blog'],

    data() {
        return {
            isHidden: true,
        }
    },

    template: `
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
    `
    ,
    methods: {
        showDetails(id) {
            this.$emit('showFullBlog', id);
            console.log(id);
        }
    }
})

Vue.component('blog-details', {
    props: ['blog'],

    template: `
    <div class="blog-details">
        <div class="blog-details-content">
            <div class="blog-details-content-top">
                <div class="blog-details-content-top__content">
                    <img src="images/vector5.svg" alt="vector5">
                    <p class="blog-details-content-top__text">The details are not the details. They make the design.</p>
                </div>
            </div>
            <div class="blog-details-content-main">
                <p class="blog-details-content-main__header">
                    {{ blog.detailsHeader }}
                </p>
                <p class="blog-details-content-main__text">
                    {{ blog.detailsText }}
                </p>
                <p class="blog-details-content-main__text">
                    {{ blog.detailsText1 }}
                </p>
                <p class="blog-details-content-main__text">
                    {{ blog.detailsText2 }}
                </p>
                <p class="blog-details-content-main__text">
                    {{ blog.detailsText3 }}
                </p>
            </div>
            <div class="blog-details-content-sub">
                <div class="blog-details-content-sub-img-wrapper">
                    <img class="blog-details-content-sub-img" :src=blog.detailsImg alt="sub">
                </div>
                <p class="blog-details-content-sub__text">
                    {{ blog.detailsSubText }}
                </p>
            </div>
        </div>
    </div>
    `
    ,
    methods: {
        showDetails(id) {
            this.$emit('showFullBlog', id);
            console.log(id);
        }
    }
})

let app = new Vue({
    el: '#blogApp',
    data: {

    },

    methods: {

    }
})