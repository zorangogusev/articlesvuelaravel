<template>
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
</template>

<script>
    export default {
        name: 'Pagination',
        props: {
            pagination: Object,
            required: true,
        },
        methods: {
            fetchArticles(next_page_url) {
                this.$emit('fetchArticlesNextPageUrl', next_page_url)
            }
        }
    }
</script>
