<template>
    <div class="container">
        <h1>Manage Articles</h1>
        <div class="text-right">
            <b-button v-b-modal.modal-article @click="modal_article_title = 'Add New Article'">Add New Article</b-button>

            <b-modal id="modal-article" centered :title="modal_article_title" :hide-footer="true">
                <form @submit.prevent="addArticle" class="mb-4">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Enter Title" v-model="article.title">
                    </div>
                    <div class="form-group">
                        <textarea type="text" class="form-control" placeholder="Enter Body" v-model="article.body"></textarea>
                    </div>
                    <div class="text-right">
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>

                </form>
            </b-modal>
        </div>

        <Pagination />

        <Article v-for="article in getArticles" :article="article" :key="article.id" @editArticleEvent="editArticle"/>

    </div>
</template>

<script>
    import Article from './Article'
    import Pagination from './Pagination'

    export default {
        name: 'ManageArticles',
        components: {
            Article,
            Pagination,
        },
        data() {
            return {
                article: {
                    id: '',
                    title: '',
                    body: '',
                    edit: false,
                },
                modal_article_title: 'Add New Article'
            }
        },

        created() {
            this.fetchArticles();
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
            fetchArticles(page_url) {
                this.$store.dispatch('fetchArticles', page_url)
            },
            addArticle() {
                this.$store.dispatch('addArticle', {
                    'id': this.article.id,
                    'title': this.article.title,
                    'body': this.article.body,
                    'edit': this.article.edit,
                })

                this.$bvModal.hide('modal-article')
                this.article.title = ''
                this.article.body = ''
            },
            editArticle(article) {
                this.article.edit = true
                this.article.id = article.id
                this.article.title = article.title
                this.article.body = article.body
                this.modal_article_title = 'Edit Article'
                this.$bvModal.show('modal-article')
            }
        }
    };
</script>
