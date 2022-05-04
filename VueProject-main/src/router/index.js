import {createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Edit from '@/views/Edit.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/edit/:id',
        name: "Edit",
        component: Edit
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})