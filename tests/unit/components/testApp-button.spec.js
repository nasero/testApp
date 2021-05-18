import { shallowMount } from '@vue/test-utils';
import TestAppButton from '@/components/testApp-button';

describe('TestAppButton - Snapshot', () => {
    it('Snapshot', () => {
        const text = 'my button';
        const wrapper = shallowMount(TestAppButton, {
            propsData: { text }
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe('TestAppButton - methods', () => {
    it('btnClicked', async () => {
        const text = 'button';
        const wrapper = shallowMount(TestAppButton, {
            propsData: { text }
        });

        wrapper.vm.buttonClicked();

        await wrapper.vm.$nextTick();

        expect(wrapper.emitted('testApp-button-clicked')).toBeTruthy();
    });
});
