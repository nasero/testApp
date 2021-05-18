import { shallowMount } from '@vue/test-utils';
import TestAppCounter from '@/components/testApp-counter';

describe('TestAppCounter - Snapshot', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(TestAppCounter);
        expect(wrapper.element).toMatchSnapshot();
    });
});
