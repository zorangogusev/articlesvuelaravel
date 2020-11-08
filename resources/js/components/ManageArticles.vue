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

        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li v-bind:class="[{disabled: !pagination.prev_page_url }]" class="page-item">
                    <a @click="fetchArticles(pagination.prev_page_url)" class="page-link" href="#">Previous</a>
                </li>

                <li class="page-item disabled">
                    <a class="page-link text-dark" href="#">Page {{ pagination.current_page }} of {{ pagination.last_page }}</a>
                </li>

                <li v-bind:class="[{disabled: !pagination.next_page_url }]" class="page-item">
                    <a @click="fetchArticles(pagination.next_page_url)" class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>

        <Article v-for="article in articles" v-bind:article="article" v-bind:key="article.id" @deleteArticleEvent="deleteArticle" @editArticleEvent="editArticle"/>

    </div>
</template>

<script>
    import Article from './Article'

    export default {
        name: 'ManageArticles',
        components: {
            Article,
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
                let vm = this;
                page_url = page_url || 'api/articles'
                fetch(page_url)
                    .then(res => res.json())
                    .then(res => {
                        console.log(res);
                        this.articles = res.data;
                        vm.makePagination(res.meta, res.links);
                    })
                    .catch(err => console.log(err))
            },
            makePagination(meta, links) {
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
                fetch(`api/article/${id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        alert('Article Deleted')
                        this.fetchArticles()
                    })
                    .catch(err => console.log(err))
            },
            addArticle() {
                if(this.edit === false) {
                    fetch('api/article', {
                        method: 'post',
                        body: JSON.stringify(this.article),
                        headers: {
                            'content-type' : 'application/json'
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            this.article.title = ''
                            this.article.body = ''
                            alert('Article Added')
                            this.fetchArticles()
                        })
                        .catch(err => console.log(err))
                } else {
                    fetch('api/article', {
                        method: 'put',
                        body: JSON.stringify(this.article),
                        headers: {
                            'content-type' : 'application/json'
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            this.article.title = ''
                            this.article.body = ''
                            alert('Article Updated')
                            this.$bvModal.hide('modal-article')
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
