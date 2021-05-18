import { createLocalVue, shallowMount } from '@vue/test-utils';
import Home from '@/views/Home';
import TestAppButton from '@/components/testApp-button';
import * as admin from '@/firebase';

const data = jest.fn(() => ({ lastVisit: '12345678' }));
const set = jest.fn();
const get = jest.fn(() => ({ exists: true, data }));
const doc = jest.fn(() => ({ get, set }));
const collection = jest.spyOn(admin.db, 'collection').mockReturnValue({ doc });

admin.auth = {
    currentUser: {
        uid: '123'
    }
};

const localVue = createLocalVue();

localVue.component('testApp-button', TestAppButton);

describe('Home - Snapshot', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(Home, {
            localVue
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe('Home - methods', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Home, {
            localVue
        });
    });

    it('getLastVisit', () => {
        wrapper.vm.getLastVisit();

        expect(collection).toHaveBeenCalled();
    });

    it('updateLastVisit', () => {
        wrapper.vm.updateLastVisit();

        expect(collection).toHaveBeenCalled();
    });

    it('calculateTimeSpend', () => {
        const spy = jest.spyOn(global, 'String');
        wrapper.vm.lastLogin = 1611085228420;

        wrapper.vm.calculateTimeSpend();

        expect(spy).toHaveBeenCalledTimes(4);
    });
});
