import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)
axios.defaults.baseURL = 'http://articlesvuelaravel.deb.test:8080/api/'

export const store = new Vuex.Store({
    state: {
        articles: [],
        pagination: {},
        token: localStorage.getItem('access_token') || null
    },
    getters: {
        getArticles(state) {
            return state.articles
        },
        getPagination(state) {
            return state.pagination
        },
        loggedIn(state) {
            return state.token !== null
        }
    },
    mutations: {
        fetchArticles(state, articles) {
            state.articles = articles
        },
        pagination(state, pagination) {
            state.pagination = pagination
        },
        getToken(state, token) {
            state.token = token
        },
        destroyToken(state) {
            state.token = null
        }
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
        },
        getToken(context, credentials) {

            return new Promise((resolve, reject) => {
                axios.post('login', {
                    'username': credentials.username,
                    'password': credentials.password,
                })
                    .then(response => {
                        // console.log('response is ' + response.data.access_token)

                        const token = response.data.access_token

                        localStorage.setItem('access_token', token)
                        context.commit('getToken', token)
                        resolve(response)
                    })
                    .catch(error => {
                        // console.log('error is: ' + error)
                        reject(error)
                    })
            })
        },
        register(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('register', {
                    'name': data.name,
                    'email': data.email,
                    'password': data.password
                })
                    .then(result => {

                        resolve(result)
                    })
                    .catch(error => {


                        reject(error)
                    })
            })
        },
        destroyToken(context) {
            // axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

            if(context.getters.loggedIn) {
                return new Promise((resolve, reject) => {
                    axios.post('logout')
                        .then(result => {
                            console.log('result is: ' + result)

                            localStorage.removeItem('access_token')
                            context.commit('destroyToken')

                            resolve(result)
                        })
                        .catch(error => {
                            console.log('error is: ' + error)

                            localStorage.removeItem('access_token')
                            context.commit('destroyToken')
                            reject(error)
                        })

                })
            }
        }
    }

})
