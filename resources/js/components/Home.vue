<template>
    <div class="container page-main-div">
        <h1 class="mb-2 text-center">Articles</h1>
        <Pagination />

        <Article v-for="article in getArticles" :article="article" :key="article.id"/>

    </div>
</template>

<script>
    import Article from './Article'
    import Pagination from './Pagination'

    export default {
        name: 'Home',
        components: {
            Article,
            Pagination,
        },
        created() {
            this.fetchArticlesForHomePage();
        },
        computed: {
            getArticles() {
                return this.$store.getters.getArticles
            },
            getPagination() {
                return this.$store.getters.getPagination
            },
        },
        methods: {
            fetchArticlesForHomePage(page_url) {
                this.$store.dispatch('fetchArticlesForHomePage', page_url)
            },
        }
    };
</script>
