/**
 * Vista Login
 */

import { auth } from '../../firebase';
import testAppInput from '@/components/testApp-input';
export default {
    name: 'Login',
    components: {
        testAppInput
    },
    data () {
        return {
            email: '',
            password: '',
            lastSignIn: 0,
            loginError: ''
        };
    },
    computed: {
        disableButton () {
            return this.email === '' || this.password === '' || !!this.errors.items.length;
        }
    },
    methods: {
        /* istanbul ignore next */
        async login () {
            try {
                await auth.signInWithEmailAndPassword(this.email, this.password);
                this.$router.push('home');
            } catch (error) {
                this.loginError = error.message;
            }
        },
        setValue (payload, dataType) {
            this[dataType] = payload;
        }
    }
};
