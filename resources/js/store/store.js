import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)
axios.defaults.baseURL = 'http://articlesvuelaravel.deb.test:8080/api/'

export const store = new Vuex.Store({
    state: {
        articles: [],
        pagination: {},
    },
    getters: {
        getArticles(state) {
            return state.articles
        },
        getPagination(state) {
            return state.pagination
        },
    },
    mutations: {
        fetchArticles(state, articles) {
            state.articles = articles
        },
        pagination(state, pagination) {
            state.pagination = pagination
        },
    },
    actions: {
        fetchArticles(context, page_url) {
            page_url = page_url || 'articles'
            axios.get(page_url)
                .then(response => {
                    // console.log(response);
                    context.commit('fetchArticles', response.data.data)
                    let pagination = {
                        current_page: response.data.meta.current_page,
                        last_page: response.data.meta.last_page,
                        next_page_url: response.data.links.next,
                        prev_page_url: response.data.links.prev
                    };
                    context.commit('pagination', pagination)
                })
                .catch(error => console.log(error))
        },
        addArticle(context, article) {
            if(article.edit === false) {
                axios.post('article', {
                    'title': article.title,
                    'body': article.body
                })
                    .then(data => {
                        alert('Article Added')
                        this.dispatch('fetchArticles')
                    })
                    .catch(error => console.log(error))
            } else {
                axios.put('article', {
                    'article_id': article.id,
                    'title': article.title,
                    'body': article.body
                })
                    .then(data => {
                        alert('Article Updated')
                        this.dispatch('fetchArticles')
                    })
                    .catch(err => console.log(err))
            }
        },
        deleteArticle(context, data) {
            axios.delete(`article/${data.id}`, {
                method: 'delete'
            })
                .then(data => {
                    alert('Article Deleted')
                    this.dispatch('fetchArticles')
                })
                .catch(err => console.log(err))
        }
    }
})
