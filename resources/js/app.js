require('./bootstrap');

import { createApp } from 'vue'
import PostsIndex from './components/Posts/Index'
import laravelVuePagination from 'laravel-vue-pagination';

const app = createApp({})
app.component('posts-index', PostsIndex)
app.component('Pagination', laravelVuePagination)
app.mount('#app')