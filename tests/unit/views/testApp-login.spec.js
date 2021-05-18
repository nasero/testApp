import { createLocalVue, shallowMount } from '@vue/test-utils';
import Login from '@/views/Login';
import TestAppButton from '@/components/testApp-button';
import TestAppInput from '@/components/testApp-input';
import * as admin from '@/firebase';

admin.auth = {
    currentUser: {
        uid: '123'
    }
};

const localVue = createLocalVue();

localVue.component('testApp-button', TestAppButton);
localVue.component('testApp-input', TestAppInput);

describe('Home - Snapshot', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(Login, {
            localVue
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe('Login - computed', () => {
    it('disableButton ', () => {
        const wrapper = shallowMount(Login, {
            localVue
        });

        wrapper.vm.email = '123456';
        wrapper.vm.password = '123456';
        wrapper.vm.errors = {
            items: []
        };

        expect(wrapper.vm.disableButton).toBeFalsy();
    });
});

describe('Login - methods', () => {
    it('setValue', () => {
        const wrapper = shallowMount(Login, {
            localVue
        });

        wrapper.vm.setValue('foo@mail.com', 'email');

        expect(wrapper.vm.email).toBe('foo@mail.com');
    });
});
