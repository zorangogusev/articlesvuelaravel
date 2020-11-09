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
                        <button type="submit" @click="" class="btn btn-primary">Save</button>
                    </div>

                </form>
            </b-modal>
        </div>

        <Pagination v-bind:pagination="pagination" @fetchArticlesNextPageUrl="fetchArticles"/>

        <Article v-for="article in articles" v-bind:article="article" v-bind:key="article.id" @deleteArticleEvent="deleteArticle" @editArticleEvent="editArticle"/>

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
                articles: [],
                article: {
                    id: '',
                    title: '',
                    body: ''
                },
                article_id: '',
                pagination: {},
                edit: false,
                modal_article_title: 'Add New Article'
            }
        },

        created() {
            this.fetchArticles();
        },

        methods: {
            fetchArticles(page_url) {
                // console.log(axios.defaults.baseURL);

                let vm = this;
                page_url = page_url || 'articles'
                axios.get(page_url)
                    .then(response => {
                        console.log(response);
                        this.articles = response.data.data;
                        vm.makePagination(response.data.meta, response.data.links);
                    })
                    .catch(error => console.log(error))
            },
            makePagination(meta, links) {
                // console.log('makePagination here')
                let pagination = {
                    current_page: meta.current_page,
                    last_page: meta.last_page,
                    next_page_url: links.next,
                    prev_page_url: links.prev
                };

                this.pagination = pagination
            },
            deleteArticle(id) {
                // console.log('delete works');
                axios.delete(`article/${id}`, {
                    method: 'delete'
                })
                    .then(data => {
                        alert('Article Deleted')
                        this.fetchArticles()
                    })
                    .catch(err => console.log(err))
            },
            addArticle() {
                if(this.edit === false) {
                    axios.post('article', {
                        'title': this.article.title,
                        'body': this.article.body
                    })
                        .then(data => {
                            this.article.title = ''
                            this.article.body = ''
                            this.$bvModal.hide('modal-article')
                            alert('Article Added')
                            this.fetchArticles()
                        })
                        .catch(error => console.log(error))
                } else {
                    axios.put('article', {
                        'article_id': this.article.id,
                        'title': this.article.title,
                        'body': this.article.body
                    })
                        .then(data => {
                            this.article.title = ''
                            this.article.body = ''
                            this.$bvModal.hide('modal-article')
                            alert('Article Updated')
                            this.fetchArticles()
                        })
                        .catch(err => console.log(err))
                }
            },
            editArticle(article) {
                this.edit = true
                this.article.id = article.id
                this.article.article_id = article.id
                this.article.title = article.title
                this.article.body = article.body
                this.modal_article_title = 'Edit Article'
                this.$bvModal.show('modal-article')
            }
        }
    };
</script>
