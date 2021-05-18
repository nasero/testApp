import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Login from '../views/Login';
import { auth } from '../firebase';

Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        redirect: { name: 'Login' }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

    if (requiresAuth && !auth.currentUser) {
        next('/login');
    } else {
        next();
    }
});

export default router;
