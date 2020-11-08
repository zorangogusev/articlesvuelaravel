<template>
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
</template>

<script>
    export default {
        name: 'ModalArticle',
    }
</script>
