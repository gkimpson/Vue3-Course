require('./bootstrap');

import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import PostsIndex from './components/Posts/Index'
import laravelVuePagination from 'laravel-vue-pagination';

const routes = [
    { path: '/', component: PostsIndex }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp({})
app.use(router);
app.component('Pagination', laravelVuePagination)
app.mount('#app')
