import { createRouter, createWebHistory } from "vue-router";
import PostsIndex from '../components/Posts/Index'
import PostsCreate from '../components/Posts/Create'

const routes = [
    {
        path: '/',
        name: 'posts.index',
        component: PostsIndex,
        meta: { title: 'Posts' }
    },
    {
        path: '/posts/create',
        component: PostsCreate,
        meta: { title: 'Add New Post' }
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})

