<template>
  <div id="app">
    <!-- Page 'index.html' -->
    <!-- <HeaderComp />
    <IndexBannerComp />
    <IndexProjectComp />
    <IndexCounterComp />
    <IndexBlogComp />
    <FooterComp /> -->

    <!-- Page 'blog.html' -->
    <!-- <HeaderComp />
    <BlogBannerComp />
    <BlogPostComp />
    <BlogBlogComp />
    <PaginationComp />
    <FooterComp /> -->

    <!-- Page 'blog_details.html' -->
    <!-- <HeaderComp />
    <BlogDetailsComp />
    <FooterComp /> -->

    <!-- Page 'project.html' -->
    <!-- <HeaderComp />
    <ProjectBannerComp />
    <ProjectCategoriesComp />
    <ProjectCatalogComp />
    <PaginationComp />
    <FooterComp /> -->

    <!-- Page 'project_details.html' -->
    <HeaderComp />
    <ProjectDetailsBannerComp />
    <ProjectDetailsSlideShowComp />
    <FooterComp />

  </div>
</template>

<script>
// Page 'index.html'
// import HeaderComp from './components/HeaderComp.vue'
// import IndexBannerComp from './components/IndexBannerComp.vue'
// import IndexProjectComp from './components/IndexProjectComp.vue'
// import IndexCounterComp from './components/IndexCounterComp.vue'
// import IndexBlogComp from './components/IndexBlogComp.vue'
// import FooterComp from './components/FooterComp.vue'

// Page 'blog.html'
// import HeaderComp from './components/HeaderComp.vue'
// import BlogBannerComp from './components/BlogBannerComp.vue'
// import BlogPostComp from './components/BlogPostComp.vue'
// import BlogBlogComp from './components/BlogBlogComp.vue'
// import PaginationComp from './components/PaginationComp.vue'
// import FooterComp from './components/FooterComp.vue'

// Page 'blog_details.html'
// import HeaderComp from './components/HeaderComp.vue'
// import BlogDetailsComp from './components/BlogDetailsComp.vue'
// import FooterComp from './components/FooterComp.vue'

// Page 'project.html'
// import HeaderComp from './components/HeaderComp.vue'
// import ProjectBannerComp from './components/ProjectBannerComp.vue';
// import ProjectCategoriesComp from './components/ProjectCategoriesComp.vue';
// import ProjectCatalogComp from './components/ProjectCatalogComp.vue';
// import PaginationComp from './components/PaginationComp.vue'
// import FooterComp from './components/FooterComp.vue'

// Page 'project_details.html'
import HeaderComp from './components/HeaderComp.vue'
import ProjectDetailsBannerComp from './components/ProjectDetailsBannerComp.vue';
import ProjectDetailsSlideShowComp from './components/ProjectDetailsSlideShowComp.vue';
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    // Page 'index.html'
    // HeaderComp,
    // IndexBannerComp,
    // IndexProjectComp,
    // IndexCounterComp,
    // IndexBlogComp,
    // FooterComp,
    // Page 'blog.html'
    // HeaderComp,
    // BlogBannerComp,
    // BlogPostComp,
    // BlogBlogComp,
    // PaginationComp,
    // FooterComp,
    // Page 'blog_details.html'
    // HeaderComp,
    // BlogDetailsComp,
    // FooterComp,
    // Page 'project.html'
    // HeaderComp,
    // ProjectBannerComp,
    // ProjectCategoriesComp,
    // ProjectCatalogComp,
    // PaginationComp,
    // FooterComp,
    // Page 'project_details.html'
    HeaderComp,
    ProjectDetailsBannerComp,
    ProjectDetailsSlideShowComp,
    FooterComp,
  },

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
