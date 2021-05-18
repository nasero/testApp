/**
 * Vista Home
 */

import testAppCounter from '@/components/testApp-counter';
import { auth, db } from '../../firebase';
export default {
    name: 'Home',
    components: {
        testAppCounter
    },
    data () {
        return {
            lastLogin: 0,
            lastVisitCount: {
                days: '00',
                hours: '00',
                mins: '00',
                secs: '00'
            }
        };
    },
    methods: {
        /* istanbul ignore next */
        async getLastVisit () {
            try {
                const docRef = await db.collection('Users').doc(auth.currentUser.uid);
                const doc = await docRef.get();
                this.lastLogin = doc.data().lastVisit ? doc.data().lastVisit : new Date().getTime();
                this.calculateTimeSpend();
            } catch (error) {
                console.log(error);
            }
        },
        async updateLastVisit () {
            try {
                await db.collection('Users').doc(auth.currentUser.uid).set({
                    lastVisit: new Date().getTime()
                });
            } catch (error) {
                console.error('Error writing document: ', error);
            };
        },
        async logout () {
            await this.updateLastVisit();
            await auth.signOut();
            this.$router.push('login');
        },
        calculateTimeSpend () {
            const now = new Date().getTime();
            const timeSpend = now - this.lastLogin;
            const dateSpend = new Date(timeSpend);
            Object.assign(this.lastVisitCount,
                {
                    days: String(dateSpend.getDate() - 1).padStart(2, '0'),
                    hours: String(Math.max(dateSpend.getHours() - 1, 0)).padStart(2, '0'),
                    mins: String(dateSpend.getMinutes()).padStart(2, '0'),
                    secs: String(dateSpend.getSeconds()).padStart(2, '0')
                });
        }
    },
    mounted () {
        this.getLastVisit();
    }
};
