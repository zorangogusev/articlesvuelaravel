<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li v-bind:class="[{disabled: !getPagination.prev_page_url }]" class="page-item">
                <a @click="fetchArticles(getPagination.prev_page_url)" class="page-link" href="#">Previous</a>
            </li>

            <li class="page-item disabled">
                <a class="page-link text-dark" href="#">Page {{ getPagination.current_page }} of {{ getPagination.last_page }}</a>
            </li>

            <li v-bind:class="[{disabled: !getPagination.next_page_url }]" class="page-item">
                <a @click="fetchArticles(getPagination.next_page_url)" class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Pagination',
        computed: {
            getPagination() {
                return this.$store.getters.getPagination
            }
        },
        methods: {
            fetchArticles(next_page_url) {
                this.$store.dispatch('fetchArticles', next_page_url)
            }
        }
    }
</script>
