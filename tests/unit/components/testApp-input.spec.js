import { shallowMount } from '@vue/test-utils';
import TestAppInput from '@/components/testApp-input';

const directives = {
    validate: jest.fn()
};

describe('TestAppInput - Snapshot', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(TestAppInput, {
            directives
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe('TestAppInput - methods', () => {
    it('btnClicked', async () => {
        const wrapper = shallowMount(TestAppInput, {
            directives
        });

        wrapper.vm.emitValue({
            target: {
                value: 'foo'
            }
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.emitted('testApp-input-value')).toBeTruthy();
    });
});
