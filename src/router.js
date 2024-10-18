import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/views/RegistrationPage.vue')
    },
    {
        path: '/listUsers',
        name: 'listUsers',
        component: () => import('@/components/views/ListUsers.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
