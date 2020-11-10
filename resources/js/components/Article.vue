<template>
    <div class="card card-body mb-2">
        <h4>{{ article.title }}</h4>
        <p>{{ article.body }}</p>
        <hr>
        <div>
            <button @click="editArticle(article)" class="btn btn-dark">Edit</button>
            <button @click="deleteArticle(article.id)" class="btn btn-danger">Delete</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Article',
        props: {
            article: {
                type: Object,
                required: true,
            }
        },
        methods: {
            deleteArticle(id) {
                if (confirm('Delete!!!')) {
                    this.$store.dispatch('deleteArticle', { id: id})
                }
            },
            editArticle(article) {
                this.$emit('editArticleEvent', article)
            }
        }
    }
</script>
