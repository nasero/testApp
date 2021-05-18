import Vue from 'vue';
import App from './App.vue';
import router from './router';
import TestAppButton from '@/components/testApp-button';
import VeeValidate from 'vee-validate';
import { auth } from './firebase';

Vue.use(VeeValidate);
Vue.component('testApp-button', TestAppButton);

Vue.config.productionTip = false;

let app;
auth.onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            render: h => h(App)
        }).$mount('#app');
    }
});
